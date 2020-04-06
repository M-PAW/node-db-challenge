
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("projectName")
        .notNullable()
        .unique();

      tbl
        .string("projectDescription") 
      tbl
        .boolean("projectCompleted")
        .notNullable()
        .defaultTo('false')
  })

  .createTable("tasks", tbl => {
      tbl.increments();

      tbl
        .string("taskName")
        .notNullable()
        .unique()

      tbl
        .string("taskNote")

      tbl
        .boolean("taskCompleted")
        .notNullable()
        .defaultTo('false')

      tbl
        .integer("projectId")
        .notNullable()
        .references('id')
        .inTable("projects")
  })

  .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("resourceName")
        .notNullable()
        .unique()
    
      tbl
        .string("description")
  })

  .createTable('project-resources', tbl => {
    tbl.primary(['projectId', 'resourceId'])
    tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
    tbl.integer('resourceId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');
})

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
