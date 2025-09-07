// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

/* Project Three. */

let tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo"
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing"
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others in the software development community",
    status: "done"
  }
];


/* My code */


/* (1) I created a function named addNewId, 
which takes one paremeter called list. 
When I call addNewId(tasks), (list) refers to the tasks array.
the. 

Then it creates a condition that if the list length is empty, then
it returns to 1 because if there are no tasks left then the 
first task should start with the ID of 1


*/

function addNewId (list) {
if (list.length === 0) return 1;
return list[list.length -1].id + 1;
}



/* (2) the function normaliseStatus takes one argument called input
Input is whatever the user types into the prompt when asked for the 
tasks status

It then checks if theres any input and if there is no input/or its null then it returns to the 
default which is todo.

Input.trim removes any spaces from the beginning to the end and .toLowerCase makes it
lower case. Regardless of how the user types the task it will recognise it.
EG. It will register if its in upper and lower case or if it has extra spaces.

Const allowed shows us the valid status options, and if none of the valid options are
entered then it returns to the default which is todo.

allowed.includes(v) looks. at whether the v is inside the allowed array. If the user
types something true (aka valid status) then that valid status is preserved but 
if whats typed is not valid then it returns to the default being todo.

(v) ? v - means if the condition is true then keep it but if not then default to todo
*/


function normaliseStatus (input) {
if (!input) return "todo";
const v =input.trim().toLowerCase();
const allowed= ["todo", "doing", "done"];
return allowed.includes(v) ? v: "todo";
}



/* (3) Add tasks function,
Created the function called addTasks, which has a default limit of 3
tasks.
let added keeps track of how many tasks have beeen added thus far.
while will keep loopong by asking the same questions until the maximum
amount of tasks have been added.
const remaining tells you how many more tasks are left to be added
*/
function addTasks (maxAdds = 3) {
let added = 0;

while (added < maxAdds) {



/* (4) This prompts the user to enter the title of the task , and if the task 
added is null then the users input is cancelled*/
const title = prompt (`Enter task title:`);
if (title === null) break;



/* (5) This is where the user must enter the description of the task and  then it becomes 
null ( an empty string) if the user presses
cancel*/

const description = prompt ("Enter task description") ?? "";
const statusInput = prompt ('Enter task status ("todo", "doing", "done"):');
const status = normaliseStatus (statusInput);



/* (6) this creates another object with task information
, getNextId(tasks) means a unique incremental Id will be generated,
title.trim removes spaces from the title and description.trim removes spaces from
the description, then status requires a valid status*/
const newTask = {
id: addNewId(tasks),
title: title.trim (),
description:  description.trim(),
status
};



/* (7) adds a new task object at the end off the taska array,
added++ increases the counter so the loop knows how many tasks have already been 
added. */

tasks.push(newTask);
added++;

if (added === maxAdds) {
  alert("There are enough tasks on your board, please check them in the console.");
  break; // stops the while loop once the limit is reached
}



/* (8) this alert confirms the added tasks */
alert(`Task added: #${newTask.id} — ${newTask.title} [${newTask.status}]`);

}
}


{
logAllTasks ();
logCompletedTasks();
}



/* (9) the task filter looks for the task status done
if its true then the task is added to the new array
if false its not added
this function returns a new array of only completed tasks*/
function getCompletedTasks() {
return tasks.filter (t => t.status === "done");
}


/* (10) Log all tasks */
function logAllTasks() {
  console.log("All tasks:", tasks);   // logs the entire array
}

/* (11) Log completed tasks */
function logCompletedTasks() {
  const done = getCompletedTasks();   // reuses your filter function
  console.log("Completed tasks:", done);  // logs the filtered array
}


console.clear();
addTasks(3);
logAllTasks();
logCompletedTasks();
