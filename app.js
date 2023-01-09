const arr =  [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = arr[0];
for(let i =1;i<arr.length-1;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log("Giá trị lớn nhất của mảng là "+ max)