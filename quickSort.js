const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivo = arr[0]
    let arrEsq = []
    let arrDir = []

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < pivo) {
            arrEsq.push(arr[i])
        } else {
            arrDir.push(arr[i])
        }
    }

    return [...quickSort(arrEsq), pivo, ...quickSort(arrDir)]
}

let array1 = [3,4,6,8,7,2,9,1,5]

console.log(quickSort(array1))