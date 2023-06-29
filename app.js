document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("log-in-form");
  const occupationInput = document.getElementById("occupation");
  const nameInput = document.getElementById("name");
  const switchInput = document.querySelector(".switch input");
  const clearBtn = document.getElementById("create");
  const imageSelector = document.querySelector(".dropdown");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Functionality in progress\nPlease continue to creating a new profile"
    );
  });

  switchInput.addEventListener("change", (event) => {
    if (event.target.checked) {
      clearBtn.addEventListener("click", clearInputs);
    } else {
      clearBtn.removeEventListener("click", clearInputs);
    }
  });
  function clearInputs() {
    switchInput.checked = false;
    nameInput.value = "";
    occupationInput.value = "";
    imageSelector.value = "";
  }
});

// function resetStatus(resetButton) {
//     const statusInput = resetButton.parentNode.querySelector('input[type="radio"]');
//     statusInput.checked = true;
// }
