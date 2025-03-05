document
  .getElementById("random-bg")
  .addEventListener("click", function (event) {
    event.preventDefault();
    function getRandomLightHexColor() {
      let color = Math.floor(Math.random() * 0xffffff).toString(16);
      color = ("000000" + color).slice(-6);
      console.log(color) 
      return `#${color}`;
      
    }
   
    document.body.style.backgroundColor = getRandomLightHexColor();

    
  });

