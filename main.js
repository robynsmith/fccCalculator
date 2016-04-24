var a = 0;

var operation = null;

var result = 0;

var state = "start";

function isInteger(number) {
  switch(number) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return true;
        break;
      default:
        return false;
  }
}

function performOperation() {
  return null;
}

$(document).ready(function() {
  $("button").click(function() {
    var buttonContent = $(this).attr("value");

    $('input').val(buttonContent);
    
    if (state == "start") {
      if (isInteger(buttonContent) ) {
        result = buttonContent;
      } else {
        //Do nothing
      }
    }

  });
});