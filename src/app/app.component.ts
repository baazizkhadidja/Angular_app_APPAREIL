import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date()
  appareils =[
    {
      name:"Machine à laver",
      status:"éteint",
    },
    {
      name:"Frigo",
      status:"allumé",
    },
    {
      name:"ordinateur",
      status:"éteint",
    },
  ]

constructor()
{setTimeout(() => {this.isAuth = true;}, 4000);}

OnAllumer(){
  console.log("On allume tot!");
}

}
