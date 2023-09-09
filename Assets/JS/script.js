// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var saveButton = $('.saveBtn');
var colorBox = $('.time-block');
var textBox = $('.description');
var currentHour = dayjs().format('H');
var today = dayjs();

// Listener for click events on save buttons, saves input into local storage 
for (let i = 0; i < saveButton.length; i++){
    saveButton[i].addEventListener('click', function () {
      var textInput = $(textBox[i]).val();
      localStorage.setItem((i+9) + '-hour', textInput);
      console.log(textInput);
      
    });
  }

  //Retrieves text from local storage and displays it in the appropriate time slot
  for (let i = 0; i < saveButton.length; i++){
    var storedText = localStorage.getItem((i+9) + '-hour');
    textBox[i].textContent = storedText;
    console.log(storedText);
  }

  // Applies the past, present, or future class to each time block by comparing the id to the current hour. 
  function boxHighlighter(){
    for(let i=0; i<colorBox.length; i++) {
      if((i+9)==currentHour){
      colorBox[i].classList.add('present');
      }
      if((i+9)>currentHour){
      colorBox[i].classList.add('future'); 
      }    
      if((i+9)<currentHour){
      colorBox[i].classList.add('past'); 
      }  
    } 
  }
  boxHighlighter();

  // Displays the current date in the header of the page
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));

});
