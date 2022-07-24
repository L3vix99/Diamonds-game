class UserData {
 
constructor() {
    if(!localStorage.length) {
        localStorage.setItem("1", JSON.stringify({active:true, bestStore: 0 }));
    }
}

checkAvailabilityLevel(levelNumber) {
    const item = localStorage.getItem(String(levelNumber));


if (!item){
    return false;

}
const { active } =JSON.parse(item);

return active;
}
addNewLevel(levelNumber) {
    localStorage.setItem(String(levelNumber), JSON.stringify({active: true, bestStore: 0}));
}


getHighScores(levelNumber) {
    const item = localStorage.getItem(String(levelNumber));
    const { backStore } = JSON.parse(item);

}

setHighScore(levelNumber, newHighScore) {
    localStorage.setItem(String(levelNumber), JSON.stringify({active: true, bestStore: newHighScore}));
}

}


export const userData = new UserData();