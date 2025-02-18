// document.getElementById("menuicon").addEventListener("click", toggleMenu);

// function toggleMenu(){
//     if(document.getElementById("itemsList").style.display = "block" ||   document.getElementById("menuicon").style.display === "none"){
//        document.getElementById("itemsList").style.display = "none";
//        document.getElementById("menuicon").style.display = "grid";
//     } else {
//         document.getElementById("itemsList").style.display = "block";
//        document.getElementById("menuicon").style.display = "none";
//     }
// }



// example-------------2
// document.getElementById("menuicon").addEventListener("click", toggleMenu);

// function toggleMenu() {
//   const itemsList = document.getElementById("itemsList");
//   const menuicon = document.getElementById("menuicon");

//   if (itemsList.style.display === "none" || itemsList.style.display === "") {
//     itemsList.style.display = "grid"; // Show the navigation list
//     menuicon.style.display = "none"; // Hide the menu icon
//   } else {
//     itemsList.style.display = "none"; // Hide the navigation list
//     menuicon.style.display = "block"; // Show the menu icon
//   }
// }



// example---------------------------3

document.getElementById("menuicon").addEventListener("click", toggleMenu);

 function toggleMenu(event) {

    
    event.stopPropagation();
    let menu = document.getElementById("itemsList");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";    


}

       