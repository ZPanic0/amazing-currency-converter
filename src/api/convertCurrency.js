//Hard coding this for the sake of embedding in scrimba.
//You shouldn't normally commit keys!
const apiKey = '39540b6c007484455fb16f7763cfd4ba496ad254'

const stashedModifiers = {}

/**
 * Fetches the ratio between two given currencies.
 * @param {*} from The currency code to convert from
 * @param {*} to The currency code to convert to
 */
export const getCurrencyModifier = async (from, to) => {
    if (stashedModifiers[`${from},${to}`]) return stashedModifiers[`${from},${to}`]

    const response = await fetch(`https://api.getgeoapi.com/api/v2/currency/convert?api_key=${apiKey}&from=${from}&to=${to}&format=json`)

    stashedModifiers[`${from},${to}`] = response.rates[to].rate

    return response.rates[to].rate
}
