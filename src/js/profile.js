const serverUrl = "https://ht1tweosu3li.usemoralis.com:2053/server";
const appId = "bIFn85NyDLR5CGfIzPaAqliWSpKwUuTOOEvK1KA6";
Moralis.start({ serverUrl, appId });

async function loadProfile() {

    
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Sign To Gain Access To The Chained Communities Website!"
        });
    }

    let access = await testUser(user.get("ethAddress"))

    if (access) {
        // console.log("logged in user:", user);
        console.log(window.location.href);
        console.log(window.location.href.split('#')[1]);
        
        let isOnUser = true;
        let address = "";

        if (window.location.href.split('#')[1] != undefined) {
            // isOnUser = await testUser(window.location.href.split('#')[1]);
            isOnUser = false;
            address = window.location.href.split('#')[1]

        }
        else {
            isOnUser = true;
            address = user.get("ethAddress");
        }

        if (isOnUser) {
            
            let docAdd = document.getElementById('oxCode');
            docAdd.textContent = address;
                
            let pfp = document.getElementById('pfp');
            pfp.src = "https://avatars.dicebear.com/api/identicon/" + address + ".svg";

            const file = await fetch("https://raw.githubusercontent.com/theChainCom/unitytest/main/users/users.json");
            const users = await file.json();

            let desc = document.getElementById('profDesc');

            for (let index = 0; index < Object.keys(users).length; index++) {
                if (Object.keys(users)[0] == address) {
                    desc.textContent = Object.values(Object.values(users)[index][0])[0]
                }
            }

            /*let editBut = document.createElement("button");
            let editSp = document.createElement('span');

            editBut.appendChild(editSp);
            desc.appendChild(editBut);*/
        }
    }
}