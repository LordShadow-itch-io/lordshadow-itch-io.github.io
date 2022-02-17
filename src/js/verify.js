const serverUrl = "https://ht1tweosu3li.usemoralis.com:2053/server";
const appId = "bIFn85NyDLR5CGfIzPaAqliWSpKwUuTOOEvK1KA6";
Moralis.start({ serverUrl, appId });

window.onload = verify("adventure");

async function verify(className) {
    //Logout

    await Moralis.User.logOut();

    let user = Moralis.User.current();
    
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Sign To Verify That You Own A Pass"
        });
    }

    const address = /*user.get("ethAddress")*/ '0xd4dc24f1ec00090f90ab9aea6c47d6749b5e39bd';

    const options = { chain: 'eth', address: address };

    const nftsP = await Moralis.Web3API.account.getNFTs(options); 
    
    const nfts = nftsP["result"];
    let isGotPass = false;

    nfts.forEach(function(nft) {

        const metadata = JSON.parse(nft.metadata);
    
        var input = "60143";
        if(metadata != null && metadata.name != null && metadata.name.indexOf(input) >= 0) {
            console.log("yes");
            isGotPass = true;
        }
        else {
            console.log("no");
        }
    })

    console.log(isGotPass);

    document.getElementById('resetVerif').parentNode.removeChild(document.getElementById('resetVerif'));
    document.getElementById('verifLoader').parentNode.removeChild(document.getElementById('verifLoader'));
    document.getElementById('tooltip').parentNode.removeChild(document.getElementById('tooltip')); 
    
    if (isGotPass) {
        let h2 = document.createElement('h2');
        h2.textContent = `Yes, You Are ALLOWED On This Site! \
        Press continue to proceed ( Sadly there will be a lot of these )`

        let cntuButton = document.createElement('button');
        let x = document.createTextNode("Continue");
        
        h2.className = "verifPostText";
        cntuButton.className = "button-19 cntuVerif";

        document.body.appendChild(h2);
        document.body.appendChild(cntuButton);

        cntuButton.appendChild(x);  
    }
    else {
        let h2 = document.createElement('h2');
        h2.textContent = `Sorry, You Are NOT ALLOWED On This Site! \
        Either you have got the link to the wrong path, an error occured or you don't own any.`

        let cntuButton = document.createElement('button');
        let x = document.createTextNode("Reload");
        
        h2.className = "verifPostText";
        cntuButton.className = "button-19 cntuVerif";
        cntuButton.onclick = function() {
            window.location.reload(true);
        }

        document.body.appendChild(h2);
        document.body.appendChild(cntuButton);

        cntuButton.appendChild(x);
    }
}