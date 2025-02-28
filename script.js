let bowling = {
    playerList: [
        { name: "Frenk", score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],
    
    "addNewPlayer": function (playerName) {
        if (!playerName.trim()) {
            alert("Inserisci un nome valido!");
            return;
        }
        this.playerList.push({ name: playerName, score: new Array(10).fill(0) });
        this.updateTable();
    },
    
    "gameStarter": function () {
        let currentPlayerIndex = 0;
        
        let intervalId = setInterval(() => {
            if (currentPlayerIndex < this.playerList.length) {
                let player = this.playerList[currentPlayerIndex];
                for (let i = 0; i < 11; i++) {
                    player.score[i] = Math.floor(Math.random() * 11);
                }
                this.updateTable();
                currentPlayerIndex++;
            } else {
                clearInterval(intervalId); 
            }
        }, 1400); 
    },

    "setWinner": function () {
        this.playerList.forEach(player => {
            player.totalScore = player.score.reduce((acc, num) => acc + num, 0);
        });
        this.playerList.sort((a, b) => b.totalScore - a.totalScore);
        this.updateTable();
    },
    
    "playerRemover": function (playerName) {
        this.playerList = this.playerList.filter(player => player.name !== playerName);
        this.updateTable();
    },

    "updateTable": function () {
        let listPlayer = document.querySelector("#listPlayer");
        listPlayer.innerHTML = ""; 

        this.playerList.forEach((player, index) => {
            let totalScore = player.score.reduce((acc, num) => acc + num, 0);

            let tr = document.createElement("tr");
            tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${player.name}</td>
                ${player.score.map(score => `<td>${score}</td>`).join("")}
                <td>${totalScore}</td>
            `;
            listPlayer.appendChild(tr);
        });
    },
};

let addPlayer = document.querySelector("#addPlayer");
let namePlayerInput = document.querySelector("#namePlayerInput");
let startGame = document.querySelector("#startGame");
let leaderboardViev = document.querySelector("#leaderboardView");

addPlayer.addEventListener("click", (event) => {
    event.preventDefault();
    bowling.addNewPlayer(namePlayerInput.value);
    namePlayerInput.value = "";
});

startGame.addEventListener("click", () => {
    leaderboardViev.classList.remove("d-none");
    bowling.gameStarter();
});

leaderboardViev.addEventListener("click", () => {
    bowling.setWinner();
});

bowling.updateTable();
