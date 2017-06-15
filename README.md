# BoozeTracker_React

BoozeTracker!

# Rob Flett 
- rob.flett@btinternet.com
- 0788 779 8964

# Brief 
A web app you can use on your phone in a pub. You should be able choose the pub you're in (search, or select from a list). When you have selected the pub, you should be able to see what drinks are available at the bar, and their prices. You should be able to compose a list of drinks orders from the available selections, and take this list to the bar with you so you can present it to the bartender.

# Tools:
- React
- Webpack
- json-server

# Development
The web app currently has a selection of three fine pubs from across Edinburgh. I have set up a fake API to deliver the pub data which is then used to build the page when a pub is chosen from the drop down box.
I had several ideas for the ‘My Round…’ shopping cart type object but found it tricky to pass my db data through to it. I ran low on time so I have put a temporary solution in place with a shopping cart template I found online (https://toddmotto.com/creating-a-tabs-component-with-react/). I will keep working on this as I’d like the full web app to use the API data as much as possible.


#Future
I would like to add Sass to improve the look of the web app. I’d also like to refactor the DrinksDetails component to be more consistent with the rest of the app.
A friend recommended I look into HAML and SLIM, which I will also do.
I’d also like to implement a GoogleMaps function to get your current location and then plot a route to your chosen pub.

# API requirements
The API could provide pub details (as in the schema) of location, image, latitude and longitude (for possible GoogleMaps integration), a star rating, any drinks specialities and whether they offer food or not.
It could also provide drinks details such as name, price and any offers or promotions.
It would be really good if there was some connectivity so that pub goers could make and pay for an order directly from where they were sitting (and so not risk losing their table). 
A pub’s choice function could be good too, where a mystery round of the pubs specialities is delivered to the users table.
	
# Setup 
Unzip the file into your chosen directory.
To set up the node server - In the root level type:
```
npm install
```

Once complete type to start the server:	
```
npm start
```

To start Webpack, in a new terminal tab, go to the client level and type:
```
npm install
```

To start Webpack type:	
```
npm start
```

To install json-server (if you don’t currently have it) type:
```
npm install -g json-server
```

Once installed, to use json-server go to the root level and type:
```
json-server —watch db.json
```

To see the json-server data go to: 
```
localhost:3000/bars
```

Finally, in your web browser go to this address to see the BoozeTracker app: 
```
localhost:3001/
```
