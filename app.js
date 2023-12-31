//   function addNewClientToDOM() {}

document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("log-in-form");
  const occupationInput = document.getElementById("occupation");
  const nameInput = document.getElementById("name");
  const switchInput = document.querySelector(".switch input");
  const formSubmission = document.querySelector(".create-client");
  const clearBtn = document.getElementById("create");
  const imageSelector = document.querySelector(".dropdown");

  // Event listener for the login form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "./directory/directory.html";
    event.target.reset();
  });

  // Event listener for the form submission to create a new client profile
  formSubmission.addEventListener("submit", (event) => {
    event.preventDefault();

    // Create elements for the new client profile
    //1st
    const divForNewUserCard = document.createElement("div");
    divForNewUserCard.classList.add("client-info");
    //2nd
    const imgForNewUserCard = document.createElement("img");
    imgForNewUserCard.src = "./assets/new_default.jpeg";
    imgForNewUserCard.setAttribute("width", "17%");
    divForNewUserCard.append(imgForNewUserCard);
    //3rd
    const h2forNewUserName = document.createElement("h2");
    h2forNewUserName.innerText = event.target.name.value;
    divForNewUserCard.append(h2forNewUserName);
    //4th
    const pTagForNewUserBeforeImg = document.createElement("p");
    pTagForNewUserBeforeImg.innerText = event.target.occupation.value;
    divForNewUserCard.append(pTagForNewUserBeforeImg);
    //5th
    const formForNewUserCard = document.createElement("form");
    const legendForNewUserCard = document.createElement("legend");
    legendForNewUserCard.textContent = "Status:";
    formForNewUserCard.append(legendForNewUserCard);
    //6th
    const divForNewUserRadioBtn = document.createElement("div");
    const inputForNewUserBtn = document.createElement("input");
    inputForNewUserBtn.type = "radio";
    inputForNewUserBtn.classList.add("contactChoice1");
    inputForNewUserBtn.name = "contact";
    inputForNewUserBtn.checked = switchInput.checked;

    divForNewUserRadioBtn.append(inputForNewUserBtn);
    //7th
    const ptagforradiobtnfornewuser = document.createElement("p");
    if (switchInput.checked) {
      ptagforradiobtnfornewuser.innerText = "Active";
    } else {
      ptagforradiobtnfornewuser.innerText = "Not Active";
    }
    divForNewUserRadioBtn.append(ptagforradiobtnfornewuser);
    //8th
    const resetBtnForNewUserCard = document.createElement("button");
    resetBtnForNewUserCard.innerText = "Remove Client";
    // resetBtnForNewUserCard.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   const confirmDelete = confirm(
    //     "Are you sure you want to delete this client profile?"
    //   );
    //   if (confirmDelete) {
    //     const clientCard = event.target.closest(".client-info");
    //     if (clientCard) {
    //       clientCard.remove();
    //     }
    //   }
    // });
    divForNewUserRadioBtn.append(resetBtnForNewUserCard);

    formForNewUserCard.append(divForNewUserRadioBtn);
    divForNewUserCard.append(formForNewUserCard);
    allNewClientSection.prepend(divForNewUserCard);

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
  const allNewClientSection = document.querySelector(".client");

  // Add event listener to the parent container for extras
  allNewClientSection.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (
      targetElement.tagName === "BUTTON" &&
      targetElement.innerText === "Remove Client"
    ) {
      // Find closest client profile card to button
      const clientCard = targetElement.closest(".client-info");
      if (clientCard) {
        // Display a confirmation popup
        function createConfirmationDialogue() {
          const confirmDialogue = document.createElement("div");
          confirmDialogue.classList.add("confirmation-dialog");

          const message = document.createElement("p");
          message.innerText =
            "Are you sure you want to delete this client profile?";

          const confirmButton = document.createElement("button");
          confirmButton.classList.add("confirm-button");
          confirmButton.innerText = "Confirm";

          const cancelButton = document.createElement("button");
          cancelButton.classList.add("cancel-button");
          cancelButton.innerText = "Cancel";

          confirmDialogue.appendChild(message);
          confirmDialogue.appendChild(confirmButton);
          confirmDialogue.appendChild(cancelButton);

          return confirmDialogue;
        }

        const confirmDialogue = createConfirmationDialogue();
        //append to client card

        clientCard.append(confirmDialogue);

        // Add event listener to the "Cancel" button in the dialog
        const cancelButton = confirmDialogue.querySelector(".cancel-button");
        cancelButton.addEventListener("click", () => {
          // Remove the confirmation dialog
          confirmDialogue.remove();
        });
      }
    }
  });

  // Add event listener for new "Remove Client" button
  const resetButtons = allNewClientSection.querySelectorAll(
    "input[type='reset']"
  );
  resetButtons.forEach((button) => {
    button.value = "Remove Client";
    button.addEventListener("click", (event) => {
      const confirmDelete = confirm(
        "Are you sure you want to delete this client profile?"
      );
      if (confirmDelete) {
        const clientCard = event.target.closest(".client-info");
        if (clientCard) {
          clientCard.remove();
        }
      }
    });
  });
});
//edit client cards
function editClientHandler(event) {
  const clientInfo = event.target.closest("cient-info");
  const clientName = clientInfo.querySelector("client-name");
  const clientOccupation = clientInfo.querySelector(".client-occupation");
}
