class Ship {
    constructor (name){
        this.name;
        this.currentPort = name;
    }

    setSail(){
        this.startingPort = null;
    }

    dock(port) {
        this.currentPort = port;
    }

    
    
}

module.exports = Ship;