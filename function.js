//---------------------------------------------------------------------------------------------------------
//  Menu Icon on Click Animation 
//---------------------------------------------------------------------------------------------------------

const menuIcon = document.querySelector('.menu-icon');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("open")
})









//---------------------------------------------------------------------------------------------------------
//  Apply Fullscreen Image 
//---------------------------------------------------------------------------------------------------------


// Activate Image Checker & get Image Class
const fullscreenImage = document.querySelector('.container');
const imageChecker = checkImage();

// Image Checker & get Image Class
function checkImage() {
    fullscreenImage.classList.contains('fullscreen-image')
        ? applyImage()
        : console.log('No Image Found');
}

// Image Styling
function fullscreenImageStyling() {
    fullscreenImage.style.backgroundPosition = "top center";
    fullscreenImage.style.backgroundRepeat = "no-repeat";
    fullscreenImage.style.backgroundSize = "cover";
} 
// Apply Image with URL
function applyImage() {
    fullscreenImage.style.backgroundImage = "url('/img/Product_Image_4k_3840x2160.jpg')";
    fullscreenImageStyling();
}