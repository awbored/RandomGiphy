# RandomGiphy
Simple webpage that will refresh content from Giphy every 10 seconds.

Steps:
 - Register for Developers Account on [Giphy](https://developers.giphy.com/docs/api/#quick-start-guide).  You will need an API key
 - Review the variables in script.js and update accordingly:
   - var tag = 'cats' // Search Terms, update the tags within quotes
   - var api = 'Your API Key' // Your API Key
   - var rating = 'pg' // Rating of the gifs
   - var wid = 500 // image width resolution
   - var hgt = 500 // image height resolution

Initial code was taken from a LinkedIn Learning Introduction to API's course.

This was built to add random gifs to OBS streams.

If you want to add this to your OBS, add a 'browser' as a scene source, tick 'local file' and point to where you saved the index.html file.
