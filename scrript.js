let mathExpression = '';

function addToExpression(value) {
  mathExpression += value;
  document.getElementById('output').value = mathExpression;
}

function addOperator(operator) {
  mathExpression += operator;
  document.getElementById('output').value = mathExpression;
}

function clearOutput() {
  mathExpression = '';
  document.getElementById('output').value = '';
}

function performCalculation() {
  try {
    const result = eval(mathExpression);
    document.getElementById('output').value = result;
    mathExpression = '';
  } catch (error) {
    document.getElementById('output').value = 'Error';
  }
}
