const radioButtons = document.querySelectorAll(".the-input");
const pledgeChoices = document.querySelectorAll(".pledge-choice");
const choiceWindows = document.querySelectorAll(".choice-window");
const gotIt = document.querySelector("#got-it");
const pledgeCompleted = document.querySelector(".pledge-completed");
const selectReward = document.querySelectorAll(".select-reward");
const enterPledges = document.querySelectorAll(".enter-pledge");
const choiceWindow = document.querySelector(".choice-window");
const hamburger = document.querySelector(".hamburger");
const hamburgerLinks = document.querySelector(".hamburger-links");
const bookmark = document.querySelector("#bookmark");


let i = 0;
const pledgeBar = [25, 75, 200];

const ErrorLabel = (input, label, i) => {
  if(input == null || label == null)
    return true;
  input.classList.remove("error-input")
  label.classList.remove("error-label")
  label.innerHTML = "Enter your pledge"
  if(cashInput.value >= pledgeBar[i]) return true
  else{
    input.classList.add("error-input")
    label.classList.add("error-label")
    label.innerHTML = "Enter valid pledge"
    return false
  } 
}

pledgeChoices.forEach((pledgeChoice, index) => {
  const enterPledge = pledgeChoice.querySelector(".enter-pledge");

  pledgeChoice.addEventListener("click", () => {
    pledgeChoices.forEach((pledgeChoice) => {
      pledgeChoice.classList.remove("active");
    });
    pledgeChoice.classList.add("active");
  });
  
  if(enterPledge == null) return;

  const continueButton = pledgeChoice.querySelector(".enter-pledge .continue");
  const cashInput = pledgeChoice.querySelector(".enter-pledge .cash-input");
  const label = pledgeChoice.querySelector(".enter-pledge label");

  continueButton.addEventListener('click', () => {
    if(ErrorLabel(cashInput, label, index) === true) {
      choiceWindow.classList.toggle("hidden");
      pledgeCompleted.classList.toggle("hidden");
    }
  })

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

hamburger.addEventListener('click', () => {
  hamburgerLinks.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger--active");
})

bookmark.addEventListener('click', () => {
  if(bookmark.classList.contains("bookmark--active")){
    bookmark.classList.remove("bookmark--active");
    bookmark.innerHTML = "Bookmark"
  }else{
    bookmark.classList.add("bookmark--active");
    bookmark.innerHTML = "Bookmarked"
  }
})