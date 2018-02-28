const mongoose = require("mongoose");
const Card = require("../api/card/card.model");
const List = require("../api/list/list.model");
const dbName = "irontrello";


mongoose.connect(`mongodb://localhost/${dbName}`);

List.findOne({title:"listaUno"}).then((lst) => {
    const id = lst._id.toString();
    const cards = [
        {
          title:"cardUno" ,
          description: "hello",
          dueDate: new Date(),
          position: 1,
          list: id
        },
        {
            title:"cardDos" ,
            description: "bye",
            dueDate: new Date(),
            position: 2,
            list: id
          },
          {
            title:"cardTres" ,
            description: "fuck",
            dueDate: new Date(),
            position: 3,
            list: id
          }
       ];

Card.collection.drop()

Card.create(cards, (err, cards)=>{
    if (err) { throw err };
      cards.forEach( (card) => {
        lst.cards.push(card._id);
        console.log(card.title);
      })
      lst.save().then(() => {
        mongoose.connection.close();
        console.log(lst.cards);
      })
   });
});
