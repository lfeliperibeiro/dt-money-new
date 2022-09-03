import { Header, Summary } from '../../components'

import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map((transaction) => {
            return (
              <tbody key={transaction.id}>
                <tr>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              </tbody>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
