// const leoName = 'Leo'
// const leoSurname = 'Musvaire     '
// const leoBalance = '-9394'

// const sarahName = 'Sarah    '
// const sarahSurname = 'Kleinhans'
// const sarahBalance = '-4582.21000111'

// const divider = '----------------------------------'

// // Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

// console.log(result)


const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const intLeoBalance= parseFloat(leoBalance).toFixed(2)    //converted to floating point number with 2 decimal points
const intSarahBalance = parseFloat(sarahBalance).toFixed(2)

const owed = `R ${Math.abs(intLeoBalance) + Math.abs(intSarahBalance)}` // Math.abs turns negative numbers to absolut or positive numbers

const leo = `${leoName} ${leoSurname.substring(0,leoSurname.length-5)} (Owed: R ${Math.abs(intLeoBalance)})`  // used template string ,no need to use escaping 
const sarah = `${sarahName.substring(0,sarahName.length-5)} ${sarahSurname}(Owed: R ${Math.abs(intSarahBalance)})`

// used  .substring function to remove last 5 characters from leoSurname AND saraName 

const total = `  Total amount owed: ${owed}  `

const result = `
${leo}
${sarah}

${divider}
${total}
${divider}`

console.log(result)