function pohina_vantaa() {
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
    };
    

    const form = document.getElementById("form");
    const output = document.getElementById("output");

    // Helper function to set opacity and popups
    function setAreaStates(states) {
        const allMarkers = [tikkurila, hiekkaharju, koivukyla, rekola, korso, hakunila, kuninkaanmaki, vaarala, leinela,
                            nikinmaki, ilola, aviapolis, tammisto, ruskeasanta, ylasto, martinlaakso, myyrmaki, kivisto];
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
                { marker: tikkurila, popup: "<b>You like good public transport and good service availability.</b><br>Tikkurila<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/tikkurila-major-region' target='_blank'>Click here</a>" },
                { marker: myyrmaki, popup: "<b>You like good public transport and good service availability.</b><br>Myyrmäki<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/myyrmaki-major-region' target='_blank'>Click here</a>" },
                { marker: kivisto, popup: "<b>You like good public transport and good service availability.</b><br>Kivistö<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/kivisto-major-region' target='_blank'>Click here</a>" },
                { marker: tammisto, popup: "<b>You like good public transport and good service availability.</b><br>Tammisto<br>Learn more: <a href='https://www.vantaa.fi/en/services/unit/tammisto' target='_blank'>Click here</a>" },
                { marker: korso, popup: "<b>You like good public transport and good service availability.</b><br>Korso<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/korso-major-region' target='_blank'>Click here</a>" },
                { marker: koivukyla, popup: "<b>You like good public transport and good service availability.</b><br>Koivukylä<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/koivukyla-major-region' target='_blank'>Click here</a>" },
                { marker: hakunila, popup: "<b>You like good public transport and good service availability.</b><br>Hakunila<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/hakunila-major-region' target='_blank'>Click here</a>" },
                { marker: aviapolis, popup: "<b>You like good public transport and good service availability.</b><br>Aviapolis<br>Learn more: <a href='https://www.vantaa.fi/en/regions-and-districts/aviapolis-major-region' target='_blank'>Click here</a>" },
                { marker: martinlaakso, popup: "<b>You like good public transport and good service availability.</b><br>Martinlaakso<br>Learn more: <a href='https://en.wikipedia.org/wiki/Martinlaakso' target='_blank'>Click here</a>" },
            ],
            message: "These are the perfect areas for you."
        }
        
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
