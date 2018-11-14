import { Component, OnInit } from '@angular/core';
/**
 * @class HeaderComponent
 * Componente de banner que muestra las peliculas mejor valoradas.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  images = ["https://www.filmsymphony.es/wp-content/uploads/2018/08/imagen-para-web.jpg",
    "https://dj5bdikd87jif.cloudfront.net/tablet/channels_cover/89szXtWz3DsNn_r2KgemSnRhMaJ_768x160.jpg",
    "https://malta-english.com/wp-content/uploads/2017/09/ME-header2-1.jpg"
  ];
}
