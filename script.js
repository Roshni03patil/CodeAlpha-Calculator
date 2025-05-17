function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert("Invalid Expression");
    }
  }
  
  // Keyboard support
  document.addEventListener("keydown", function (event) {
    const display = document.getElementById("display");
    const key = event.key;
  
    // Allow numbers and operators
    if ("0123456789+-*/().".includes(key)) {
      display.value += key;
    }
  
    // Calculate on Enter
    else if (key === "Enter") {
      calculate();
    }
  
    // Delete last on Backspace
    else if (key === "Backspace") {
      deleteLast();
      event.preventDefault();
    }
  
    // Clear on Escape
    else if (key === "Escape") {
      clearDisplay();
    }
  });
  