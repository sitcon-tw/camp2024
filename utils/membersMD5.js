const fs = require('fs');
const md5 = require('md5');
let result = [];
fs.readFile('./members.csv', 'utf8', (err, data) => {
  if (err) throw err;
  let members = data.split('\n');
  for (let i = 0; i < members.length; i++) {
    let member = members[i].split(',');
    result.push({
      group: member[0],
      name: member[1],
      md5: md5(member[2].trim().toLowerCase())
    });
  }
  fs.writeFile('../public/members.json', JSON.stringify(result), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})
