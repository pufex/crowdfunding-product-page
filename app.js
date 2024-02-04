const radioButtons = document.querySelectorAll(".the-input");
const pledgeChoices = document.querySelectorAll(".pledge-choice");
const choiceWindows = document.querySelectorAll(".choice-window");

let i = 0;

pledgeChoices.forEach((pledgeChoice) => {

  pledgeChoice.addEventListener("click", () => {
    pledgeChoices.forEach((pledgeChoice) => {
      pledgeChoice.classList.remove("active");
    });
    pledgeChoice.classList.add("active");
  });
})

let closeButtons = [];

choiceWindows.forEach((choiceWindow) => {
  choiceWindow.number = i;
  closeButtons.push(choiceWindow.querySelector(".close-window"));
  closeButtons[i].addEventListener("click", () => {
    choiceWindow.classList.toggle('hidden');
  })
  i++;
})

