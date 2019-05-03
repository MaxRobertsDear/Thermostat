## Thermostat

### Makers Academy - Week 5 Project

#### Objectives for the week
* ✅ Test drive a simple front-end web app with Javascript
* ✅ Follow an effective process for learning a new language

#### Goals targeted by this challenge
* ✅ I write code that is easy to change

#### Challenges
* [x] Translate the first specification into a test
* [x] Pass the test
* [x] Translate the next specification
* [x] Repeat until you've run out of tests
* [x] Decide what HTML elements you will need to serve as controls on the thermostat. Decide what HTML elements you will need to display the thermostat data.
* [x] Build a static HTML page with these elements, labelling them with appropriate classes and/or IDs.
* [x] You don't need to hook up your thermostat model to the user interface. That comes in the next challenge!
* [x] Add a script tag to load your thermostat JavaScript file into the page.
* [x] Open the developer console and check you can instantiate a thermostat object and call methods on it.
* [ ]  Add jQuery to the page
* [ ]  Play with jQuery
* [ ]  Play with jQuery a bit more
* [ ]  Go to You Might Not Need jQuery and see the vanilla JavaScript you would have to write. It's good to at least know that you can do it without jQuery, and to understand that it's all just JavaScript under the hood.
* [ ]  Create another file that will hold your JavaScript code that manages the interface between the UI and the thermostat object. Load the file into your HTML page.
* [ ]  Hook up your buttons/links so they run the methods on the underlying thermostat model
* [ ]  Use a jQuery AJAX call to get the weather information for London from a weather API. Display the weather information to the user.
* [ ]  Add further functionality so that the user can select their current city and the weather provided is for the selected city.
* [ ]   Style the thermostat. Go wild!

##### Note that I decided not to use jQuery because this was targeting the goal of understanding AJAX, which I already felt comfortable in. Instead, I used my time to play with React in order to learn about the Virtual DOM.

#### Turning Specs into User Stories

```
As a user who is sensitive to temperature
So that I can control the temperature
I want the thermostat to start at 20 degrees
```
```
As a user who is sensitive to temperature
So that I can increase the temperature
I want to put the thermostat up by 1 degree increments
```
```
As a user who is sensitive to temperature
So that I can decrease the temperature
I want to put the thermostat down by 1 degree increments
```
```
As a user who is sensitive to temperature
So that I don't freeze my nipples off
I want the thermostat to have a minimum temperature of 10 degrees
```
``` 
As a user who is environmentally concious
So that I don't heat my home excessively
I want the thermostat to have a maximum temperature of 25 degrees when power saving mode is on
```
``` 
As a user who is environmentally unaware
So that my home is a sauna
I want the thermostat to have a maximum temperature of 32 degrees when power saving mode is off
```
``` 
As a user who is environmentally concious
So that I don't heat my home excessively
I want the thermostat to be on power saving mode by default
```
``` 
As a user who likes convenience
So that I can easily set the thermostat to 20 degrees
I want the thermostat to have a reset function for 20 degrees
```
``` 
As a user who is environmentally concious
So that I can monitor how much energy I'm using
I want the thermostat to show me that the energy usage is low-usage when below 18 degrees and medium-usage when below 25 degrees. Anything else is high usage.
```
