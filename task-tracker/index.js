const readline = require("node:readline/promises");
const fs = require("fs");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
const file = "task.json";
let tasks = [];
console.log("Welcome to task tracker which is based on the cli.......");


if (fs.existsSync(file)) {
	const data = fs.readFileSync(file, "utf-8");
	tasks = JSON.parse(data);
}

// this is the starting phase of my to do app:
let opn;

const viewAllTodo = async() => {
	tasks.forEach((val)=>{
		console.log('-----------------------------------------------------------')
		console.log("id:",val.id ,  '\t\t\t' ,"todo:",val.todo )
		console.log("Status: ",val.status , "\t CreateAt: " , val.createdAt);
		console.log(val.description);

		console.log('-----------------------------------------------------------')
	})
};

const addTodo = async () => {
	const date = new Date();
	//   id: A unique identifier for the task
	// description: A short description of the task
	// status: The status of the task (todo, in-progress, done)
	// createdAt: The date and time when the task was created
	// updatedAt: The date and time when the task was last updated
	const todo = await rl.question("Enter your todo: ");
	const status = await rl.question("Enter the status:(in-pogress,done,todo) "); // in-progress , done , todo
	const id = Math.floor(Math.random()*100);
	const description = await rl.question("Enter the description of the task:");
	const createdAt = date.toLocaleString();
	const updatedAt = date.toLocaleString();


	const taskObj = {
		todo , status , id , description , createdAt , updatedAt
	}

	tasks.push(taskObj);
	const fileWrite = fs.writeFileSync(file,JSON.stringify(tasks));

};
const viewAllInProgressTodo = async() => {

	tasks.map((val,ind)=>{

		if(val.status == 'in-progress'){

			console.log('-----------------------------------------------------------')
			console.log("id:",val.id ,  '\t\t\t' ,"todo:",val.todo )
			console.log("Status: ",val.status , "\t CreateAt: " , val.createdAt);
			console.log(val.description);

			console.log('-----------------------------------------------------------')

		}
	})

}
const viewAllCompletedTask = async()=>{
	
	tasks.map((val,ind)=>{

		if(val.status == 'done'){

			console.log('-----------------------------------------------------------')
			console.log("id:",val.id ,  '\t\t\t' ,"todo:",val.todo )
			console.log("Status: ",val.status , "\t CreateAt: " , val.createdAt);
			console.log(val.description);

			console.log('-----------------------------------------------------------')

		}
	})


}
const updateTask = async() => {
const taskId = rl.question("Enter the id of the task that you want to update...");



}

const showMeWay = async () => {
	console.log(`1. Add Task`);
	console.log(`2. Update particular  Task`);
	console.log(`3. View all Todo`);
	console.log(`4. view In-progress task.`);
	console.log(`5. viw all  completed task`);
	console.log(`6. Exit the program.`);
	opn = await rl.question("Enter your option.....");
	switch (parseInt(opn)) {
		case 1:
			await addTodo();
			break;
		case 2:
			await updateTask();
			break;
		case 3:
			await viewAllTodo();
			break;
		case 4:{
			await viewAllInProgressTodo();
			break;
		}
		case 5 : {
			await viewAllCompletedTask();
			break;
		}
		case 6:
			rl.close();
			return;
		default:
			console.log("Wrong key pressed");
	}
	showMeWay();
};
showMeWay();
