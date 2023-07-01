//CRAD DETAILS
let cardNumber = document.querySelector("#card-number");
let cardName = document.querySelector("#card-name");
let cardMonth = document.querySelector("#card-month");
let cardYear = document.querySelector("#card-year");
let cardCvc = document.querySelector("#card-cvc")

// ERROR RESULT
let errormessage = document.querySelector(".first-span");
let secondErrorMessage = document.querySelector(".second-span")
let thirdErrorMessage = document.querySelector(".third-span")

//INPUT DETAILS
let formName = document.querySelector("#input-name");
let formNumber = document.querySelector("#input-number");
let formMonth = document.querySelector("#input-month");
let formCvc = document.querySelector("#input-cvc");
let action = document.querySelector("#submit");
let form = document.querySelector('#form')
let complete = document.querySelector('#complete')
let sucess = document.querySelector('#sucess')
let letter = document.querySelector('.letter-span')
let getName = document.querySelector('#getname')

// FORM NAMES
let nameDetails = document.querySelector('.form-name')


formName.addEventListener("input", (e) => {
  let formNameResult = e.target.value;
  let regexName = /^[A-Za-z\W]+$/g
  let endResult = regexName.test(formNameResult)
  if(!endResult){
    errormessage.style.display = 'block';
    formName.style.border = '1px solid red'
   } 
  else{
    errormessage.style.display = 'none';
    formName.style.border = '1px solid green'
    cardName.textContent = formNameResult;
  }
});


formNumber.addEventListener('input', (e) => {
  let formNumResult = e.target.value;
  let express = /^[0-9\W]+$/g
  let output = express.test(formNumResult)
  if(!output){
    errormessage.style.display = 'block';
    formNumber.style.border = '1px solid red'
  }else{
    errormessage.style.display = 'none';
    formNumber.style.border = '1px solid green'
    cardNumber.textContent = formNumResult
  }
})


formMonth.addEventListener('input', (e) => {
  let formMonResult = e.target.value
  cardMonth.textContent = formMonResult
  // let regexmonth  = /^[0-9]+$/
  // let regexmonthresult = regexmonth.test(formMonResult)
  // if(!regexmonthresult){
  //   formNumber.style.border = '1px solid red'
  //   secondErrorMessage.style.display = 'block'
  // }else{
  //   formMonth.style.border = '1px solid green'
  //   secondErrorMessage.style.display = 'none'
  //   cardMonth.textContent = formMonResult
  // }
})



formCvc.addEventListener('input', (e) => {
  let formcvc = e.target.value
  let regexcvc  = /^[0-9]+$/
  let regexcvcresult = regexcvc.test(formcvc)
  if(!regexcvcresult){
    formCvc.style.border = '1px solid red'
    thirdErrorMessage.style.display = 'block'
  }else{
    formCvc.style.border = '1px solid green'
    thirdErrorMessage.style.display = 'none'
    cardCvc.textContent = formcvc
  }
})


action.addEventListener('click', () => {
  if (formName.value === '') {
    letter.style.display = 'block';
    formName.style.border = '1px solid red'
  }
  else if(formNumber.value === ''){
    errormessage.style.display = 'block';
    formNumber.style.border = '1px solid red'
  }else if(formMonth.value === ''){
    formNumber.style.border = '1px solid red'
    secondErrorMessage.style.display = 'block'
  }
  
  else if(formCvc.value === ''){
    formCvc.style.border = '1px solid red'
    thirdErrorMessage.style.display = 'block'
  }
  else if((formNumber.value).length !== 19){
    errormessage.style.display = 'block'
    errormessage.textContent = 'Numbers must be up to 19'
    formNumber.style.border = '1px solid red'
  }
  
  else{
    getName.textContent = formName.value
    form.style.display = 'none'
   complete.style.display = 'block'
   action.textContent = 'Continue'
   action.addEventListener('click', () => {
    window.location.reload()
   })
  }
})