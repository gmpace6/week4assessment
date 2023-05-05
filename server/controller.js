module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getNonCompliment: (req, res) => {
        const nonCompliments = ["Gee... you're... um, really smart!", "Cool... uh,  socks!", "Your Javascript skills are... hmmm... stellar!"];
      
        // choose random nonCompliment
        let randomIndex1 = Math.floor(Math.random() * nonCompliments.length);
        let randomNonCompliment = nonCompliments[randomIndex1];
      
        res.status(200).send(randomNonCompliment);
    },

    getSuperpower: (req, res) => {
        const superpowers = ["You are granted the power of healing!", "You are granted the power of teleportation!", "You are granted the power of telekinesis!", "You are granted the power of pyrokinesis!", "You are granted the power of invisibility!", "You are granted the power of time travel!", "You are granted the power of super speed and super strength!", "You are granted the power of alchemical transmutation!", "You are granted the power of telepathy!", "You are granted the power of clairvoyance!", "You are granted the power of precognition!", "You are granted the power of mind control!", "Error 404: Genie out to lunch; please try again soon!", "You are granted the power of straight-up, reality-warping MAGIC!!!"];
      
        // choose random superpower
        let randomIndex2 = Math.floor(Math.random() * superpowers.length);
        let randomSuperpower = superpowers[randomIndex2];
      
        res.status(200).send(randomSuperpower);
    }

}