import p5 from "p5"




export const sketch = (s: p5) => {
 


    class Branch {
        begin: p5.Vector
        end: p5.Vector 
        finished: boolean
        constructor(begin: p5.Vector, end: p5.Vector) {
            this.begin = begin
            this.end = end
            this.finished = false
        }

        show() {
            s.stroke(255)
            s.line(this.begin.x, this.begin.y, this.end.x, this.end.y)
        }
        

        branch(orinetation: 'right' | 'left' = 'right', angle: number = 6) {
            let dir = p5.Vector.sub(this.end, this.begin)
            if(orinetation === "right") dir.rotate(  s.PI / angle)
            if(orinetation === "left")  dir.rotate(- s.PI / angle)
            dir.mult(0.67)
            
            let newEnd = p5.Vector.add(this.end, dir)
            let right = new Branch(this.end, newEnd)

            return right
        }

        jitter() {
            this.end.x += s.random(-1, 1)
            this.end.y += s.random(-1, 1)
        }
    }


    let angle = s.PI / 4
    let silder: p5.Element; 
    let root: Branch
    let tree: Branch[] = []
    let leaves: p5.Vector[] = []
    let counter: number = 0




   
  
    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        let a = s.createVector(s.width / 2, s.height )
        let b = s.createVector(s.width / 2, s.height - 100 )
        root = new Branch(a, b)
        tree[0] = root

 




    }

    s.mousePressed = () => {

        for(let i = tree.length - 1; i >= 0; i-- ) {
            if(!tree[i].finished){      
                tree.push(tree[i].branch('right'))
                tree.push(tree[i].branch('left'))
            }
            tree[i].finished = true
        }
        counter++ 

        if (counter === 6 ) {
            for(let i = 0; i < tree.length; i++) {
                if(!tree[i].finished) {
                    let leaf = tree[i].end.copy()
                    leaves.push(leaf)
                }
            }
        }
 
    }


    s.draw = () => {
        s.background(51)
        for( let branch of tree) {
            branch.show()
            // branch.jitter()
        }
        for(let leaf of leaves) {
            s.fill(255, 0, 100)
            s.ellipse(leaf.x , leaf.y, 8, 8)
            leaf.y += s.random(0, 1)
        }

    }

}
