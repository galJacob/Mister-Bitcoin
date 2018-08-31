import Utils from '../Utils';
import uniqid from 'uniqid';
var users = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "picture": 'contact-avatar-1.png',
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "coins": 143
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "picture": 'contact-avatar-2.png',
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "coins": 82
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "picture": 'contact-avatar-3.png',
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "coins": 96
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "picture": 'contact-avatar-4.png',
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "coins": 71
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "picture": 'contact-avatar-9.png',
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "coins": 91
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "picture": 'contact-avatar-5.png',
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "coins": 212
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "picture": 'contact-avatar-6.png',
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "coins": 362
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "picture": 'contact-avatar.png',
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "coins": 83
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "picture": 'contact-avatar-6.png',
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "coins": 91
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "picture": 'contact-avatar-9.png',
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "coins": 293
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "picture": 'contact-avatar-2.png',
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "coins": 177
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "picture": 'contact-avatar-8.png',
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "coins": 189
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "picture": 'contact-avatar-6.png',
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "coins": 88
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "picture": 'contact-avatar-3.png',
    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "coins": 99
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "picture": 'contact-avatar-1.png',
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "coins": 92
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "picture": 'contact-avatar-4.png',
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "coins": 157
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "picture": 'contact-avatar-7.png',
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "coins": 312
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "picture": 'contact-avatar-3.png',
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "coins": 289
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "picture": 'contact-avatar-5.png',
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "coins": 293
  }
];

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user._id === id)
    user ? resolve(JSON.parse(JSON.stringify(user))) : reject(`user id ${id} not found!`)
  })
}
function checkIfUser() {
  return new Promise((resolve, reject) => {
    let user = Utils.loadUserFromStorage();
    // console.log(user);
    user ? resolve(user) : reject('user not connected')
  })
}

function addUser(userName) {
  return new Promise((resolve, reject) => {
    let user = {
      _id: uniqid(),
      picture: `contact-avatar-${Utils.randNum()}.png`,
      name: userName,
      email: 'example@exampleaddress.com',
      phone: '+1 (111) 111-1112',
      coins: 100,
      moves: []
    }
    Utils.saveUserToStorage(userName, user);
    users.push(user);
    resolve();
  })
}

function addMove(move) {
  let user = Utils.loadUserFromStorage();
  user.moves.push(move);
  user.coins -= move.amount;
  Utils.saveUserToStorage(user.name, user);
}

export default {
  getUserById,
  addUser,
  checkIfUser,
  addMove
}
