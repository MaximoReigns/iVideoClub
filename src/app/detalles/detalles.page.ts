import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage {

  constructor() { }

  movies = [
    {
      id: 1,
      poster: '../../assets/The-Godfather.jpg',
      title: 'El Padrino',
      director: 'Francis Ford Coppola',
      anio: '1972',
      sipnosis: `Michael Corleone, heredero del imperio de don Vito Corleone, intenta rehabilitarse 
      socialmente y legitimizar todas las posesiones de la familia negociando con el Vaticano. 
      Después de luchar toda su vida se encuentra cansado y centra todas sus esperanzas en encontrar 
      a un sucesor que se haga cargo de los negocios.`
    },
    {
      id: 2,
      poster: '../../assets/The-Godfather-Part-II.jpg',
      title: 'El Padrino (Parte ll)',
      director: 'Francis Ford Coppola',
      anio: '1974',
      sipnosis: `Michael Corleone lidera el imperio criminal de su padre, mientras que se recuerda 
      el ascenso al poder del joven Vito.`
    },
    {
      id: 3,
      poster: '../../assets/Schindlers-List.jpg',
      title: 'La lista de Schindler',
      director: 'Steven Spielberg',
      anio: '1993',
      sipnosis: `El empresario alemán Oskar Schindler, miembro del Partido Nazi, 
      pone en marcha un elaborado, costoso y arriesgado plan para salvar a más de 
      mil judíos del Holocausto.`
    },
    {
      id: 4,
      poster: '../../assets/Pulp-Fiction.jpg',
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      anio: '1994',
      sipnosis: `La vida de un boxeador, dos sicarios, la esposa de un gánster 
      y dos bandidos se entrelaza en una historia de violencia y redención.`
    },
    {
      id: 5,
      poster: '../../assets/Cadena-Perpetua.jpg',
      title: 'Cadena Perpetua',
      director: 'Frank Darabont',
      anio: '1994',
      sipnosis: `Un hombre inocente es enviado a una corrupta penitenciaria de Maine en 1947 
      y sentenciado a dos cadenas perpetuas por un doble asesinato.`
    }
  ]
}
