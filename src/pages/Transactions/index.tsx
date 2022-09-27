import { Header, Summary } from '../../components'
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
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
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              </tbody>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
