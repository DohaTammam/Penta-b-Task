class RoverState {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction
    }
    getX() {
        return this.x
    }
    setX(newX) {
        this.x = newX;
    }
    getY() {
        return this.y;
    }
    setY(newY) {
        this.y = newY;
    }
    getDir() {
        return this.direction;
    }
    setDir(newDir) {
        this.direction = newDir;
    }

}


function processRover(x, y, dir, process) {

    let roverState = new RoverState(x,y,dir);       // Take object with Intial values from Class

    for (const char of process) {  // loop on instruction String to Check Every Step Of Rover Instructions
        dir = roverState.getDir();
        x = roverState.getX();
        y = roverState.getY();
        
        if (char == 'F' && dir === 'E') roverState.setX(x + 1 );
        else if (char == 'F' && dir === 'W') roverState.setX(x-1 );
        else if (char == 'F' && dir === 'N') roverState.setY(y+1 );
        else if (char == 'F' && dir === 'S') roverState.setY(y -1 );
        
        else if (char == 'B' && dir == 'E') roverState.setX(x - 1 );
        else if (char == 'B' && dir == 'W') roverState.setX(x + 1 );
        else if (char == 'B' && dir == 'N') roverState.setY(y- 1 );
        else if (char == 'B' && dir == 'S') roverState.setY(y+ 1 );
        
        else if (char == 'R' && dir == 'N') roverState.setDir('E');
        else if (char == 'R' && dir == 'E') roverState.setDir('S');
        else if (char == 'R' && dir == 'S') roverState.setDir('W');
        else if (char == 'R' && dir == 'W') roverState.setDir('N');
        
        else if (char == 'L' && dir == 'N') roverState.setDir('W');
        else if (char == 'L' && dir == 'E')roverState.setDir('N');
        else if (char == 'L' && dir == 'S') roverState.setDir('E');
        else if (char == 'L' && dir == 'W') roverState.setDir('S');
    
        else console.log("Please Use ONly These Characters to Give the Rover the Right Instruction")
    }

    document.getElementById("xAxis").innerText = roverState.getX();
    document.getElementById("yAxis").innerText = roverState.getY();
    document.getElementById("Direction").innerText = roverState.getDir();
    return roverState;
}
// processRover(4, 2, 'E', 'FLFFFRFLB');
// You Can Change The values Here processRover(X AXIS, Y AXIS , INITIAL Direction, Statement Of Instructions)
console.log("---->", processRover(4, 2, 'E', 'FLFFFRFLB'))


/******************************************************************** */
/* The Final Result Will Display On The web Page */
/******************************************************************** */