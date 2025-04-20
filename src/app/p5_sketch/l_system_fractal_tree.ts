import p5 from "p5"




export const sketch = (s: p5) => {

    let axiom = 'F'
    let sentence = axiom
    let len  = 100
    let rules: {a: string, b: string}[] = []
    let angle = 0

     rules[0] = {
        a: 'F', 
        b: 'FF+[+F-F-F]-[-F+F+F]'
    }




    function generate() {
        len *= 0.5
        let nextSentence = ''
        for(let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i)
            let found = false
            for(let j = 0; j < rules.length; j++) {
                if (current == rules[j].a) {
                    found = true
                    nextSentence += rules[j].b
                    break
                } 
            }
            if(!found) {
                nextSentence += current
            }

        }
        sentence = nextSentence
        s.createP(sentence)
        turtle()
    }


    function turtle() {
        s.background(51)
        s.resetMatrix()
        s.translate(s.width / 2, s.height)
        s.stroke(255, 100)
        for(let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i)
            if(current == 'F') {
                s.line(0, 0, 0, -len)
                s.translate(0 , -len)
            } else if (current == '+') {
                s.rotate(angle)
            } else if (current == '-') {
                s.rotate(-angle)
            } else if (current == '[') {
                s.push()
            } else if (current == ']') {
                s.pop()
            }
        }
    }
 
    s.setup = () => {
        let canvas2 = s.createCanvas(400, 400);
        angle = s.radians(25)
        
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        s.background(51)
        s.createP(axiom)
        turtle()
        let button = s.createButton('genereate')
        button.mousePressed(generate)
    }

}