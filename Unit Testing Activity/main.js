function clicked(){
  let input = document.querySelector("input");
  window.alert(greet(input.value));
  input.value = "";
}

function greet(name){
  if(typeof name == 'object') {
    return 'Hello' + name.join();
  }else if(name == name.toUpperCase()) {
    return `HELLO ${name}!`
  } else {
    return `Hello ${name}`
  }
}