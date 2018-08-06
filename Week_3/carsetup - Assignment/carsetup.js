var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width/2;

//Select the following Elements using the querySelector function

	var carWidth = document.querySelector("car-width .range");

	var wheelDistance = document.querySelector("wheel-distance .range");

	var roofSlider = document.querySelector("roof-height .range");

	var ftSlider = document.querySelector("front-pitch .range");

	var rtSlider = document.querySelector("rear-pitch .range");

	var rearSlider = document.querySelector("rear-pitch .range");

	var frontSlider = document.querySelector("front-tire .range");

	var colorInput = document.querySelector("color .text");

	var sponsored = document.querySelector("sponsor .text");

	var sponsorNameBox = document.querySelector("sponsor .range");


//Open up the console and look at the properties for the protocar object
console.log(protocar);

/*	
	Create a new object called "car" in object literal notation. Give it all the properties and values of the protocar. 
	Please note that the rt (rear tire), ft (front tire) and sponsor properties are child objects.
	
*/
var car = 
    {
        color: "#ff0000",
        front: 100,
        ft: {color: "#000000", radius: 100, x: 550, y: 550},
        rear: 100,
        roof: 100,
        rt: {x: 350, y:550, radius: 100, color: "#000000"},
        sponsor: {name: "", decal: false},
        topLimit: "550",
        width: 400
    }


var timer = setInterval(animate, 1000/60);

function animate()
{
		ctx.clearRect(0,0,c.width,c.height);
		
        //call the drawCar() function and pass it your car object
		drawCar(car);
		//Assign the colorInput's value to the car's color property
		car["color"] = colorInput.value; 
		//convert the roofSlider's value to a number and assign it to the car's roof property
        car["roof"] = Number(roofSlider.value);
		//convert the frontSlider's value to a number and assign it to the car's front property
        car["front"] = Number(frontSlider.value);
		//convert the rearSlider's value to a number and assign it to the car's rear property
        car["rear"] = Number(rearSlider.value)
		//convert the carWidth's value to a number and assign it to the car's width property
        car["width"] = Number(carWidth.value);
		//set the roof, front and rear sliders' .max attributes to the car's topLimit property
        car["roof","front","rear"].max(topLimit);
		//set the car's front and rear tires' radius properties equal to the ft and rt slider's values
		car["ft","rt"] 
		//create a variable called wd and assign the wheelDistance slider's value to it as a Number.
		var wd = Number(wheelDistance.value);
		//set the car's front tire's x property equal to the center plus wd.
		
		//set the car's rear tire's x property equal to the center minus wd.
		
  
		
		/*
		
		Use a conditional statement (if else) to determine whether the sponsored input is checked or not.
	
		if it is checked do the following:
			1. enable the sponsorNameBox
			2. set the car's sponsor decal to true
			3. set the car's sponsor name to the value of the sponsorNameBox
		else
			1. disable the sponsorNameBox
			2. set the car's sponsor decal to false
		
		*/
		
	
		
     
}
