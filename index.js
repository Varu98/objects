const nameArray = document.querySelectorAll(".nameClass");
const ageArray = document.querySelectorAll(".ageClass");
const yugaArray = document.querySelectorAll(".yugaClass");

const addMemberBtn = document.querySelector("#addMemberBtn");

const person = [
  {
    name: "Ram",
    age: 25,
    yuga: "Treta",
  },
  {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar",
  },
];

addMemberBtn.addEventListener("click", onMemberBtnClick);

function onMemberBtnClick() {
  console.log("hi");
}
