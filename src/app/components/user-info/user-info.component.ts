import { Component, Input } from '@angular/core';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  
  userData:any;
  @Input() userName:any;

  async callIt(){
    const octokit = new Octokit({
      auth: "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",
    })  
    await octokit.request('GET /users/{username}', {
      username: this.userName
    }).then((res)=>{
      this.userData=res.data;
      console.log(res);
    })
  }

  ngOnInit(){
    this.callIt();
  }

}
