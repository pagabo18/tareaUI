// const group = require("./groups.models");

// const groupsController = {
//     getAll: (req, res) => {
//         const group = new group();
//         group.getAll().then(results => {
//             res.send(results);
//         });
//     },
//     getOne: (req, res) => {
//         const group = new group();
//         group.getOne(req.params.id).then(result => {
//             if(result) {
//                 res.send(result);
//             } else {
//                 res.sendStatus(404);
//             }
//         });
//     },
//     create: (req, res) => {
//         res.send("Create room");
//     },

//     update: (req, res) => {
//         res.send("updated" + req.params.id);
//     },

//     delete: (req, res) => {
//         res.send("deleted" + req.params.id);
//     }
// }

// module.exports = groupsController;