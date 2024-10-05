const profileImage = document.getElementById('profileImage');
const images = [
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1727700672896_08f5056e.webp", // Image 1
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098298012_e13985ab.webp", // Image 2
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098316358_af8ef022.webp", // Image 3
    "https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728098433189_8a074574.webp"  // Image 4
];

let currentImageIndex = 0;

function changeImage() {
    profileImage.classList.add('glitch'); // Add glitch effect
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        profileImage.src = images[currentImageIndex]; // Change image
        profileImage.classList.remove('glitch'); // Remove glitch effect
    }, 300); // Delay to allow glitch effect
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
