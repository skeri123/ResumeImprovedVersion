// Div switching script


var menu = document.querySelector('.menu');
var nav = document.querySelector('.links');
var navLinks = document.querySelectorAll('.links li');

var about = document.querySelector('.white-container1');
var aboutBtn = document.getElementById('about');
var education = document.querySelector('.white-container2');
var eduBtn = document.getElementById('education');
var home = document.querySelector('.title');
var content = document.querySelector('.cont');
var homeBtn = document.getElementById('home');
var work = document.querySelector('.white-container3');
var workBtn = document.getElementById('work');
var skills = document.querySelector('.gray-container');
var skillsBtn = document.getElementById('skills');
var contact = document.querySelector('.gray-containerC');
var contactBtn = document.getElementById('contactme');


about.style.display = 'none';
education.style.display = 'none';
work.style.display = "none";
skills.style.display = "none";
contact.style.display = "none";
home.style.display = 'none';

aboutBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	home.style.display = 'none';
	about.style.display = "";
	education.style.display = "none";
	content.style.background = '#F09400';
	contact.style.display = "none";
    skills.style.display = "none";
});
homeBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	home.style.display = '';
	about.style.display = 'none';
	education.style.display = "none";
	content.style.background = 'linear-gradient(90deg, rgba(59,61,59,1) 0%, rgba(2,3,1,1) 51%, rgba(0,6,6,1) 100%)';
	work.style.display = "none";
	skills.style.display = "none";
	contact.style.display = "none";
});
eduBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	content.style.background = '#1abc9c';
	home.style.display = 'none';
	about.style.display = 'none';
	education.style.display = "";
	work.style.display = "none";
	skills.style.display = "none";
	contact.style.display = "none";
});
workBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	content.style.background = '#177FE8';
	home.style.display = 'none';
	about.style.display = 'none';
	education.style.display = "none";
	work.style.display = "";
	skills.style.display = "none";
	contact.style.display = "none";
});
skillsBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	content.style.background = '#AB58F4';
	home.style.display = 'none';
	about.style.display = 'none';
	education.style.display = "none";
	work.style.display = "none";
	skills.style.display = "";
	contact.style.display = "none";
});
contactBtn.addEventListener('click',function(){
    if($(window).width()< 769){
        nav.classList.toggle('navigation-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation = '';
            }else{
                link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
            }
        });
        if(nav.style.right == '4%'){
            nav.style.right = '0';
        }else{
            nav.style.right = '4%'
        }
        menu.classList.toggle('toggle'); 
    }
	content.style.background = '#1a1a1a';
	home.style.display = 'none';
	about.style.display = 'none';
	education.style.display = "none";
	work.style.display = "none";
	skills.style.display = "none";
	contact.style.display = "";
});


// Navigation responsive script

menu.addEventListener('click', function(){
	nav.classList.toggle('navigation-active');

	navLinks.forEach((link,index)=>{
		if(link.style.animation){
		link.style.animation = '';
		}else{
			link.style.animation = `Fade 0.5s ease forwards ${index/7+0.6 }s`;
		}
	});
	if(nav.style.right == '4%'){
		nav.style.right = '0';
	}else{
		nav.style.right = '4%'
	}
	menu.classList.toggle('toggle');

});

/*Particle canvas*/

/*There is a tutorial for all who want to do the same at: https://www.youtube.com/watch?v=d620nV6bp0A*/
/*Which I followed in my example*/
/*You can also use particles.js framework which will make the same effect like this*/

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// get mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

// create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#8C5523';
        ctx.fill();
    }
    // check particle position, check mouse position, move the particle, draw the particle
    update() {
        //check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0 ) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        //check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        // move particle
        this.x += this.directionX;
        this.y += this.directionY;
        // draw particle
        this.draw();

    }
}

// create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#8C5523';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// check if particles are close enough to draw line between them
function connect(){
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                let dx = mouse.x - particlesArray[a].x;
                let dy = mouse.y - particlesArray[a].y;
                let mouseDistance = Math.sqrt(dx*dx+dy*dy);
                if (mouseDistance < 180) {
                  ctx.strokeStyle='rgba(255,0,0,' + opacityValue + ')';
                } else {
                ctx.strokeStyle='rgba(0,0,255,' + opacityValue + ')';
                }
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    
    }
}
// animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}
// resize event
window.addEventListener('resize', 
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height/80) * (canvas.height/80));
        init();
    }
);

// mouse out event
window.addEventListener('mouseout',
    function(){
        mouse.x = undefined;
        mouse.x = undefined;
    }
)

init();
animate();

/*prevent scrolling on mobile phones on x axis*/
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);



//EXPERIMENTAL

// loader
$(window).on("load",function(){
   $(".loader").fadeOut("slow");
   home.style.display = '';
});