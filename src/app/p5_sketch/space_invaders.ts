import p5 from 'p5'



class Drop {
    x: number 
    y: number 
    r: number
    toDelete: boolean
    constructor(x: number, y: number) {
        this.x = x 
        this.y = y 
        this.r = 8
        this.toDelete = false
    }

    show(s: p5) {
        s.noStroke()
        s.fill(50, 0, 200)
        s.ellipse(this.x, this.y , this.r * 2, this.r * 2)
    }

    move() { 
        this.y = this.y - 2
    }

    hits (s: p5, flower: Flower) {
        let d = s.dist(this.x, this.y, flower.x, flower.y)
        if ( d < this.r + flower.r) return true 
        else return false

    }

    remove() {
        this.toDelete = true
    }
}




class Flower {
    x: number 
    y: number 
    r: number
    xdir: number 

    constructor(s: p5, x: number, y: number) {
        this.x = x
        this.y = y
        this.r = 30
        this.xdir = 1 
    }


    show(s: p5) {
        s.fill(255, 0, 200)
        s.ellipse(this.x, this.y , this.r * 2, this.r * 2)
    }

    grow() {
        this.r = this.r + 2
    }

    move() {
        this.x = this.x + this.xdir
    }

    shiftDown() {
        this.xdir *= -1 
        this.y +=  this.r
    }
}



class Ship {
    x: number 
    xdir: number 
    constructor(s: p5) {
        this.x = s.width / 2
        this.xdir = 0
    }


    show(s: p5) {
        s.fill(255)
        s.rectMode(s.CENTER)
        s.rect(this.x, s.height - 20 , 20, 60)
    }

    setDir(dir: number) {
        this.xdir = dir
    }

    move()  {
        this.x += this.xdir * 5
    }
}



 export const sketch = (s: p5) => {
    let ship: Ship
    let flowers: Flower[] =  []
    let drops: Drop[] = []
    s.setup = () => {
        let canvas = s.createCanvas(500, 500)
        canvas.parent('sketch-holder')
        ship = new Ship(s)
        for (let i = 0; i < 5; i++) {
            flowers[i] = new Flower(s, i*80+80, 60)
            
        }
    }


    s.draw = () => {
        s.background(51)
        ship.show(s)
        ship.move()


        let edge = false
        for (let i = 0; i < flowers.length; i++) {
            flowers[i].show(s)
            flowers[i].move()
            if(flowers[i].x > s.width || flowers[i].x < 0) {
                edge = true
            }
        }

        if(edge) {
            for (let i = 0; i < flowers.length; i++) {
                flowers[i].shiftDown()
            }
        }

        for (let i = 0; i < drops.length; i++) {
            drops[i].show(s)
            drops[i].move()
            
        }

        for (let i = 0; i < drops.length; i++) {
            drops[i].show(s)
            drops[i].move()
            for(let j = 0; j < flowers.length; j++) {
                if (drops[i].hits(s, flowers[j])) {
                    flowers[j].grow()
                    drops[i].remove()
                }
            }
        }





        for (let i = drops.length - 1; i >= 0; i--) {
            if (drops[i].toDelete) drops.splice(i, 1)
        }

    }
    s.keyReleased = ()  => {
        if( s.key != ' ') ship!.setDir(0) 
    }

    s.keyPressed = () => {
        if(s.keyCode === s.RIGHT_ARROW) ship.setDir(1) 
            else if (s.keyCode === s.LEFT_ARROW) ship.setDir(-1)
        if(s.key === ' ') drops.push( new Drop(ship.x, s.height))
    }

 
 }