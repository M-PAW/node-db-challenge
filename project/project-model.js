const db = require("../data/db-config.js")

module.exports = {
    getProjects,
    getResources,
    getTasks, //takes an id
    getById, //project
    addProject,
    addResource,
    addTask
}

function getProjects(){
    return db('projects')
}

function getResources(){
    return db("resources")
}

function getTasks(id){
    return db('projects')
    .join('tasks', 'tasks.projectId', 'projects.id')
    .select('*')
    .where({projectId: id})
}

function getById(id) {
    return db('projects')
    .where({id})
    .first()
}

function addProject(project){
    return db('projects')
    .insert(project)
}

function addResource(resource){
    return db('resources')
    .insert(resource)
}

function addTask(task){
    return db('tasks')
    .insert(task)
}