const Button = document.getElementById ("btn");
const colortext = document.querySelector(".color");
const hex = ['0', '1', '2','3','4','5','6','7','8','9','a','c','d','e','f'];
Button.addEventListener("click" ,() =>{
    const hexcolor = generatehexcolor();
    document.body.style.backgroundColor = hexcolor;
    colortext.textContent = hexcolor;
}
);
function generatehexcolor(){
    let hexcolor = "#"
    for(i=0; i<6; i++){
        hexcolor = hexcolor + hex [generateRandomNumber()]
    }
    return hexcolor;
};
function generateRandomNumber (){
    return Math.floor(Math.random() * hex.length)
}