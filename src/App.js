import { useEffect, useState } from 'react'
import { CurrencySelector } from './components/CurrencySelector'
import { getAvailableCurrencies } from './api/getAvailableCurrencies'
import { Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import { getCurrencyRatio } from './api/getCurrencyRatio'
import { CurrencyInput } from './components/CurrencyInput'
import { ExchangeRateDisplay } from './components/ExchangeRateDisplay'
import { LoadingDisplay } from './components/LoadingDisplay'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(() => ({
  container: { minHeight: '100vh' },
  loadingContainer: { minHeight: '64px' }
}))

const App = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [availableCurrencies, setAvailableCurrencies] = useState(null)
  const [inputValue, setInputValue] = useState(1)
  const [fromKey, setFromKey] = useState('USD')
  const [toKey, setToKey] = useState('CAD')
  const [exchangeRate, setExchangeRate] = useState('')
  const [convertedValue, setConvertedValue] = useState('Converted 💰 will appear here.')

  useEffect(() => {
    (async () => {
      setLoading(true)
      setExchangeRate(await getCurrencyRatio(fromKey, toKey))
      setLoading(false)
    })()
  }, [fromKey, toKey])

  useEffect(() => {
    (async () => {
      const newCurrencies = await getAvailableCurrencies()
      const conversionRate = await getCurrencyRatio(fromKey, toKey)

      setAvailableCurrencies(newCurrencies)
      setExchangeRate(conversionRate)
      setLoading(false)
    })()
  }, [])

  return <Grid container className={classes.container} direction='column' alignItems='center' justify='center' spacing={2}>
    <Grid item xs={12}>
      <Typography variant='h4'>Amazing Currency Converter</Typography>
    </Grid>
    {
      availableCurrencies
        ? <>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item>
                <CurrencyInput
                  value={inputValue}
                  onChange={setInputValue}
                />
              </Grid>
              <Grid item>
                <CurrencySelector
                  helperText='From'
                  selectedKey={fromKey}
                  currencies={availableCurrencies}
                  onChange={setFromKey}
                />
              </Grid>
              <Grid item>
                <CurrencySelector
                  helperText='To'
                  selectedKey={toKey}
                  currencies={availableCurrencies}
                  onChange={setToKey}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ExchangeRateDisplay exchangeRate={exchangeRate} />
          </Grid>
          <Grid item xs={12}>
            <Button disabled={loading} variant='contained' onClick={() => {
              const result = Math.round(inputValue * exchangeRate * 100) / 100

              setConvertedValue(`${inputValue} ${fromKey} is ${result} in ${toKey}`)
            }}>
              Exchange my money now!
        </Button>
          </Grid>
          <Grid item xs={12} className={classes.loadingContainer}>
            {loading && <CircularProgress />}
          </Grid>
          <Grid item xs={12}>
            <Typography>{convertedValue}</Typography>
          </Grid>
        </>
        : <LoadingDisplay />
    }
    <Grid item xs={12}>
      <a href='https://github.com/ZPanic0/amazing-currency-converter' target='_blank'><GitHubIcon color='action' /></a>
    </Grid>
  </Grid>
}

export default App
