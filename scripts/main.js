let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/incentivelogoblack.png") { 
        myImage.setAttribute("src", "images/incentivelogowhite.png");
    } else { 
        myImage.setAttribute("src", "images/incentivelogoblack.png");
    }
}

// Personalized welcome message code 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName();
    } else { 
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Incentive is here to change the world, ' + myName;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
    } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = 'Incentive is here to change the world, ' + storedName;
    }

    myButton.onclick = function(){
        setUserName();
      };

      