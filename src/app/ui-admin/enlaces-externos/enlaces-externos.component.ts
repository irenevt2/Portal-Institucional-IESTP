import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlaces-externos',
  templateUrl: './enlaces-externos.component.html',
  styleUrls: ['./enlaces-externos.component.scss']
})

export class EnlacesExternosComponent implements OnInit {
  
  @Input() estilo = "grid";

  enlaces = [
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_754241a8424947ecb86344dc8fe5fdc3~mv2.png/v1/crop/x_26,y_11,w_132,h_67/fill/w_185,h_92,al_c,lg_1,q_85/ESCALE.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_4fedfa19fe80447ba34ab15bf234af9f~mv2.png/v1/crop/x_13,y_5,w_161,h_81/fill/w_225,h_113,al_c,lg_1,q_85/carnet.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_4a4e39ae40374c59b670288d87fa1526~mv2.png/v1/crop/x_27,y_13,w_125,h_63/fill/w_175,h_87,al_c,lg_1,q_85/BOLSA%20DE%20TRABAJO.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_2f849e8a34ce45a68314a06377be86b1~mv2.jpg/v1/fill/w_215,h_117,al_c,q_80,usm_0.66_1.00_0.01/superatec.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://conecta.minedu.gob.pe/dist/imgUrl/logo_conecta.png'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'http://www.minedu.gob.pe/superiortecnologica/imagenes/boton-registra.png'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_08bb4de545614fd48dba116c532621db~mv2.png/v1/fill/w_230,h_117,al_c,lg_1,q_85/pro.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_02ef88127b274685bed028bca4c8760e~mv2.png/v1/crop/x_0,y_10,w_177,h_88/fill/w_236,h_118,al_c,lg_1,q_85/boton-ley-insitutos.webp'
    },
    {
      link: 'https://dredmdd.gob.pe/',
      imgUrl: 'https://static.wixstatic.com/media/af0b66_02ef88127b274685bed028bca4c8760e~mv2.png/v1/crop/x_0,y_10,w_177,h_88/fill/w_236,h_118,al_c,lg_1,q_85/boton-ley-insitutos.webp'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
