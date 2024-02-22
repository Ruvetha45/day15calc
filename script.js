let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result;
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (/\d|\+|-|\*|\/|%|\./.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else {
    alert('Only numbers and operators are allowed');
  }
});