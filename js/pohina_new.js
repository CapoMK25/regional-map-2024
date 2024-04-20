function Pohina_New() {
    // Input elements by group
    const inputs = {
        rd1: document.getElementById("pt"), // public transport, option 1
        rd2: document.getElementById("gp"), // good parking, option 2
        rd4: document.getElementById("yes"), // lower price range, option 3
        rd5: document.getElementById("no"), // higher price range, option 4
        rd7: document.getElementById("yes2"), // yes to services, option 5
        rd8: document.getElementById("no2"), // no to services, option 6
        rd10: document.getElementById("yes3"), // yes to level of noise, option 7
        rd11: document.getElementById("no3"), // no to level of noise, option 8
        rd12: document.getElementById("modern"), // prefers modern housing, option 9
        rd13: document.getElementById("traditional"), // prefers traditional housing, option 10
        rd14: document.getElementById("greenYes"), // prefers proximity to green spaces, option 11
        rd15: document.getElementById("greenNo") // does not prefer proximity to green spaces, option 12
    };
    

    const form = document.getElementById("form");
    const output = document.getElementById("output");

    // Helper function to set opacity and popups
    function setAreaStates(states) {
        const allMarkers = [helsinkis, helsinkice, helsinkiwe, helsinkin, helsinkine, helsinkise, helsinkie, oster];
        allMarkers.forEach(marker => marker.setOpacity(0)); // Reset all markers to opacity 0
        states.forEach(state => {
            state.marker.setOpacity(1.0);
            state.marker.bindPopup(state.popup).openPopup();
        });
        layer_GoogleHybrid_0.setOpacity(0.8);
    }

    // Reset function
    function resetFormAndMarkers() {
        for (let i = 0; i < form.length; i++) {
            form[i].checked = false;
        }
        setAreaStates([]); // Reset all to opacity 0
        layer_GoogleHybrid_0.setOpacity(1.0);
        output.innerHTML = "";
    }

    // Define area configurations
    const scenarios = [
        {
            conditions: [inputs.rd1.checked, inputs.rd5.checked, inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkis, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki South: Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkice, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki Central: Pasila, Kallio, Alppila<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd1.checked, inputs.rd4.checked, inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkis, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki South: Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkie, popup: "<b>You also might like cheaper housing prices and good service availability.</b><br>Helsinki East: Itäkeskus, Myllypuro, Kontula" },
                { marker: helsinkise, popup: "<b>You like good public transport and good housing.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd1.checked, inputs.rd4.checked, inputs.rd7.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkine, popup: "<b>You like cheaper housing prices and okay service availability. These areas also have good public transport.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: helsinkie, popup: "<b>You might like cheaper housing prices and good service availability.</b><br>Helsinki East: Itäkeskus, Myllypuro, Kontula" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd2.checked, inputs.rd5.checked, inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkin, popup: "<b>You prefer good parking and a quieter area.</b><br>Helsinki North: Pakila, Oulunkylä, Paloheinä" },
                { marker: helsinkine, popup: "<b>You prefer good parking and a quieter area.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: oster, popup: "<b>You prefer good parking and a quieter area.</b><br>Östersundom: Salmenkallio, Karhusaari, Puroniitty" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd2.checked, inputs.rd5.checked, inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkise, popup: "<b>You prefer okay service availability, good parking and a quieter area.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" },
                { marker: oster, popup: "<b>You prefer good parking and a quieter area.</b><br>Östersundom: Salmenkallio, Karhusaari, Puroniitty" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd2.checked, inputs.rd4.checked, inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkie, popup: "<b>You prefer okay service availability, good parking and a cheaper area.</b><br>Helsinki East: Itäkeskus, Myllypuro, Kontula" }
            ],
            message: "This is the perfect area for you."
        },
        {
            conditions: [inputs.rd4.checked, inputs.rd7.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkine, popup: "<b>You prefer cheap housing prices.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: helsinkie, popup: "<b>You prefer cheap housing prices.</b><br>Helsinki East: Itäkeskus, Myllypuro" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd4.checked, inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkine, popup: "<b>You prefer cheap housing prices.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd5.checked, inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkis, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki South: Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkice, popup: "<b>This is a nice central area in Helsinki with a lot of everyday services and activities.</b><br>Helsinki Central: Pasila, Kallio, Alppila<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" },
                { marker: helsinkise, popup: "<b>This is a quieter area and more secluded area that still has a good amount of services.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori<br>Learn more: <a href='https://en.wikipedia.org/wiki/East_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkiwe, popup: "<b>This is a quieter area and more secluded area that still has a good amount of services.</b><br>Helsinki West: Haaga, Pitäjänmäki, Kannelmäki<br>Learn more: <a href='https://en.wikipedia.org/wiki/Western_major_district_of_Helsinki' target='_blank'>Click here</a>" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd5.checked, inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkiwe, popup: "<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br>Helsinki West: Haaga, Pitäjänmäki, Kannelmäki" },
                { marker: helsinkise, popup: "<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" },
                { marker: oster, popup: "<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br>Östersundom: Salmenkallio, Karhusaari, Puroniitty" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkis, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki South: Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkice, popup: "<b>A lot of services are found at this area.</b><br>Helsinki Central: Pasila, Kallio, Alppila<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" },
                { marker: helsinkie, popup: "<b>A lot of services are found at this area.</b><br>Helsinki East: Itäkeskus, Myllypuro" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd7.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkine, popup: "<b>This area has ok service availability and not a lot of noise.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: helsinkise, popup: "<b>This area has ok service availability and not a lot of noise.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkin, popup: "<b>This area doesn't have a lot of services but is more secluded.</b><br>Helsinki North: Pakila, Oulunkylä, Paloheinä" },
                { marker: helsinkiwe, popup: "<b>This area doesn't have a lot of services but is more secluded.</b><br>Helsinki West: Haaga, Pitäjänmäki, Kannelmäki" },
                { marker: helsinkine, popup: "<b>This area doesn't have a lot of services but is more secluded.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: oster, popup: "<b>This area doesn't have a lot of services but is more secluded.</b><br>Östersundom: Salmenkallio, Karhusaari, Puroniitty" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd8.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkin, popup: "<b>This area doesn't have a lot of noise and minimal service availability.</b><br>Helsinki North: Pakila, Oulunkylä, Paloheinä" },
                { marker: helsinkise, popup: "<b>This area doesn't have a lot of noise and okay service availability.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" },
                { marker: oster, popup: "<b>This area is very quiet and peaceful but doesn't have a lot of services. Housing prices are also be a little higher in this area.</b><br>Östersundom: Salmenkallio, Karhusaari, Puroniitty" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd10.checked, inputs.rd2.checked, inputs.rd5.checked, inputs.rd8.checked],
            areas: [
                { marker: helsinkiwe, popup: "<b>This area doesn't usually have a lot of noise.</b><br>Helsinki West: Haaga, Pitäjänmäki, Kannelmäki" },
                { marker: helsinkin, popup: "<b>This area doesn't usually have a lot of noise.</b><br>Helsinki North: Pakila, Oulunkylä, Paloheinä" },
                { marker: helsinkine, popup: "<b>This area doesn't usually have a lot of noise.</b><br>Helsinki Northeast: Malmi, Puistola, Tapanila" },
                { marker: helsinkise, popup: "<b>This area doesn't usually have a lot of noise.</b><br>Helsinki Southeast: Kulosaari, Herttoniemi, Roihuvuori" },
                { marker: oster, popup: "<b>This area doesn't usually have a lot of noise.</b><br>Östersundom: Karhusaari, Puroniitty, Talosaari" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd11.checked, inputs.rd1.checked, inputs.rd5.checked, inputs.rd7.checked],
            areas: [
                { marker: helsinkis, popup: "<b>You like good public transport and good service availability.</b><br>Helsinki South: Kluuvi, Kamppi, Etu-Töölö<br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkice, popup: "<b>This might be a good area for you.</b><br>Helsinki Central: Pasila, Kallio, Alppila<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" },
                { marker: helsinkie, popup: "<b>This might be a good area for you.</b><br>Helsinki East: Itäkeskus, Myllypuro" }
            ],
            message: "These are the perfect areas for you."
        },
        {
            conditions: [inputs.rd1.checked, inputs.rd8.checked, inputs.rd10.checked],
            areas: [
                { marker: helsinkiwe, popup: "<b>Good public transport and quieter area.</b><br>Helsinki West: Haaga, Pitäjänmäki, Kannelmäki<br>Learn more: <a href='https://en.wikipedia.org/wiki/Western_major_district_of_Helsinki' target='_blank'>Click here</a>" },
                { marker: helsinkin, popup: "<b>Good public transport and quieter area.</b><br>Helsinki North: Pakila, Oulunkylä, Paloheinä<br>Learn more: <a href='https://en.wikipedia.org/wiki/North_Helsinki' target='_blank'>Click here</a>" }
            ],
            message: "These areas offer both good public transport options and a quieter living environment."
        },
        {
            conditions: [inputs.rd5.checked, inputs.rd7.checked, inputs.rd11.checked],
            areas: [
                { marker: helsinkice, popup: "<b>Modern amenities and good services.</b><br>Helsinki Central: Pasila, known for new developments and excellent services.<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" },
                { marker: helsinkie, popup: "<b>Modern amenities and satisfactory service availability.</b><br>Helsinki East: Kalasatama, known for modern residential buildings and vibrant new shopping areas.<br>Learn more: <a href='https://en.wikipedia.org/wiki/Kalasatama' target='_blank'>Click here</a>" }
            ],
            message: "These areas are perfect for those who value modern living with good amenities and services."
        },
        {
            conditions: [inputs.rd12.checked, inputs.rd14.checked, inputs.rd5.checked],
            areas: [
                { marker: helsinkice, popup: "<b>Modern urban living with ample green spaces and rich services.</b><br>Helsinki Central: Pasila, Kalasatama<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" }
            ],
            message: "These are perfect areas for modern and green-conscious living."
        },
        {
            conditions: [inputs.rd12.checked, inputs.rd14.checked],
            areas: [
                { marker: helsinkice, popup: "<b>Modern urban living with ample green spaces and rich services.</b><br>Helsinki Central: Pasila, Kalasatama<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" }
            ],
            message: "These are perfect areas for modern and green-conscious living."
        },
        {
            conditions: [inputs.rd12.checked, inputs.rd14.checked],
            areas: [
                { marker: helsinkice, popup: "<b>Modern urban living with ample green spaces and rich services.</b><br>Helsinki Central: Pasila, Kalasatama<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" }
            ],
            message: "These are perfect areas for modern and green-conscious living."
        },
        {
            conditions: [inputs.rd12.checked, inputs.rd15.checked],
            areas: [
                { marker: helsinkice, popup: "<b>Modern urban living with rich services.</b><br>Helsinki Central: Pasila, Kalasatama<br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>" }
            ],
            message: "This is the perfect areas for modern living in Helsinki."
        }
              
        // More scenarios can be added here using the same structure.
    ];

    // Find and execute the first matching scenario
    const matchedScenario = scenarios.find(scenario => scenario.conditions.every(cond => cond));
    if (matchedScenario) {
        output.innerHTML = `<br>${matchedScenario.message}</br>`;
        setAreaStates(matchedScenario.areas);
    } else {
        alert("You have to select at least one option from each column!");
        resetFormAndMarkers();
    }
}
