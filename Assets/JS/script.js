// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var saveButton = $('.saveBtn');
var colorBox = $('.time-block');
var currentHour = dayjs().format('H');
var today = dayjs();

  //Saves input into local storage
  function textSave() {
    var textInput = $("#hour-9").val();
    //If box is not empty, save to local storage
    if(textInput != ""){
      localStorage.setItem('9AM', textInput);
      console.log(textInput);
      }
    }

  //Listener for click events on save buttons
  for (let i = 0; i < saveButton.length; i++){
    saveButton[i].addEventListener('click', function () {
      alert(this.innerText + "Saved!");
      textSave();
    });
  }

  // Applies the past, present, or future class to each time block by comparing the id to the current hour. 
  function boxHighlighter(){
    for(let i=0; i<colorBox.length; i++) {
    console.log(colorBox[i]);
      if((i+9)==currentHour){
      colorBox[i].classList.add('present');
      console.log('present');
      }
      if((i+9)>currentHour){
      colorBox[i].classList.add('future');
      console.log('future');  
      }    
      if((i+9)<currentHour){
      colorBox[i].classList.add('past');
      console.log('past');  
      }  
    } 
  }
  boxHighlighter();

  //Retrieves text from local storage and displays it in the appropriate time slot
  function renderText(){
    var textRender = localStorage.getItem("9AM");
    document.querySelector("#hour-9").textContent = textRender;
  } 
  renderText();
  // Displays the current date in the header of the page
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
