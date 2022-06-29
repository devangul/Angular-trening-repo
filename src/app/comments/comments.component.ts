import { Component, OnInit } from '@angular/core';
import { Comments } from '../interfaces/interfaces.comments';
import { CommentsService } from '../service/cooments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: Comments | any;
  str = '';
  constructor(private commentsService: CommentsService) { 
this.commentsService.Comments().subscribe((data: Comments)=>{
  this.comment = data;
})
  }

  ngOnInit(): void {
  }

}
