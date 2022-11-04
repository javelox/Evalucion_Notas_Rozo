let name = document.getElementById("name")
let firstNote = document.getElementById("first-note")
let secondNote = document.getElementById("second-note")
let thirdNote = document.getElementById("third-note")
let send = document.getElementById("send")


send.addEventListener("click", calculate)



function calculate(e){
 
  e.preventDefault();
 let first_Note = firstNote.value - (firstNote.value * 0.30)
 let second_Note = secondNote.value - (secondNote.value * 0.30)
 let third_Note = thirdNote.value - (thirdNote.value * 0.40)
 
 let result_final = (first_Note,second_Note,third_Note)/2
 
 note_final.result_final = (`${name.value} Your Final Note is: ${result_final.toFixed(2)}`)

  if(result_final > 4.5){
   message_result = (`Exellent`)
  
  }else if(result_final > 3.5 && result_final < 4.5){
    message_result = (`God`)
  }else if (result_final > 2 && result_final < 3.5){
    message_result = (`You Must Repeat The Trimester`)
  }else if (result_final < 2){
    message_result = (`You Must Repeat The Trimester`)
  }

}