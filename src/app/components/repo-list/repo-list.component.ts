import { Component, Input } from '@angular/core';
import { Octokit } from 'octokit';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  constructor(private commonService:CommonServiceService){

  }

  repoList:any =[]
  currentPage:any=1;
  totalPages:any=[]

  @Input() userName:any;


  async callIt(){
    this.repoList=[];
    const octokit = new Octokit({
      auth: "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",
    })  
    await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
      username: this.userName,
      sort:'created',
      per_page:12,
      page:this.currentPage
    }).then((res)=>{
      this.repoList=res.data;
      console.log(res)
    })
  }

  incPage(){    
    this.currentPage+=1;
    this.callIt();
  }
  decPage(){
    if(this.currentPage>=2)
    this.currentPage-=1;
    this.callIt();
  }

  ngOnInit(){
    this.totalPages=[]
    this.commonService.pageNumber.subscribe((res)=>{
      for(var i=1;i<=parseInt(res)+1;i++)
      this.totalPages.push(i);
    })
    this.callIt();
  }
  // ngOnChanges(){
  //   this.callIt();
  // }

}
