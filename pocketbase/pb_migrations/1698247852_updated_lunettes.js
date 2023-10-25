/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39oznrz22bjlr2z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkdlhss5",
    "name": "nom",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39oznrz22bjlr2z")

  // remove
  collection.schema.removeField("xkdlhss5")

  return dao.saveCollection(collection)
})
