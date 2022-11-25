import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCommentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
