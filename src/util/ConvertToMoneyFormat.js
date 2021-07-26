const convertToMoneyFormat = number => new Intl.NumberFormat('BR', { style: 'currency', currency: 'BRL' }).format(number)

export default convertToMoneyFormat;