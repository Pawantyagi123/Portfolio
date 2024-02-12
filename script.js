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

  
    function sendemail() {
      let email = document.getElementById('email').value;
      let name = document.getElementById('name').value;
      let subject = document.getElementById('subject').value;
      let phone = document.getElementById('phone').value;


      body_msg = "name :" + name + "<br> email :" + email + "<br> phone :" + phone;
       console.log(email)
      Email.send({
          SecureToken: "24fb0d08-3823-425f-b387-b61a3df5ff47",
          To: 'tyagipawan2002@gmail.com',
          From: email,
          Subject: subject,
          Body: body_msg
      }).then(
          message => alert("Your Message Received")
      );
      document.getElementById("submit").innerHTML = "done"

      setTimeout(function () {

          document.getElementById("submit").innerHTML = "Send Message";
      }, 5000);

      Thankyou(email);
      return true;

     
  };

  function Thankyou(email) {
      console.log(email)
      
      Email.send({
          SecureToken: "24fb0d08-3823-425f-b387-b61a3df5ff47",
          To: email,
          From: "tyagipawan2002@gmail.com",
          Subject: "Contact Form",
          Body: "Thankyou"
      }).then(
          message => {
              alert("Thankyou For Contact Us");

          }
      );
      console.log(email)
  }

 