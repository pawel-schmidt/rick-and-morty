import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

interface ExchangeRate {
  currency: string
  rate: number
}

interface ExchangeRates {
  rates: ExchangeRate[]
}

const ExchangeRates = () => {
  const { loading, error, data } = useQuery<ExchangeRates>(EXCHANGE_RATES)

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

export default ExchangeRates
