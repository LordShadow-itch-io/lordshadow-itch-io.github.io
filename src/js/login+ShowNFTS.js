const serverUrl = "https://ht1tweosu3li.usemoralis.com:2053/server";
const appId = "bIFn85NyDLR5CGfIzPaAqliWSpKwUuTOOEvK1KA6";
Moralis.start({ serverUrl, appId });

async function login() {

const looader = document.getElementsByClassName("loader")[0];
looader.style.display = 'block';

await Moralis.User.logOut();

console.log("logged out");

let user = Moralis.User.current();
if (!user) {
    user = await Moralis.authenticate({
        signingMessage: "Sign To Gain Access To The Chained Communities Website!"
    });
}
console.log("logged in user:", user);
console.log(user.get("ethAddress"));

getNFTs(user.get("ethAddress"));

}

async function getNFTs(address) {
//'0x69023dddab45f345f2b683c180001d017fc0a540'

let isNFTS = false;
var i, elements = document.getElementsByClassName('passElement');
for (i = elements.length; i--;) {         
    elements[i].parentNode.removeChild(elements[i]);             
}

var i, elements = document.getElementsByClassName('nftNotFound');
for (i = elements.length; i--;) {         
    elements[i].parentNode.removeChild(elements[i]);             
}

const loader = document.getElementsByClassName("loader")[0];

const options = { chain: 'eth', address: address };
loader.style.display = 'block';
const nftsP = await Moralis.Web3API.account.getNFTs(options);
loader.style.display = 'none';

console.log(nftsP);

const nfts = nftsP["result"];
console.log(nfts);

if (nfts.length <= 0) {
    let h2 = document.createElement('h2');
    h2.className = "nftNotFound";
    h2.textContent = "Address has no accessible NFTS"

    let h3 = document.createElement('h3');
    h3.className = "nftNotFound";
    h3.textContent = "Maybe try again later"

    let div = document.createElement('div');
    div.className = "nftNotFound";

    div.appendChild(h2);
    div.appendChild(h3);

    document.body.appendChild(div);
    isNFTS = true;
}

nfts.forEach(function(nft) {
    /*let url = fixURL(nft.token_uri);
    
    fetch("https://justcors.com/tl_5eb7e0c/" + url)
    //ONLY SHOW OF CERTAI COLLENTION NEED TO DO
    .then(response => response.json())
    .then(data => {*/
    const metadata = JSON.parse(nft.metadata);

    var input = "PixelBot";
    if(metadata != null && metadata.name != null && metadata.name.substring(0, input.length) === input) {

    console.log(metadata);
    isNFTS = true;
    
    let div = document.createElement('div');
    
    let h2 = document.createElement('h2');
    h2.textContent = metadata.name;
    
    var img = document.createElement('img');
    
    if (metadata.image != undefined) {
        img.src = fixURL(metadata.image);
    }
    else if (metadata.image_url != undefined) {
        img.src = fixURL(metadata.image_url);
    }

    img.height = "100";

    let cntuButton = document.createElement('button');
    let x = document.createTextNode("Select this Pass?");
    cntuButton.appendChild(x);
    cntuButton.addEventListener("click", function(){
        location = "/pass/adventure.html";
    }); 
            
    let h3 = document.createElement('h3');
    
    if (metadata.description != null) {
        h3.textContent = metadata.description;
    }
    else {
        h3.textContent = "No Description";
    }
    
    let hr = document.createElement('hr');

    h2.className = "passElement";
    img.className = "passElement";
    cntuButton.className = "passElement cntuButton";
    h3.className = "passElement";
    hr.className = "passElement";
    
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(cntuButton);
    div.appendChild(h3);
    div.appendChild(hr);

    div.className = "passDiv"
    
    document.body.appendChild(div);
    }
})
    
if (!isNFTS) {
    let h2 = document.createElement('h2');
    h2.className = "nftNotFound";
    h2.textContent = "You do not own any chain passes";

    let h3 = document.createElement('h3');
    h3.className = "nftNotFound";
    h3.textContent = "Visit OpenSea to buy one!";

    let div = document.createElement('div');
    div.className = "nftNotFound";

    div.appendChild(h2);
    div.appendChild(h3);

    document.body.appendChild(div);
}

}

function fixURL(url) {
if(url.startsWith("ipfs://ipfs/")) {
    return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://ipfs/").slice(-1)[0];
}
else if(url.startsWith("ipfs://")) {
    return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0];
}
else {
    return url+"?format=json";
}
}

async function logout() {
const looader = document.getElementsByClassName("loader")[0];
looader.style.display = 'block';

await Moralis.User.logOut();

console.log("logged out");
}