var NUM_CIRCLES = 3;
var RADIUS = 30;

function start(){
	drawCircles();
	// Add your drag and drop code
}

function drawCircles() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var circle = new Circle(RADIUS);
		var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
		var y = Randomizer.nextInt(RADIUS, getHeight() - RADIUS);
		circle.setPosition(x, y);
		circle.setColor(Randomizer.nextColor());
		add(circle);
	}
}