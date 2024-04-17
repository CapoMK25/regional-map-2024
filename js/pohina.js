 /* The function is currently able to do the following things: 
  
    1. Adjust the opacity of the marker to make it pop up after clicking 'submit'.
    
    3. Show the reasons on text that make the specific area suitable in the first place. (popup)
    
    4. The function must also specify the areas in plural that are suitable for the respondent. 
    
    */


    // the meat of the function itself //
    function Pohina() {


        // let declarations for input id elements //
    
        // group 1 //
        const rd1 = document.getElementById("pt");
        const rd2 = document.getElementById("gp");
        // group 2 //
        const rd4 = document.getElementById("yes");
        const rd5 = document.getElementById("no");
        // group 3 //
        const rd7 = document.getElementById("yes2");
        const rd8 = document.getElementById("no2");
        // group 4 // 
        const rd10 = document.getElementById("yes3");
        const rd11 = document.getElementById("no3");
    
    
        // form //
        const fo1 = document.getElementById("form");
    
    
        // if else section //
    
        // (rd1) conditional that checks user input, Helsinki South and Helsinki Central //
    
        if(rd1.checked == true && rd5.checked == true && rd7.checked == true && rd11.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(1.0);
        helsinkice.setOpacity(1.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
    
        layer_GoogleHybrid_0.setOpacity(0.8);
    
        helsinkis.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkice.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki Central<br>Pasila, Kallio, Alppila<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
    
        fo1[i].checked = false;
    
    }
    
    
        // rd1 Helsinki South, Helsinki Southeast and Helsinki East //
    
        else if(rd1.checked == true && rd4.checked == true && rd7.checked == true && rd11.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(1.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
        helsinkis.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkie.bindPopup("<b>You also might like cheaper housing prices and good service availability.</b><br></br>Helsinki East:<br>Itäkeskus, Myllypuro, Kontula").openPopup();
        helsinkise.bindPopup("<b>You like good public transport and good housing.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
    
        fo1[i].checked = false;
    
    
    
        // rd1 Helsinki Northeast and Helsinki East //
    
    }   else if(rd1.checked == true && rd4.checked == true && rd7.checked == true && rd10.checked == true){
    
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkie.bindPopup("<b>You might like cheaper housing prices and good service availability.</b><br></br>Helsinki East:<br>Itäkeskus, Myllypuro, Kontula").openPopup();
        helsinkine.bindPopup("<b>You like cheaper housing prices and okay service availability. These areas also have good public transport.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        
        for(let i=0; i<fo1.length; i++)
        
        
        fo1[i].checked = false;
    
    
    }
    
        // rd2 Helsinki North, Helsinki Northeast and Helsinki Östersundom //
    
        else if(rd2.checked == true && rd5.checked == true && rd8.checked == true && rd10.checked == true) {
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(1.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
    
        helsinkin.bindPopup("<b>You prefer good parking and a quieter area.</b><br>Helsinki North:<br>Pakila, Oulunkylä, Paloheinä").openPopup();
        helsinkine.bindPopup("<b>You prefer good parking and a quieter area.</b><br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        oster.bindPopup("<b>You prefer good parking and a quieter area.</b><br>Östersundom<br>Salmenkallio, Karhusaari, Puroniitty").openPopup();
    
        for(let i=0 ;i<fo1.length; i++)
    
        
    
        fo1[i].checked = false;
    
    
        // rd2 Helsinki Southeast and Östersundom //
    }   else if(rd2.checked == true && rd5.checked == true && rd8.checked == true && rd10.checked == true){
    
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(1.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkise.bindPopup("<b>You prefer okay service availability, good parking and a quieter area.</b><br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();
        oster.bindPopup("<b>You prefer good parking and a quieter area.</b><br>Östersundom:<br>Salmenkallio, Karhusaari, Puroniitty").openPopup();

    
        for(let i=0 ;i<fo1.length; i++)
    
        
    
        fo1[i].checked = false;
    
    
    
    
    
        // rd2 Helsinki East //
    
    
    } else if(rd2.checked == true && rd4.checked == true && rd7.checked == true && rd11.checked == true){
    
    
        document.getElementById("output").innerHTML = "<br>This is the perfect area for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
    
        helsinkie.bindPopup("<b>You prefer okay service availability, good parking and a cheaper area.</b><br>Helsinki East:<br>Itäkeskus, Myllypuro, Kontula").openPopup();
        
        for(let i=0 ;i<fo1.length; i++)
    
        
    
        fo1[i].checked = false;
    
    
    }
    
        // rd4 Helsinki Northeast, Helsinki East //
        else if(rd4.checked == true && rd7.checked == true && rd10.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkin.bindPopup("<b>You prefer cheap housing prices.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        helsinkie.bindPopup("<b>You prefer cheap housing prices.</b><br></br>Helsinki East:<br>Itäkeskus<br>Myllypuro").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }   
    
        // rd4 Helsinki Northeast //
        else if (rd4.checked == true && rd8.checked == true && rd10.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkine.bindPopup("<b>You prefer cheap housing prices.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    
    }
    
        // rd5 Helsinki South, Helsinki Central, Helsinki Southeast, Helsinki West //
    
        else if(rd5.checked == true && rd7.checked == true && rd11.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(1.0);
        helsinkice.setOpacity(1.0);
        helsinkiwe.setOpacity(1.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(1.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkis.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkice.bindPopup("<b>This is a nice central area in Helsinki with a lot of everyday services and activities.</b><br></br>Helsinki Central:<br>Pasila, Kallio, Alppila<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>").openPopup();
        helsinkise.bindPopup("<b>This is a quieter area and more secluded area that still has a good amount of services.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/East_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkiwe.bindPopup("<b>This is a quieter area and more secluded area that still has a good amount of services.</b><br></br>Helsinki West:<br>Haaga, Pitäjänmäki, Kannelmäki<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Western_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    
    }   
    
        // rd5 Helsinki West, Helsinki Southeast and Helsinki Östersundom //
    
        else if(rd5.checked == true && rd8.checked == true && rd10.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(1.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(1.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
     
        helsinkiwe.bindPopup("<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br></br>Helsinki West:<br>Haaga, Pitäjänmäki, Kannelmäki").openPopup();
        helsinkise.bindPopup("<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();
        oster.bindPopup("<b>The price of housing is irrelevant to you but you prefer a quieter area.</b><br></br>Östersundom:<br>Salmenkallio, Karhusaari, Puroniitty").openPopup();
            
        fo1[i].checked = false;    
    
    
    
    }
    
        // rd7 Helsinki South, Helsinki Central and Helsinki East //
    
        else if(rd7.checked == true && rd11.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(1.0);
        helsinkice.setOpacity(1.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkis.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkice.bindPopup("<b>A lot of services are found at this area.</b><br></br>Helsinki Central:<br>Pasila, Kallio, Alppila<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>").openPopup();
        helsinkie.bindPopup("<b>A lot of services are found at this area.</b><br></br>Helsinki East:<br>Itäkeskus<br>Myllypuro").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }   
    
        // rd7 Helsinki Northeast, Helsinki Southeast //
    
        else if(rd7.checked == true && rd10.checked == true){
    
            document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(1.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(0.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkine.bindPopup("<b>This area has ok service availability and not a lot of noise.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        helsinkise.bindPopup("<b>This area has ok service availability and not a lot of noise.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();

        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    
        }
    
        
        // rd8 Helsinki North, Helsinki West, Helsinki Northeast and Helsinki Östersundom //
    
        else if(rd8.checked == true && rd10.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(1.0);
        helsinkin.setOpacity(1.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        
        helsinkin.bindPopup("<b>This area doesn't have a lot of services but is more secluded.</b><br></br>Helsinki North:<br>Pakila, Oulunkylä, Paloheinä").openPopup();
        helsinkiwe.bindPopup("<b>This area doesn't have a lot of services but is more secluded.</b><br></br>Helsinki West:<br>Haaga, Pitäjänmäki, Kannelmäki").openPopup();
        helsinkine.bindPopup("<b>This area doesn't have a lot of services but is more secluded.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        oster.bindPopup("<b>This area doesn't have a lot of services but is more secluded.</b><br></br>Östersundom:<br>Salmenkallio, Karhusaari, Puroniitty").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }   
    
        // rd8 Helsinki Southeast, Helsinki Northeast and Helsinki North //
    
        else if(rd8.checked == true && rd11.checked == true){
    
            document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(1.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(1.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkin.bindPopup("<b>This area doesn't have a lot of noise and minimal service availability.</b><br></br>Helsinki North:<br>Pakila, Oulunkylä, Paloheinä").openPopup();
        helsinkise.bindPopup("<b>This area doesn't have a lot of noise and okay service availability.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();
        oster.bindPopup("<b>This area is very quiet and peaceful but doesn't have a lot of services. Housing prices are also be a little higher in this area.</b><br></br>Östersundom:<br>Salmenkallio, Karhusaari, Puroniitty").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }   
    
    
        // rd10 Helsinki West, Helsinki North, Helsinki Northeast, Helsinki Southeast and Helsinki Östersundom //
    
        else if(rd10.checked == true && rd2.checked == true && rd5.checked == true && rd8.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(0.0);
        helsinkice.setOpacity(0.0);
        helsinkiwe.setOpacity(1.0);
        helsinkin.setOpacity(1.0);
        helsinkine.setOpacity(1.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(0.0);
        oster.setOpacity(1.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkiwe.bindPopup("<b>This area doesn't usually have a lot of noise.</b><br></br>Helsinki West:<br>Haaga, Pitäjänmäki, Kannelmäki").openPopup();
        helsinkin.bindPopup("<b>This area doesn't usually have a lot of noise.</b><br></br>Helsinki North:<br>Pakila, Oulunkylä, Paloheinä").openPopup();
        helsinkine.bindPopup("<b>This area doesn't usually have a lot of noise.</b><br></br>Helsinki Northeast:<br>Malmi, Puistola, Tapanila").openPopup();
        helsinkise.bindPopup("<b>This area doesn't usually have a lot of noise.</b><br></br>Helsinki Southeast:<br>Kulosaari, Herttoniemi, Roihuvuori").openPopup();
        oster.bindPopup("<b>This area doesn't usually have a lot of noise.</b><br></br>Östersundom:<br>Karhusaari, Puroniitty, Talosaari").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }
    
        // rd11 Helsinki South, Helsinki Central, Helsinki East //
        
        else if(rd11.checked == true && rd1.checked == true && rd5.checked == true && rd7.checked == true){
    
        document.getElementById("output").innerHTML = "<br>These are the perfect areas for you.</br>";
    
        // defines the opacity of the selected markers //
        helsinkis.setOpacity(1.0);
        helsinkice.setOpacity(1.0);
        helsinkiwe.setOpacity(0.0);
        helsinkin.setOpacity(0.0);
        helsinkine.setOpacity(0.0);
        helsinkise.setOpacity(0.0);
        helsinkie.setOpacity(1.0);
        oster.setOpacity(0.0);
    
        // sets the map to be lower in opacity //
        
        layer_GoogleHybrid_0.setOpacity(0.8);
    
    
        helsinkis.bindPopup("<b>You like good public transport and good service availability.</b><br></br>Helsinki South:<br>Kluuvi, Kamppi, Etu-Töölö<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Southern_major_district_of_Helsinki' target='_blank'>Click here</a>").openPopup();
        helsinkice.bindPopup("<b>This might be a good area for you.</b><br></br>Helsinki Central:<br>Pasila, Kallio, Alppila<br></br>Learn more: <a href='https://en.wikipedia.org/wiki/Pasila' target='_blank'>Click here</a>").openPopup();
        helsinkie.bindPopup("<b>This might be a good area for you.</b><br></br>Helsinki East:<br>Itäkeskus<br>Myllypuro").openPopup();
    
        for(let i=0; i<fo1.length; i++)
    
        fo1[i].checked = false;
    
    }   
    
    
    
        else {
            
            // alerts the user that they need to take action by clicking some of the options //
    
            alert("You have to select at least one option from each column!");
    
            // resets the markers to their default state //
    
            helsinkis.setOpacity(0.0);
            helsinkice.setOpacity(0.0);
            helsinkiwe.setOpacity(0.0);
            helsinkin.setOpacity(0.0);
            helsinkine.setOpacity(0.0);
            helsinkise.setOpacity(0.0);
            helsinkie.setOpacity(0.0);
            oster.setOpacity(0.0);
    
    
    
            // resets the p element to its default state by giving it an empty string //
    
            document.getElementById("output").innerHTML = "";
    
    
    
            // resets the radio buttons to their default state //
    
            for(let i=0; i<fo1.length; i++)
    
            fo1[i].checked = false;
    
    
            // resets the Google Hybrid layer back to 1.0 //
    
            layer_GoogleHybrid_0.setOpacity(1.0);
    
    
        
    
    
        }
    };