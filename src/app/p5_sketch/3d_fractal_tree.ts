import p5 from "p5"




export const sketch = (s: p5) => {

    class Branch {
        pos: p5.Vector
        parent: Branch | null
        dir: p5.Vector
        count: number =  0
        origDir: p5.Vector
        len: number = 5
        constructor(pos:p5.Vector, dir: p5.Vector,parent: Branch | null = null) {
            this.pos = pos 
            this.parent = parent
            this.dir = dir
            this.origDir = this.dir.copy()
        }

        next() {
            let newDir: p5.Vector = s.createVector()
             p5.Vector.mult(this.dir, this.len, newDir)
             
            let nextPos = p5.Vector.add(this.pos, newDir)
            let nextBranch = new Branch(nextPos, this.dir.copy(), this)

            return nextBranch
        }

        show() {
            if(this.parent != null) {
                s.stroke(255)
                s.line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y)
            }
        }

        rest() {
            this.dir = this.origDir.copy()
            this.count = 0
        }

    }


    class Leaf {
        pos: p5.Vector
        reached: boolean

        constructor() {
            this.pos = s.createVector(s.random(s.width), s.random(s.height - 100))
            this.reached = false
        }

        show() {
            s.fill(255)
            s.noStroke()
            s.ellipse(this.pos.x, this.pos.y , 4, 4)
        }
   

    }
 

    class Tree {
        leaves: Leaf[] = []
        branches: Branch[] = []
        
 
        
        constructor() {
       
            let dir = s.createVector(0, -1)
            let root = new Branch(s.createVector(s.width / 2, s.height), dir)
            this.branches.push(root)
            for(let i = 0; i < 100; i++) {
                this.leaves.push(new Leaf())
            }
           let found = false;
           let current = root;
           let safety = 0; // Prevent infinite loop
           while (!found && safety < 1000) {
               for (let i = 0; i < this.leaves.length; i++) {
                   let d = p5.Vector.dist(current.pos, this.leaves[i].pos);
                   console.log(d)
                   if (d < max_dist) {
                       found = true;
                       
                   }
               }
               if (!found) {
                   let branche = current.next();
                   current = branche;
                   this.branches.push(current);
               }
               safety++;
           }
        }

        grow() {
            for(let leaf of this.leaves) {
                let closestBranch: Branch | null = null
                let closestDir = null 
                let record = 100000
                for(let branch of this.branches) {
                    let d = p5.Vector.dist(leaf.pos, branch.pos)
                    if ( d < min_dist) {
                        leaf.reached = true
                        closestBranch = null
                        break 
                    } else if ( d > max_dist) {
                       
                    } else if (closestBranch == null || d < record)  {
                        closestBranch = branch
                        record = d
                    }
                }

                if (closestBranch != null ) {
                    let newdir = p5.Vector.sub(leaf.pos, closestBranch.pos)
                    newdir.normalize()
                    closestBranch.dir.add(newdir)
                    closestBranch.count++
                }
            }

            for( let i = this.leaves.length - 1 ; i >= 0 ; i--) {
                if (this.leaves[i].reached) this.leaves.splice(i , 1)
            }

            for(let i = this.branches.length - 1; i >= 0; i--) {
                let branch = this.branches[i]
                if (branch.count > 0) {
                    branch.dir.div(branch.count)
                    let ranV = s.createVector(s.random(), s.random())
                    ranV.setMag(0.3)
                    branch.dir.add(ranV)
                    this.branches.push(branch.next())
                }
                branch.rest()
            }


        }

        show() {
            for (let i = 0; i < this.leaves.length; i++) {
                this.leaves[i].show()
                
            }
            for(let branche of this.branches) {
                branche.show()
            }
        }


    }
    let tree: Tree 
    let max_dist: number =100
    let min_dist: number = 10




  
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
        tree.grow()
        


    }

}
