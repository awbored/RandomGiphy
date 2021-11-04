var tag = 'cats' // Search Terms
var api = 'Your API Key' // Your API Key
var rating = 'pg' // Rating of the gifs
var wid = 500 // image resolution width
var hgt = 500 // image resolution height

var request_Url = 'https://api.giphy.com/v1/gifs/random?api_key=' + api + '&tag=' + tag + '&rating=' + rating

var request = new XMLHttpRequest();

request.open('GET', request_Url);

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
	gif.setAttribute("width",wid);
	gif.setAttribute("height",hgt);
	document.body.appendChild(gif);
};

request.send();
