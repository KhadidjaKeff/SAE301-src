/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39oznrz22bjlr2z")

  // remove
  collection.schema.removeField("w7dsgcmw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ufqxq9j",
    "name": "couleur_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7dsgcmw",
    "name": "couleur_verre",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0ufqxq9j")

  return dao.saveCollection(collection)
})
