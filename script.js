function changeIcon(id) {
  let buttonIcon = document.querySelector(`#icon${Number(id)+1}-js`);
  // buttonIcon.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`

  if (buttonIcon.innerHTML == `<img src="assets/images/icon-plus.svg" alt="icon-plus">`) {
     buttonIcon.innerHTML = `<img src="assets/images/icon-minus.svg" alt="icon-minus">`;
     showAns(id);
  } else if (buttonIcon.innerHTML === `<img src="assets/images/icon-minus.svg" alt="icon-minus">`) {
    buttonIcon.innerHTML = `<img src="assets/images/icon-plus.svg" alt="icon-plus"></img>`;
    hideAns(id);
  }

  
};

function showAns(i) {
  const answers = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.", "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.", "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!", "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."];
  let answer = answers[i-1];
  displayLocation = document.querySelector(`#ans${i}`)
  displayLocation.innerHTML = answer
};

function hideAns(i) {
  displayLocation = document.querySelector(`#ans${i}`)
  displayLocation.innerHTML = ''
}

