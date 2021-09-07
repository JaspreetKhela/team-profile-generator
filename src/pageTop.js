// Initialize the array that contains the top of the HTML document
var pageTopArray = [];

// Handler function for the top of the HTML document, which contains information about the manager
function pageTopHandler(managerClassInstance) {
    pageTopArray.push( `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Information</title>

    <!-- Linking to Bootstrap's style sheet -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Linking the style sheet -->
    <link rel="stylesheet" href="./assets/css/style.css"/>
</head>
<body>
    <header>
        <h1>Team Information</h1>
        <h3>View Your Team's Information Below!</h3>
    </header>

    <div class="container">
        <div class="row">
            <!-- Manager's Card -->
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title">${managerClassInstance.name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted"><b>${managerClassInstance.role}</b></h5>
                    <br>
                    <p class="card-text"><b>ID</b>: ${managerClassInstance.ID}</p>
                    <p class="card-text"><b>Office</b>: ${managerClassInstance.officeNumber}</p>
                    <a href="mailto:${managerClassInstance.email}" class="card-link"><b>Email</b></a>
                </div>
            </div>`
    );

    // Return the array that contains the top portion of the HTML document
    return pageTopArray;
}

// Export the pageTopHandler function
module.exports = { pageTopHandler };