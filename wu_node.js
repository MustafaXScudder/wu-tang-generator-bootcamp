// Import the readline module for user input in the terminal
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// Set up the readline interface for asking questions in the terminal
const rl = readline.createInterface({ input, output });

// Arrays with words that will form the Wu-Tang name
const adjectives = [
  "Savage", "Silent", "Mighty", "Ghostly", "Wicked", "Clever", "Golden", "Dark"
];

const nouns = [
  "Warrior", "Shadow", "Assassin", "Samurai", "Ninja", "Prophet", "Tiger", "Dragon"
];

// Function to randomly pick an adjective and noun and return the full name
function generateWuTangName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}

// Start the process
console.log("👐 Welcome to the Wu-Tang Name Generator!");

// This array will store the user's answers to the 5 questions
let answers = [];

// Start by asking the first question
rl.question("1. What’s your favorite element (e.g., Fire)? ")
  .then((ans1) => {
    answers.push(ans1.trim()); // Save and clean up the answer
    return rl.question("2. Describe your personality in one word: ");
  })
  .then((ans2) => {
    answers.push(ans2.trim());
    return rl.question("3. What’s your spirit animal? ");
  })
  .then((ans3) => {
    answers.push(ans3.trim());
    return rl.question("4. Favorite color? ");
  })
  .then((ans4) => {
    answers.push(ans4.trim());
    return rl.question("5. A city that inspires you: ");
  })
  .then((ans5) => {
    answers.push(ans5.trim());

    // After all questions are answered, generate and display the name
    const name = generateWuTangName();
    console.log(`\n🔥 Your Wu-Tang name is: ${name}`);

    rl.close(); // Close the readline interface to end the program
  })
  .catch((err) => {
    // If there's any error in the question chain, log it
    console.error("Something went wrong:", err);
    rl.close();
  });
