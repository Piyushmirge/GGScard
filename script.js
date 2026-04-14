// script.js

// Toggle for dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Card generation function
function generateCard(options) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = options.color || 'white';
    card.innerText = options.text || 'My Card';
    document.body.appendChild(card);
}

// Template selection function
function selectTemplate(template) {
    // Implement template selection logic
    console.log(`Template selected: ${template}`);
}

// Color customization function
function customizeColor(color) {
    document.body.style.color = color;
}

// Download card as image
function downloadCardAsImage(cardElement) {
    html2canvas(cardElement) // You may need to include html2canvas library
        .then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'card.png';
            link.click();
        });
}

// Copy card to clipboard
function copyCardToClipboard(cardElement) {
    const cardText = cardElement.innerText;
    navigator.clipboard.writeText(cardText).then(() => {
        console.log('Card copied to clipboard!');
    });
}

// Share card on social media
function shareOnSocialMedia(platform, cardElement) {
    const cardText = cardElement.innerText;
    const url = encodeURIComponent(window.location.href);
    let shareUrl;

    switch(platform) {
        case 'facebook':
            shareUrl = `https://facebook.com/sharer/sharer.php?u=${url}&quote=${cardText}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${cardText}`;
            break;
        // Add cases for other platforms as needed
        default:
            console.log('Unsupported platform');
            return;
    }
    window.open(shareUrl, '_blank');
}

// Example usage
// generateCard({ text: 'Sample Card', color: '#f0f0f0' });
// toggleDarkMode();
