document.addEventListener('DOMContentLoaded', function() {
    // Initialize vote counts
    const voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {
        "Option 1": 0,
        "Option 2": 0,
        "Option 3": 0
    };
    
    // Display results on page load
    displayResults();

    window.submitVote = function() {
        const form = document.getElementById('votingForm');
        const selectedOption = form.option.value;

        if (selectedOption) {
            // Update the vote count
            voteCounts[selectedOption]++;
            // Save the updated vote counts to localStorage
            localStorage.setItem('voteCounts', JSON.stringify(voteCounts));
            // Display updated results
            displayResults();
        } else {
            alert('Please select an option!');
        }
    }

    function displayResults() {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h2>Current Vote Counts:</h2>';

        for (const [option, count] of Object.entries(voteCounts)) {
            resultsDiv.innerHTML += `<p>${option}: ${count} votes</p>`;
        }
    }
});
