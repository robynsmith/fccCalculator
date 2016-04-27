var operation = null;
var result = "";
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
      return "Opeartion=" + operation;
  }
}

$(document).ready(function() {
  $("button").click(function() {
    var buttonContent = $(this).attr("value");
    var displayItem = "";

    console.log("ButtonContent====>" + buttonContent + "\n Operation===>" + operation);

    if (buttonContent === "=") {
      result = performOperation();
      displayItem = result;
      result = "";
      operation = null;
      numberArray = [];
    } else if(buttonContent === "CE"  || buttonContent === "AC") {
      result = "";
      displayItem = "";
      numberArray = [];
    }
    else if (isInteger(buttonContent) ) {
      numberArray.push(buttonContent);
      displayItem = numberArray.toString().replace(/,/g, '');
    } else {
        if (operation !== null) {
          result = performOperation();
          displayItem = result;
        } else {
          result = parseFloat(numberArray.toString().replace(/,/g, ''));
        }
        numberArray = [];
        operation = buttonContent;
    }

    

    $('input').val(displayItem);

  });
});