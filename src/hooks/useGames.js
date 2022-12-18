import manhunt2 from '../images/juegos/manhunt2.jpg'
import indianaLego from '../images/juegos/indiana_jones.jpg'
import godOfWar from '../images/juegos/god_of_war2.jpg'
import obscure from '../images/juegos/obscure.jpg'
import silentHill2 from '../images/juegos/silent_hill2.jpg'
import crash from '../images/juegos/crash.jpg'
import flushed from '../images/juegos/flushed.jpg'
import resident from '../images/juegos/resident_evil_4.jpg'
import brothers from '../images/juegos/brothers.jpg'

export const useGames = () => {
  return [
    {category: 2,
        name: 'Manhunt 2',
        img: manhunt2,
        id: '123',
        description: 'Llega a nuestros hogares uno de los juegos que más polémicas ha levantado en sus dias, debido a la elevada dosis de violencia explícita que ofrece y a la temática descarnada que da vida a su argumento: Manhunt 2'
       },
       {
         category: 3,
         name: 'Indiana Jones',
         img: indianaLego,
         id: '456',
         description: 'Indy vuelve con tanto humor como siempre pero perdiendo la frescura del juego original.'
       },
       {
         category: 1,
         name: 'God of war 2',
         img: godOfWar,
         id: '789',
         description: 'Después de ser repudiado por el dios Zeus, Kratos, el nuevo Dios de la Guerra, pierde el favor y reconocimiento del Olimpo. Con una brutalidad que ya es santo y seña de su personalidad y la sed de venganza después de esta decisión, nuestro protagonista inicia un viaje con el que vengarse y desquitarse de todos estos hechos. Un trabajo mitológico de gran envergadura que nos pondrá delante de las criaturas más peligrosas en la secuela de uno de los títulos más esperados de PlayStation 2.'
       },
       {
         category: 2,
         name: 'Obscure',
         img: obscure,
         id: '101',
         description: 'Sin muchas pretensiones y cargado de novedades, así es como se presenta Obscure, un gran juego que emula las peripecias vistas en la película ‘The Faculty’.'
       },
       {
         category: 2,
         name: 'Silent Hill 2',
         img: silentHill2,
         id: '102',
         description: 'Uno de los mejores juegos de terror de toda la historia. Tras recibir una carta de su mujer fallecida, James se dirige al lugar donde compartieron tantos recuerdoscon la esperanza de verla una vez más: Silent Hill. Allí, junto al lago, encuentra a una inquietante mujer que se parece a ella... «Me llamo... Maria», dice la mujer, sonriendo. Su rostro, su voz... Es igual que ella. Los creadores de The Medium actualizan los gráficos con la última tecnología para toda una nueva generación de jugadores.'
       },
       {
         category: 3,
         name: 'Crash: TWOC',
         img: crash,
         id: '103',
         description: 'La historia, toma lugar después de lo sucedido en Crash Bandicoot 3 Warped, Cortex y la mayoría se reúnen en una base espacial donde Uka–Uka dice que la mayoría de acciones de villanía de Cortex esta por los pisos, por lo que Cortex replica que no es su culpa si no de la intromisión de Crash en sus planes malignos, sin embargo Uka prefiere que planeé otro plan para derrotar a Crash y el mundo, al final N. Trophy y N. Gin, revelan el plan de Cortex, a creado un SuperBandicoot durante el tiempo de la última derrota y que éste, solo necesita un elemento clave, Uka–Uka recuerda a los elementales por lo que opta Cortex por los elementales y que con la energía de cada uno podía destruir cualquier cosa a su paso y acabar con el entrometimiento de Crash eternamente'
       },
       {
        category: 3,
        name: 'Flushed away',
        img: flushed,
        id: '104',
        description: 'Lo que el agua se llevo, juego inspirado en la pelicula!'
      },
      {
        category: 1,
        name: 'Resident Evil 4',
        img: resident,
        id: '105',
        description: 'Resident Evil 4 llega a PS4 remasterizado. Leon Kennedy, protagonista de Resident Evil 2, viaja a España para hacer frente a oleadas de infectados en una cuarta parte que tiene más acción que los primeros juegos, una perspectiva sobre el hombro, y una historia que nos irá sumergiendo poco a poco.'
      },
      {
        category: 1,
        name: 'Brothers',
        img: brothers,
        id: '106',
        description: 'Mi padre solía decir que todo soldado tiene dos familias, una con la que nace y otra con la que muere. Llevo ocho días aquí, ocho días mandando una escuadra que no quería liderar, ocho días viendo a mis hombres, a mi familia, matar y morir…, ocho días deseando que esto termine…'
      }
  ]
}
