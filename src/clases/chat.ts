export class chat{
    usuario:string;
    mensaje: string;
    tiempo:string;
    id:string;

    constructor(mensaje:string, usuario:string){
      this.mensaje=mensaje;
      this.tiempo=Date();
      this.usuario=usuario;
    }

    dameJSON(){
      return JSON.parse( JSON.stringify(this));
    }
  }