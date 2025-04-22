const placeId = "ChIJt_yzmnQl4jsR_SfbrNvLKZ0"; // Replace with Kachins Tailor's actual Place ID
const shopName = "Kachins Tailor Mahuva";
const searchURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopName)}`;
const shopMapURL = `https://search.google.com/local/writereview?placeid=${placeId}`;

const reviews = [
  "Kachins Tailor truly understands men's fashion. Got a custom three-piece suit stitched and it fits like a dream. The detailing on the lapel and the inner lining really elevate the look.",
  "Finally found a tailor who listens! I described my style and they crafted trousers with the exact taper I wanted. No more loose fits or adjustments.",
  "The fitting of my formal shirt from Kachins was spot on. It hugged my shoulders just right without being tight. Great for daily office wear.",
  "Their fabric collection is premium. I chose a fine Egyptian cotton for my shirt and the quality is top-notch. Soft, breathable, and durable.",
  "I needed a wedding sherwani with a modern twist. Kachins nailed it! The cut, color, and embroidery struck the perfect balance between tradition and style.",
  "Kachins Tailor is a hidden gem for men in Mahuva. Whether you need office wear or wedding outfits, they deliver excellent craftsmanship every time.",
  "I ordered a Nehru jacket for a family function. They suggested a deep navy raw silk with golden buttons – it looked so classy and fit perfectly.",
  "I’m tall and lean, and off-the-rack pants rarely fit. Kachins took my exact measurements and made slim-fit chinos that feel tailor-made – because they are!",
  "Had an urgent request for a business trip suit. They not only delivered it in time but ensured it had a sharp finish and crease lines – amazing professionalism.",
  "The in-house master tailor is a genius with cuts. He suggested subtle changes to my usual shirt style, and now I get compliments at every meeting.",
  "Got a kurta-pajama stitched for a festival. The fitting was spot on, and the detailing on the collar and cuffs gave it a stylish flair.",
  "Excellent value for money. You get boutique-level finish at local tailor prices. Highly recommended for those who want to dress sharp without overspending.",
  "My first tailored shirt from Kachins turned out so good, I immediately ordered five more. The consistency in fit and finish is impressive.",
  "Great experience! From fabric selection to final trial, they guided me well. Even explained how to maintain linen to keep it crisp and wrinkle-free.",
  "I travel often, and I always get my formal wear stitched here before a big meeting. Nothing beats a well-fitted outfit for confidence.",
  "They customized a bandhgala for me with hidden buttons and a Mandarin collar – very modern, yet classy. Great for formal evenings.",
  "Tried their online consultation – surprisingly smooth! Shared my measurements, picked fabric via video call, and received a perfectly fitting shirt in a week.",
  "Had a torn blazer sleeve from another tailor. Kachins not only fixed it but matched the fabric so well, you can’t tell there was any damage.",
  "They made a bespoke wool coat for my winter trip. The lining, pockets, and button details were thoughtfully done. Looks like something out of a fashion magazine.",
  "Kachins Tailor pays attention to little things – collar height, cuff size, placket width. It’s this precision that makes their clothes stand out.",
  "My wedding suit was perfect thanks to Kachins. They blended maroon velvet with structured cuts to give a regal yet masculine look.",
  "Every stitch screams quality. You can tell they use durable threads and double-stitch where it matters. These clothes last long.",
  "I’ve been a regular at Kachins for 3 years now. Whether I need a new shirt or suit, I always walk out satisfied.",
  "They’re not afraid to suggest changes. I walked in asking for a design and they refined it to something better – that's real tailoring expertise.",
  "Tailors with taste – that’s how I’d describe them. They understand fabrics, textures, and most importantly, how to make a man look good.",
  "Got a classic black tux stitched for a wedding. The fit was so sharp that even the groom complimented me!",
  "Their linen trousers are a blessing in the Gujarat heat. Soft, airy, and stitched with finesse. Summer wardrobe sorted!",
  "I was unsure about going bespoke, but Kachins made the process smooth. They took the time to educate me on styles that suit my body type.",
  "Impressed by their measurement process – they don’t miss a single detail, right from shoulder slope to wrist size.",
  "Had my doubts about their online ordering but they delivered a blazer that fits like it was made in-store. Great option for people outside Mahuva.",
  "Alterations are fast and flawless. Brought in a shirt stitched elsewhere and they adjusted it perfectly without ruining the shape.",
  "They made a custom waistcoat for me that fits snugly, doesn’t wrinkle, and looks great over both shirts and kurtas.",
  "Every time I wear a Kachins-made shirt, I get asked where I got it stitched. Their cuts are so flattering and clean.",
  "The tailors here are artists. Got a bandi jacket with mirror work – elegant and masculine at the same time.",
  "No unnecessary add-ons or gimmicks – just pure tailoring. They focus on getting the basics perfect, and it shows.",
  "I brought an old pair of pants to replicate and they not only matched the fit but improved the waistband comfort too.",
  "Great advice on styling. I wanted something for an engagement party and they suggested a subtle silk kurta with a tailored jacket – spot on!",
  "Kachins doesn’t just stitch clothes – they help you build a wardrobe. I've created an entire formalwear set with their help.",
  "Even my dad, who’s been loyal to his old tailor for 20 years, switched to Kachins after trying one pair of trousers from them.",
  "They’re honest. Told me not to choose a fabric because it wouldn't suit my body type – I respect that kind of integrity.",
  "My blazer pockets were stitched shut for structure, but they offered to open them after delivery when I needed them. Thoughtful service!",
  "They create clothes that make you feel confident. I walked into my first job interview wearing their suit and felt like a CEO.",
  "The difference between ready-made and tailored clothes is night and day. Thanks to Kachins, I now refuse to buy anything off the rack.",
  "Made me a short kurta with jeans-style stitching and contrast buttons – perfect for Indo-western casuals.",
  "Kachins has spoiled me – I can’t wear poorly fitted clothes anymore. Their cuts flatter my frame and boost my confidence.",
  "They tailor based on your lifestyle – looser pants if you sit long hours, higher armholes for mobility. Real functional fashion.",
  "The trial process is detailed. They allow adjustments and don’t rush – the result is always a perfect fit.",
  "Tried out their festive collection – the fabrics shimmer subtly and are stitched to perfection. Very wedding-appropriate!",
  "For tall guys like me, finding a proper sleeve length is hard. Kachins got it right in one go. Highly impressed!",
  "They stitched an asymmetrical Indo-western sherwani for me. Looked straight out of a fashion week runway!",
  "Unlike other tailors who copy designs blindly, Kachins personalizes it for your physique and style preferences.",
  "From measuring tape to final ironing – every stage at Kachins feels professional. You know your clothes are in expert hands.",
  "They made matching pocket squares and ties to go with my suits – small detail, big style impact.",
  "Even their casual shirts are structured enough to wear at semi-formal events. Really versatile cuts.",
  "My office wardrobe is now 90% Kachins. Their shirts outlast any brand I’ve tried before.",
  "Asked for a custom collar shape and they got it right the first time – love the attention to design.",
  "They stitched a wool blend suit with perfect shoulder structure – feels expensive but totally within budget.",
  "The pants they made fit so well I don’t even need a belt. That’s the mark of true tailoring.",
  "They made a retro-style safari shirt for my trip. Loved the utility pockets and comfort. Highly recommend for travel wear!",
  "Visited once just for trial and now I’m hooked. Already placed my third order. That says it all.",
  "Received compliments from complete strangers at an event, thanks to my well-fitted Kachins outfit!",
  "Their fusion jackets blend Indian and western styles effortlessly. Great for millennials looking to stand out.",
  "Everything from neck depth to cuff width is personalized – it's like having a designer on call.",
  "They provide style suggestions based on age, occasion, and body shape. Very thoughtful service.",
  "Fast turnaround, accurate fitting, and affordable prices – what more could you want from a tailor?",
  "Visited their store with zero fashion knowledge – walked out with two outfits that turned heads. Thank you, Kachins!",
  "They remembered my past measurements and preferences – didn’t have to explain anything during my second visit.",
  "From cotton to velvet, they know how to handle all kinds of fabrics without compromising on fit.",
  "The way they pack the final garments – folded neatly, crisp, and clean – adds to the overall premium experience.",
  "Got a custom stitched kurta with fine pintuck detailing. Simple yet elegant – perfect for dinner parties.",
  "Can’t imagine going back to ready-made after Kachins. Every piece they make is a confidence booster.",
  "They stitched a blazer for my brother’s wedding with velvet detailing on the collar – truly made me stand out as the best man."
];


const detailedTips = [
  "Pro tip: Visit Kachins early in the morning for the quickest service. Their shop gets crowded as the day progresses, especially during peak hours.",
  "Helpful hint: Make sure to ask for their fabric swatch book when you visit. They have several premium fabrics that aren't always on display, giving you more exclusive options.",
  "Insider advice: If you’re planning for a wedding, book your appointment at least 6 weeks in advance. This allows ample time for multiple fittings and adjustments, ensuring a perfect fit for your big day.",
  "Local know-how: Kachins offers free minor adjustments (such as resizing or hemming) within 3 months of your purchase. Don’t hesitate to bring back your clothes for any tweaks you may need.",
  "Seasonal tip: For the monsoon season, Kachins offers specially treated fabrics that dry quickly and are resistant to the musty smell often caused by humidity. Stay fresh even in the rain!",
  "Fit tip: If you have specific fitting needs, such as a tighter waist or longer sleeves, make sure to mention them during your fitting. The team is excellent at customizing the fit to your body shape.",
  "Fabric tip: If you're unsure which fabric to choose, ask the experts at Kachins about their breathable fabrics. They carry fabrics that are perfect for hot and humid climates like Gujarat’s.",
  "Detail tip: When ordering formal shirts, ask to add extra buttons on the cuffs for a unique, personalized touch. It’s a small detail that adds a touch of elegance.",
  "Color tip: For a versatile wardrobe, opt for neutral colors like navy, charcoal, and beige for trousers and suits. These colors are timeless and suitable for multiple occasions.",
  "Storage tip: To maintain your garments in top condition, store your tailored clothes in a breathable garment bag. Avoid plastic bags, which can trap moisture and damage the fabric.",
  "Wedding tip: If you’re preparing for a wedding, consider a custom pocket square or tie. Kachins can match them to your suit’s fabric, adding a cohesive look to your outfit.",
  "Budget tip: If you're on a budget but still want a tailored look, choose a mix of custom shirts with off-the-rack trousers. This is a great way to get the tailored fit without breaking the bank.",
  "Occasion tip: For business meetings or formal events, opt for a custom blazer with a contrasting fabric lining – it’s a subtle way to add personality while keeping the look professional.",
  "Maintenance tip: Always dry-clean your tailored garments rather than machine wash them. This will preserve the shape, fabric, and stitching for a longer-lasting result.",
  "Travel tip: For your next trip, choose lightweight, wrinkle-resistant fabrics for your shirts and suits. These fabrics stay neat even after being packed, ensuring you look sharp upon arrival.",
  "Measurement tip: Be honest about your measurements. Kachins uses your exact body dimensions to create a fit that is unique to you, so providing accurate information is key to the best outcome.",
  "Personalization tip: Don’t shy away from suggesting personalized details, such as monograms on the cuffs or inside jacket lining. It adds a unique touch to your outfit.",
  "Pattern tip: If you want to stand out but not be too bold, go for subtle patterns like checks or houndstooth for your shirts or suits. These add a layer of sophistication without overwhelming the eyes.",
  "Fit advice: If you're unsure about a specific cut (such as slim fit vs regular fit), ask the Kachins team for a trial run with different cuts. They can help you choose the one that enhances your look.",
  "Layering tip: For colder weather, request thicker fabrics like wool blends for jackets and blazers. They’re not only stylish but also provide warmth without bulk.",
  "Service tip: Don’t forget to mention if you’re preparing for a special event or date. Kachins will pay extra attention to the details, ensuring your clothes are perfect for the occasion.",
  "Final fitting tip: If you’re unsure about the final fit, ask for an additional trial session before the final stitching. Kachins allows for this to ensure you're completely satisfied.",
  "Consultation tip: Take your time during the consultation. The more details you provide about your preferences, the better the final product will be. Be clear about what you like and don’t like.",
  "Lining tip: If you want something unique for your custom jacket, ask to have a contrasting fabric for the inner lining. It’s a small but stylish detail that adds personality.",
  "Post-purchase tip: After receiving your garments, try them on again within a few days to ensure you’re happy with the fit. Kachins offers minor post-purchase adjustments free of charge within 3 months.",
  "Event tip: When ordering a custom outfit for a big event, provide the Kachins team with details about the event’s dress code. It’ll help them guide you towards the perfect design.",
  "Durability tip: Ask for reinforced stitching on areas like elbows and knees, especially for suits and trousers. These high-stress areas benefit from extra durability.",
  "Tailor tip: If you're not sure which style to choose, ask for advice from the head tailor. They have years of experience in knowing what cuts work best for different body types and occasions.",
  "Accessory tip: Add a custom tie or cufflinks to complete the look. Kachins offers a range of premium accessories that match your tailored outfits perfectly.",
  "Testimonial tip: Don’t hesitate to share your feedback with Kachins. They value customer input and use it to continuously improve their tailoring process and designs."
];

// Generate more natural review with occasional tips
function generateNaturalReview() {
  const mainReview = reviews[Math.floor(Math.random() * reviews.length)];
  const includeTip = Math.random() > 0.7; // 30% chance to include a tip
  
  if (includeTip) {
    const tip = detailedTips[Math.floor(Math.random() * detailedTips.length)];
    return `${mainReview}\n\n${tip}`;
  }
  return mainReview;
}

// Generate and display random review
const randomReview = generateNaturalReview();
if (document.getElementById("reviewBox")) {
    document.getElementById("reviewBox").value = randomReview;
}

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
if (document.readyState === "complete" || document.readyState === "interactive") {
    copyToClipboard(randomReview).then(() => {
        console.log("Review copied to clipboard automatically");
    }).catch(err => {
        console.error("Auto-copy failed:", err);
    });
} else {
    document.addEventListener('DOMContentLoaded', () => {
        copyToClipboard(randomReview).then(() => {
            console.log("Review copied to clipboard automatically");
        }).catch(err => {
            console.error("Auto-copy failed:", err);
        });
    });
}

// Copy button handler
function copyReview() {
  const currentReview = document.getElementById("reviewBox") ? document.getElementById("reviewBox").value : randomReview;
  copyToClipboard(currentReview).then(() => {
    const copyBtn = document.querySelector('button[onclick="copyReview()"]');
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }
  }).catch(err => {
    alert("Could not copy automatically. Please select and copy the text manually.");
    console.error("Copy failed:", err);
  });
}

// Open Google Maps to search shop name (initial step to find place ID)
function findPlaceId() {
  window.open(searchURL, '_blank');
}

// Open review page using Place ID (once known)
function openShop() {
  const currentReview = document.getElementById("reviewBox") ? document.getElementById("reviewBox").value : randomReview;
  copyToClipboard(currentReview).then(() => {
    const newWindow = window.open(shopMapURL, '_blank');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const instructions = isMobile
      ? `1. In the review page that opened\n2. Tap star rating\n3. Paste review (already copied)\n4. Post your review`
      : `1. In the new tab that opened\n2. Click star rating\n3. Paste review (Ctrl+V)\n4. Click Post`;

    alert(`✅ Review copied to clipboard!\n\nPlease:\n${instructions}\n\nThank you for supporting Kachins Tailor!`);

    if (newWindow) {
      setTimeout(() => newWindow.focus(), 500);
    }
  }).catch(err => {
    console.error("Copy failed:", err);
    window.open(shopMapURL, '_blank');
    alert("Please manually copy the review text and paste it after opening the review page.");
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Generate new review on page load
  const newReview = generateNaturalReview();
  if (document.getElementById("reviewBox")) {
    document.getElementById("reviewBox").value = newReview;
  }
  
  // Set up event listeners if elements exist
  const copyBtn = document.querySelector('button[onclick="copyReview()"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyReview);
  }
  
  const findBtn = document.querySelector('button[onclick="findPlaceId()"]');
  if (findBtn) {
    findBtn.addEventListener('click', findPlaceId);
  }
  
  const openBtn = document.querySelector('button[onclick="openShop()"]');
  if (openBtn) {
    openBtn.addEventListener('click', openShop);
  }
});

// const placeId = "ChIJt_yzmnQl4jsR_SfbrNvLKZ0"; // Replace with Kachins Tailor's actual Place ID
// const shopName = "Kachins Tailor Mahuva";
// const searchURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopName)}`;
// const shopMapURL = `https://search.google.com/local/writereview?placeid=${placeId}`;

// const reviews = [
//   "Kachins Tailor provides exceptional tailoring services with perfect fitting and excellent craftsmanship. Mr. Kachins attention to detail is unmatched. Highly recommended!",
//   "I've been coming to Kachins Tailor for years. Their precision and quality are consistently outstanding. My clothes always fit perfectly!",
//   "The team at Kachins Tailor transformed my design ideas into reality. The final product exceeded all my expectations!",
//   "Perfect fitting every time! Kachins Tailor understands how to make garments that flatter your body type.",
//   "Fast service without compromising on quality. My outfit was ready before the promised date and looked fantastic.",
//   "The stitching quality at Kachins Tailor is impeccable. You can see the craftsmanship in every detail.",
//   "Excellent value for money. The quality you get is worth much more than what they charge.",
//   "My wedding outfit from Kachins Tailor received countless compliments. They truly know special occasion wear.",
//   "Outstanding customer service. They listen carefully to all requirements and deliver perfect results.",
//   "I trust Kachins Tailor with all my formal wear. Consistently perfect fits and stylish designs."
// ];

// // Generate and display random review
// const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
// document.getElementById("reviewBox").value = randomReview;

// // Auto-copy function with enhanced feedback
// function copyToClipboard(text) {
//   return new Promise((resolve, reject) => {
//     if (navigator.clipboard) {
//       navigator.clipboard.writeText(text).then(resolve).catch(reject);
//     } else {
//       // Fallback for older browsers
//       const textarea = document.createElement('textarea');
//       textarea.value = text;
//       textarea.style.position = 'fixed';
//       document.body.appendChild(textarea);
//       textarea.select();
//       try {
//         document.execCommand('copy');
//         resolve();
//       } catch (err) {
//         reject(err);
//       }
//       document.body.removeChild(textarea);
//     }
//   });
// }

// // Auto-copy on page load
// copyToClipboard(randomReview).then(() => {
//   console.log("Review copied to clipboard automatically");
// }).catch(err => {
//   console.error("Auto-copy failed:", err);
// });

// // Copy button handler
// function copyReview() {
//   copyToClipboard(randomReview).then(() => {
//     const copyBtn = document.querySelector('button[onclick="copyReview()"]');
//     const originalText = copyBtn.innerHTML;
//     copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
//     setTimeout(() => {
//       copyBtn.innerHTML = originalText;
//     }, 2000);
//   }).catch(err => {
//     alert("Could not copy automatically. Please select and copy the text manually.");
//     console.error("Copy failed:", err);
//   });
// }

// // Open Google Maps to search shop name (initial step to find place ID)
// function findPlaceId() {
//   window.open(searchURL, '_blank');
// }

// // Open review page using Place ID (once known)
// function openShop() {
//   copyToClipboard(randomReview).then(() => {
//     const newWindow = window.open(shopMapURL, '_blank');
//     const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

//     const instructions = isMobile
//       ? `1. In the review page that opened\n2. Tap star rating\n3. Paste review (already copied)\n4. Post your review`
//       : `1. In the new tab that opened\n2. Click star rating\n3. Paste review (Ctrl+V)\n4. Click Post`;

//     alert(`✅ Review copied to clipboard!\n\nPlease:\n${instructions}\n\nThank you for supporting Kachins Tailor!`);

//     if (newWindow) {
//       setTimeout(() => newWindow.focus(), 500);
//     }
//   }).catch(err => {
//     console.error("Copy failed:", err);
//     window.open(shopMapURL, '_blank');
//     alert("Please manually copy the review text and paste it after opening the review page.");
//   });
// }

// // Initialize on page load
// document.addEventListener('DOMContentLoaded', () => {
//   // Additional initialization if needed
//   const copyBtn = document.querySelector('button[onclick="copyReview()"]');
//   copyBtn.addEventListener('click', copyReview);
  
//   const findBtn = document.querySelector('button[onclick="findPlaceId()"]');
//   findBtn.addEventListener('click', findPlaceId);
  
//   const openBtn = document.querySelector('button[onclick="openShop()"]');
//   openBtn.addEventListener('click', openShop);
// });