const http    = require('http'); //Setting up the server. Http is a built-in thing in node, so you do not need to install it.
const freetos = require('./data/freetos'); // Import the json on another file into this file.
const axios   = require('axios');



const server = http.createServer(async (req, res) => {
    let arrays = [];
    await axios.get(
            "http://api.flickr.com/services/feeds/photos_public.gne?tags=all&format=json&nojsoncallback=true"
            )
            .then(response => {
                arrays.push(response.data.items);
                console.log("INI RESPONSE",arrays);
            })

    if (req.url === '/api' && req.method === 'GET') { //Specify url and method of the API
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(arrays));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message : 'Not found'}));
    }
});

const PORT = process.env.PORT || 5000; // Declare the port between selected port (deployment) or 5000 (local).

server.listen(PORT, () => {console.log('Server running on port 5000')});