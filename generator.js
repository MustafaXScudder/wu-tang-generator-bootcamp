// Wait until the entire DOM content is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Arrays for name generation
    const adjectives = [
      "Savage", "Silent", "Mighty", "Ghostly", "Wicked", "Clever", "Golden", "Dark",
      "Sinister", "Blazing", "Iron", "Noble", "Raging", "Royal", "Mystic"
    ];
  
    const nouns = [
      "Warrior", "Shadow", "Assassin", "Samurai", "Ninja", "Prophet", "Tiger", "Dragon",
      "Reaper", "Lord", "Viper", "Rhino", "Bandit", "Ronin", "Warlord"
    ];
  
    // Generate Wu-Tang-style name based on the user's answers
    function generateWuTangName(answers) {
      // Use the total length of all answers combined to influence the name
      const index = answers.join("").length;
      const adj = adjectives[index % adjectives.length];  // Get an adjective
      const noun = nouns[(index * 3) % nouns.length];     // Get a noun
      return `${adj} ${noun}`;  // Return the full name
    }
  
    // Handle form submission
    document.getElementById("wuTangForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from reloading the page
  
      // Get the user's answers from the form
      const answers = [
        document.getElementById("element").value,
        document.getElementById("personality").value,
        document.getElementById("animal").value,
        document.getElementById("color").value,
        document.getElementById("city").value
      ];
  
      // Generate the Wu-Tang name
      const wuTangName = generateWuTangName(answers);
  
      // Display the result to the user
      document.getElementById("result").textContent = `🎤 Your Wu-Tang name is: ${wuTangName}`;
    });
  });
  