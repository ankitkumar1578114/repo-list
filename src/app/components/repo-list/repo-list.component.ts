import { Component, Input } from '@angular/core';
import { Octokit } from 'octokit';
@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  repoList:any =[]
  currentPage:any=1;
  @Input() userName:any;

  async callIt(){
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
    this.callIt();
  }
}
