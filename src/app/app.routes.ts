import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SketchesComponent } from './components/sketches/sketches.component';
import { SketchComponent } from './components/sketch/sketch.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sketches', component: SketchesComponent}, 
    {path: 'sketch', component: SketchComponent}
];
