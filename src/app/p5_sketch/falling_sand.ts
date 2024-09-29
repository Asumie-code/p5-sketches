import p5 from "p5";


export const sketch = (s: p5) => {
   let grid: number[][]
   let w = 4 
   let cols: number, rows: number
   let hueValue: number = 100 

   function make2DArray(cols: number, rows: number): number[][] {
    let arr = new Array(cols)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows)
      for(let j = 0; j < arr[i].length; j++) {
        arr[i][j] =  0
      }
    }

    return arr
   }



   function withinCols(i: number): Boolean {
     return i  >= 0 && i <= cols - 1 
   }


   function withinRows(j: number): Boolean {
    return j >= 0 && j  <= rows - 1
   }

    s.setup = () => {

      let cw = 400
      let ch = 400
      

      s.colorMode(s.HSB, 360, 255, 255)
      let canvas2 = s.createCanvas(cw, ch);
      // creating a reference to the div here positions it so you can put things above and below
      // where the sketch is displayed
      canvas2.parent('sketch-holder');
      cols = cw / w
      rows = ch / w 
      grid = make2DArray(cols, rows)

      
      


    };



    s.mouseDragged = () => {
      let mouseCol = s.floor(s.mouseX / w)
      let mouseRow = s.floor(s.mouseY / w)
      let matrix = 3 
      let extent = s.floor(matrix/2)
      for(let i = -extent; i <= extent; i++){
        for(let j = -extent; j <= extent; j++) {
          if(s.random(1) < 0.75){
            let col = mouseCol + i 
            let row = mouseRow + j  
            if( withinCols(col) && withinRows(row) ) {
              grid[col][row] = hueValue
            }

          }
        }
      }
      hueValue += 1
      if (hueValue > 360) hueValue = 1




    }
   
    s.draw = () => {
      s.background(0)
      
      for(let i = 0; i < cols; i++) {
        for(let j =  0; j < rows; j++)  {
          s.noStroke()
          if(grid[i][j] > 1) {
            s.fill(grid[i][j], 255, 255)
            let x =  i * w
            let y = j * w
            s.square(x,y,w)
          }
        }
      }

      let nextGrid = make2DArray(cols, rows)
      for(let i = 0; i < cols; i++) {
        for(let j =  0; j < rows; j++)  { 
          let state = grid[i][j] 
          if ( state > 0) { 
              let below = grid[i][j + 1]
              let dir = s.random([-1, 1])

              let belowA: number = -1 , belowB: number  = -1 

              if(withinCols( i + dir)) {
                belowA = grid[i + dir][j + 1]
              }
              if (withinCols(i - dir)) {
                belowB = grid[i - dir][j + 1]

              }

              if(below === 0 ) {
                nextGrid[i][j + 1] = state 
              } else if ( belowA === 0 ){
                nextGrid[i + dir ][j + 1] = state
              } else if (belowB === 0 ) { 
                nextGrid[i - dir][j + 1] = state
              } else {
                nextGrid[i][j] = state
              }
          }
        }  
      }
      grid = nextGrid

    };

  };