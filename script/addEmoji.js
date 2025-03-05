document
  .getElementById("emoji-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const totalTaskNumber =
      document.getElementById("total-task-number").innerText;
    const convertedTotalTaskNumber = parseInt(totalTaskNumber);
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const buttonIssue = document.getElementById("emoji-btn");

    alert("Board upgraded successfully!");
    buttonIssue.setAttribute("disabled", true);
    buttonIssue.classList.add(
      "bg-gray-300",
      "text-gray-500",
      "cursor-not-allowed"
    );

    let number = 1;
    const difference = convertedTaskNumber - number;
    document.getElementById("task-number").innerText = difference;
    const sum = convertedTotalTaskNumber + number;
    document.getElementById("total-task-number").innerText = sum

  });