const path = require('path');
const fsPromises = require('fs').promises;

const completedTasksDB = {
    allTasks : require(path.join(__dirname, '..', 'data', 'completedTasks.json')),
    setTasks : function(data) {this.allTasks = data}     
}

async function addToCompleteList(task) {                 
    if(task === null || task === "") return;
    if(Object.keys(task).length !== 0 && task !== null) {
        let newData = {
            id : tasksDB.allTasks.length > 0 ? tasksDB.allTasks.length : 0,
            newTask : task.newTask,
            importance : parseInt(task.importance)
        }

        completedTasksDB.allTasks.push(newData);
        await fsPromises.writeFile(path.join(__dirname, '..', 'data', 'completedTasks.json'), JSON.stringify(completedTasksDB.allTasks));
    }
}

function getAllCompletedTasks() {
    return completedTasksDB.allTasks;
}

module.exports = {addToCompleteList, getAllCompletedTasks};
