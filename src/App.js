import './App.css'

// Instructions:

// 1. Add the functionality to exchange one currency to another 
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨

const App = () => <>
  <h1>Amazing Currency Converter</h1>
  <p>
    Convert
    <input type="number" id="original-currency-amount" placeholder="1"></input>
    <input type="text" id="original-currency-unit" placeholder="original currency"></input>
to
<input type="text" id="new-currency-unit" placeholder="new currency"></input>
  </p>
  <p>
    Exchange Rate:
<input type="number" id="exchange-rate"></input>
  </p>
  <button>Exchange my money now!</button>
  <p id="output-text">
    Converted 💰 will appear here.
</p>

  <script src="index.pack.js"></script>
</>

export default App
