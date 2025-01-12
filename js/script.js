// Add animation listeners
setAnimation();

// CSS Finishing Touches
playLoading();

// Function to enter fullscreen mode
if (document.documentElement.requestFullscreen) {
  // Add event listeners to enter/exit fullscreen on button click
  var fullscreenButton = document.querySelectorAll('.fullscreen-button');
  fullscreenButton[0].addEventListener('click', function() {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });

  fullscreenButton[1].addEventListener('click', function() {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });
}



/************************************************************************************************/
/*@brief: Enables full screen mode for web application.******************************************/
/************************************************************************************************/
function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
  }
}

/************************************************************************************************/
/*@brief: This function adds a generic animation to an element/button****************************/
/************************************************************************************************/
function setAnimation() {
  // Target event listeners elements
  const hamIcon = document.getElementById("hamIcon");
  const footerLink1 = document.getElementById("footerLink1");
  const footerLink2 = document.getElementById("footerLink2");

  hamIcon.addEventListener("click", function(){
    displayElement('hamburger-menu', 'grid', false);
  });

  footerLink1.addEventListener("click", function(){
    displayElement('MFooterL1', 'flex', true);
  });

  footerLink2.addEventListener("click", function(){
    displayElement('MFooterL2', 'flex', true);
  });
}

/************************************************************************************************/
/*@brief: This function shows a different page of the website based on their ID.*****************/
/*@param - pageNum: What page number to display.*************************************************/
/*@param - bannerText: What text to be displayed on the page banner.*****************************/
/*@param - bannerImg: Relative path to image file.***********************************************/
/************************************************************************************************/
function displayPage(pageNum, bannerText, bannerImg)
{
  // Hide all pages
  const web_pages = document.querySelectorAll(".page");
  for (let i = 0; i < web_pages.length; i++){
    web_pages[i].style.display = "none";
  }

  const page_selected = document.querySelector("#page"+pageNum);
  const banner_box = document.getElementById("banner-context");

  // Modify the contents of the page's banner
  page_selected.style.display = "grid";

  banner_box.querySelector("h1").innerText = bannerText;
  banner_box.style.backgroundImage = bannerImg;

  // Hide mobile hamburger-menu to show page changed in mobile.
  document.getElementById("hamburger-menu").style.display = "none";

  // Play loading animation
  playLoading();
}


/***************************************************************************************************/
/*@brief: This is a generic function that plays CSS animation.**************************************/
/*@param - HTMLelement: The HTML element to target for animation.***********************************/
/*@param - animationClass: The CSS animation class to play for the HTML element.********************/
/*@param - removeAnimationTime: The time required before the CSS animation class gets removed.******/
/***************************************************************************************************/
function playAnimation(HTMLelement, animationClass, removeAnimationTime) {

  function removeAnimation() {
    HTMLelement.classList.toggle(animationClass);
  }

  // Enable animation for targeted HTML element.
  HTMLelement.classList.toggle(animationClass);
  // Remove animation after x amount of seconds.
  setTimeout(function(){removeAnimation();}, removeAnimationTime);
}

/***************************************************************************************************/
/*@brief: This is a function that plays the Loading Screen Animation.*******************************/
/***************************************************************************************************/
function playLoading(){

  function removeLoading(){
    screenBuffer.classList.toggle("loading-screen");
    screenBuffer.removeChild(screenBuffer.firstElementChild);
    // Make the content re-appear again.
    document.getElementById("view-context").style.display = 'grid';
  }

  // Make the background of the entire screen black.
  const screenBuffer = document.getElementById("loading-screen");
  screenBuffer.classList.toggle("loading-screen");

  // Create and append the loading square to the screen.
  const loading_square = document.createElement("div");
  loading_square.classList.add("loading-square");
  screenBuffer.append(loading_square);

  // Add animation to square. 
  loading_square.classList.toggle("loading-in");
  // Make the content disappear temporarily for 'Loading' effect immersion.
  document.getElementById("view-context").style.display = 'none';
  // Remove animation after x seconds.
  setTimeout(function(){removeLoading();}, 990);
}

/***************************************************************************************************/
/*@brief: This is a generic function that hides/unhides HTML elements based on their ID.************/
/*@param - id: identification of the HTML element.**************************************************/
/*@param - intendedDisplay: the display format at which you want the element to be in.**************/
/*@param - isAnimationPlayed: true or false*********************************************************/
/***************************************************************************************************/
function displayElement(id, intendedDisplay, isAnimationPlayed)
{
  const selected = document.getElementById(id);
  if (selected.style.display == intendedDisplay) {
    selected.style.display = "none";
  }
  else {
    selected.style.display = intendedDisplay;

    if (isAnimationPlayed)
      playAnimation(selected, "fade-in", 1000);
  }
}

/***************************************************************************************************/
/*@brief: This function alternates background colours through CSS class bg.*************************/
/***************************************************************************************************/
function alternateBGColour()
{
  const containers = document.getElementsByClassName("bg");
  for (let i = 0; i < containers.length; i++){
    if (i % 2 == 0) {
      containers[i].style.backgroundColor = "white";
    }
    else {
      containers[i].style.backgroundColor = "#f4f4f5";
    }
  }
}

/***************************************************************************************************/
/*@brief: This function adds event listeners to page buttons, so users can navigate in the website.*/
/***************************************************************************************************/
function addPageListener()
{
  // NOTE: There is a "better" way to do this, but to satisfy JAVASCRIPT VALIDATOR, it has to be this way.
  // Target all page 1, 2 and 3 buttons.
  let page1btn = document.getElementById("page1btn1");
  page1btn.addEventListener("click", function(){displayPage(1, "Home", "url(images/index-banner.jpeg)");});
  page1btn = document.getElementById("page1btn2");
  page1btn.addEventListener("click", function(){displayPage(1, "Home", "url(images/index-banner.jpeg)");});
  page1btn = document.getElementById("page1btn3");
  page1btn.addEventListener("click", function(){displayPage(1, "Home", "url(images/index-banner.jpeg)");});
  page1btn = document.getElementById("page1btn4");
  page1btn.addEventListener("click", function(){displayPage(1, "Home", "url(images/index-banner.jpeg)");});

  let page2btn = document.getElementById("page2btn1");
  page2btn.addEventListener("click", function(){displayPage(2, "Works", "url(images/index-banner.jpeg)");});
  page2btn = document.getElementById("page2btn2");
  page2btn.addEventListener("click", function(){displayPage(2, "Works", "url(images/index-banner.jpeg)");});
  page2btn = document.getElementById("page2btn3");
  page2btn.addEventListener("click", function(){displayPage(2, "Works", "url(images/index-banner.jpeg)");});
  page2btn = document.getElementById("page2btn4");
  page2btn.addEventListener("click", function(){displayPage(2, "Works", "url(images/index-banner.jpeg)");});

  // const pages = [page1btn, page2btn, page3btn];
  // // Loop through all pages of the website.
  // for (let i = 0; i < pages.length; i++)
  // {
    // // Loop through all button elements that are related to a specific page. 
    // for (let c = 0; c < pages[i].length; c++)
    // {
      // // Add event listeners with banner styles specific to their corresponding page number.
      // switch (i)
      // {
        // case 0:
          // pages[i][c].addEventListener("click", function(){
            // displayPage(1, "Home", "url(images/home/home-banner.jpg)");
          // });
          // break;

        // case 1:
          // pages[i][c].addEventListener("click", function(){
            // displayPage(2, "Bodybuilding", "url(images/bodybuilding/bodybuilding-banner.jpg)");
          // });
          // break;

        // case 2:
          // pages[i][c].addEventListener("click", function(){
            // displayPage(3, "Nutrition", "url(images/nutrition/nutrition-banner.jpg)");
          // });
          // break;
      // }
    // }
  // }

}