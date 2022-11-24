import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
