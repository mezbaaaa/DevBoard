document
  .getElementById("random-bg")
  .addEventListener("click", function (event) {
    event.preventDefault();
    function getRandomLightHexColor() {
      let color = Math.floor(Math.random() * 0xffffff).toString(16); // Generate a random hex
      color = ("000000" + color).slice(-6); // Ensure it's always 6 digits
      return `#${color}`;
    }

    document.body.style.backgroundColor = getRandomLightHexColor();
  });
