var a = null;
var b = null;

var operation = null;

var result = "";

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
      case '.':
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
    var displayItem = "";

    if (buttonContent === "=") {
      
    }

    if (isInteger(buttonContent) ) {
      result = result + buttonContent;
      displayItem = result;
    } else {
        operation = buttonContent;

        if (a === null && result !== "") {
          a = result;
        } else {
          if (result !== "") {
            b = result;
          }
        }
    }

    

    $('input').val(result);

  });
});