import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public alertController: AlertController) {}
  ngOnInit() {

  }
ok(){this.presentAlert()}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Conoce más',
      subHeader: '',
      message: 'Chivo Wallet es la app del gobierno de El Salvador para la gestión de Bitcoin. El Salvador es el primer país en aceptar el Bitcoin como método de pago',
      buttons: ['OK']
    });

    

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

  recarga(){this.present()}
  async present() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Como recargar',
      subHeader: '',
      message: 'Presiona el botón Recargar tu Chivo wallet Ingresa en el formulario número DUI y monto en $USD que desees recargar Realiza el pago ingresando los datos de tu tarjeta Espera unos instantes a que la transacción se confirme',
      buttons: ['OK']
    });

    

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

}
