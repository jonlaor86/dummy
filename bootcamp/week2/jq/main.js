// const header = $("h1")
// console.log(header)

// console.log(jQuery)
// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] === "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector
//         return document.getElementById(elementId)
//     }
// }

// console.log(myQuery("#new"))

// $("h4")
// $("h4").css("color", "red")



// $("h1").css("color","blue")

// $ (".red-div").css("color", "red")

// $ ("li:first-child").css("color", "green")

// $ ("li:nth-child(2)").css("color","pink")

// $ ("#brown-div").css("color", "brown")


// $ ("#b1").addClass("box")
// $ ("#b2").addClass("box")

// $('#my-input').val("Terabyte")


// const color = $("div").data().color  
// console.log(color)



// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

// $ ("b1").hover( function (){
//     $("b1").css("backgraund-color, blue")
// }
// )



// $ ("button").on("click", function() {
// $ .alert("#my-input").val()

// }
// )


// $(".box").hover( function(){
//     $ ("this").css("background-color","blue")
// }


// )

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)


// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')
// // const text = "Banana"
// // const item = $("<div class=fruit>" + text + "</div>")

// // console.log(item)

// const text = "Banana"
// const item = $(`<div class=fruit>${text}</div>`)

// console.log(item)



// // const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// // for(let name of names){
// //   $("body").append(`<div>${name}</div>`)
// // }

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for (let name of names) {
//     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
//   }
  
//   $ (".jonathan").hover( function(){
//       $(".jonathan").remove()
//   })


//   const addDiv = function() {
//     $("body").append("<div class=box></div>")
//   };
  
//   $("button").on("click", function() {
//     addDiv()
//   });
  
//   $("body").on("click", ".box", function() {
//     alert("hi")
//   });



//   const addblog = function(){
//       $(".body").append("<div class=blog>BlogsPro</div>");
//   }
//     $("blogs").on( function (){
//         addblog()
//     }
// $ ()


// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(".blog").text("blargh") 
//   })

// const header = $("h1")
// console.log(header)

// console.log(jQuery)


// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector
//         return document.getElementById(elementId)
//     }
// }
// console.log(myQuery("#name"))

// $("h4")
// $("h4").css("color", "red")


// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:nth-child(1)").css("color","green")
// $ ("li:nth-child(2)").css ("color","pink")
// $ ("#brown-div").css("color", "brown")


// $("#b1").addClass("box")
// $("#b2").addClass("box")



// $('#my-input').val("Terabyte")

// const color = $("div").data().color
// console.log(color)


// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

// $(".hov").hover(function(){
//   $(".hov").css("backgraund-color","blue")
// }

// )


// $("button").on("click", function (){
// alert($("#my-input").val())
// }
// )


// $(".box").hover(function(){
//     $(this).css("background-color","blue")}
// )   
// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)


// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item)


// // const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// // for(let name of names){
// //   $("body").append(`<div>${name}</div>`)
// // }


// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

// for (let name of names){
//     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
// }

// $(".work").hover(function(){
//     $(".work").remove()
// }

// )


// $(".blog").append(function(){

// })


// exercise 1
// $("#div").append(`<li> <input type="text" placeholder="human name"><li>`) 
// $("#div").append(`<input type=button value= add human>`)

$('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("input").val()
    alert(relevantInputValue)
  })


  $("button").on("klick", function(){
console.log($("container")).find("p").text()
  })


















