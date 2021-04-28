function preload() {
	world_start = loadSound("world_start.wav");
	jump_1 = loadSound("jump.wav");
	kick_1 = loadSound("kick.wav");
	coin_1 = loadSound("coin.wav");
	gameover_1 = loadSound("gameover.wav");
	mario_d = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_c');

	poseNet=ml5.poseNet(video,model_loded);
    poseNet.on('pose',gotPoses);
}
function model_loded(){
	console.log("model is loded");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
	}
}

function draw() {
	game();
}
function t_p(){
	window.scrollTo(0,0);
}





