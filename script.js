var tag = 'cats' // Search Terms
var api = 'Your API Key' // Your API Key
var rating = 'pg' // Rating of the gifs
var wid = 640 // image resolution width
var hgt = 480 // image resolution height

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
	const giphy = document.createElement('img');
	giphy.src = "Poweredby_100px-Black_VertLogo.png"
	giphy.style.marginLeft = '-100px';
	giphy.style.marginBottom = '10px';
	document.body.appendChild(giphy);
};

request.send();
