/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "39oznrz22bjlr2z",
    "created": "2023-10-25 12:59:45.097Z",
    "updated": "2023-10-25 12:59:45.097Z",
    "name": "lunettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mtt3ht0j",
        "name": "couleur_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nfpombgg",
        "name": "couleur_monture",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "w7dsgcmw",
        "name": "verres",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("39oznrz22bjlr2z");

  return dao.deleteCollection(collection);
})
