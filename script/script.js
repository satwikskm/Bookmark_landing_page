'use strict'

// Navigation line toggle
let nav1=document.getElementById('nav-1')
let nav2=document.getElementById('nav-2')
let nav3=document.getElementById('nav-3')

// toggle elemente

let tab1=document.getElementById('tab-1')
let tab2=document.getElementById('tab-2')
let tab3=document.getElementById('tab-3')

// FAQ expansion elements

let expand1=document.getElementById('expand-1')
let expand2=document.getElementById('expand-2')
let expand3=document.getElementById('expand-3')
let expand4=document.getElementById('expand-4')

// Input block  

let input=document.getElementById('input')

// Mobile view navigation

let navbutton=document.getElementById('mobile-menu')

// Mobile view close button

let closeButton=document.getElementById('close-menu')

nav1.addEventListener('click',()=>{
   document.getElementById('line-1').style="border: 1px solid hsl(0, 94%, 66%)"
   document.getElementById('line-2').style="border: 1px solid grey"
   document.getElementById('line-3').style="border: 1px solid grey"
   tab1.style="display:flex;animation: 0.5s ease-in"
   tab2.style="display:none"
   tab3.style="display:none"
})
nav2.addEventListener('click',()=>{
    document.getElementById('line-1').style="border: 1px solid grey"
   document.getElementById('line-2').style="border: 1px solid hsl(0, 94%, 66%)"
   document.getElementById('line-3').style="border: 1px solid grey"
   tab1.style="display:none"
   tab2.style="display:flex;animation: 0.5s ease-in"
   tab3.style="display:none"
    
    
})
nav3.addEventListener('click',()=>{
    document.getElementById('line-1').style="border: 1px solid grey"
   document.getElementById('line-2').style="border: 1px solid grey"
   document.getElementById('line-3').style="border: 1px solid hsl(0, 94%, 66%)"
   tab1.style="display:none"
   tab2.style="display:none"
   tab3.style="display:flex"
    
})
expand1.addEventListener('click',()=>{
    document.querySelector(".question1").classList.toggle('active')
    document.querySelector(".expand1").classList.toggle('active')
    document.querySelector(".question2").classList.remove('active')
    document.querySelector(".question3").classList.remove('active')
    document.querySelector(".question4").classList.remove('active')
    document.querySelector(".expand2").classList.remove('active')
    document.querySelector(".expand3").classList.remove('active')
    document.querySelector(".expand4").classList.remove('active')

})
expand2.addEventListener('click',()=>{
    document.querySelector(".question2").classList.toggle('active')
    document.querySelector(".expand2").classList.toggle('active')
    document.querySelector(".question1").classList.remove('active')
    document.querySelector(".question3").classList.remove('active')
    document.querySelector(".question4").classList.remove('active')
    document.querySelector(".expand1").classList.remove('active')
    document.querySelector(".expand3").classList.remove('active')
    document.querySelector(".expand4").classList.remove('active')

})
expand3.addEventListener('click',()=>{
    document.querySelector(".question3").classList.toggle('active')
    document.querySelector(".expand3").classList.toggle('active')
    document.querySelector(".question1").classList.remove('active')
    document.querySelector(".question2").classList.remove('active')
    document.querySelector(".question4").classList.remove('active')
    document.querySelector(".expand1").classList.remove('active')
    document.querySelector(".expand2").classList.remove('active')
    document.querySelector(".expand4").classList.remove('active')

})
expand4.addEventListener('click',()=>{
    document.querySelector(".question4").classList.toggle('active')
    document.querySelector(".expand4").classList.toggle('active')
    document.querySelector(".question2").classList.remove('active')
    document.querySelector(".question3").classList.remove('active')
    document.querySelector(".question1").classList.remove('active')
    document.querySelector(".expand1").classList.remove('active')
    document.querySelector(".expand2").classList.remove('active')
    document.querySelector(".expand3").classList.remove('active')

})

navbutton.addEventListener('click',()=>{
    document.getElementById('mobile-nav').style.display="flex"
})

closeButton.addEventListener('click',()=>{
    console.log("click")
    document.getElementById('mobile-nav').style.display="none"
})



function getInputValue(){
    console.log(input.value)
    let val=validateEmail(input.value)
    console.log(val)
    if(val===null){
        document.querySelector(".footer").classList.add("error")
    }
    else{
        document.querySelector(".footer").classList.remove("error")
        input.style.border="5px solid green"
    }

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



