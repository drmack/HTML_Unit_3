<html>
<head>
<title>Drag and Drop</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

<script type="text/javascript" src="https://static.codehs.com/gulp/7666c7e4765f71aa338f37e94853d4cc7ed720a0/chs-js-lib/chs.js"></script>


<style>
canvas {
    border: 1px solid black;
    display: inline-block;
    vertical-align: top;
}

</style>

</head>

<body>
<h1>Drag and Drop</h1>



<canvas
width="400"
height="500"
class="codehs-editor-canvas"></canvas>

<script>
window.onload = function() {

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


    if (typeof start === 'function') {
        start();
    }
};
</script>

</body>
</html>