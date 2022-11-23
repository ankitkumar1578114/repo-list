import { Component } from '@angular/core';
import {Octokit} from 'octokit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  userName:any="rishak192";

  ngOnInit(){
    // this.callIt();

    console.log("HI")
  }    
}
