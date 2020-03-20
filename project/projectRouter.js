const express = require('express');
const helmet = require('helmet');

const db = require('../project/project-model');

const server = express();


server.get('/', (req, res) => {
  // get all projects from the database
  db
  .getProjects()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// Get Resources
server.get('/resources', (req, res) => {

  db
  .getResources()
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// get Tasks
server.get('/:id/tasks', (req, res) => {
  db
  .getTasks(id)
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// get project by id
server.get('/projects/:id', (req, res) => {
    const id = req.body.id;
  db
    .getById(id)
    .then(project => {
      res.status(204).json(project)
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post("/projects", (req, res) => {
    const projectData = req.body;
  
    db
      .addProject(projectData)
      .then(res => {
        res.status(201).json({ res });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new project" });
      });
  });

  server.post("/resources", (req, res) => {
    const resourcesData = req.body;
  
    db
      .addProject(resourceData)
      .then(res => {
        res.status(201).json({ res });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new resource" });
      });
  });

  server.post("/tasks", (req, res) => {
    const taskData = req.body;
  
    db
      .addProject(taskData)
      .then(res => {
        res.status(201).json({ res });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new task" });
      });
  });

module.exports = server;
