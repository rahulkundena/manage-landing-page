function ValidateEmail(inputText){
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat)){
    document.getElementById('note').innerHTML = 'Thank you for subscribing!!!';
    document.getElementById('note').style.color = 'hsl(12, 88%, 59%)';
    document.getElementById('note').style.textAlign = 'left';
    document.getElementById('note').style.margin = '10px';
    document.getElementById('rights').style.marginTop = '36px';
    return true;
  }
  else{
      document.getElementById('note').innerHTML = 'Please enter valid Email ID';
      document.getElementById('note').style.color = 'hsl(12, 88%, 59%)';
      document.getElementById('note').style.textAlign = 'left';
      document.getElementById('note').style.margin = '10px';
      document.getElementById('rights').style.marginTop = '36px';
    return false;
}
} 