const { json } = require('express');
const path = require('path');
const fsPromises = require('fs').promises;

const tasksDB = {
    allTasks : require(path.join(__dirname, '..', 'data', 'tasks.json')),
    setTasks : function(data) {this.allTasks = data}
}

const addTask = async (task) => {
    if(task === null || task === "") return;
    if(Object.keys(task).length !== 0 && task !== null) {
        let newData = {
            id : tasksDB.allTasks.length > 0 ? tasksDB.allTasks.length : 0,
            newTask : task.newTask,
            importance : parseInt(task.importance)
        }

        console.log(await taskExist(newData));
        if(await taskExist(newData)) {
            tasksDB.allTasks.push(newData);
            await fsPromises.writeFile(path.join(__dirname, '..', 'data', 'tasks.json'), JSON.stringify(tasksDB.allTasks));
        }
        else {
            console.log("This task already exists");
        }
    }
}

const getAllTasks = () => {
    let taskContext = tasksDB.allTasks.map(indexValue => {
        return indexValue.newTask;
    });

    return taskContext;
}

const taskExist = async task => {
    tasksDB.allTasks.forEach(indexValue => {
        if(indexValue.newTask === task.newTask) {
            return false;
        }
    });

    
    return true;
}

module.exports = {addTask, getAllTasks};