// This event triggers on page load

/*document.addEventListener("DOMContentLoaded", function () {
    loadSpecials();
});*/


function setUpSpecials() {
    document.getElementById("contentbody").innerHTML='<h2>Specials</h2></br><table class="table table-striped spaced-table"><thead><tr><th>Name</th><th>Description</th><th>Price</th></tr></thead><tbody id="specialsList"></tbody></table>';
    loadSpecials();
}

function setUpFeedback() {
    document.getElementById("contentbody").innerHTML = '<h2>Feedback</h2><br><input type="text" id="fname" placeholder="Enter your name"><input type="text" id="fcomment" placeholder="Please give us your feedback"><button onclick="submitFeedback()">Submit</button><table class="table table-striped spaced-table"><thead><tr><th>Name</th><th>Description</th><th>Price</th></tr></thead><tbody id="feedbackList"></tbody></table>';
    loadFeedback();
}

function loadFeedback() {


    FeedbackModule.getFeedback(setupFeedbackTable);
}

function loadSpecials() {

    // We need a reference to the div/table that we are going to chuck our data into


    SpecialsModule.getSpecials(setupSpecialsTable);
}

    // This is the callback for when the data comes back in the specialmodule
function setupSpecialsTable(specials) {
    var specialsTable = document.getElementById("specialsList");
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

function setupFeedbackTable(feedback) {
    var feedbackTable = document.getElementById("feedbackList");
        console.log(feedback);
        for (i = 0; i < feedback.length; i++) {

            // Create row 
            var row = document.createElement('tr');

            // Add the columns in the row (td / data cells)
            var namecol = document.createElement('td');
            namecol.innerHTML = feedback[i].name;
            row.appendChild(namecol);

            var commentcol = document.createElement('td');
            commentcol.innerHTML = feedback[i].comment;
            row.appendChild(commentcol);

            // Append the row to the end of the table
            feedbackTable.appendChild(row);

        }

    }

    function submitFeedback() {
        var name = document.getElementById("fname").textContent;
        var comment = document.getElementById("fcomment").textContent;

        var com = new XMLHttpRequest();

        com.onreadystatechange = function () {
            if (com.readyState == 4 && com.status == 200) {
                setUpFeedback();
            }
        }

        var sendstring = '{"FeedbackID": 0,"Name": "'+ name +'","Comment": "'+ comment +'"}';

        com.open("POST", "~/api/Feedbacks", true);
        com.setRequestHeader('Content-type', 'application/json');
        com.send(JSON.stringify(sendstring));

    }