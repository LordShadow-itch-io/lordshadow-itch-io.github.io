async function loadMarket() {
    document.getElementsByClassName('verifPostText')[0].remove();
    document.getElementsByClassName('button-19 cntuVerif')[0].remove();

    let sidePanelParent = document.createElement('div');

    let mainPanelParent = document.createElement('div');

    sidePanelParent.className = "sidePanel";
    mainPanelParent.className = "mainPanel";

    document.body.appendChild(sidePanelParent);
    document.body.appendChild(mainPanelParent);

    const response = await fetch('https://raw.githubusercontent.com/theChainCom/unitytest/main/adventure/games.json');
    const names = await response.json();
    const emplys = names.employees;

    for (let index = 0; index < emplys.length; index++) {
        let div = document.createElement('div');
        // div.textContent = index.toString();

        let gameImage = document.createElement('img');
        gameImage.src = 'https://www.w3schools.com/html/pic_trulli.jpg';

        let gameTitle = document.createElement('h2');
        gameTitle.textContent = emplys[index].firstName;

        let creatorAddress = document.createElement('h2');
        creatorAddress.textContent = "0xabcdefghijklmnopqrstuvwxyz"

        let desc = document.createElement('h3');
        desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sem lacus, at lacinia risus imperdiet id. Mauris nunc mauris, hendrerit quis tellus id, interdum scelerisque lacus."

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
    console.log(names.employees);
    return names.employees; 
  }