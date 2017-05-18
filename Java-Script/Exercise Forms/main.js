
var dayList = document.getElementById('selectedDay');
var start_day = 1;
var end_day = 31;

for (var i =  start_day; i <= end_day; i++) {
  dayList.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

var monthList = document.getElementById('selectedMonth');
var start_month = 1;
var end_month = 12;

for (var i = start_month; i <= end_month ; i++) {
  monthList.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

var yearList = document.getElementById('selectedYear');
var start_year = 1900;
var end_year = 2017;

for (var i = start_year; i <= end_year; i++) {
  yearList.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

function createAnAccount() {
  var name = document.getElementById("firstName").value;
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;

  if (email1 == email2) {
    alert("Gracias " + name +", la cuenta se ha creado correctamente");
  }
  else {
    alert("No se ha podido crear la cuenta");
    document.getElementById('email2').style.border = "2px solid red";
  }
}

var btnCreateAccount = document.querySelector(".createAccount");
btnCreateAccount.addEventListener("click", createAnAccount);
