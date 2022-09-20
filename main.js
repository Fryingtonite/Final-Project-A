
// ----- navbar  ------
const hamburger = document.querySelector('.hamburger');
// get access to nav menu
const navMenu = document.querySelector('.navi-menu');

// when click on hamburger activate dropdown and menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}) 

// ---- modal ----
var modal = document.getElementById("myModal");  // get the modal

var btn = document.getElementById("myBtn");     // get the modal open btn

var span = document.getElementsByClassName("close")[0];     // get the span to close the modal 

// on btn click open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// on click X close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// ---- guitar image switcher  -----
function check() {
    if (document.form.lpGuitarColour.value === "selectCherry"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000220-2.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectGold"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000224-1.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectTobacco") {
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000222.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectTransCherry"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000221-2.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectBourbon"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000226-1.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectGraphite"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000215-2.jpg";
    }
    else if (document.form.lpGuitarColour.value === "selectRedWine"){
        document.querySelector(".guitarsBox").src="https://www.megamusiconline.com.au/wp-content/uploads/2022/02/AUG8000234-1.jpg";
    }
    else {
        document.body.style.background = "";
    }
    return false;
}

