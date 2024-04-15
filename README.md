# Where To Live

LINK TO NEW TEST-SITE: https://capomk25.github.io/regional-map-2024/

## 15.4.2024 Roadmap for the future clear.

In the near-future, the plan is to start moving this project over to AWS by hosting it on the cloud platform.

## This is the repository for our project.
This is a original school project made by students Jesse Hirvassalo, Matias Kuismanen and Santeri Arponen during the Fall 2021 semester. This 2024 fork has been forked over by me later on to work on later as a showcase of my technical and visionary capabilities with the Leaflet library, as well as other things. Any further updates related to this fork will be notified here later on. 

## 6.2.2024 Future additions to the fork. 

In the future the plan is to start developing this fork of the barebones 2021 web app school project into a fully-fledged web application, with also a mobile app in mind for the future. The questions should be fledged out more and more additions should be made to make the map more interactive and graphically appealing as well. This type of a web application doesn't exist yet for even the whole of Finland in its entirety, so in essence the whole scope of the project could be fleshed out in that regard. First, the scope should stay within Helsinki for now, but in the future it should be fleshed out to give information and insights in an all in one instructional package about the whole of Finland, taking of course into account the the needs and wants and extra criteria of the user. Most likely Django should be integrated into the project, if the scope exceeds basic functionality. 

Reset button or similar functionality should be added in a user friendly way to reset the changes back to normal once done. This can be done with JS. 

## 21.9.2021
Today we began introducing ourselves on how to convert our upcoming data into SQL-format with a converter. We also downloaded MariaDB, as we want to turn the data into more readable format and also look at it in a database.
We also added Google Hybrid -map into GIS, as it gives a more refined UI on our map compared to OpenStreetMap, and it's more user-friendly while looking for a place to live. We looked for more information on our upcoming steps and are trying to figure out how to implement our data on to the map.
We also updated our project plan and returned it once again.

## 24.9.2021
Today we started looking into Python and 'Pandas', in order to import excel files (our data for the project) into python, and from there, to our map.
We downloaded Anaconda and Pandas and used some time to familiarize ourselves with these. We also tried to find some more open data that we could use and implement onto our map. Familiarizing ourselves with new platforms takes surprisingly a lot of time.


## 29.9.2021 

Today we started by checking out the possible functionality of Pandas. In its current state we tried to run the commands on the Anaconda Prompt by using "activate name_of_my_env" but quickly realized that the directory was out of place. We got an error saying that the commands were not recognized as internal or external commands by the prompt. After this we headed over to https://www.geeksforgeeks.org/set-up-virtual-environment-for-python-using-anaconda/ and started to install a new environment into Anaconda Prompt by using the command "conda create -n envname python=x.x anaconda" where we specified the name for our environment as "pandamaailma" and the version as version 3.9.

//Matias comments 

I'm currently stuck at the part after creating the environment. With the Anaconda Prompt it gets stuck after trying to use commands since they are not recognized as internal or external commands. 

//end of comments


//Matias comments

I resolved this by switching over to the Anaconda Navigator and to using Python instead of the prompt. Then after running:

"import pandas as pd"

"df = pd.read_excel (r'Path where the Excel file is stored\File name.xlsx')"
"print (df)"

I was able to get a fairly look at the piece of Excel data we are currently working with.

//end of comments

## 1.10.2021

We continued banging our head against the wall with Pandas, and decided to try directly implementing excel-files into our datamap.

//Jesse comments

Matias was pulling his hair out with excel-files that had coordinates on them as a test. I kept looking for more data on Helsinki that we could use and stumbled upon https://kartta.hel.fi/ws/geoserver/avoindata/wfs. It has almost every possible segmentation of Helsinki we could hope for ready, so we might not even need to add any coordinates on the map ourselves. I might be speaking only for myself, but I feel like now we have a lot better grasp on how to use QGIS.

//end of comments


//Matias comments 

We removed everything extra from the Excel file and we made the Excel file smaller. 

By removing the extras, we were able to get the file onto Pandas and the file looked a lot neater. 

Right now we're figuring out a method of integrating the Excel-files as they are directly onto QGIS without the need for Pandas or any other methods. 

We've tried downloading XYTools plugin onto QGIS but we figured out that the version would have to be 2.18 max. We're currently running 3.16 and would need to downgrade.

I downgraded the version to 2.18 by downloading the QGIS version independently from the internet. Unfortunately I ran into a problem with getting the Google Hybrid environment to work on the older version so I decided that we're gonna go back to using QGIS 3.16.

I then tried to get the Excel into the delimited text format and to get that onto QGIS in its entirety. It showed some dots but the dots were out of place and non-configurable. 

Jesse found out a way to get some data in WFS-format by directly inputting it onto QGIS. This worked out well and we were able to take a look at the data that was there by default. I went ahead and changed the opacity to make it more clear on the viewer. 

// end of comments 

## 8.10.2021

Some great pöhinä was made today. Jesse kept looking for more open data (and looked at licensing of our previous data just to be sure). All of the data this far is under CC BY 4.0. Matias and Santeri gave thought on how to bring the data to the end user. We have a vision on what we want the end product to be like, and we tried to find multiple solutions on how to get to our goal.

We added more data on top of the QGIS environment. Then we stared to think about how we can block out certain areas by making them invisible so that we could highlight the different areas altogether. So far nothing comes to mind since you can't really change the opacity on certain very specific layers, instead you can just zone out the opacity altogether by making it between 0 and 100%. This does not serve our purpose at all since currently there's no way to adjust the opacity of specific layers. 




// Santeri comments 

Data which we want to include in our map:

Train stations
Subway stations
Age
Education
Highways

We looked for more data to our map, like the population information grid, which we are trying to integrate into our map
Matias installed qgis2Web, and now we are trying to get it to work and find out what it does.
The next step is to find out, how to properly implement education levels into our map, and where to get the proper data to do so.


Links for our next step, integrating the qgis to a website, with better User Interface:

https://docs.geoserver.org/latest/en/user/services/wfs/outputformats.html
http://geoserver.org/
http://www.qgistutorials.com/en/docs/3/web_mapping_with_qgis2web.html

Converting excel files into qgis:

https://geospatialro.wordpress.com/2017/07/12/how-to-convert-excel-to-gis-data-in-qgis-using-spreadsheet-layers-plugin/

// Santeri comments 

## 15.10.2021

Today we started by adding some new files to our git. We now have all the needed licenses under their own .md-file.

we thought of ways to implement more data into the map, mainly thought of ways in to how to use or reformat excel files into something we can use in our map
We thought of using polygons in our map, and define different areas inside certain polygons, probably not going to work but it's worth a try

## 29.10.2021

Today we looked at some ways to incorporate our map into a webclient, so that it is easier to access by potential users.

https://github.com/qgis/qwc2-demo-app

https://gis.stackexchange.com/questions/28733/how-to-publish-my-map-on-the-web

## 5.11.2021

Today we integrated our qgis file to a website with qgis2web plugin. the next step is to add functionality with javascript functions and HTML buttons, to showcase different areas to live in. We also looked into the CSS of the file, and after we get our functionality, we're going to make the page look better with CSS and HTML variables. 
We figured that we will end up using "leaflets" in javascript, it seems to be a better tool overall when it comes to web mapping.

https://www.qgistutorials.com/en/docs/web_mapping_with_qgis2web.html

https://www.youtube.com/watch?v=WFO3Xe0uD5k&t=90s

https://leafletjs.com/examples/quick-start/

## 8.11.2021

Visual Studio Code is simply too useless while used in a browser, it doesn't support any of the needed add-ons. 

//Jesse comments:

I couldn't get the shared file to work on the app either, every time I tried to open it, the Visual Studio Code app just froze.

//end of comment

We started compiling coordinates on a text file, so we'd have them ready to implement on our map whenever it's time for that.

Santeri started working on buttons on our website.

## 10.11.2021

We tried to get polygons to work on our map, to properly indicate areas on the map, but for some reason the polygon appears on the map on a refresh but instantly vanishes.

       var polygon = L.polygon([
    [60.169032, 24.959085],
    [60.163120, 24.969633],
    [60.169030, 24.977590]
    ]).addTo(map);

It even shows the popup message inside the coordinates, but the polygon is still not visible: 
polygon.bindPopup("<b>Katajannokka</b>").openPopup();

We also finished compiling all of the neighbourhoods of Helsinki, their post numbers and coordinates into a single text file.

## 11.11.2021

We worked on different ways of showing the data efficiently on the map and having different visible layers on it.
We now have a clear goal in sight, and find it achieveable in our timeframe.
We have to use the coordinates that we have compiled to create buttons for every neighborhood and link all the data we want to use into those buttons.
After that it's mostly just cleaning up and polishing the site we're gonna have this data on.

## 12.11.2021

We spent multiple hours familiarizing ourselves with the ins & outs of how to work with git to get our work more organized. We've clearly wasted hours of valuable worktime on doing things the hard way, when we could've done things much simpler. We decided to first focus on the eight Helsinki major districts as the areas we have on our map, as it's clearer for us to test on fewer variables.

We now got the buttons working in javascript, they highlight different markers on the map. Next we begin the "copy-paste" -work, so we add more data and start making the site actually look better with CSS.

## 15.11.2021

//Jesse comments

I spent multiple hours learning about the techniques needed to continue adding to our project.

//Comment ends

## 25.11.2021

We haven't updated this readme-file for ten days, oops. There has been quite a lot of advancement despite of this. We have multiple questions that you can answer to and it actually can give you recommendations based on your decisions! We also updated the look of our site, so it's not just a white background and a map. Pöhinäpojat are advancing, and the project's starting to look like something usable.

## 26.11.2021

Matias worked on the functionalities, while the rest of the team tried to make the page itself more responsive and user-friendly. The scope of the project isn't as big as it was in the beginning, but the basic idea is there.

## 29.11.2021

We've been working on the site itself, as the functionalities are almost there. Now there's a slider, and the questions and the submit-button are clearer than before. We also started looking at possible ways of hosting our service online.

## 30.11.2021

Today we tested having a png-banner on our site, but it wasn't all that great. We spent a while testing the product and looking for flaws.

## 6.12.2021

The project has been finalized for now.
