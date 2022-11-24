import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
