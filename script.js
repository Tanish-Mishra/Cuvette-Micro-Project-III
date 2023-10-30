function ucheck() {
    
  if(eval(document.querySelector('.display').value) == undefined) {
    alert('Enter a Valid Expression :(');
  } else {
    document.querySelector('.display').value = eval(document.querySelector('.display').value);
  }
     
}

const inputField = document.querySelector('.result input');

