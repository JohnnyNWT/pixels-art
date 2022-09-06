const arrayNum = [900, 20, 30, 40, 50, 10, 20, 30, 40, 50, 9000]

const nomes = ['joao', 'vitor', 'leandro']

// for (let index = 0; index < arrayNum.length; index += 1) {
//     console.log('FOR NORMAL: ' + index)
// }

console.log('----------------------------------------------------------------------------------------')

// for (let index in arrayNum) {
//     console.log('FOR IN: ' + arrayNum[index])
// }


for (let index of nomes) {
    console.log('FOR OF: ' + index)
}