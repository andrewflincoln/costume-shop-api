const uuid = require('uuid/v4')
module.exports = 

[
    {
      "id": "123",
      "name": "Spooky Ghost",
      "price": "28",
      "tags":  [
          { "id": "321", "name": "Extra spooky" },
          { "id": uuid(), "name": "Classics Collection" }
      ]
    },
    {
        "id": uuid(),
        "name": "Frankenstein (the Doctor)",
        "price": "75",
        "tags":  [
            { "id": uuid(), "name": "He's the Doctor Not The Monster" },
            { "id": uuid(), "name": "Conversation-starters" }
        ]
    },
    {
        "id": uuid(),
        "name": "2-headed Pod Race Commentator",
        "price": "138",
        "tags": [
            { "id": uuid(), "name": "Couples Costumes"},
            {"id": uuid(), "name": "Proops-Approved" }
        ]
    }


]