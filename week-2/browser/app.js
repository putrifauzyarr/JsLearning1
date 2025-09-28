const $name = prompt("Enter your Name");
const $isMarried = confirm("Are you married?");
const $address = prompt("Enter your Address");

const elName = document.querySelector("#name");
const  elAddress = document.querySelector("#adress");
const elStatus = document.querySelector("#isMarried");

elName.textContent = $name;
elAddress.textContent = $address
elStatus.textContent = $isMarried ? "Yes" : "No";