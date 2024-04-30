const fs = require('fs');
let result = [];

fs.readFile('./members.csv', 'utf8', async (err, data) => {
  if (err) throw err;
  let members = data.split('\n');
  for (let i = 0; i < members.length; i++) {
    let member = members[i].split(',');
    result.push({
      group: member[0],
      name: member[2],
      sha256: await sha256(member[1].trim().toLowerCase())
    });
  }
  fs.writeFile('../public/members.json', JSON.stringify(result), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})

async function sha256(message) {
  const msgBuffer = new TextEncoder('utf-8').encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  console.log(hashHex);
  return hashHex;
}
