
  function convert(){
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheitValue)) {
         var celsiusValue = (fahrenheitValue -32) * 5/9;
         celsiusInput.value = celsiusValue.toFixed(2)
    } else {
        alert("Please enter a valid temperature in Fahrenheit");
    }

  }