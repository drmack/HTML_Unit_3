<html>
<head>
<title>Colorful Drag to Paint</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

<script type="text/javascript" src="https://static.codehs.com/gulp/7666c7e4765f71aa338f37e94853d4cc7ed720a0/chs-js-lib/chs.js"></script>


<style>
canvas {
    border: 1px solid black;
    display: inline-block;
    vertical-align: top;
}

pre {
    border: 1px solid black;
    display: inline-block;
    width: 400px;
    height: 500px;
    background-color: #F5F5F5;
}
</style>

</head>

<body>
<h1>Colorful Drag to Paint</h1>



<canvas
width="400"
height="500"
class="codehs-editor-canvas"></canvas>

<script>
window.onload = function() {

    function start(){
	mouseDragMethod(paint);
}

function paint(e){
	var circle = new Circle(15);
	circle.setColor(Randomizer.nextColor());
	circle.setPosition(e.getX(), e.getY());
	add(circle);
}


    if (typeof start === 'function') {
        start();
    }
};
</script>

</body>
</html>