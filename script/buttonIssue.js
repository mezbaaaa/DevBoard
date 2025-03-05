document
  .getElementById("button-issue-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const totalTaskNumber =
      document.getElementById("total-task-number").innerText;
    const convertedTotalTaskNumber = parseInt(totalTaskNumber);
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const buttonIssue = document.getElementById("button-issue-btn");

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
    document.getElementById("total-task-number").innerText = sum;

    const historyText =
      "You have Complete The Task Fix Mobile Button Issue at 12:25 PM";

      const history = document.getElementById("history");
      const createEl = document.createElement("span");
      createEl.innerText = `
      ${historyText}
      `;
      history.appendChild(createEl);
  });
