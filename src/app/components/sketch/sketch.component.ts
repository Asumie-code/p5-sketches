import { Component, OnInit } from '@angular/core';
import {Router, ParamMap, ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-sketch',
  standalone: true,
  imports: [],
  templateUrl: './sketch.component.html',
  styleUrl: './sketch.component.css'
})
export class SketchComponent implements OnInit {
  sketch: unknown

  constructor(private route: ActivatedRoute) {}

   async ngOnInit() {
    const path = this.route.snapshot.paramMap.get('path')
  
    const sketch =  await import(`../../p5_sketch/${path}.ts`) 
    sketch.test()
    
  }
}
