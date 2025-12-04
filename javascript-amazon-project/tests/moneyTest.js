import formatCurrency from "../scripts/utils/money.js";

console.log('test suit: formatcurrency')

console.log('converts pence to pounds')
console.log(formatCurrency(2095) === '20.95' ? 'passed' : 'failed')

console.log('works with 0')
console.log(formatCurrency(0) === '0.00' ? 'passed' : 'failed')

console.log('rounds up to the nearest pence')
console.log(formatCurrency(2000.5) === '20.01' ? 'passed' : 'failed')
