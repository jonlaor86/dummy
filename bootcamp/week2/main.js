// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()


// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// // getData()

// let users = []

// const getData = function(callback){
//     setTimeout (function(){
//      users = [{ name: "Rick" }, { name: "Morty" }]
//      console.log("get users")
//      callback()
//     }, 3000)}

//     const displayData = function () {
//         console.log("Going to display: " + users)
//         for (user of users) {
//             console.log(user.name)
//         }
//     }
    
//     getData(displayData)
// //     displayData()

    // const first = function () {
    //     setTimeout(function () {
    //         console.log("should be first")
    //     }, 3000)
    // }
    
    // const second = function () {
    //     console.log("should be second")
    // }
    
    // first()

    // const first = function (callback) { //receive the function as a parameter
    //     setTimeout(function () {
    //         console.log("should be first")
    //         callback() //this is the `second` function being invoked
    //     }, 3000)
    // }
    
    // const second = function () {
    //     console.log("should be second")
    // }
    
    // first(second)
    
// const number = 4
//     const square = number => {return number*number;}


    // const add = (x, y) =>  x + y
      
      
    //   const sum = add(1, 2) 
    //   console.log(sum)


//     getFormalTitle  = (title, name) => {
//     console.log(title +"    "+ name)
//     }




// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout( () => { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

// //     }
// // }

// // suspenseBuilder.displayName()




// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }

//   const pushPull = function (func){
//       func()

//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"


// exercise 2

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
//   const time = new Date()
  
//   const getTime = function(func){
//       func(time)
//   }

//   getTime(returnTime)

// exercise 3

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = function (func){
//     console.log(func)
//   }
//   displayData(alert, logData, "I like to party")




















// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }


//   const pushPull = function(func) {
//     func()
//   }
  
  


//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!


// const time = new Date()
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  

//   const getTime = function(func){
//   func(time)}

// // //   getTime(returnTime)


// //   const displayData = function (alertDataFunc, logDataFunc, data) {
// //     alertDataFunc(data);
// //     logDataFunc(data);
// //   };
// //   const logData = function(func){
// //   console.log(func)
// // }
// //   displayData(alert, logData, "I like to party")

// // exercies 4
// // const add = (x, y, z) => x + y + z
// // const sum = add(1,2,3)
// // console.log(sum)

// // exercies 5


// // ???? 



// // exercise 6

// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

//   const commentOnWeather = function(determineWeather){
//       console.log ("it's " + determineWeather)
//   }



// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold



// // exercise 7  

// const a = function(){
//     const add = function(x,y){
//         return x + y
//     } 
//     return add

// }

// const math = a()

// console.log(math(1,2))


// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() 


// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()


// const Family = function () {
//     const memebers = []

//     const birth = function (name) {
//         memebers.push(name)
//         console.log(memebers)
// //     }

// //     return birth
// // }

// // const giveBirth = Family()
// // giveBirth("Clarissa")
// // giveBirth("Mayana")

// // const UsersModule = function () {
// //     const _users = ['Aaron', 'Avi'];

// //     const addUser = function (user) {
// //         _users.push(user)
// //     }

// //     const listUsers = function () {
// //         for (user of _users) {
// //            console.log (user)
// //         }
// //     }

// //     return {
// //         addUser: addUser,
// //         listUsers: listUsers
// //     }
// // }

// // const usersModule = UsersModule()

// // // usersModule.addUser('Narkis')
// // // usersModule.listUsers()

// // // exercise 1
// // const StringFormatter = function(){
// //     const capitalizeFirst = function (string){
// //        return string[0].toUpperCase()}
// //        const skewerCase = function(string){
// //            string.replace(/\s+/g, '-')
// //        }
// //        return {capitalizeFirst,
// //         skewerCase}

// // }

// // const formatter = StringFormatter()

// // formatter.capitalizeFirst("dorothy") //should print Dorothy
// // formatter.skewerCase("blue box") //should print blue-box

// // // exercise 2

// // const Bank = function(){
// // const _moeny = 500,
// // const depositCash = function(cash){
// //     return moeny * 2
// // }
// // const checkBalance = function(){
// //     console.log(moeny)
// // }
// // }

// // const bank = Bank()
// // bank.deposit(200)
// // bank.deposit(250)
// // bank.showBalance() //should print 950






// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]


//     let orangeVegetables = vegetables.filter(v => v.color === "orange")

//     orangeVegetables.forEach(ov=> console.log(ov.name))


//     let people = [
//         { salary: 1300, goodPerformance: false },
//         { salary: 1500, goodPerformance: true },
//         { salary: 1200, goodPerformance: true },
//         { salary: 1700, goodPerformance: false },
//         { salary: 1600, goodPerformance: true },
//     ]
//     const updateSalary = function(person){
//         if(person.goodPerformance){
//             person.salary += 300
//         }
//     }
//     people.forEach(updateSalary) //using the named function!



//     people.forEach(people=> console.log(people.salary))





//     let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]


// let reMassage = messagesFromDad.map(mfd =>mfd.lowercase)



// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]


// let findCommentByID = comment => comment ===comment

// let ages = [31, 28, 23, 27, 25, 16, 24]
// ages.every(a => a > 18) 




// let users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//           "lat": "24.8918",
//           "lng": "21.8984"
//         }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//           "lat": "-14.3990",
//           "lng": "-120.7677"
//         }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//       }
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//           "lat": "24.6463",
//           "lng": "-168.8889"
//         }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//       }
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//           "lat": "-38.2386",
//           "lng": "57.2232"
//         }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//       }
//     }
//   ]

// //   users.map = (u => {return {name: u.name, email:u.email}} )
//   let zcode = users.filter(users => zipcode[0]===5){
//       console.log(users)
//   }


// $("#change").hover(function() {
//   $("#change").css(background-color, blue )
// })

// <input type="text" id="my-input" placeholder="Some Text!"></input>
// <button>Click Me!</button>

// $("button").click(function() {
//   alert($("#my-input")).val()
// }
  
// //   )

//   const aDynamicDiv = "<div class='mine'>Oh yes</div>"
//   const elem = $(aDynamicDiv)
//   console.log(elem)

//   $("body").append(elem)
//   $('.fruits').append('<p class="red">Raspberry</p>')
//   $('.fruits').append('<p class="brown">Kiwi</p>')



//   $(".feedme").on("click", function(){
//     let divCopy = //use template literals and $(this)
    
//     $("body").append(divCopy)
//   })

$("body").append(`<ul> <li>Quimby
</li> <li> <div><input type="text" placeholder="human name"> <button>add human</button>    </div><li> </ul>`)
$("button").click(function (){
$().remove()
}
)




