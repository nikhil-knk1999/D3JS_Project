
// const Entry = require('../../models/entry');
// alert("okay its working");
d3.selectAll(".card").style("background-color", function(d, i) {
  return i % 2 ? "#fff" : "#eee";
});


// var entries = "<% entries %>";
// console.log(entries);
// console.log(document.entries);
// Entry.fetchAll().then(
//     data =>{
//         entries = data;
//     }
// ).catch(err=>{
//     console.log(err);
// })

// console.log(entries);
// exports.getEntries = (req, res, next) => {
//   Entry.fetchAll()
//     .then(entries => {
//       res.render('show/entry-list', {
//         entries : entries,
//         pageTitle: 'All entries',
//         path: '/entries'
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
