// Initialize array that will contain the intern cards
var internCardsArray = [];

// Handler function for a intern card
function internCardHandler(internClassInstance) {
    // Push the HTML for a single intern to the interCardsArray
    internCardsArray.push( `
<!-- Intern's card -->
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${internClassInstance.name}</h4>
        <h5 class="card-subtitle mb-2 text-muted"><b>${internClassInstance.role}</b></h5>
        <br>
        <p class="card-text"><b>ID</b>: ${internClassInstance.ID}</p>
        <p class="card-text"><b>School</b>: ${internClassInstance.school}</p>
        <a href="mailto:${internClassInstance.email}" class="card-link"><b>Email</b></a>
    </div>
</div>
`);
}

// Handler function for intern cards
function internCardsHandler(internClassInstances) {   
    // Loop through the interClassInstances array and pass each index's element to the internCardHandler function
    for (var i = 0; i < internClassInstances.length; i++){
        internCardHandler(internClassInstances[i]);
    }

    // Return the elements of the internCardsArray as a single string
    return internCardsArray.join("");
}

// Export the interCardsHandler function
module.exports = { internCardsHandler };