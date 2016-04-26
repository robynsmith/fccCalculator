var a = null;
var b = null;

var operation = null;

var result = "";

var state = "start";

var numberArray = [];

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
  switch (operation) {
    case '+':
      return result + parseFloat(numberArray.toString().replace(/,/g, ''));
      break;
    case '-':
      return result - parseFloat(numberArray.toString().replace(/,/g, ''));
      break;
    case '/':
      return result / parseFloat(numberArray.toString().replace(/,/g, ''));
      break;
    case 'X':
      return result * parseFloat(numberArray.toString().replace(/,/g, ''));
      break;
    default:
      return "Error, operation character not valid, see performOperation()";;
  }
}

$(document).ready(function() {
  $("button").click(function() {
    var buttonContent = $(this).attr("value");
    var displayItem = "";

    if (buttonContent === "=") {
      result = performOperation();
      displayItem = result;
    } else if (isInteger(buttonContent) ) {
      numberArray.push(buttonContent);
      displayItem = numberArray.toString().replace(/,/g, '');
    } else {
        operation = buttonContent;
        result = parseFloat(numberArray.toString().replace(/,/g, ''));
        numberArray = [];

        if (a === null && result !== "") {
          a = result;
        } else {
          if (result !== "") {
            b = result;
          }
        }
    }

    

    $('input').val(displayItem);

  });
});