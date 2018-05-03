import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Pps_4aPage } from '../pps-4a/pps-4a';
import { Pps_4bPage } from '../pps-4b/pps-4b';
import { App } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app:App,private auth: AuthService) {

  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  public clasePps4A(){
    //alert("CLASE PPS 4A");
    this.navCtrl.push(Pps_4aPage);
  }
  public clasePps4B(){
    //alert("CLASE PPS 4B");
    this.navCtrl.push(Pps_4bPage);    
  }
}
