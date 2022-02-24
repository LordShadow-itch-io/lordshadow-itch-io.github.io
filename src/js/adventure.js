async function loadMarket() {
    document.getElementsByClassName('verifPostText')[0].remove();
    document.getElementsByClassName('button-19 cntuVerif')[0].remove();

    let mainPanelParent = document.createElement('div');

    mainPanelParent.className = "mainPanel";

    document.body.appendChild(mainPanelParent);

    const response = await fetch('https://raw.githubusercontent.com/theChainCom/unitytest/main/adventure/games.json');
    const names = await response.json();
    console.log((names.games["0"]["0z1"]));
    const emplys = names.games["0z1"];

    for (let index = 0; index < names.games.length; index++) {
        let div = document.createElement('div');
        // div.textContent = index.toString();

        let gameImage = document.createElement('img');
        gameImage.src = 'https://www.w3schools.com/html/pic_trulli.jpg';

        let gameTitle = document.createElement('h2');
        gameTitle.textContent = Object.values(names.games["0"]["0z1"][0])[0];

        let creatorAddress = document.createElement('h2');
        creatorAddress.textContent = Object.values(names.games["0"]["0z1"][1])[0];

        let desc = document.createElement('h3');
        desc.textContent = Object.values(names.games["0"]["0z1"][2])[0]

        div.className = "mainPanelGameParent";
        gameImage.className = "mainPanelGameImage";
        gameTitle.className = "mainPanelText title"
        creatorAddress.className = "mainPanelText address";
        desc.className = "mainPanelText desc";

        div.appendChild(gameImage);
        div.appendChild(gameTitle);
        div.appendChild(creatorAddress);
        div.appendChild(desc);

        mainPanelParent.appendChild(div);
        console.log("made element");
    }
}

async function loadNames() {
    const response = await fetch('https://raw.githubusercontent.com/theChainCom/unitytest/main/adventure/games.json');
    const names = await response.json();
    console.log(names.games["0z1"]);
    return names.games["0z1"]; 
  }