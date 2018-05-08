import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
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
  usuario:string;
  constructor(public navCtrl: NavController,public navParams: NavParams,public app:App,private auth: AuthService) {
    this.usuario = this.armarUsuario();
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  public clasePps4A(){
    //alert(this.usuario);
    this.navCtrl.push(Pps_4aPage,{data:this.usuario});
  }
  public clasePps4B(){
    //alert("CLASE PPS 4B");
    this.navCtrl.push(Pps_4bPage,{data:this.usuario});    
  }
  public armarUsuario(){
    let email = this.navParams.get('data');
    let usuarioCortado = "";
    for (let i = 0; i < email.length; i++) {
      if (email[i] == "@") {
        break;
      }
      else{
        usuarioCortado = usuarioCortado + email[i];
      }
    }
    return usuarioCortado;
  }
}
