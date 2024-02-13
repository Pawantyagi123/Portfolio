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
         alert("Email Sent Successfully")
        })
    }
    