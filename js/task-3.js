/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input 
(подія input) підставляє його поточне значення в span#name-output як
 ім’я для привітання. Обов’язково очищай значення в інпуті по краях 
 від пробілів . Якщо інпут порожній або містить лише пробіли, 
 то замість імені у спан має підставлятися рядок "Anonymous".
*/

const listenInput = document.querySelector("input#name-input");
const listenSpan = document.querySelector("span#name-output");

listenInput.addEventListener("input", (event) => {
  let inputValue = event.currentTarget.value.trim();

  if (inputValue) {
    listenSpan.textContent = inputValue;
  } else {
    listenSpan.textContent = "Anonymous";
  }
});
