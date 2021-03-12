const http    = require('http'); //Setting up the server. Http is a built-in thing in node, so you do not need to install it.
const freetos = require('./data/freetos'); // Import the json on another file into this file.
const axios   = require('axios');


const server = http.createServer(async (req, res) => {
    let arrays = [];
    let arrayCat = [];
    let arrayPeople = [];
    let arrayFlowers = [];
    await axios.get(
            "http://api.flickr.com/services/feeds/photos_public.gne?tags=all&format=json&nojsoncallback=true"
            )
            .then(response => {
                arrays.push(response.data.items);
                // console.log("INI RESPONSE",arrays);
            })
    await axios.get(
            "http://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&nojsoncallback=true"
            )
            .then(response => {
                arrayCat.push(response.data.items);
                // console.log("INI RESPONSE",arrayCat);
            })
    await axios.get(
            "http://api.flickr.com/services/feeds/photos_public.gne?tags=people&format=json&nojsoncallback=true"
            )
            .then(response => {
                arrayPeople.push(response.data.items);
                // console.log("INI RESPONSE",arrayPeople);
            })
    await axios.get(
            "http://api.flickr.com/services/feeds/photos_public.gne?tags=flowers&format=json&nojsoncallback=true"
            )
            .then(response => {
                arrayFlowers.push(response.data.items);
                // console.log("INI RESPONSE",arrays);
            })       

    if (req.url === '/all' && req.method === 'GET') { //Specify url and method of the API
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(arrays));
    } else if (req.url === '/cats' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(arrayCat));
    } else if (req.url === '/people' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(arrayPeople));
    } else if (req.url === '/flowers' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(arrayFlowers));
    } else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message : 'Not found'}));
    }
});

const PORT = process.env.PORT || 5000; // Declare the port between selected port (deployment) or 5000 (local).

server.listen(PORT, () => {console.log('Server running on port 5000')});