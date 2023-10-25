/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9br0t3fw9oz5638",
    "created": "2023-10-25 13:06:32.795Z",
    "updated": "2023-10-25 13:06:32.795Z",
    "name": "couleurs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yftpje7r",
        "name": "field",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "bleu. noir. rose. blanc. vert. jaune"
          ]
        }
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
  const collection = dao.findCollectionByNameOrId("9br0t3fw9oz5638");

  return dao.deleteCollection(collection);
})
