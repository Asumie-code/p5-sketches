import p5 from "p5"; 

class Star {
    x: number
    y: number
    z: number
    pz: number
    
    constructor(s: p5) {
        this.x = s.random(-s.width, s.width)
        this.y = s.random(-s.height, s.height)
        this.z = s.random(s.width)
        this.pz = this.z
    }


    update(speed: number, s: p5 ) {
        this.z = this.z - speed 
        if (this.z < 1) {
            this.z = s.width
            this.x = s.random(-s.width, s.width)
            this.y = s.random(-s.height, s.height)
            this.pz = this.z
        }
        
    }



    show(s: p5) {
        s.fill(255)
        s.noStroke()

        let sx = s.map(this.x / this.z, 0 , 1, 0, s.width)
        let sy = s.map(this.y / this.z, 0 , 1, 0, s.height)

        let r = s.map(this.z, 0, s.width, 16, 0)
        s.ellipse(sx, sy, r, r)

        let px = s.map(this.x / this.pz, 0, 1, 0, s.width)
        let py = s.map(this.y / this.pz, 0, 1, 0, s.height)

        this.pz = this.z 

        s.stroke(255)
        s.line(px, py, sx, sy)
    }
}




export const sketch = (s: p5) => {
    
    let stars: Star[] =[]
    let speed: number
    
    
    s.setup = () => {
        let canvas = s.createCanvas(600, 600)
        canvas.parent('sketch-holder');
        for (let i = 0; i < 800; i++) {
            stars[i] = new Star(s)
        }
    }

    s.draw = () => {
        speed = s.map(s.mouseX, 0, s.width, 0, 50)
        s.background(0)
        s.translate(s.width / 2, s.height / 2)
        for (let i = 0; i < stars.length; i++) {
            stars[i].update(speed, s)
            stars[i].show(s)
        }
    }


    
}