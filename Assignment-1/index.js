// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

// Q1.
const studentName = "Sudipta Ghoshal";
const age = 26;
const courseName = "Node.js Development";
const marks = {
    math: 60,
    phy: 65,
    chem: 55
}

let total = 0;
for (let key in marks) {
    total = total + marks[key]
}
const averageMarks = total / 3;

console.log(`${studentName} is ${age} years old, his course name is : ${courseName}. His total marks in 3 subjects is ${total} and average marks is ${averageMarks}`)

// Q2.
let num1 = 20;
let num2 = 30;

num2 = num1;
num1 = num2;

console.log(num1, num2)

// Q3.
const input1 = 30;
const input2 = 40;

function calculator(num1, num2) {
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    const remainder = num1 % num2;
    return { addition, subtraction, multiplication, division, remainder }
}

const result = calculator(input1, input2)
console.log(result)

// Q4.
const basicSalary = 4000;
const HRA = basicSalary * 0.2;
const DA = basicSalary * 0.1;
const bonus = basicSalary * 0.05;
const finalSalary = basicSalary + HRA + DA + bonus;

console.log(`Basic Salary : ${basicSalary} , HRA : ${HRA} , DA : ${DA} , bonus : ${bonus} , Final Salary : ${finalSalary}`)

// Q5,
const DOY = 2000;
const currentYear = new Date().getFullYear();

const approxAge = currentYear - DOY;
console.log(approxAge);

// Q6.
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c)
}
// var can be access outside of the block because it is a global scope
console.log(a)
// let and const can't be access outside of the block because it is a block
// console.log(b) 
// console.log(c)

function myFucn() {
    var x = 40;
    console.log(x);
}
myFucn()

// var can't be access outside of a function because it is function scope
// console.log(x)

// Q7.
const numCheck = 33;

if (numCheck % 2 === 0) {
    console.log(`${numCheck}: is a even number`)
} else {
    console.log(`${numCheck}: is a odd number`)
}

// Q8.
const numX = 20;
const numY = 33;
const numZ = 30;

if (numX > numY) {
    if (numX > numZ) {
        console.log('largest number is', numX)
    }
} else {
    if (numY > numZ) {
        console.log('largest number is', numY)
    } else {
        console.log('largest number is', numZ)
    }
}

// Q9.
const marksGet = 66;
let grade = ''

if (marksGet >= 0 && marksGet <= 100) {
    switch (true) {
        case marksGet >= 90:
            grade = 'A+'
            break
        case marksGet >= 80:
            grade = 'A'
            break
        case marksGet >= 70:
            grade = 'B'
            break
        case marksGet >= 60:
            grade = 'C'
            break
        case marksGet >= 40:
            grade = 'D'
            break
        case marksGet < 40:
            grade = 'Fail'
    }
    console.log(grade)
} else {
    console.log('Marks should be between 0-100')
}


// Q10.
const personsAge = 22;
console.log(personsAge >= 18 ? 'Can vote' : 'can not vote')

// Q11.
const numberDay = 5;

switch (numberDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Weekday')
        break
    case 6:
    case 7:
        console.log('week end')
        break
    default:
        console.log('Number must be between 1-7')
}

// Q12.
const monthNumber = 5;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aughust', 'September', 'October', 'November', 'December']
if (monthNumber >= 1 && monthNumber <= 12) {
    if (monthNumber === 2) {
        console.log(`${months[monthNumber - 1]} has 28 days`)
    } else {
        if (monthNumber % 2 === 0) {
            console.log(`${months[monthNumber - 1]} has 30 days`)
        } else {
            console.log(`${months[monthNumber - 1]} has 31 days`)
        }
    }
} else {
    console.log('Month number must be between 1-12')
}

// Q13.
const operator = '+';
const operand1 = 10;
const operand2 = 20;

switch (operator) {
    case '+':
        console.log(operand1 + operand2)
        break
    case '-':
        console.log(operand1 - operand2)
        break
    case '*':
        console.log(operand1 * operand2)
        break
    case '/':
        console.log(operand1 / operand2)
        break
    default:
        console.log('Invalid operator')
}

// Q14.
const colorInput = 'Green';
switch (colorInput) {
    case 'Red':
        console.log('Stop')
        break
    case 'Green':
        console.log('Go')
        break
    case 'Yellow':
        console.log('Get ready')
        break
    default:
        console.log('Invalid signal')
}

// Q15.
const numArr = [10, 20, 60, 30, 7, 9, 87, 2, 33, 5];

let sum = 0;
for (const val of numArr) {
    sum += val;
}
const average = sum / (numArr.length);

let largestNumInArr = numArr[0];
let smallestNumInArr = numArr[0];
for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > largestNumInArr) {
        largestNumInArr = numArr[i]
    }
    if (numArr[i] < smallestNumInArr) {
        smallestNumInArr = numArr[i]
    }
}

console.log(`Total : ${sum}, Average : ${average}, Largest : ${largestNumInArr}, Smallest : ${smallestNumInArr}`)

// Q16.
const studentsName = ['Rahul', 'Ram', 'Sudipta', 'Sam', 'Sayani'];
const searchName = 'Sam';

for (const name of studentsName) {
    if (searchName === name) {
        console.log('Student exists')
        break
    }
}

// Q17.
const duplicateArr = [10, 20, 10, 30, 20, 40];
let output = [];
for (let item of duplicateArr) {
    if (!output.includes(item)) {
        output.push(item)
    }
}
console.log(output)

// Q18.
const studentObj = {
    name: 'Sudipta',
    roll: 14,
    course: 'Node.Js',
    marks: 66
};

studentObj.marks = 70;
studentObj.grade = 'A'

console.log(studentObj)

// Q19.
const products = [
    {
        id: 1,
        name: 'Book',
        price: 500,
        stock: 5
    },
    {
        id: 2,
        name: 'Bottle',
        price: 1050,
        stock: 1
    },
    {
        id: 3,
        name: 'Phone',
        price: 16000,
        stock: 1
    },
    {
        id: 4,
        name: 'Bag',
        price: 900,
        stock: 3
    }
];

const newArr = products.filter((item) => item.price > 1000);

newArr.forEach((item) => {
    console.log(`Name: ${item.name} , Price: ${item.price}, Stock: ${item.stock}`)
})

// Q20.
const number = 23;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}

// Q21.
const factNum = 5;
let factorial = 1;
for (let i = factNum; i > 0; i--) {
    factorial = factorial * i
}
console.log(factorial)

// Q22.
const checkPrime = 7;
let isPrime = true;

if (checkPrime <= 1) {
    isPrime = false
} else {
    for (let i = 2; i < Math.sqrt(checkPrime); i++) {
        if (checkPrime % i === 0) {
            isPrime = false
            break
        }
    }
}
console.log(isPrime ? `${checkPrime} is a prime number` : `${checkPrime} is not a prime number`)

// Q23.

// Q24.
const empObj = {
    name: 'Sudipta',
    age: 26,
    dept: 'Backend Dev',
    salary: 21000
}

for (let key in empObj) {
    console.log(`${key} : ${empObj[key]}`)
}

// Q25.
const cities = ['Kolkata', 'Bangalor', 'Pune', 'Mumbai', 'Hyderabad'];

let numOfChar = 0;
for (let city of cities) {
    numOfChar += city.length
    console.log(city)
}
console.log(numOfChar)

// Q26.
const user = {
    id: 1,
    name: 'Sudipta'
};

const jsonStr = JSON.stringify(user);
console.log(jsonStr)

const jsonParse = JSON.parse(jsonStr);
console.log(jsonParse)

// Q27.
const data = {
    name: 'Sudipta',
    email: 'ghoshalsudipta36@gmail.com',
    ph: 9330549084
}

localStorage.setItem('data', JSON.stringify(data))
const retriveData = JSON.parse(localStorage.getItem('data'))
console.log(retriveData)

// Q28.
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const counterValue = document.getElementById('output');

let initialVal = 0;
let countVal = localStorage.getItem('count') || initialVal;
counterValue.value = countVal;


increment.addEventListener('click', () => {
    countVal = parseInt(countVal) + 1
    counterValue.value = countVal
    localStorage.setItem('count', countVal)
})

decrement.addEventListener('click', () => {
    countVal = parseInt(countVal) - 1
    counterValue.value = countVal
    localStorage.setItem('count', countVal)
})

reset.addEventListener('click', () => {
    countVal = 0
    counterValue.value = countVal
    localStorage.setItem('count', countVal)
})






























