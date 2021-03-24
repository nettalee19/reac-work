
//1
// const addFunc = (a,b) =>{
//     return a+b;
// }

// const addFunc = (a,b) => a+b;

// const printS = addFunc(2,3);
// console.log(printS);

//2

const hasPath =(arr) =>{
    for(let i=0; i<arr.length; i++){
        for(let j=i; i<arr.length; j++){
            arr[i][j+1] === 0 ? arr[i+1][j] = 'c' : arr[i+1][j] = 'bad'
            arr[i+1][j] === 0 ? arr[i+1][j] = 'c' : arr[i+1][j] = 'bad'
            
        }
    }
    return(arr)
}

hasPath([ [0,1,1], [1,0,1], [1,1,0] ], [0,0],[2,2])
// hasPath([ [0,0,0], [0,1,0], [0,1,0] ], [0,0],[2,2])
// [0,1,1]
// [1,0,1]
// [1,1,0]

// [0,0,0]
// [0,1,0]
// [0,1,0]