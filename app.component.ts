import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!--ngIF Directive-->
  <div *ngIf="status;then thenBlock; else elseBlock"></div>

<!--executed when True-->
<ng-template #thenBlock>
  <h2>
  Angular Training
</h2>
</ng-template>
<!--executed when False-->
<ng-template #elseBlock>
  <h2>
  Angular FDP
</h2>
</ng-template>


<!--ngSwitch Directive-->
<div [ngSwitch]="color">
<div *ngSwitchCase="'red'">You Picked red color</div>
<div *ngSwitchCase="'yellow'">You Picked yellow color</div>
<div *ngSwitchCase="'green'">You Picked green color</div>
<div *ngSwitchDefault>Pick any color</div>

<!--ngFor Directive-->
<div *ngFor="let dayname of days;index as i">
<h2>{{i}} {{dayname}}</h2>
</div>

<!--ngClass Directive-->
<div [ngClass]="'one'">
Learning Angular Directives
<!--ngStyle Directive-->
<br>
<br>

<button [ngStyle]="{'color':'green','font-weight':'bold'}">Login</button>
</div>
`
,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'newdirectivesdemo';

  public status=true;
  public color="Blue";
  public days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
}
