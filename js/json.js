const user = { id: 1, name: "Gorib Aamir", job: "actor" };

// JavaScript Object Notation(JSON)
const stringifiged = JSON.stringify(user);
console.log(user);
console.log(stringifiged);

/**
 * 
 { id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}

 * 
 */
const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet voot er goli",
    city: "ranvir",
    country: "bd",
  },
  product: ["laptop", "mic", "monotor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopobj = JSON.parse(shopJSON);
console.log(shopobj);
