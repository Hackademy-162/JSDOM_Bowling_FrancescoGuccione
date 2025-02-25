// FUNZIONI GENERALI

let bowling = {
    "playerList": [
        {"name": "Fgg", "score": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
    ],
    "setScore": function(){
        this.playerList.forEach( (player)=> {
            for (let i = 0; i < 10; i++) {
                player.score.push( Math.floor( Math.random()* (10 - 1 +1) + 1) )
            }
        } )
    },
    "setFinalScore": function(){
        this.playerList.forEach( (player)=> {
            player.FinalScore = player.score.reduce( (acc, num)=> acc + num, 0)
        })
    },
    "setWinner": function(){
        this.playerList.sort( (a, b) => b.FinalScore - a.FinalScore )

        console.log(`Il vincitore è : ${this.playerList[0].name} con ${this.playerList[0].FinalScore} punti`);
    },
    "addNewPlayer": function(PlayerName){
        this.playerList.push({"nome": PlayerName, "score": []});
    },
    "createTableRow": function (){
        this.playerList.forEach((player, index)=>{
           let tr = document.createElement("tr")
           tr.innerHTML = `
          <th scope="row">${index + 1}</th>
            <td>${player.name}</td>
            <td>${player.score[0]}</td>
            <td>${player.score[1]}</td>
            <td>${player.score[2]}</td>
            <td>${player.score[3]}</td>
            <td>${player.score[4]}</td>
            <td>${player.score[5]}</td>
            <td>${player.score[6]}</td>
            <td>${player.score[7]}</td>
            <td>${player.score[8]}</td>
            <td>${player.score[9]}</td>
            <td>${player.score[10]}</td>
            <td>0</td>
           `
           listPlayer.appendChild(tr)
        }
        );
    },
}



let listPlayer = document.querySelector("#listPlayer")

bowling.createTableRow()

// ADD PLAYER

let addNewPlayer = document.querySelector("#addPlayer")

let nameNewPlayer = document.querySelector("#newPlayerName")

addNewPlayer.addEventListener("click", ()=>{
    bowling.addNewPlayer(nameNewPlayer.value)
    bowling.createTableRow()
    nameNewPlayer.value = ""
})