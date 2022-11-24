import { Component, Input } from '@angular/core';
import { Octokit } from 'octokit';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  
  userData:any;
  @Input() userName:any;

  constructor(private commonService:CommonServiceService){

  }

  async callIt(){
    const octokit = new Octokit({
      auth: "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",
    })  
    await octokit.request('GET /users/{username}', {
      username: this.userName
    }).then((res)=>{
      this.userData=res.data;
      this.commonService.pageNumber.next(this.userData.public_repos/12)
      console.log(res);
    })
  }

  ngOnInit(){
    this.callIt();
  }
  // ngOnChanges(){
  //   this.callIt();
  // }

}
