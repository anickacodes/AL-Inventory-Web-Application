const allNewClientSection = document.querySelector(".client");

// allNewClientSection.addEventListener("click", function (event) {
//   const targetElement = event.target;

//   if (
//     targetElement.tagName === "BUTTON" &&
//     targetElement.innerText === "Remove Client"
//   ) {
//     const clientCard = targetElement.closest(".client-info");
//     if (clientCard) {
//       const confirmDelete = confirm(
//         "Are you sure you want to delete this client profile?"
//       );

//       if (confirmDelete) {
//         clientCard.remove();
//       }
//     }
//   }
// });

// Function to create a new client profile
function createNewClientProfile() {
  // ... your code to create a new client profile ...

  // Add the event listener for the new "Remove Client" button
  const resetButtons = allNewClientSection.querySelectorAll(
    "input[type='reset']"
  );
  resetButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const clientCard = button.closest(".client-info");
      if (clientCard) {
        const confirmDelete = confirm(
          "Are you sure you want to delete this client profile?"
        );

        if (confirmDelete) {
          clientCard.remove();
        }
      }
    });
  });
}


// allNewClientSection.addEventListener('click', function (event) {
//   const targetElement = event.target;

//   if (targetElement.tagName === 'INPUT' && targetElement.value === 'Remove Client') {
//     const clientCard = targetElement.closest('.client-info');
//     if (clientCard) {
//       clientCard.remove();
//     }
//   }

const resetButtons = allNewClientSection.querySelectorAll(
  "input[type='reset']"
);
resetButtons.forEach((button) => {
  button.value = "Remove Client";
  
});

//   function addNewClientToDOM() {}

document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("log-in-form");
  const occupationInput = document.getElementById("occupation");
  const nameInput = document.getElementById("name");
  const switchInput = document.querySelector(".switch input");
  const formSubmission = document.querySelector(".create-client");
  const clearBtn = document.getElementById("create");
  const imageSelector = document.querySelector(".dropdown");

  // /**
  //  *
  // function addNewClientToDatabase(){
  //     create obj to hold client  {} [folder]
  //     create element 'div' w a class [file]
  //     subdiv to hold features [client info]

  //     const removeButton = document.createElement('button');
  // removeButton.textContent = 'Remove'; // set the removebutton to say Remove
  // removeButton.addEventListener('click', () => {
  //     newClient.remove();
  // })

  // insrtbefore that first div to be firstchild
  // }
  // */

  // // const removeButton = document.createElement('button');
  // // removeButton.textContent = 'Remove'; // set the removebutton to say Remove
  // // removeButton.addEventListener('click', () => {
  // //     newClient.remove();
  // // })

  // Event listener for the login form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "./directory/directory.html";
    event.target.reset();
  });

  // Event listener for the form submission to create a new client profile
  formSubmission.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create elements for the new client profile
    const divForNewUserCard = document.createElement("div");
    divForNewUserCard.classList.add("client-info");

    const imgForNewUserCard = document.createElement("img");
    imgForNewUserCard.src = "./assets/new_default.jpeg";
    imgForNewUserCard.setAttribute("width", "17%");
    divForNewUserCard.append(imgForNewUserCard);

    const h2forNewUserName = document.createElement("h2");
    h2forNewUserName.innerText = event.target.name.value;
    divForNewUserCard.append(h2forNewUserName);

    const pTagForNewUserBeforeImg = document.createElement("p");
    pTagForNewUserBeforeImg.innerText = event.target.occupation.value;
    divForNewUserCard.append(pTagForNewUserBeforeImg);

    const formForNewUserCard = document.createElement("form");
    const legendForNewUserCard = document.createElement("legend");
    legendForNewUserCard.textContent = "Status:";
    formForNewUserCard.append(legendForNewUserCard);

    const divForNewUserRadioBtn = document.createElement("div");
    const inputForNewUserBtn = document.createElement("input");
    inputForNewUserBtn.type = "radio";
    inputForNewUserBtn.classList.add("contactChoice1");
    inputForNewUserBtn.name = "contact";
    inputForNewUserBtn.checked = switchInput.checked;

    divForNewUserRadioBtn.append(inputForNewUserBtn);

    const ptagforradiobtnfornewuser = document.createElement("p");
    if (switchInput.checked) {
      ptagforradiobtnfornewuser.innerText = "Active";
    } else {
      ptagforradiobtnfornewuser.innerText = "Not Active";
    }
    divForNewUserRadioBtn.append(ptagforradiobtnfornewuser);

    const resetBtnForNewUserCard = document.createElement("button");
    resetBtnForNewUserCard.innerText = "Remove Client";

    divForNewUserRadioBtn.append(resetBtnForNewUserCard);

    formForNewUserCard.append(divForNewUserRadioBtn);
    divForNewUserCard.append(formForNewUserCard);
    allNewClientSection.append(divForNewUserCard);

    // Clear the form inputs
    clearInputs();
  });

  // Event listener for the "Clear" button
  clearBtn.addEventListener("click", clearInputs);

  // Function to clear the form inputs
  function clearInputs() {
    switchInput.checked = false;
    nameInput.value = "";
    occupationInput.value = "";
    imageSelector.value = "default";
  }
});
