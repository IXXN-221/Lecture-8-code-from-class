// let data = [
//         {
//             mountain: 'Everest',
//             hoursTaken: [90,93,88,94],
//             summary: 'Tough but fair'
//         },
//         {
//             film: 'K2',
//             hoursTaken: [65,73,67,66],
//             summary: 'Easy'
//         },
//         {
//             film: 'Aoraki',
//             hoursTaken: [50,62,74,80],
//             summary: 'A stroll'
//         }

//     ]
let age = 287;
function writeNum(){
    let classList = [
        {
        name: 'Joe', 
        age: 494,
        },
        {
        name: 'Sarah',
        age: 898
        },
        {
        name: 'josdfljkd',
        age: 99}
    ]
    function writeOutNames(classList){
        //write all the names out
        let someString =''
        for(let i=0; i<classList.length; i++){
            someString += `<h1>${classList[i].name}</h1>`
        }
        // '<h1>Joe</h1>'
        // '<h1>Joe</h1><h1>Sarah</h1>'
        document.getElementById('oneDiv').innerHTML = someString
    }
    writeOutNames(classList)

}

function populateDiv(){

}

// function writeNum(){
//     console.log(`Hi i am ${Joe.name}, I am ${Joe.age} and i have ${Joe.feet} feet`)
// }
document.getElementById('content').innerHTML = '<h2>header</h2>'

function sumUpNum(a,b){
    return a+b
}

function arrMethod(){
  let arr = ['jone', 'sarah', 'tyk', 'lopm']

   //Map
    let newarr = arr.map(element =>{
        return element.toUpperCase()
    })

    console.log(newarr)
}
