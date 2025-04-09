import p5 from "p5"




export const sketch = (s: p5) => {

    let axiom = 'A'

    let rule_1 = {
        a: 'A', 
        b: 'AB'
    }

    let rule_2 = {
        a: 'B', 
        b: 'A'
    }
 
    s.setup = () => {
        s.noCanvas() 
        s.createP(axiom)
    }

}