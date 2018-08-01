const sample = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checkSum(arrayOfArrays) {
  let checksum = 0

  for (let row of arrayOfArrays) {
    const max = Math.max.apply(null, row)
    const min = Math.min.apply(null, row)
    checksum += max - min
  }

  return checksum
}

console.log("Sample checksum: ", checkSum(sample))
console.log("Data checksum: ", checkSum(data))

function altCheckSum(arrayOfArrays) {
  function reducer(acc, array) {
    return acc + (Math.max.apply(null, array) - Math.min.apply(null, array))
  }

  return arrayOfArrays.reduce(reducer, 0)
}

console.log("Sample alt-checksum: ", altCheckSum(sample))
console.log("Data alt-checksum: ", altCheckSum(data))


//------ BROKEN ------
// function recursiveCheckSum(arrayOfArrays) {
//   let checksum = 0
//
//   function recursion(input) {
//     if (Array.isArray(input[0])) {
//       input.forEach(recursion)
//     } else {
//       checksum += (Math.max.apply(null, input) - Math.min.apply(null, input))
//     }
//   }
//
//   return checksum
// }
//
// console.log("Sample recursive-checksum: ", recursiveCheckSum(sample))
// console.log("Data recursive-checksum: ", recursiveCheckSum(data))
