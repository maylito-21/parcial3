import { Component, OnInit } from '@angular/core';
interface barrido {
  logo: string,
  descripcion: string
}

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
})
export class BeneficiosPage implements OnInit {
  barridos: barrido[] = [
    {
        logo: 'logo-bitcoin',
        descripcion: 'Recibiras $30 en BTC para consumos'
    },
    {
        logo: 'thumbs-up-outline',
        descripcion: 'Sin comisiones'
    },
    {
        logo: 'logo-usd',
        descripcion: 'No consume saldo'
    },
    {
        logo: 'business-outline',
        descripcion: 'Compra en comercios'
    },
    {
        logo: 'people-circle-outline',
        descripcion: 'Muy facil registro'
    },
    {
        logo: 'swap-horizontal-outline',
        descripcion: 'Envío de dinero sin intermediarios,24/7 y sin comisiones'
    },
    {
        logo: 'cash-outline',
        descripcion: 'Puedes retirar dólares cuando quieras'
    }
]
  fotos=[
    {
      src: 'https://chivowallet.com/assets/img/screenshots/1.98f5b0610941.webp'
    },
    {
      src: 'https://chivowallet.com/assets/img/screenshots/2.98f5b0610941.webp'
    },
    {
      src: 'https://chivowallet.com/assets/img/screenshots/3.98f5b0610941.webp'
    },
    {
      src: 'https://chivowallet.com/assets/img/screenshots/recibir_bitcoin.webp'
    },
    {
      src: 'https://chivowallet.com/assets/img/screenshots/5-360.98f5b0610941.webp'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
