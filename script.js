const video = document.getElementById("looping-video");
video.addEventListener("ended", () => {
  video.currentTime = 0; // Reset the video to the beginning
  video.play(); // Start playing again immediately
});

// const faqButtons = document.querySelectorAll(".faqButton"); // Select all FAQ buttons
// const faqContents = document.querySelectorAll(".faqContent"); // Select all FAQ contents

// faqButtons.forEach((faqButton, index) => {
//   const faqButtonIcon = faqButton.querySelector(".faq-button-icon");
//   const faqContent = faqContents[index];

//   faqButton.addEventListener("click", () => {
//     if (faqContent.classList.contains("show")) {
//       faqContent.classList.remove("show");
//       faqButtonIcon.style.transform = "rotate(0deg)";
//     } else {
//       faqContents.forEach((content) => content.classList.remove("show"));
//       faqButtonIcon.style.transform = "rotate(0deg)";
//       faqContent.classList.add("show");
//       faqButtonIcon.style.transform = "rotate(45deg)";
//     }
//   });
// });

const faqButtons = document.querySelectorAll(".faqButton");
const faqContents = document.querySelectorAll(".faqContent");

faqButtons.forEach((faqButton, index) => {
  const faqButtonIcon = faqButton.querySelector(".faq-button-icon");
  const faqContent = faqContents[index];

  faqButton.addEventListener("click", () => {
    // Toggle the 'show' class on the content
    faqContent.classList.toggle("show");

    // Toggle the rotation of the icon
    if (faqContent.classList.contains("show")) {
      faqButtonIcon.style.transform = "rotate(45deg)";
    } else {
      faqButtonIcon.style.transform = "rotate(0deg)";
    }

    // Close other open contents
    faqContents.forEach((content, i) => {
      if (i !== index && content.classList.contains("show")) {
        content.classList.remove("show");
        faqButtonIcons[i].style.transform = "rotate(0deg)";
      }
    });
  });
});


function toggleDropdown() {
  const languageOptions = document.getElementById('languageOptions');
  languageOptions.classList.toggle('show');
}

function changeLanguage(language) {
  const selectedLanguage = document.querySelector('.selected-language');
  selectedLanguage.innerHTML = `
    <span class="world-icon">🌐</span>
    ${language}
    <span class="arrow-icon">▼</span>
  `;
  toggleDropdown();
}


function toggleDropdown() {
  const languageOptions = document.getElementById('languageOptions');
  languageOptions.classList.toggle('show');
}

function changeLanguage(language) {
  const selectedLanguage = document.querySelector('.selected-language');
  selectedLanguage.innerHTML = `
    <span class="world-icon"><i class="fas fa-globe"></i></span>
    ${language}
    <span class="arrow-icon">▼</span>
  `;
  toggleDropdown();
}