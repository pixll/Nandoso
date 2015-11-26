﻿// This event triggers on page load

document.addEventListener("DOMContentLoaded", function () {
    loadSpecials();
});

function loadSpecials() {

    // We need a reference to the div/table that we are going to chuck our data into
    var specialsTable = document.getElementById("specialstbl");

    SpecialsModule.getSpecials(function (specialsList) {
        setupSpecialsTable(specialsList);
    });

    // This is the callback for when the data comes back in the specialmodule
    function setupSpecialsTable(specials) {
        console.log(specials);
        for (i = 0; i < specials.length; i++) {

            // Create row 
            var row = document.createElement('tr');

            // Add the columns in the row (td / data cells)
            var namecol = document.createElement('td');
            namecol.innerHTML = specials[i].name;
            row.appendChild(namecol);

            var descriptioncol = document.createElement('td');
            descriptioncol.innerHTML = specials[i].description;
            row.appendChild(descriptioncol);

            var pricecol = document.createElement('td');
            pricecol.innerHTML = specials[i].price;
            row.appendChild(pricecol);

            // Append the row to the end of the table
            specialsTable.appendChild(row);

        }
    }

}