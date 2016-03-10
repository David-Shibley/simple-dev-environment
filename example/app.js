// tell the browser to wait to run this code until everything is loaded/ready
$(document).ready(function() {
  // tell the browser to run this function when the button with the id of submit_name is clicked
  $( "#submit_name" ).click(function() {
    // set the value of the input box to a variable
    var name = $( "#name_input" ).val();
    // clear all html from anything inside of the main tag
    $( "main" ).html("");
    // insert html into main, string concatination allows us to insert variables like name
    $( "main" ).append( "<p>My name is " + name + "</p>" );
    // add a button that users can click to run the app again
    $( "main" ).append( "<button id='refresh'>Go again</button>" );
    // when the button with the id of refresh is clicked, run this function
    $( "#refresh" ).click(function() {
      // refresh the page which restarts the application
      location.reload();
    })
  })
});
