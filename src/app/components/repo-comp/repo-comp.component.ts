import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-repo-comp',
  templateUrl: './repo-comp.component.html',
  styleUrls: ['./repo-comp.component.scss']
})
export class RepoCompComponent {
  @Input() repo:any;
}
