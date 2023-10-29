const fs = require('fs');




const url = "https://ipfs.io/ipfs/QmYuQTvsRKc1nhYzxodFKtVzBaXkiK4XLYK4sTawQZuZ6D"; //yellow
const url1 = "https://ipfs.io/ipfs/QmPrVEgmqMZ4UCa4uJy4J8mvdWunhbURhL95eUNFN7fbbb"; // green
const url2 = "https://ipfs.io/ipfs/QmQKBrDjeKykfeRvEnGjtgsCufcxWudkmW9NCFcWaG7pNG"; // blue
const url3 = "https://ipfs.io/ipfs/QmeKePruAF246dkfKV7QdtuPsDPyaZ6LzuX3e4hCWkKSpN"; // cyan


for(var i=0; i< 3; i++) {
    let data = {
        name: `Legendary #${i+1+996+997+997+4+3}`,
        symbol: "PL",
        description: "Where the Old Wild West meets the New. This is a world full of lawlessness, euphoria, and degeneracy... You should feel right at home.",
        attributes: [
            {
              "trait_type": "Faction",
              "value": "Governor"
            }
        ],
        properties: {
            files: [
              {
                uri: url3,
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
    
    fs.writeFile(`files/${i+996+997+997+4+3}.json`, jsonData, 'utf8', function(err) {
        if (err) {
          console.log('An error occurred while writing the file!');
          return console.error(err);
        }
        
        console.log('JSON file has been generated successfully!');
    });
}


