import p5 from "p5"




export const sketch = (s: p5) => {
    let cols: number, rows: number
    let w: number = 40
    let cells: Cell[] = []
    let current: Cell


    function index(i: number, j: number) {
        if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) return -1
        return  i + j * cols
    }

    function removeWalls(a: Cell, b: Cell) {
        let x = a.i - b.i 
        if( x === 1) {
            a.walls[3] = false 
            b.walls[1] = false  
        } else if ( x === -1 ) {
            a.walls[1] = false 
            b.walls[3] = false 
        }
        
        let y = a.j - b.j 
        if( y === 1) {
            a.walls[0] = false 
            b.walls[2] = false  
        } else if ( y === -1 ) {
            a.walls[2] = false 
            b.walls[0] = false 
        }
    }

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

            if(this.walls[0]) s.line(x, y, x + w, y)
            if(this.walls[1]) s.line(x + w , y, x + w, y + w)
            if(this.walls[2]) s.line(x + w , y +  w, x , y + w)
            if(this.walls[3]) s.line(x , y + w, x , y )


                
            if(this.visited) {
                s.noStroke()
                s.fill(255, 0,255, 100)
                s.rect(x, y, w, w)

            }
            
        }

        checkNeighbors() {
            let neighbors: Cell[] = []

            
            let top: Cell = cells[index(this.i , this.j - 1)]
            let right: Cell = cells[index(this.i + 1 , this.j)]
            let left: Cell = cells[index(this.i - 1 , this.j)]
            let bottom: Cell = cells[index(this.i , this.j + 1)]
            

            if(top &&  !top.visited) neighbors.push(top)
            if(bottom &&  !bottom.visited) neighbors.push(bottom)
            if(left &&  !left.visited) neighbors.push(left)
            if(right &&  !right.visited) neighbors.push(right)

            if(neighbors.length > 0) return neighbors[s.floor(s.random(0, neighbors.length))]
            else  return undefined

        }


        highlight () {
            let x = this.i * w
            let y = this.j * w
            s.noStroke() 
            s.fill(0, 0, 255, 100)
            s.rect(x, y, w, w)

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
        current.highlight()
        let next = current.checkNeighbors()
        if (next) {
            next.visited = true 
            removeWalls(current, next)
            current = next
        }
    }

}


