
//  for heart click counter
let counterHeart = parseInt(document.getElementById("heart-count").innerText) || 0;
const heartIcon = document.getElementsByClassName("fa-regular fa-heart");
    for (let icon of heartIcon) {
    icon.addEventListener("click", function(){
      counterHeart++;
      document.getElementById("heart-count").innerText = counterHeart;
    });
  }

// coin section ----->> 
let coinCount = parseInt(document.getElementById("coin-count").innerText) || 0;

// select all call buttons
const callButtons = document.getElementsByClassName("call_button");
const historyList = document.getElementById("call-history");
const clearButton = document.getElementById("clear-history");

// Function to get current time as hh:mm:ss
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Add click listener to call buttons
for (let cButton of callButtons) {
  cButton.addEventListener("click", function() {
    if (coinCount < 20) {
      alert("Insufficient coin balance!");
      return;
    }

    const card = cButton.closest(".shadow-lg");
    const h1Value = card.querySelector("h1").innerText;
    const h2Value = card.querySelector("h2").innerText;

    // Show calling alert
    alert("Calling " + h1Value + " " + h2Value);

    // Deduct 20 coins
    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;

    // Add to call history with timestamp
    const li = document.createElement("li");
    li.textContent = `  ${h1Value} - ${h2Value} (${getCurrentTime()})   `;
    historyList.appendChild(li);
  });
}

// Clear history button
clearButton.addEventListener("click", function() {
  historyList.innerHTML = ""; // remove all list items
});




//copy section
let copyCount = 0;
const copyStatuss = document.getElementById("copy-status");
const copyButtons = document.getElementsByClassName("Copy_button");
for (let button of copyButtons) {
    button.addEventListener("click", function() {
    const phone = this.closest(".shadow-lg").querySelector("h2").innerText;
      navigator.clipboard.writeText(phone).then(() => {
      copyCount++;
      copyStatuss.innerText = copyCount; // update top counter
      alert("Copied: " + phone);
    }).catch(err => {
      console.error("Copy failed", err);
    });
  });
}

