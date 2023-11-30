// 1 ЗАДАНИЕ
const students = [
    { name: 'Лиза', age: 19 },
    { name: 'Луиз', age: 20 },
    { name: 'Иван', age: 12 },
    { name: 'Александр', age: 32 },
    { name: 'Константин', age: 1 },
    { age: 19 },
]

function pickPropArray(array, key) {
    let result = []
    array.forEach(item => {
       if (item[key]) result.push(item[key]) 
    }); 
    return result
}

const result = pickPropArray(students, 'name')
console.log(result)

// 2 ЗАДАНИЕ
function createCounter() {
    let count = 1 
    return function () {
        console.log(count++)
    }
}

const counter1 = createCounter()
counter1()
counter1()

const counter2 = createCounter()
counter2()
counter2()

// 3 ЗАДАНИЕ
function spinWords(str){
    const words = str.split(" ")
    let newStr = []
    for (const item of words){
        if (item.length >= 5) {
            newStr.push([...item].reverse().join(""))
        } else newStr.push(item)
    }
    return newStr.join(" ")
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1)

const result2 = spinWords( "This is a test" )
console.log(result2)

// 4 ЗАДАНИЕ
const nums = [2,7,11,15]
const target = 9

function func(nums, target){
    for (let i=0; i < nums.length; i++){
        for (let j=i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) return [i,j]
        }
    }
}

const result3 = func(nums, target)
console.log(result3);

// 5 ЗАДАНИЕ
const strs = ["цветок","поток","хлопок"]

function searchPrefix(strs){
    let prefix = strs[0]
    for (let i=1; i < strs.length; i++){
        // while (strs[i].indexOf(prefix) != 0){}
            // console.log(strs[i]);
    }
}

const result4 = searchPrefix(strs)
console.log(result4);