import { Component } from '@angular/core';
import {Octokit} from 'octokit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  userName:any="ankitkumar1578114";

  ngOnInit(){
    // this.callIt();

    console.log("HI")
  }    
}
