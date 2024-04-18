 /* The function is currently able to do the following things: 
  
    1. Adjust the opacity of the marker to make it pop up after clicking 'submit'.
    
    3. Show the reasons on text that make the specific area suitable in the first place. (popup)
    
    4. The function must also specify the areas in plural that are suitable for the respondent. 
    
    */


    // the meat of the function itself //
    function Pohina() {
        // Retrieve all necessary DOM elements at once
        const elements = {
            rd1: document.getElementById("pt"),
            rd2: document.getElementById("gp"),
            rd4: document.getElementById("yes"),
            rd5: document.getElementById("no"),
            rd7: document.getElementById("yes2"),
            rd8: document.getElementById("no2"),
            rd10: document.getElementById("yes3"),
            rd11: document.getElementById("no3"),
            form: document.getElementById("form"),
            output: document.getElementById("output")
        };
    
        // Helper function to update UI based on the selected areas
        function updateUI(areas, message, links) {
            elements.output.innerHTML = message;
            layer_GoogleHybrid_0.setOpacity(0.8);
    
            // Reset all markers' opacity
            Object.keys(markers).forEach(key => markers[key].setOpacity(0.0));
    
            // Set specified areas' opacity and bind popups
            areas.forEach(area => {
                markers[area].setOpacity(1.0);
                markers[area].bindPopup(links[area]).openPopup();
            });
    
            // Reset form
            for (let i = 0; i < elements.form.length; i++) {
                elements.form[i].checked = false;
            }
        }
    
        // Define markers and their popup content
        const markers = {
            helsinkis: helsinkis,
            helsinkice: helsinkice,
            helsinkiwe: helsinkiwe,
            helsinkin: helsinkin,
            helsinkine: helsinkine,
            helsinkise: helsinkise,
            helsinkie: helsinkie,
            oster: oster
        };
    
        const links = {
            helsinkis: "<b>You like good public transport and good service availability.</b><br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>",
            helsinkice: "<b>You like good public transport and good service availability.</b><br>Helsinki Central<br>Pasila, Kallio, Alppila<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>",
            // Add other areas similarly...
        };
    
        // Check conditions and update UI accordingly
        if (elements.rd1.checked && elements.rd5.checked && elements.rd7.checked && elements.rd11.checked) {
            updateUI(['helsinkis', 'helsinkice'], "<br>These are the perfect areas for you.</br>", links);
        } else if (elements.rd1.checked && elements.rd4.checked && elements.rd7.checked && elements.rd11.checked) {
            updateUI(['helsinkis', 'helsinkie'], "<br>These are the perfect areas for you.</br>", links);
        } else {
            alert("You have to select at least one option from each column!");
            // Reset the map and form
            Object.keys(markers).forEach(key => markers[key].setOpacity(0.0));
            layer_GoogleHybrid_0.setOpacity(1.0);
            elements.output.innerHTML = "";
            for (let i = 0; i < elements.form.length; i++) {
                elements.form[i].checked = false;
            }
        }
    }