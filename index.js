setInterval(()=>{
	app.style.backgroundColor = "rgb(255, 222, 255)";
}, 500);

function RandonBlue(){
	var blue = Math.round(Math.random()*255)
	return "rgb(100, 100, "+blue")";
}
