const mongoose = require("mongoose");
const Card = require("../api/card/card.model");
const List = require("../api/list/list.model");
const dbName = "irontrello";


mongoose.connect(`mongodb://localhost/${dbName}`);

const lists = [
 {
   title:"listaUno" ,
   position: 0,
   cards: [],
 },
 {
    title:"listaDos" ,
    position: 1,
    cards: [],
  }
];

List.collection.drop()

List.create(lists, (err) => {
 if (err) {
   throw err;
 }
 console.log(`Created ${lists.length}`);
});
