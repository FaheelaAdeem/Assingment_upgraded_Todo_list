#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];
let conditions = true;
console.log(chalk.magenta('\n \t welcome to codewithFaheela - Updated Todo-list Application\n '));

let main = async () => {
    while(conditions) {
     let option = await inquirer.prompt([
      { name:'choice',
        type:'list',
        message:chalk.blueBright('Select an option you want to do:'),
        choices:['Add task','Update task','Veiw Todo-list','Delete task','Exit']
  
     }
    ]);
    if(option.choice === 'Add task') {
       await addTask()
    }
    else if (option.choice === "Delete task") {
        await DeleteTask()
    }
    else if (option.choice === "Update task") {
       await updateTask()
    }
    else if(option.choice === 'Veiw Todo-list'){
     await viewtask()
    }
    else if (option.choice === 'Exit') {
      conditions = false;
    }
  
    }
  }
  
  let addTask = async () => {
    let newTask = await inquirer.prompt([
      { name:'task',
        type:'input',
        message:'Enter your new task'
    }
  ]);
  
  todoList.push(newTask.task);
  console.log(chalk.green(`\n ${newTask.task} Task added sucessfully in Todo-list\n`));
  }
  //Function to view all Todo-list task
  let viewtask =  () => {
    console.log(chalk.bgCyan(`\n your Todo-list\n`));
    todoList.forEach((task,index) => {
     console.log(chalk.greenBright(`${index + 1}:${task}`));
     
    });
    console.log("\n");
    
  }
  //Function to delete task from the list
  let DeleteTask = async () => {
    await viewtask()
    let taskIndex = await inquirer.prompt([
        {
          name:"index",
          type:"number",
          message:"Enter the 'index no.'of the task you want to delete:"

    }
]);
   let deletedTask = todoList.splice(taskIndex.index - 1, 1);
   console.log(chalk.redBright(`\n ${deletedTask} this task has been deleted sucessfully from your Todo-list\n`));
   
  }
  //Function to update a task
  let updateTask = async () => {
    await viewtask()
     let update_task_index = await inquirer.prompt([
        { 
            name:"index",
            type:"number",
            message:"Enter the 'index no' of the task you want to update :"

     },
     {
        name:"new_task",
        type:"input",
        message:"Now enter new task name :"
     }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(chalk.green(`\n Task add index no. ${update_task_index.index - 1} updated successfully [for updated list check option:"veiw Todo-list"]`));
    
  }
  main();