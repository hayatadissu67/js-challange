// used them to separate the reult to make it readable
console.log(" ");
console.log("Q4");
//----------------------------------------------
const todos = [
  { task: "wash dishes", done: true, priority: "low" },
  { task: "do homework", done: false, priority: "high" },
  { task: "call mom", done: true, priority: "high" },
  { task: "buy groceries", done: false, priority: "low" },
  { task: "study javascript", done: false, priority: "high" },
];

function statusIcon(done) {
  if (done === true) {
    return "[x]";
  } else {
    return "[ ]";
  }
}

const formatTodo = ({ task, done, priority }) => {
  return `${statusIcon(done)} ${task.toUpperCase()} (${priority})`;
};

const formattedTo = todos.map(formatTodo);

for (const todos of formattedTo) {
  console.log(todos);
}

const notDone = todos.filter((todos) => todos.done === false);
console.log(`Tasks remaining: ${notDone.length}`);

const totalHiTasks = todos.reduce(
  (sum, todos) => sum + (todos.priority === "high" ? 1 : 0),
  0,
);
let totalHighPPriority = totalHiTasks;
console.log(`High priority tasks: ${totalHighPPriority}`);

const newTask = [{ task: "sleep early", done: false, priority: "low" }];
const afterAdding = [...todos, newTask];
console.log(`Total tasks after adding one more: ${afterAdding.length}`);
