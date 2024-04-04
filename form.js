const userName = document.querySelector("#name");
const userSurName = document.querySelector("#surname");
const userMobile = document.querySelector("#mobil");
const userAge = document.querySelector("#persoana");
const userEmail = document.querySelector("#email");
const userConfirmEmail = document.querySelector("#email-confirm");
const userPassword = document.querySelector("#password");
const info = document.querySelector("#info");
const check = document.querySelector("#check");
const checkInfo = document.querySelector("#check-info");
const submitBtn = document.querySelector("#submitBtn");
const users = document.querySelector("#users");
const userDisplay = document.querySelector("#user-display");
const errorName = document.querySelector("#div-one-error");
const errorSurName = document.querySelector("#div-two-error");
const errorMobile = document.querySelector("#div-three-error");
const errorAge = document.querySelector("#div-four-error");
const errorEmail = document.querySelector("#div-five-error");
const errorConfirmEmail = document.querySelector("#div-six-error");
const errorPassword = document.querySelector("#div-seven-error");

let formulaString = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
let formulaNumber = /^\d{10}$/;
let formulaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let userArr = [];
let isChecked = check.checked;
let stringCheck, valid, userr, arr, newObj, newArrDisplay, display;

const userForm = {
  name: "",
  surname: "",
  mobile: "",
  age: "",
  email: "",
  emailConfirm: "",
  password: "",
};

userName.addEventListener("change", (e) => {
  userForm.name = e.target.value;
  stringCheck = userForm.name;
  if (stringCheck.match(formulaString) && !stringCheck.match(formulaNumber)) {
    errorName.innerHTML = "";
    valid = true;
  } else {
    errorName.innerHTML = "Introdu un nume valid!";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userSurName.addEventListener("change", (e) => {
  userForm.surname = e.target.value;
  stringCheck = userForm.surname;
  if (stringCheck.match(formulaString) && !stringCheck.match(formulaNumber)) {
    errorSurName.innerHTML = "";
    valid = true;
  } else {
    errorSurName.innerHTML = "Introdu un prenume valid!";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userMobile.addEventListener("change", (e) => {
  userForm.mobile = e.target.value;
  let str = userForm.mobile;
  let mobileArr = str.split(" ");
  if (userForm.mobile.match(formulaNumber)) {
    mobileArr.filter((e) => {
      if (e[0] == "0" && e[1] == "7") {
        errorMobile.innerHTML = "";
        valid = true;
      } else
        errorMobile.innerHTML = "Introdu un numar de mobil din Romania valid!";
    });
  } else {
    errorMobile.innerHTML = "Introdu un numar de mobil din Romania valid!";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userAge.addEventListener("change", (e) => {
  userForm.age = e.target.value;
  if (userForm.age >= 14) {
    errorAge.innerHTML = "";
    valid = true;
  } else {
    errorAge.innerHTML = "Introdu o varsta peste 14 ani! ";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userEmail.addEventListener("change", (e) => {
  userForm.email = e.target.value;
  if (userForm.email.match(formulaEmail)) {
    errorEmail.innerHTML = "";
    valid = true;
  } else {
    errorEmail.innerHTML = "Introdu o adresa de email valida!";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userConfirmEmail.addEventListener("change", (e) => {
  userForm.emailConfirm = e.target.value;
  if (userForm.emailConfirm === userForm.email) {
    errorConfirmEmail.innerHTML = "";
    valid = true;
  } else {
    errorConfirmEmail.innerHTML = "Adresele de email nu sunt la fel";
    checkInfo.innerHTML = "";
    valid = false;
  }
});

userPassword.addEventListener("change", (e) => {
  userForm.password = e.target.value;
  let pass = userForm.password;
  let hasUpper = pass.match(/[A-Z]/g);
  let hasLower = pass.match(/[a-z]/g);
  let hasNumber = pass.match(/[0-9]/g);
  let hasSpecialChar = pass.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g);
  if (hasUpper && hasLower && hasNumber && hasSpecialChar && pass.length >= 7) {
    errorPassword.innerHTML = "";
    valid = true;
  } else {
    errorPassword.innerHTML = `Introdu o  parola  care  sa  contina  litere
         mari,<br/> litere  mici, numere, caractere speciale<br/> si sa fie mai mare de 7 caractere!`;
    checkInfo.innerHTML = "";
    valid = false;
  }
});

const submit = () => {
  isChecked = check.checked;
  if (!isChecked || !valid) {
    info.innerHTML = "Formularul  nu este valid!";
    info.style.color = "orangered";
    checkInfo.innerHTML = "Bifeaza casuta cu termeni si conditii!";
    submitBtn.innerHTML = "Trimite";
    submitBtn.style.color = "white";
    return false;
  } else {
    info.innerHTML = "Formularul este valid!";
    submitBtn.innerHTML = "Trimis";
    submitBtn.style.color = "white";
    info.style.color = "green";
    checkInfo.innerHTML = "";
    addUser();
  }
};

const reset = () => {
  isChecked = check.checked;
  userName.value = "";
  userSurName.value = "";
  userMobile.value = "";
  userAge.value = "";
  userEmail.value = "";
  userConfirmEmail.value = "";
  userPassword.value = "";
  isChecked = false;
  check.checked = false; 
  submitBtn.innerHTML = "Trimite";
  submitBtn.style.color = "white";
  info.innerHTML = "";
  valid = false;
  checkInfo.innerHTML = "";
};


const addUser = () => {  
  newObj = { ...newObj, ...userForm };
  userArr.push(newObj);
  userr = [...userArr];
  arr = userr;
};

const displayArr = () => {
  arr.forEach((e) => {
    display = `<li> Nume:   ${e.name}, Prenume: ${e.surname}, Varsta:   ${e.age}</li>
       <li> Mobil:  ${e.mobile},  Email:   ${e.email}</li> </br>`;
  });

  userDisplay.style.display = "block";
  userDisplay.innerHTML += display;
};
