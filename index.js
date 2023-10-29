const fs = require('fs');




const url = "https://ipfs.io/ipfs/QmYuQTvsRKc1nhYzxodFKtVzBaXkiK4XLYK4sTawQZuZ6D"; //yellow
const url1 = "https://ipfs.io/ipfs/QmPrVEgmqMZ4UCa4uJy4J8mvdWunhbURhL95eUNFN7fbbb"; // green
const url2 = "https://ipfs.io/ipfs/QmQKBrDjeKykfeRvEnGjtgsCufcxWudkmW9NCFcWaG7pNG"; // blue
const url3 = "https://ipfs.io/ipfs/QmeKePruAF246dkfKV7QdtuPsDPyaZ6LzuX3e4hCWkKSpN"; // cyan

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
function generateNumberArray(start, end) {
const array = [];
for (let i = start; i <end; i++) {
    array.push(i);
}
return array;
}

const numberArray = generateNumberArray(0, 3000);
  const shuffledArray = shuffleArray(numberArray);
  console.log(shuffledArray[0]);
for(var i=0; i< 3000; i++) {
    let name;
    let faction;
    let ipfsurl;
    let num;
    if(i<996) {
        num = i;
        name = "Miner";
        faction = "Miner";
        ipfsurl = url;
    } else if(i<996+997) {
        num = i-996;
        name = "Outlaw";
        faction = "Outlaw";
        ipfsurl = url2;
    } else if(i<996+997+997) {
        num = i-996-997;
        name = "Governor";
        faction = "Governor";
        ipfsurl = url1;
    } else {
        num = i-996-997-997;
        name = "Legendary";
        ipfsurl = url3;
        if(i<996+997+997+4) faction = "Miner";
        else if(i<996+997+997+4+3) faction = "Outlaw";
        else if(i<996+997+997+4+3+3) faction = "Governor";
    }
    let data = {
        name: `${name} #${num+1}`,
        symbol: "PL",
        description: "Where the Old Wild West meets the New. This is a world full of lawlessness, euphoria, and degeneracy... You should feel right at home.",
        seller_fee_basis_points: 1000,
        image: ipfsurl,
        attributes: [
            {
              "trait_type": "Faction",
              "value": faction
            }
        ],
        properties: {
            files: [
              {
                uri: ipfsurl,
                type: "image/png"
              }
            ],
            creators: [
              {
                "address": "8GKyeeFosZcHbscZnfezt1yL3sVz7CuiXg1756RdSkDo",
                "share": 100
              }
            ],
            category: "image"
        }
    };

    let jsonData = JSON.stringify(data, null, '\t');
    
    fs.writeFile(`files/${shuffledArray[i]}.json`, jsonData, 'utf8', function(err) {
        if (err) {
          console.log('An error occurred while writing the file!');
          return console.error(err);
        }
        
        console.log('JSON file has been generated successfully!');
    });
}