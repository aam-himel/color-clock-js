# color-clock-js

Project to teach vanilla JavaScript. 
[Live demo of the project](https://aam-himel.github.io/color-clock-js/)
## Description

It is a beginner project which shows current local time in a nicely formatted way 
also changes the color of the webpage dynamically after every one second.

## Logic & Function used

To get the real time:
```javascript
const t = new Date();
const time = t.toLocaleTimeString();
```

To generate the Hex value:
```javascript
const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

let colorGen = `#${hour}${min}${sec}`;

```
Then finally call your functions using:

```javascript
// Calls every 1 sec
setInterval(getTime, 1000 );
setInterval(getColor, 1000);

```
