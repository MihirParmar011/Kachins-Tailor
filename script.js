const businessName = "Kachins Tailor Mahuva";
const searchQuery = encodeURIComponent(businessName);
const shopMapURL = `https://www.google.com/search?q=${searchQuery}&oq=${searchQuery}`;

const reviews = [
  "Kachins Tailor provides exceptional tailoring services with perfect fitting and excellent craftsmanship. Mr. Kachins attention to detail is unmatched. Highly recommended!",
  "I've been coming to Kachins Tailor for years. Their precision and quality are consistently outstanding. My clothes always fit perfectly!",
  "The team at Kachins Tailor transformed my design ideas into reality. The final product exceeded all my expectations!",
  "Perfect fitting every time! Kachins Tailor understands how to make garments that flatter your body type.",
  "Fast service without compromising on quality. My outfit was ready before the promised date and looked fantastic.",
  "The stitching quality at Kachins Tailor is impeccable. You can see the craftsmanship in every detail.",
  "Excellent value for money. The quality you get is worth much more than what they charge.",
  "My wedding outfit from Kachins Tailor received countless compliments. They truly know special occasion wear.",
  "Outstanding customer service. They listen carefully to all requirements and deliver perfect results.",
  "I trust Kachins Tailor with all my formal wear. Consistently perfect fits and stylish designs."
];

const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
document.getElementById("reviewBox").value = randomReview;

function copyToClipboard(text) {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(resolve).catch(reject);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(textarea);
    }
  });
}

copyToClipboard(randomReview).then(() => {
  console.log("Review copied to clipboard automatically");
}).catch(err => {
  console.error("Auto-copy failed:", err);
});

function copyReview() {
  copyToClipboard(randomReview).then(() => {
    const copyBtn = document.querySelector('button[onclick="copyReview()"]');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    alert("Could not copy automatically. Please select and copy the text manually.");
    console.error("Copy failed:", err);
  });
}

function openShop() {
  copyToClipboard(randomReview).then(() => {
    const newWindow = window.open(shopMapURL, '_blank');
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const instructions = isMobile 
      ? `1. In the Google search page that opened\n2. Tap "Kachins Tailor Mahuva"\n3. Scroll and tap "Write a review"\n4. Paste the review and submit`
      : `1. In the new Google tab that opened\n2. Click on "Kachins Tailor Mahuva" in the right info panel\n3. Click "Write a review"\n4. Paste and submit the review`;
    
    alert(`✅ Review copied to clipboard!\n\nPlease:\n${instructions}\n\nThank you for supporting Kachins Tailor!`);
    
    if (newWindow) {
      setTimeout(() => newWindow.focus(), 500);
    }
  }).catch(err => {
    console.error("Copy failed:", err);
    window.open(shopMapURL, '_blank');
    alert("Please manually copy the review text and paste it in Google.");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Extra init if needed
});/*const placeId = "ChIJt_yzmnQl4jsR_SfbrNvLKZ0";

const shopMapURL = `https://search.google.com/local/writereview?placeid=${placeId}`;

const reviews = [
  "Kachins Tailor provides exceptional tailoring services with perfect fitting and excellent craftsmanship. Mr. Kachins attention to detail is unmatched. Highly recommended!",
  "I've been coming to Kachins Tailor for years. Their precision and quality are consistently outstanding. My clothes always fit perfectly!",
  "The team at Kachins Tailor transformed my design ideas into reality. The final product exceeded all my expectations!",
  "Perfect fitting every time! Kachins Tailor understands how to make garments that flatter your body type.",
  "Fast service without compromising on quality. My outfit was ready before the promised date and looked fantastic.",
  "The stitching quality at Kachins Tailor is impeccable. You can see the craftsmanship in every detail.",
  "Excellent value for money. The quality you get is worth much more than what they charge.",
  "My wedding outfit from Kachins Tailor received countless compliments. They truly know special occasion wear.",
  "Outstanding customer service. They listen carefully to all requirements and deliver perfect results.",
  "I trust Kachins Tailor with all my formal wear. Consistently perfect fits and stylish designs."
];

// Generate and display random review
const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
document.getElementById("reviewBox").value = randomReview;

// Auto-copy function with enhanced feedback
function copyToClipboard(text) {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(resolve).catch(reject);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(textarea);
    }
  });
}

// Auto-copy on page load
copyToClipboard(randomReview).then(() => {
  console.log("Review copied to clipboard automatically");
}).catch(err => {
  console.error("Auto-copy failed:", err);
});

// Copy button handler
function copyReview() {
  copyToClipboard(randomReview).then(() => {
    // Visual feedback
    const copyBtn = document.querySelector('button[onclick="copyReview()"]');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
    
  }).catch(err => {
    alert("Could not copy automatically. Please select and copy the text manually.");
    console.error("Copy failed:", err);
  });
}

// Open Google Maps review page with enhanced handling
function openShop() {
  // First ensure the review is copied
  copyToClipboard(randomReview).then(() => {
    // Open Maps in new tab
    const newWindow = window.open(shopMapURL, '_blank');
    
    // Show enhanced instructions
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const instructions = isMobile 
      ? `1. In the Google Maps app that opened\n2. Tap "Write a review"\n3. Tap the review box and paste (already copied)\n4. Select your star rating and tap "Post"`
      : `1. In the new Google Maps tab that opened\n2. Click "Write a review"\n3. Click in the review box and paste (Ctrl+V)\n4. Select your star rating and click "Post"`;
    
    alert(`✅ Review copied to clipboard!\n\nPlease:\n${instructions}\n\nThank you for supporting Kachins Tailor!`);
    
    // Focus on new window if possible
    if (newWindow) {
      setTimeout(() => newWindow.focus(), 500);
    }
    
  }).catch(err => {
    console.error("Copy failed:", err);
    window.open(shopMapURL, '_blank');
    alert("Please manually copy the review text and paste it in Google Maps.");
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Additional initialization if needed
});*/
