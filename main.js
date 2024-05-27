// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let numOne;
let i = 0;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

// Funções
function handleTryClick(event){
  event.preventDefault(); //Não faça o padrão (não recarrega a página)
  let numUser = document.querySelector("#inputNumber");

  if(!numUser.value){
    alert("Preencha um número!");
    numUser.focus();
  }else{
    if(numOne === undefined){
      createNumber();    
    }
      
    i++;
      if(numOne != numUser.value){
      alert("Erro! Tente novamente");
    }else{
      let attempts = document.querySelector("#attempts");
  
      screen1.classList.toggle("hide");
      screen2.classList.toggle("hide");
      attempts.textContent = i;
    }
  } 
}

function handleResetClick(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  i = 0;
  let numUser = document.querySelector("#inputNumber");
  numUser.value = null;
  createNumber();
}

function createNumber(){
  numOne = Math.round(Math.random() * 5);
}

