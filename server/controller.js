module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getNonCompliment: (req, res) => {
        const nonCompliments = ["Gee... you're... um, really smart!", "Cool... uh,  shirt!", "Your Javascript skills are... hmmm... stellar!"];
      
        // choose random nonCompliment
        let randomIndex1 = Math.floor(Math.random() * nonCompliments.length);
        let randomNonCompliment = nonCompliments[randomIndex1];
      
        res.status(200).send(randomNonCompliment);
    }

}