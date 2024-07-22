import './assets/scss/all.scss';

let nav = document.querySelector(".nav");
console.log(nav);
function nn(){
  console.log(123123);
}

const aa = () =>{
  console.log(123123);
}
nav.addEventListener("click",(e)=>{
  aa();
});