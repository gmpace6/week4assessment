module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex0 = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex0];
      
        res.status(200).send(randomCompliment);
    },

    getNonCompliment: (req, res) => {
        const nonCompliments = ["Gee... you're... um, really smart!", "Cool... uh,  socks!", "Your Javascript skills are... hmmm... stellar!"];
      
        // choose random nonCompliment
        let randomIndex1 = Math.floor(Math.random() * nonCompliments.length);
        let randomNonCompliment = nonCompliments[randomIndex1];
      
        res.status(200).send(randomNonCompliment);
    },

    getDessert: (req, res) => {
        const desserts = ["Here, have a banana split with strawberries, whipped cream, AND a cherry on top!", "Here, have a root beet float!", "Here, have a chocolate sundae!", "Here, have a brownie with vanilla ice cream AND hot fudge!", "Here, have a fruit salad!", "Here, have a slice of birthday cake!", "Here, have a rainbow sherbet!"];
              
        // choose random dessert
        let randomIndex2 = Math.floor(Math.random() * desserts.length);
        let randomDessert = desserts[randomIndex2];
              
        res.status(200).send(randomDessert);
    },

    getSuperpower: (req, res) => {
        const superpowers = ["You are granted the power of healing!", "You are granted the power of teleportation!", "You are granted the power of telekinesis!", "You are granted the power of pyrokinesis!", "You are granted the power of invisibility!", "You are granted the power of time travel!", "You are granted the power of super speed and super strength!", "You are granted the power of alchemical transmutation!", "You are granted the power of telepathy!", "You are granted the power of clairvoyance!", "You are granted the power of precognition!", "You are granted the power of mind control!", "Error 404: Genie out to lunch; please try again soon!", "You are granted the power of straight-up, reality-warping MAGIC!!!"];
      
        // choose random superpower
        let randomIndex3 = Math.floor(Math.random() * superpowers.length);
        let randomSuperpower = superpowers[randomIndex3];
      
        res.status(200).send(randomSuperpower);
    },

    getPetPokemon: (req, res) => {
        const petPokemons = ["You now have a pet Pikachu!", "You now have a pet Onix!", "You now have a pet Bulbasaur!", "You now have a pet MewTwo!", "You now have a pet Greninja!", "You now have a pet Arbok!", "You now have a pet Arcanine!", "You now have a pet Charmander!", "You now have a pet Charizard!", "You now have a pet Gyarados!", "You now have a pet Blastoise!", "You now have a pet Ninetales!"];
      
        // choose random petPokemon
        let randomIndex4 = Math.floor(Math.random() * petPokemons.length);
        let randomPetPokemon = petPokemons[randomIndex4];
      
        res.status(200).send(randomPetPokemon);
    }

}