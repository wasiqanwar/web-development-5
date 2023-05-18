document.getElementById("createTaskBtn").addEventListener("click", () => {
  const createNewTask = document.createElement("div");
  createNewTask.className = "taskDesign";

  const taskDetails = document.createElement("p");
  taskDetails.className = "taskDetails";
  const taskDate = document.createElement("p");
  taskDate.className = "taskDate";
  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.className = "taskDeleteBtn";
  const statusChangeBtn = document.createElement("button");
  statusChangeBtn.className = "statusChangeBtn";

  taskDeleteBtn.addEventListener("click", function (event) {
    const task = event.target;
    task.parentElement.remove();
  });

  statusChangeBtn.addEventListener("click", function (event) {
    const move = event.target.parentElement;

    if (move.parentElement === document.getElementById("completedTasks")) {
      document
        .getElementById("pendingTasks")
        .appendChild(event.target.parentElement);
      event.target.innerText = "Move to Completed";
    } else if (move.parentElement === document.getElementById("pendingTasks")) {
      document
        .getElementById("completedTasks")
        .appendChild(event.target.parentElement);
      event.target.innerText = "Move to Pending";
    }
  });

  const taskCreateDate = new Date();
  const date = "Created: \n" + taskCreateDate.toLocaleString();
  // console.log(date);
  taskDetails.innerText = document.getElementById("taskText").value;
  taskDate.innerText = date;
  taskDeleteBtn.innerText = "Delete";
  statusChangeBtn.innerText = "Move to Completed";
  createNewTask.appendChild(taskDetails);
  createNewTask.appendChild(taskDate);
  createNewTask.appendChild(taskDeleteBtn);
  createNewTask.appendChild(statusChangeBtn);
  document.getElementById("pendingTasks").appendChild(createNewTask);
  createNewTask.style.border = "solid 1px";
});
