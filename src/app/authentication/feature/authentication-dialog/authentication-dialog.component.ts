import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-dialog',
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
