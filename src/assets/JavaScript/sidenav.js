 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  } 

function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function() {
      node.value = "";
      qrcode.callback = function(res) {
        if(res instanceof Error) {
          alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
        } else {
          node.parentNode.previousElementSibling.value = res;
        }
      };
      qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
  }
  