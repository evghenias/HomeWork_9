var myCyrrentAge = prompt("How old are you?");
  if (myCyrrentAge < 25) {
    alert("I am over 25 years old");
  } else if (myCyrrentAge>25) {
      alert("No, I am younger");
  } else { 
    alert ("Yes!");
};

var myAge = prompt("Возраст?",25);
   var message = (myAge > 25) ? "Нет, я моложе":
   (myAge < 25) ? "Нет, я старше":
   (myAge=25) ? "Да!":
   "Вы правы!";
   alert(message);



 
