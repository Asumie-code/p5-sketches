import p5 from "p5"




export const sketch = (s: p5) => {
    let cols: number, rows: number
    let w: number = 40
    let cells: Cell[] = []
    let current: Cell

    class Cell {
        i: number 
        j: number 
        walls: boolean[]
        visited: boolean
        constructor(i: number, j: number) {
            this.i = i 
            this.j = j
            this.walls = [true, true, true, true]
            this.visited = false 
        }
    
    
    
        show() {
            let x = this.i * w
            let y = this.j * w
            s.stroke(255)

            if(this.visited) {
                s.fill(255, 0,255, 100)
                s.rect(x, y, w, w)

            }
            if(this.walls[0]) s.line(x, y, x + w, y)
            if(this.walls[1]) s.line(x + w , y, x + w, y + w)
            if(this.walls[2]) s.line(x + w , y +  w, x , y + w)
            if(this.walls[3]) s.line(x , y + w, x , y )
            
        }
    }
    
  
    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        cols = s.floor(s.width / w)
        rows = s.floor(s.height / w)
        for(let j = 0; j < rows; j++) {
            for(let i = 0; i < cols; i++) {
                let cell = new Cell( i, j)
                cells.push(cell)
            }
        }

        current = cells[0]

    }


    s.draw = () => {
        s.background(51)
        for (let cell of cells) {
            cell.show()
        }
        current.visited = true 
    }

}


