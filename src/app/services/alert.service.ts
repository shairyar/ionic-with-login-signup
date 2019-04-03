import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController) { }
  async alert($title, $message) {
    const alert = await this.alertCtrl.create({
      header: $title,
      message: $message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
