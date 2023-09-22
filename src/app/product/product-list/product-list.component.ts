import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imagewidth:number=50;
  imageMargin:number=2;
  listFilter:string='';

  productos:any[]=[
    {
      "productoID":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio": 120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imagenUrl":"https://s1.eestatic.com/2022/05/05/motor/670193791_224087697_1706x960.jpg"
    },
    {
      "productoID":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 5 2022",
      "precio": 180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "imagenUrl":"https://i.blogs.es/bc9d95/kia-ev6-2022-1600-01/450_1000.jpg"
    },
    {
      "productoID":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"enero 2 2023",
      "precio": 200000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://www.diariomotor.com/imagenes/2019/10/coche-stock-ford-fiesta.jpg"
    }
  ]

}
