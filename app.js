// method="post" action="submit.php" c

document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("log-in-form");
  const occupationInput = document.getElementById("occupation");
  const nameInput = document.getElementById("name");
  const switchInput = document.querySelector(".switch input");
  const clearBtn = document.getElementById("create");
  const imageSelector = document.querySelector(".dropdown");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "./directory/directory.html";

    // alert(
    //   "Functionality in progress\nPlease continue to creating a new profile" );
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

const allNewClientSection = document.querySelector(".all-new-clients");

const form = document.querySelector(".create-client");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.name.value);
  console.log(event.target.occupation.value);

  const newUserCard = document.createElement("div");
  newUserCard.classList.add("client");

  //this is 2nd
  const h2forNewUserName = document.createElement("h2");
  h2forNewUserName.innerText = event.target.name.value;

  const divForNewUserImg = document.createElement("div");

  //this is first
  const imgForNewUserCard = document.createElement("img");
  (imgForNewUserCard.src = "./assets/new_default.jpeg"), (outerWidth = "44%");
  imgForNewUserCard.setAttribute("width", "17%");

  // divForNewUserImg.append();
  newUserCard.append(divForNewUserImg);

  newUserCard.append(imgForNewUserCard);
  newUserCard.append(h2forNewUserName);


  //this is 3rd
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  p.innerText = event.target.occupation.value;
  p = p.style.textDecorationStyle;
   newUserCard.append(p);
   allNewClientSection.append(newUserCard);
  // follow the html format to create
  //img tag create src and button append to new card and then to dom
  // as i do each - test the form out
  // lmao do it the long way chile
});

function addNewClientToDOM() {}

/** 
function addNewClientToDatabase(){
    create obj to hold client  {} [folder]
    create element 'div' w a class [file]
    subdiv to hold features [client info]

    const removeButton = document.createElement('button');
removeButton.textContent = 'Remove'; // set the removebutton to say Remove
removeButton.addEventListener('click', () => {
    newClient.remove(); // after clicking the removebutton, remove client that was added
})

insrtbefore that first div to be firstchild
}
*/
