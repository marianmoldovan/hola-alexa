let plants = {
  'Alternanthera' : {
    'sinonimos': [],
    'agua': 'cada dos días',
    'luz': 'sol'
  },
  'Amoena' : {
    'sinonimos': ['Loteria', 'Aglonema silver'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Belen' : {
    'sinonimos': ['Alegrías guineanas'],
    'agua': 'todos los días',
    'sol': 'sol'
  },
  'Bromelia' : {
    'sinonimos': ['Guzmania', 'Pluma indio'],
    'agua': 'dos veces a la semana',
    'sol': 'sol'
  },
  'Bugambilia' : {
    'sinonimos': ['Buganvilla'],
    'agua': 'dos veces a la semana',
    'sol': 'sol'
  },
  'Xanadu' : {
    'sinonimos': ['Xandú', 'Filodendro'],
    'agua': 'dos veces a la semana',
    'sol': 'sol'
  },
  'Filodendro verde' : {
    'sinonimos': [],
    'agua': 'dos veces a la semana',
    'sol': 'sol'
  },
  'Buxus' : {
    'sinonimos': ['Boje'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Caladium' : {
    'sinonimos': ['Oreja de elefante'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Cissus' : {
    'sinonimos': ['Hiedra'],
    'agua': 'cada dos días',
    'sol': 'semisombra'
  },
  'Cáscara de nuez' : {
    'sinonimos': ['Cola de rata'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Coleo' : {
    'sinonimos': [],
    'agua': 'todos los días',
    'sol': 'semisombra'
  },
  'Corona de cristo' : {
    'sinonimos': ['Corona de espinas'],
    'agua': 'una vez a la semana',
    'sol': 'sol'
  },
  'Croton' : {
    'sinonimos': ['Croto', 'Croton Petra'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Eva pinta' : {
    'sinonimos': ['Eva morada'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Helecho' : {
    'sinonimos': ['Helecho Boston', 'Helecho Calaguala', 'Helecho Canguro', 'Boston', 'Calaguala', 'Canguro'],
    'agua': 'cada dos días',
    'sol': 'sombra'
  },
  'Hoja elegante' : {
    'sinonimos': [],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Hoja maicera' : {
    'sinonimos': [],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Ipomea' : {
    'sinonimos': ['Ipomoea', 'Campanillas', 'Don Diego de día', 'Campanilla morada'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Lengua de suegra' : {
    'sinonimos': ['Lengua de vaca', 'Lengua de tigre',  'Espada del Rey'],
    'agua': 'dos veces al mes',
    'sol': 'semisombra'
  },
  'Liriope' : {
    'sinonimos': ['Serpentina'],
    'agua': 'una vez a la semana',
    'sol': 'semisombra'
  },
  'Listones' : {
    'sinonimos': ['Lazo de amor', 'Cinta', 'Malamadre'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Plomela' : {
    'sinonimos': ['Canción de la India', 'Dracaena reflexa'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Mosquetera' : {
    'sinonimos': ['Costilla de Adán', 'Monstera Deliciosa'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Muñeca' : {
    'sinonimos': ['Drácena roja', 'Palmita roja'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Pachypodium' : {
    'sinonimos': ['Palma de Madagascar', 'Palmera de Madagascar'],
    'agua': 'cada dos días',
    'sol': 'sol'
  },
  'Palma' : {
    'sinonimos': ['Areca', 'Abanico', 'Licuala', 'Camedor', 'Camedora', 'Echeve', 'Estrella'],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Cica' : {
    'sinonimos': ['Palma falsa', 'Palma japonesa'],
    'agua': 'cada dos semanas',
    'sol': 'semisombra'
  },
  'Pata de elefante' : {
    'sinonimos': ['Nolina', 'Beucarnea'],
    'agua': 'dos veces al mes',
    'sol': 'semisombra'
  },
  'Peperonia' : {
    'sinonimos': [],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Rayo de sol' : {
    'sinonimos': ['Rayito de sol'],
    'agua': 'cada dos días',
    'sol': 'sol'
  },
  'Suculenta' : {
    'sinonimos': [],
    'agua': 'cada dos días',
    'sol': 'sol'
  },
  'Árbol de jade' : {
    'sinonimos': [],
    'agua': 'dos veces a la semana',
    'sol': 'semisombra'
  },
  'Teléfono' : {
    'sinonimos': ['Potho', 'Pothus'],
    'agua': 'cada dos días',
    'sol': 'sombra'
  },
}

module.exports.plants = plants

module.exports.findPlant = (name) => {
  for (let plant of Object.keys(plants)) {
    if(name.toLowerCase() === plant.toLowerCase()) return plants[plant]
    for (let plantSynonim of plants[plant].sinonimos) {
      if(name.toLowerCase() === plantSynonim.toLowerCase()) return plants[plant]
    }
  }
}
