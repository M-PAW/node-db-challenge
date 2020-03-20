
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
        .inTable("project")
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
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
