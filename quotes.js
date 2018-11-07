const lines = ['to infinty & beyond', 'life is like a box of chocolates','Shake & Bake'];

function randomQuote(){ 
   return  lines[Math.floor(Math.random()*lines.length)];
}

const quote = randomQuote;

module.exports = {
    // lines,
    quote
};