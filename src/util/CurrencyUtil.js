class CurrencyUtil {
  static formatCurrencyWithDots(currency) {
    return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
  }
}

export default CurrencyUtil;