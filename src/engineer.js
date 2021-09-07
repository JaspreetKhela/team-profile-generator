// Initialize the array that will contain the engineer cards
var engineerCardsArray = [];

// Handler function for a engineer card
function engineerCardHandler(engineerClassInstance) {
    // Push the HTML for a single engineer to the engineerCardsArray
    engineerCardsArray.push( `
<!-- Engineer's card -->
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${engineerClassInstance.name}</h4>
        <h5 class="card-subtitle mb-2 text-muted"><b>${engineerClassInstance.role}</b></h5>
        <br>
        <p class="card-text"><b>ID</b>: ${engineerClassInstance.ID}</p>
        <p class="card-text"><b>GitHub Username</b>: ${engineerClassInstance.gitHub}</p>
        <a href="mailto:${engineerClassInstance.email}" class="card-link"><b>Email</b></a>
    </div>
</div>
`);
}

// Handler function for engineer cards
function engineerCardsHandler(engineerClassInstances) {
    // Loop through the engineerClassInstance array and pass each index's element to the engineerCardHandler function
    for (var i = 0; i < engineerClassInstances.length; i++){
        engineerCardHandler(engineerClassInstances[i]);
    }

    // Return the elements of the engineerCardsArray as a single string
    return engineerCardsArray.join("");
}

// Export the engineerCardsHandler function
module.exports = { engineerCardsHandler };