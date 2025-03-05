document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const historyContainer = document.getElementById("history");

    if (historyContainer) {
      historyContainer.innerHTML = "";
    }
    
  });
