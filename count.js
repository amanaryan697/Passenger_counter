//document.getElementById("count_no_of_people").innerText =6

// let my_age =222
// console.log(my_age)

// let my_age =99


// let humanDogRatio =2

// let myDogAge = my_age*humanDogRatio
// console.log(myDogAge)
// let count =5

// count =3

// count =count + 1

// count =count + 6

// console.log(count)


// let bonusPoints =50

// bonusPoints = bonusPoints + 100

// bonusPoints =bonusPoints - 25

// bonusPoints =bonusPoints + 70


// console.log(bonusPoints)





// onclick button


// function increment(){
//     console.log("The button was clicked")
// }



// using of function

// function count(){
//     console.log("AMAN")
//     console.log("ARYAN")
//     console.log("KUMAR")
// }
// count()

// count()

// function node(){
//     console.log(42)
//     // console.log(45)
//     // console.log(48)
// }

// node()

// let num1 = 20
// let num2 = 25
// let num3 = 30

// function sum(){
//     let total = num1 + num2 + num3
//     console.log(total)

// }


// sum()

// let num1=0

// function increment() {
//     num1 =num1 + 1
// }

// increment()
// increment()
// increment()

// console.log(num1)
let saveE =document.getElementById("prev")
let countNoOfPeople =document.getElementById("count_no_of_people")

let count = 0

console.log(saveE)

function increment(){
    count += 1
    countNoOfPeople.innerText =count
    // console.log(count)
}

function save(){
    let con =count + " - "

    saveE.textContent += con
    countNoOfPeople.textContent =0
    count = 0

   // console.log(count)

}
 
// let name ="Aman"
// let greeting ="Hi , my name is "

// let concat = greeting + " " + name
// console.log(concat)

// let welcomeA = document.getElementById("welcome-a")

// let name = "Aman "

// let greeting =" hello"

// welcomeA.innerText = greeting + " " + name



