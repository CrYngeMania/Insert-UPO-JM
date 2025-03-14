const textToInsert = "UPO_SHIPPED_FROM - University Post Office (WSC)"; // Replace with the desired text

// Function to insert text into the "Business Unit" input box
function insertText() {
  const inputBox = document.querySelector('input[placeholder="Business Unit"]');
  if (inputBox && !inputBox.value) { // Check if the input box exists and is empty
    inputBox.value = textToInsert;
    console.log("Text inserted successfully!");

    // Simulate a "Enter" key press after inserting the text
    simulateEnterKey(inputBox);
  }
}

// Function to simulate pressing the "Enter" key
function simulateEnterKey(inputBox) {
  const enterEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    keyCode: 13,
    code: 'Enter',
    which: 13,
    bubbles: true,
    cancelable: true
  });

  // Dispatch the "Enter" event on the input box
  inputBox.dispatchEvent(enterEvent);
  console.log("Enter key simulated!");
}

// Create a MutationObserver to monitor the DOM for changes
const observer = new MutationObserver(() => {
  // Run insertText when the input field is added or updated
  insertText();
});

// Configuration for the MutationObserver
const config = { childList: true, subtree: true };

// Start observing the entire document for changes
observer.observe(document.body, config);
