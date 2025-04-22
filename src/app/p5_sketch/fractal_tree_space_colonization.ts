import p5 from "p5"




export const sketch = (s: p5) => {


    class Leaf {
        pos: p5.Vector

        constructor() {
            this.pos = s.createVector(s.random(s.width), s.random(s.height))
        }

        show() {
            s.fill(255)
            s.noStroke()
            s.ellipse(this.pos.x, this.pos.y , 4, 4)
        }
   

    }
 

    class Tree {
        leaves: Leaf[]
        
        constructor() {
            this.leaves = []
            for(let i = 0; i < 100; i++) {
                this.leaves.push(new Leaf())
            }
        }

        show() {
            for (let i = 0; i < this.leaves.length; i++) {
                this.leaves[i].show()
                
            }
        }
    }
    let tree: Tree




  
    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
         tree = new Tree()




    }





    s.draw = () => {
        s.background(51)
        tree.show()

    }

}
