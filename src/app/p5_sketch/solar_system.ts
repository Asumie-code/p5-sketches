import p5 from "p5"

class Planet {
    radius: number
    angle: number
    distance: number
    planets: Planet[]
    orbitSpeed: number
    constructor(s: p5, r: number, d: number, o: number ) {
        this.radius = r 
        this.distance = d
        this.angle = s.random(s.TWO_PI)
        this.planets = []
        this.orbitSpeed = o
    }

    spawnMoons(s: p5, total: number, level: number) {
        for( let i = 0; i < total; i++) { 
            let r = this.radius / (level * 2)
            let d = s.random(75, 300)
            let o = s.random(-0.01, 0.04)
            this.planets.push(new Planet(s ,r ,d ,o))
            this.planets[i] = new Planet(s, r, d / level, o)
            if( level < 2) {
                let num = s.random(0, 4)
                this.planets[i].spawnMoons(s, num, level + 1)
            }
        }
    }


    orbit() {
        this.angle += this.orbitSpeed 
        if(this.planets.length !== 0) {
            for(let planet of this.planets) {
                planet.orbit()
                
            }
        }
    }

    show(s: p5) {
        s.push()
        s.rotate(this.angle)
        s.translate(this.distance, 0)
        s.fill(255, 100)
        s.ellipse(0, 0, this.radius * 2, this.radius * 2 )
        if(this.planets.length !== 0) {
            for(let planet of this.planets) {
                planet.show(s)
                
            }
        }
        s.pop()
    }

}


export const sketch = (s: p5) => {

    let  sun: Planet

    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        sun = new Planet(s, 50, 0, 0)
        sun.spawnMoons(s, 5, 1)
    }


    s.draw = () => {
        s.background(0)
        s.translate(s.width / 2, s.height / 2)
        sun.show(s)
        sun.orbit()
    }

}