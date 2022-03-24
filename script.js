var app = Vue.createApp({
    //data-Objekt speichert die Daten der Vue-Instanz
    data() { //wird bei Instanziierung des View-Objects automatisch aufgerufen
        return { //Eigenschaften im Data-Objekt:
            
            players: [ //Property der Vue-Instanz
                {name: "", valid: false}, 
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
                {name: "", valid: false},
            ],

            tenPlayers: true,
            team1: "",
            team2: "",
            
            formSubmitted: false,
            invalidTextMsg: "Name must not be empty!",
            showRegisteredPlayers: false,
        }   
    },

    computed: { //Methoden werden aufgerufen, sobald sich Änderungen in abhängigen Variablen im data-object ergeben
        checkIfOneInput(){
            for (let i = 0; i < this.players.length; i++) {
                if(this.players[i].name != ""){
                    return true
                }
            }
            return false
        },
    },

    //methods-Objekt speichert die Methoden der Vue-Instanz
    methods: {
        tenPlayersToggle() { //Methoden sollten nicht den selben Namen haben, wie Eigenschaften des Data-Objekts
            this.tenPlayers = true
        },
        twelvePlayersToggle(){
            this.tenPlayers = false
        },
        
        checkInputs(){
            let namesValid = true
            if(this.tenPlayers){
                for (let i = 0; i < this.players.length-2; i++) { //10
                    if(this.players[i].name == ""){
                        this.players[i].valid = false
                        namesValid = false
                    } else {
                        this.players[i].valid = true
                    }
                }
            } else {
                for (let i = 0; i < this.players.length; i++) { //12
                    if(this.players[i].name == ""){
                        this.players[i].valid = false
                        namesValid = false
                    } else {
                        this.players[i].valid = true
                    }
                }
            }
            return namesValid
        },

        createTeams(){ 
            this.formSubmitted = true
                                
            if(this.checkInputs()){
                let playersArray = this.players.slice(0,10)
                let team1array = []
                let team2array = []
                if(!this.tenPlayers){
                    playersArray.push(this.players[10]) //Player-Objekt muss hinzugefügt werden, nicht nur der Name
                    playersArray.push(this.players[11])
                }
                while(playersArray.length > 0){
                    index1 = Math.floor(Math.random() * playersArray.length)
                    team1array.push(playersArray[index1].name)
                    playersArray.splice(index1, 1)
                    index2 = Math.floor(Math.random() * playersArray.length)
                    team2array.push(playersArray[index2].name)
                    playersArray.splice(index2, 1)
                }
                this.team1 = team1array.join(" ")
                this.team2 = team2array.join(" ")
            } 
        },
    }
}).mount('#targetElement'); //Verknüpfung mit dem HTML-Element
//zusätzlicher Kommentar