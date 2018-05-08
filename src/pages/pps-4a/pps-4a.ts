import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { chat } from '../../clases/chat';
/**
 * Generated class for the Pps_4aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pps-4a',
  templateUrl: 'pps-4a.html',
})
export class Pps_4aPage {
  usuario:string
  mensaje:string
  coleccionTipadaFirebase:AngularFirestoreCollection<chat>;
  ListadoDeChatsObservable:Observable<chat[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private objFirebase: AngularFirestore) {
    this.usuario = this.navParams.get('data');
    console.log("usu: "+this.usuario);
  }
  ionViewDidEnter(){
    this.coleccionTipadaFirebase= this.objFirebase.collection<chat>('PPS-4A', ref=> ref.orderBy('tiempo')); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeChatsObservable=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeChatsObservable.subscribe(x => {
        console.info("conexión correcta con Firebase",x);
    })
     console.log("fin de ionViewDidEnter");
  }//fin ionViewDidEnter

  public enviarMensaje(){
    //console.log("usuario:" +this.usuario +"----Mensaje: "+this.mensaje);
    this.agregarMensaje(this.mensaje);
    this.mensaje = "";
  }
  agregarMensaje(mensaje:string)
  {
   let nuevoMensaje:chat;
   nuevoMensaje= new chat(mensaje,this.usuario);
   let objetoJsonGenerico= nuevoMensaje.dameJSON();
   console.log (objetoJsonGenerico);
   this.objFirebase.collection<chat>('PPS-4A').add(objetoJsonGenerico).then(
    Retorno=>
    {
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      console.log(`id= ${Retorno.id} ,  mensaje= ${mensaje}`);
    }
    ).catch( error=>{
      console.error(error);
    });
  }
}
