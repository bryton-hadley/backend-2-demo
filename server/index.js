// boiler plate set up 


// setting the variables of express and cors 
const express = require('express');

const cors = require('cors');
// htis is going to let us send it back 
const app = express();

// when the info gets sent this will translate it and to check to see if everything all good and then send it back
app.use(express.json())
app.use(cors())

// destrucer the movies from the controller file 

// one line desturcter
const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller')

// normal desturctering

app.get('/api/movies', getMovies)

//setting up delete 
app.delete('/api/movies/:id', deleteMovie)

// post request
app.post('/api/movies',createMovie)

app.post('/api/movies', updateMovie)

// this is alowwing it to listen to the code 4004 
app.listen(4004, () => {console.log('Listen on port 4004')})