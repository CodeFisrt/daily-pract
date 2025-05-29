import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  userId:any;
  constructor(private route: ActivatedRoute){
    // this.userId = route.snapshot.paramMap.get('id');
    // console.log(this.userId)
  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.data[1].title;
    console.log(this.userId)
  }
}
