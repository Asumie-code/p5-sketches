import p5 from "p5"

class Planet {
    radius: number
    angle: number
    distance: number
    planets: Planet[]
    constructor(s: p5, r: number, d: number ) {
        this.radius = r 
        this.distance = d
        this.angle = 0
        this.planets = []
    }

    spawnMoons(s: p5, total: number) {
        for( let i = 0; i < total; i++) { 
            this.planets.push(new Planet(s, this.radius * 0.5, s.random(75, 300) ))
        }
    }


    show(s: p5) {
        s.push()
        s.translate(this.distance, 0)
        s.rotate(this.angle)
        s.fill(255, 100)
        s.ellipse(0, 0, this.radius * 2, this.radius * 2 )
        if(this.planets.length !== 0) {
            for(let planet of this.planets) {
                planet.show(s)
                console.log(this.planets)
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
        sun = new Planet(s, 50, 0)
        sun.spawnMoons(s, 5)
    }


    s.draw = () => {
        s.background(0)
        s.translate(s.width / 2, s.height / 2)
        sun.show(s)
    }

}