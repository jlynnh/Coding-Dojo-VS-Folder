const mongoose = require('mongoose');
			 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "Setup is required."],
        minLength:[10, "Setup should be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required:[true, "Punchline is required."],
        minLength:[3, "Punchline should be at least 3 characters long."]
    },
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
