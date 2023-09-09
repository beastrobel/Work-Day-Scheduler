// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var saveButton = $('.saveBtn');
var colorBox = $('.time-block');
var currentHour = dayjs().format('H');
var today = dayjs();

  // TODO: This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //Listener for click events on save buttons
  saveButton.on('click', function (event) {
    event.preventDefault();
    var textEntry = "test";
    console.log(textEntry);
    localStorage.setItem('Text Entry', textEntry);

    //var textEntry = $('input[name="description"]');   
  });
  
  // For testing and visualizing - delete
  currentHour = 11;
  // Applies the past, present, or future class to each time block by comparing the id to the current hour. 
  function boxHighlighter(){
    for(var i=0; i<colorBox.length; i++) {
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Displays the current date in the header of the page
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
