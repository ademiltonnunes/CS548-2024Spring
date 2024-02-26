// Import a module
const express = require('express');
const app = express();
//Parse the body in Json
app.use(express.json());

app.get('/hello', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello from SFBU!');
});

app.post('/hello-post', (req, res) => {
    const whatIsTheRequest = req.body?.name;
    res.status(200);
    res.json({ message: `Hello from SFBU! You sent: ${whatIsTheRequest}` });

});

app.get('/search-my-name', (req, res) => {
    // Get the query parameters
    const{q, r} = req.query;

    if (q){
        res.status(200);
        res.json({ message: `Search Complete for ${q}, ${r}!` });
    }else{
        res.status(400);
        res.json({ message: `No search query found` });
    }
});


app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
