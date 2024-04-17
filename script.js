window.addEventListener('resize', function() {
    if (window.innerWidth <= 800) {
      // If viewport width is 800px or more, hide the sidebar and show the hideOnDesktop icon
      document.querySelector('.sidebar').style.display = 'none';
      document.querySelector('.hideOnDesktop').style.display = 'block'; // Show the hideOnDesktop icon
    } else {
      // If viewport width is less than 800px, show the sidebar and hide the hideOnDesktop icon
      document.querySelector('.sidebar').style.display = 'none';
      document.querySelector('.hideOnDesktop').style.display = 'none'; // Hide the hideOnDesktop icon
    }
  });
function showsidebar(){
    document.querySelector('.sidebar').style.display = 'block';

    // Hide the hideOnDesktop icon
    document.querySelector('.hideOnDesktop').style.display = 'none';
    
}

function closebar(){
    document.querySelector('.sidebar').style.display = 'none';

  // Show the hideOnDesktop icon
  document.querySelector('.hideOnDesktop').style.display = 'block';
    }

    
  
    function sendMail(){
        (
            function(){
                emailjs.init("w6GpD7c85kwg7tSdH");
            }
        )();
        
        let params = {
            Name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }

        let serviceId = "service_nfd5w6t";
        let templeteId = "template_4j0o9re";
       
        emailjs.send(serviceId,templeteId,params)
        .then( res =>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message Sent Successfully",
            showConfirmButton: true,
            timer: 1500
          });
        })
    }
    

    
    const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const navbar = document.querySelector("nav");

canvas.width = navbar.clientWidth;
canvas.height = navbar.clientHeight;

class Particle {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
}

const particles = [];
const numParticles = 25;

for (let i = 0; i < numParticles; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speedX = (Math.random() - 0.5) * 1.2;
  const speedY = (Math.random() - 0.5) * 1.2;
  particles.push(new Particle(x, y, speedX, speedY));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    particle.update();
    particle.draw();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 110) {
        ctx.strokeStyle = "rgba(157, 212, 215, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

animate();


const clock = document.getElementById("digitle-clock");

setInterval(()=>{
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
},1000);