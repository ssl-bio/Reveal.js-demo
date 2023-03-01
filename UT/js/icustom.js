// Define background colors and initial theme
bg=getComputedStyle(document.body).getPropertyValue('--r-link-color');
bg=bgLen(bg);
let bgon=bg+"b2";
document.documentElement.style.setProperty('--r-bgon',bgon);
    
// Return the value of the link color
function getColor(){
    bg=getComputedStyle(document.body).getPropertyValue('--r-link-color');
    bg=bgLen(bg);
    let bgon=bg+"b2";
    return bgon;
}

// Return a six character color, useful if a 3 letter is supplied
function bgLen(bg){
    col=bg.replace("#","");
    if (col.length == 3){
	bg="#"+col[0].repeat(2)+col[1].repeat(2)+col[2].repeat(2);
    }
    return bg;
}


// Function to update background colors of div and button elements
function updateBGcol(){
    currColor = getColor();
    if ( currColor != bgon ){
	console.log("updating color");
	bgon=currColor;
	document.documentElement.style.setProperty('--r-bgon',bgon);
    }  
}


// Function to toggle the visibility of the div element in the iframe slide
function ilegend(){
    console.log("ilegend launched")
    islide=Reveal.getCurrentSlide()
    if (islide.className.includes("iframe")){
	id=islide.id;
	isec=document.getElementById(id);
	idiv=isec.children[0];
	idiv.classList.toggle('out');
	updateBGcol();
    }
}


// Update slide upon changing slide
Reveal.addEventListener('slidechanged', updateBGcol);

