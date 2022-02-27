async function testUser(add) {
    const file = await fetch("https://raw.githubusercontent.com/theChainCom/unitytest/main/users/users.json");
    const users = await file.json();

    let isAccess = false;

    for (let index = 0; index < Object.keys(users).length; index++) {
        if (Object.keys(users)[0] == add) {
            isAccess = true;
        }
    }

    return isAccess;
}