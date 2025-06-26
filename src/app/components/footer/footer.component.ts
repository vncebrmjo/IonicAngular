import { Component, OnInit } from '@angular/core';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonContent, IonFooter, IonTitle, IonToolbar],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
