import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App () {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
    className='w-full h-screen sm:mx-auto flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
        backgroundColor: 'royalblue'
      }}
    >
      <div className='w-full sm:w-auto flex flex-wrap-reverse'>
    <div className='w-full sm:w-[60%] text-white my-auto pl-10'>
      <h1 className='text-5xl font-bold'>The World Best Currency Converter</h1>
      <h3 className='text-xl'>Enjoy and use</h3>
    </div>
    <div className='w-full sm:w-[40%] max-w-md mt-7 sm:mb-2 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={e => {
              e.preventDefault()
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={currency => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={amount => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <p className='text-center text-white '>Made with ❤️ Using React by Vighnesh </p>
    </div>
  )
}

export default App
