const radioButtons = document.querySelectorAll(".the-input");
const pledgeChoices = document.querySelectorAll(".pledge-choice");
const choiceWindows = document.querySelectorAll(".choice-window");
const gotIt = document.querySelector("#got-it");
const pledgeCompleted = document.querySelector(".pledge-completed");
const selectReward = document.querySelectorAll(".select-reward");
const enterPledges = document.querySelectorAll(".enter-pledge");
const choiceWindow = document.querySelector(".choice-window");

console.log(choiceWindow);

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

gotIt.addEventListener('click', () => {
  pledgeCompleted.classList.toggle('hidden');
})

selectReward.forEach((item) => {
  item.addEventListener('click', () => {
    choiceWindows[0].classList.toggle('hidden');
    console.log(choiceWindows[0].classList);
  })
})


console.log(enterPledges)
enterPledges.forEach((enterPledge, index) => {
  let pledgeBar = [25, 75, 200];
  const continueButton = enterPledge.querySelector(".continue");
  const cashInput = enterPledge.querySelector(".cash-input");
  const label = enterPledge.querySelector("label")
  continueButton.addEventListener('click', () => {
    cashInput.classList.remove("error-input")
    label.classList.remove("error-label")
    label.innerHTML = "Enter your pledge"
    if(cashInput.value >= pledgeBar[index]) {
      choiceWindow.classList.toggle("hidden");
      pledgeCompleted.classList.toggle("hidden");
    }else{
      cashInput.classList.add("error-input")
      label.classList.add("error-label")  
      label.innerHTML = "Enter a valid pledge"
    }
  })
})
