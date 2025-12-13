// Base de datos de preguntas y datos curiosos reorganizados por empresa
const preguntasPorEmpresa = {
  'fundacion': {
    color: '#D1BA30',
    logo: '/media/Logo-Fundacion.png',
    preguntas: [
      { id: 112, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿En qué ciudad nació la bebida Pony Malta?", pregunta_en: "In which city was the Pony Malta drink born?", opciones_es: ["Medellín", "Bogotá", "Barranquilla", "Bucaramanga"], opciones_en: ["Medellín", "Bogotá", "Barranquilla", "Bucaramanga"], respuestaCorrecta: 1 },
      { id: 113, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Qué club colombiano fue el primero en ganar la Copa Libertadores?", pregunta_en: "Which Colombian club was the first to win the Copa Libertadores?", opciones_es: ["América de Cali", "Millonarios", "Atlético Nacional", "Junior"], opciones_en: ["América de Cali", "Millonarios", "Atlético Nacional", "Junior"], respuestaCorrecta: 2 },
      { id: 114, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿En qué departamento queda el Caño Cristales, conocido como 'el río más bonito del mundo'?", pregunta_en: "In which department is Caño Cristales, known as 'the most beautiful river in the world' located?", opciones_es: ["Guaviare", "Meta", "Vaupés", "Putumayo"], opciones_en: ["Guaviare", "Meta", "Vaupés", "Putumayo"], respuestaCorrecta: 1 },
      { id: 115, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿En qué ciudad realizan la Feria de las Flores?", pregunta_en: "In which city is the Flower Fair held?", opciones_es: ["Bogotá", "Bucaramanga", "Medellín", "Pereira"], opciones_en: ["Bogotá", "Bucaramanga", "Medellín", "Pereira"], respuestaCorrecta: 2 },
      { id: 116, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Qué plato típico es tradicional del Valle del Cauca?", pregunta_en: "What typical dish is traditional from Valle del Cauca?", opciones_es: ["Lechona", "Pandebono", "Ajiaco", "Mute"], opciones_en: ["Lechona", "Pandebono", "Ajiaco", "Mute"], respuestaCorrecta: 1 },
      { id: 117, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Qué ciudad es conocida como 'La Ciudad Bonita'?", pregunta_en: "Which city is known as 'The Beautiful City'?", opciones_es: ["Manizales", "Bucaramanga", "Tunja", "Neiva"], opciones_en: ["Manizales", "Bucaramanga", "Tunja", "Neiva"], respuestaCorrecta: 1 }
    ]
  },
  'dao': {
    color: '#2D753E',
    logo: '/media/Logo-DAO.png',
    preguntas: [
      { id: 118, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Cuál de estos carnavales se celebra en Pasto?", pregunta_en: "Which of these carnivals is celebrated in Pasto?", opciones_es: ["Carnaval del Diablo", "Carnaval de Blancos y Negros", "Carnaval de Riosucio", "Carnaval de la Libertad"], opciones_en: ["Devil's Carnival", "Black and White Carnival", "Riosucio Carnival", "Freedom Carnival"], respuestaCorrecta: 1 },
      { id: 119, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Qué cadena montañosa atraviesa Colombia y se divide en tres?", pregunta_en: "Which mountain range crosses Colombia and divides into three?", opciones_es: ["Andes", "Alpes", "Himalaya", "Rocallosas"], opciones_en: ["Andes", "Alps", "Himalayas", "Rocky Mountains"], respuestaCorrecta: 0 },
      { id: 120, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Cuál fiesta llanera es famosa por el 'coleo'?", pregunta_en: "Which plains festival is famous for 'coleo'?", opciones_es: ["Festival del Porro", "Torneo Internacional del Joropo", "Festival del Bunde", "Festival del Retorno"], opciones_en: ["Porro Festival", "International Joropo Tournament", "Bunde Festival", "Return Festival"], respuestaCorrecta: 1 },
      { id: 121, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Qué lago es considerado el más grande de Colombia?", pregunta_en: "Which lake is considered the largest in Colombia?", opciones_es: ["Laguna de Tota", "Lago Calima", "Lago Guatavita", "Embalse del Guavio"], opciones_en: ["Tota Lagoon", "Calima Lake", "Guatavita Lake", "Guavio Reservoir"], respuestaCorrecta: 0 },
      { id: 122, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Qué fruta es típica de la región amazónica colombiana?", pregunta_en: "What fruit is typical of the Colombian Amazon region?", opciones_es: ["Uchuva", "Borojo", "Copoazú", "Guanábana"], opciones_en: ["Uchuva", "Borojo", "Copoazú", "Soursop"], respuestaCorrecta: 2 },
      { id: 123, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Qué selección eliminó a Colombia del Mundial 2014?", pregunta_en: "Which team eliminated Colombia from the 2014 World Cup?", opciones_es: ["Alemania", "Brasil", "Argentina", "Uruguay"], opciones_en: ["Germany", "Brazil", "Argentina", "Uruguay"], respuestaCorrecta: 1 }
    ]
  },
  'sirius': {
    color: '#00A3FF',
    logo: '/media/Logo-Sirius.png',
    preguntas: [
      { id: 124, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Qué producto es insignia en Norte de Santander?", pregunta_en: "What product is the flagship of Norte de Santander?", opciones_es: ["Café", "Cacao", "Tabaco", "Arroz"], opciones_en: ["Coffee", "Cocoa", "Tobacco", "Rice"], respuestaCorrecta: 2 },
      { id: 125, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Qué famoso humorista colombiano creó el personaje 'Doña Gloria'?", pregunta_en: "Which famous Colombian comedian created the character 'Doña Gloria'?", opciones_es: ["Andrés López", "José Ordóñez", "Hassam", "Iván Marín"], opciones_en: ["Andrés López", "José Ordóñez", "Hassam", "Iván Marín"], respuestaCorrecta: 2 },
      { id: 126, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Qué ciudad es conocida como la 'Capital Musical de Colombia'?", pregunta_en: "Which city is known as the 'Musical Capital of Colombia'?", opciones_es: ["Ibagué", "Manizales", "Armenia", "Popayán"], opciones_en: ["Ibagué", "Manizales", "Armenia", "Popayán"], respuestaCorrecta: 0 },
      { id: 127, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Cuál es el parque nacional natural más grande de Colombia?", pregunta_en: "What is the largest natural national park in Colombia?", opciones_es: ["Amacayacu", "Chiribiquete", "La Macarena", "Paramillo"], opciones_en: ["Amacayacu", "Chiribiquete", "La Macarena", "Paramillo"], respuestaCorrecta: 1 },
      { id: 128, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Qué ciudad es reconocida por el Sombrero Vueltiao?", pregunta_en: "Which city is recognized for the Sombrero Vueltiao?", opciones_es: ["Sincelejo", "Mompox", "Tuchín", "Montería"], opciones_en: ["Sincelejo", "Mompox", "Tuchín", "Montería"], respuestaCorrecta: 2 },
      { id: 129, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Qué artista colombiano creó la escultura 'La Gorda'?", pregunta_en: "Which Colombian artist created the sculpture 'La Gorda'?", opciones_es: ["Obregón", "Negret", "Botero", "Bacca"], opciones_en: ["Obregón", "Negret", "Botero", "Bacca"], respuestaCorrecta: 2 }
    ]
  },
  'guaicaramo': {
    color: '#D97523',
    logo: '/media/logo-Guaicaramo.png',
    preguntas: [
      { id: 100, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿En qué año iniciaron las siembras de palma en Guaicaramo?", pregunta_en: "What year did palm plantings begin in Guaicaramo?", opciones_es: ["1970", "1976", "1984", "1990"], opciones_en: ["1970", "1976", "1984", "1990"], respuestaCorrecta: 1 },
      { id: 101, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Cuál de estos productos hace parte del portafolio de la línea de Aceites?", pregunta_en: "Which of these products is part of the Oils line portfolio?", opciones_es: ["Aceite de soya", "Aceite crudo de palma (CPO)", "Aceite de girasol", "Aceite de almendra de cacao"], opciones_en: ["Soybean oil", "Crude palm oil (CPO)", "Sunflower oil", "Cocoa almond oil"], respuestaCorrecta: 1 },
      { id: 102, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué combinación de animales maneja el Hato Guaicaramo?", pregunta_en: "What combination of animals does Hato Guaicaramo manage?", opciones_es: ["Caballos fina sangre y búfalas", "Búfalos y ganado Nelore", "Ovinos y búfalos", "Cerdos y ganado blanco orejinegro"], opciones_en: ["Thoroughbred horses and buffaloes", "Buffaloes and Nelore cattle", "Sheep and buffaloes", "Pigs and white black-eared cattle"], respuestaCorrecta: 1 },
      { id: 103, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué producto lácteo es destacado dentro de la línea ganadera?", pregunta_en: "What dairy product is highlighted within the livestock line?", opciones_es: ["Queso costeño", "Mantequilla artesanal", "Mozzarella de búfala", "Yogurt griego"], opciones_en: ["Coastal cheese", "Artisanal butter", "Buffalo mozzarella", "Greek yogurt"], respuestaCorrecta: 2 },
      { id: 104, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Cuál de estas políticas hace parte del marco interno de la empresa?", pregunta_en: "Which of these policies is part of the company's internal framework?", opciones_es: ["Política de uso de redes sociales", "Política ambiental", "Política de transporte internacional", "Política de incentivos comerciales"], opciones_en: ["Social media use policy", "Environmental policy", "International transport policy", "Commercial incentives policy"], respuestaCorrecta: 1 },
      { id: 105, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué elemento se usa en la planta de beneficio para mejorar la gestión energética?", pregunta_en: "What element is used in the processing plant to improve energy management?", opciones_es: ["Paneles solares", "Biogas para el tratamiento de aguas residuales", "Turbinas eólicas internas", "Baterías industriales"], opciones_en: ["Solar panels", "Biogas for wastewater treatment", "Internal wind turbines", "Industrial batteries"], respuestaCorrecta: 1 },
      { id: 106, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué enfoque social impulsa Guaicaramo a través de su Fundación?", pregunta_en: "What social approach does Guaicaramo promote through its Foundation?", opciones_es: ["Urbanización de zonas nuevas", "Proyectos de educación, cultura y desarrollo comunitario", "Programas de turismo ecológico", "Subsidio total de vivienda rural"], opciones_en: ["Urbanization of new areas", "Education, culture and community development projects", "Ecological tourism programs", "Total rural housing subsidy"], respuestaCorrecta: 1 },
      { id: 107, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué fruto NO está incluido en sus líneas de negocio?", pregunta_en: "What fruit is NOT included in their business lines?", opciones_es: ["Palmito", "Naranja Valencia", "Limón Tahití", "Fruta de palma de aceite"], opciones_en: ["Palm heart", "Valencia orange", "Tahiti lemon", "Oil palm fruit"], respuestaCorrecta: 0 },
      { id: 108, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué tipo de aceite producen a partir de la fruta de palma alto oleico?", pregunta_en: "What type of oil do they produce from high oleic palm fruit?", opciones_es: ["Aceite rojo para cosméticos", "Aceite premium alto en contenidos oleicos", "Aceite esencial", "Aceite saborizado"], opciones_en: ["Red oil for cosmetics", "Premium oil high in oleic content", "Essential oil", "Flavored oil"], respuestaCorrecta: 1 },
      { id: 109, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Para qué sirve la torta de palmiste?", pregunta_en: "What is palm kernel cake used for?", opciones_es: ["Para producir jabones artesanales", "Para alimentar ganado", "Para producir fertilización nitrogenada", "Para fabricar papel"], opciones_en: ["To produce artisanal soaps", "To feed cattle", "To produce nitrogen fertilization", "To manufacture paper"], respuestaCorrecta: 1 },
      { id: 110, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué describe la visión de Guaicaramo?", pregunta_en: "What describes Guaicaramo's vision?", opciones_es: ["Ser líder nacional en entretenimiento", "Consolidarse como empresa agroindustrial sostenible e innovadora", "Convertirse en exportadora de petróleo", "Operar centros comerciales rurales"], opciones_en: ["To be a national leader in entertainment", "To consolidate as a sustainable and innovative agro-industrial company", "To become an oil exporter", "To operate rural shopping centers"], respuestaCorrecta: 1 },
      { id: 130, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué departamento es conocido como 'La despensa agrícola de Colombia'?", pregunta_en: "Which department is known as 'Colombia's agricultural pantry'?", opciones_es: ["Meta", "Tolima", "Nariño", "Norte de Santander"], opciones_en: ["Meta", "Tolima", "Nariño", "Norte de Santander"], respuestaCorrecta: 0 },
      { id: 131, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué departamento es famoso por la producción de achiras?", pregunta_en: "Which department is famous for achira production?", opciones_es: ["Huila", "Tolima", "Caquetá", "Cundinamarca"], opciones_en: ["Huila", "Tolima", "Caquetá", "Cundinamarca"], respuestaCorrecta: 0 },
      { id: 132, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Cuál es el plato típico más representativo de la costa Pacífica?", pregunta_en: "What is the most representative typical dish of the Pacific coast?", opciones_es: ["Bandeja paisa", "Arroz atollado", "Encocado de pescado", "Calentado"], opciones_en: ["Bandeja paisa", "Atollado rice", "Fish encocado", "Calentado"], respuestaCorrecta: 2 },
      { id: 133, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿En qué ciudad se realiza la Feria de Manizales?", pregunta_en: "In which city is the Manizales Fair held?", opciones_es: ["Pereira", "Armenia", "Manizales", "Ibagué"], opciones_en: ["Pereira", "Armenia", "Manizales", "Ibagué"], respuestaCorrecta: 2 },
      { id: 134, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Cuál es el equipo colombiano con más subcampeonatos de Copa Libertadores?", pregunta_en: "Which Colombian team has the most Copa Libertadores runner-up finishes?", opciones_es: ["Nacional", "América de Cali", "Medellín", "Junior"], opciones_en: ["Nacional", "América de Cali", "Medellín", "Junior"], respuestaCorrecta: 1 },
      { id: 135, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿En qué ciudad se encuentra la escultura de 'La Ventana al Mundo'?", pregunta_en: "In which city is the sculpture 'The Window to the World' located?", opciones_es: ["Bogotá", "Barranquilla", "Cali", "Cartagena"], opciones_en: ["Bogotá", "Barranquilla", "Cali", "Cartagena"], respuestaCorrecta: 1 }
    ]

  }
};

// Traducciones para la interfaz de usuario
const traduccionesUI = {
  es: {
    titulo: "🌴 TRIVIA GUAICARAMO 🌴",
    subtitulo: "¡Participa por nuestros premios!",
    puntuacion: "Puntuación",
    correctas: "Correctas",
    incorrectas: "Incorrectas",
    tirosRestantes: "Tiros restantes",
    reiniciar: "Reiniciar",
    iniciarJuego: "🚀 ¡INICIAR JUEGO!",
    girarRuleta: "🎯 ¡GIRAR RULETA!",
    girando: "🌪 GIRANDO...",
    juegoTerminado: "🏁 JUEGO TERMINADO",
    continuar: "Continuar",
    juegoReiniciado: "¡Juego Reiniciado!",
    mensajeReinicio: "¡Perfecto! El juego se ha reiniciado correctamente. Haz clic en \"INICIAR JUEGO\" para comenzar.",
    excelente: "¡EXCELENTE!",
    muyBien: "¡MUY BIEN!",
    sigueIntentando: "¡SIGUE INTENTANDO!",
    respuestasCorrectas: "Respuestas Correctas:",
    respuestasIncorrectas: "Respuestas Incorrectas:",
    porcentajeAcierto: "Porcentaje de Acierto:",
    puntuacionFinal: "Puntuación Final:",
    puntos: "puntos",
    reglaJuego: "Regla del juego",
    descripcionRegla: "Gira la ruleta, cada respuesta correcta te da 10 puntos, para ganar uno de nuestros premios debes acertar mínimo 3 preguntas.",
    desarrolladoPor: "Este juego fue desarrollado con mucho ❤️ por los niños del grupo de sistemas de la Fundación Guaicaramo.",
    reiniciarJuego: "¿Reiniciar Juego?",
    confirmarReinicio: "¿Estás seguro de que quieres reiniciar el juego? Se perderá todo el progreso actual.",
    siReiniciar: "Sí, Reiniciar",
    cancelar: "Cancelar",
    correcto: "¡Correcto!",
    incorrecto: "Incorrecto.",
    respuestaCorrectaEra: "La respuesta correcta era:",
    empresaTitulos: {
      'fundacion': 'FUNDACIÓN GUAICARAMO',
      'dao': 'DEL LLANO ALTO OLEICO – DAO',
      'sirius': 'SIRIUS REGENERATIVE',
      'guaicaramo': 'GUAICARAMO'
    }
  },
  en: {
    titulo: "🌴 TRIVIA GUAICARAMO 🌴",
    subtitulo: "Participate for our prizes!",
    puntuacion: "Score",
    correctas: "Correct",
    incorrectas: "Incorrect",
    tirosRestantes: "Spins remaining",
    reiniciar: "Restart",
    iniciarJuego: "🚀 START GAME!",
    girarRuleta: "🎯 SPIN ROULETTE!",
    girando: "🌪 SPINNING...",
    juegoTerminado: "🏁 GAME OVER",
    continuar: "Continue",
    juegoReiniciado: "Game Restarted!",
    mensajeReinicio: "Perfect! The game has been restarted successfully. Click \"START GAME\" to begin.",
    excelente: "EXCELLENT!",
    muyBien: "VERY GOOD!",
    sigueIntentando: "KEEP TRYING!",
    respuestasCorrectas: "Correct Answers:",
    respuestasIncorrectas: "Incorrect Answers:",
    porcentajeAcierto: "Success Rate:",
    puntuacionFinal: "Final Score:",
    puntos: "points",
    reglaJuego: "Game rule",
    descripcionRegla: "Spin the wheel, each correct answer gives you 10 points, to win one of our prizes you must get at least 3 questions right.",
    desarrolladoPor: "This game was developed with a lot of ❤️ by the children of the systems group of Fundación Guaicaramo.",
    reiniciarJuego: "Restart Game?",
    confirmarReinicio: "Are you sure you want to restart the game? All current progress will be lost.",
    siReiniciar: "Yes, Restart",
    cancelar: "Cancel",
    correcto: "Correct!",
    incorrecto: "Incorrect.",
    respuestaCorrectaEra: "The correct answer was:",
    empresaTitulos: {
      'fundacion': 'FUNDACIÓN GUAICARAMO',
      'dao': 'DEL LLANO ALTO OLEICO – DAO',
      'sirius': 'SIRIUS REGENERATIVE',
      'guaicaramo': 'GUAICARAMO'
    }
  }
};

// Variables globales
let puntuacion = 0;
let preguntaActual = null;
let girando = false;
let juegoIniciado = false;
let tirosRestantes = 5;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let preguntasUsadas = [];
let juegoTerminado = false;
let preguntasDelJuego = []; // Preguntas seleccionadas para este juego específico
let rotacionAcumulada = 0;
let idiomaActual = 'es';

// Función para seleccionar preguntas para el juego actual
function seleccionarPreguntasParaJuego() {
  const preguntasSeleccionadas = [];
  
  // Seleccionar 1 pregunta de cada empresa (4 preguntas)
  Object.keys(preguntasPorEmpresa).forEach(empresa => {
    const preguntasEmpresa = preguntasPorEmpresa[empresa].preguntas;
    if (preguntasEmpresa.length > 0) {
      const preguntaAleatoria = preguntasEmpresa[Math.floor(Math.random() * preguntasEmpresa.length)];
      preguntasSeleccionadas.push(preguntaAleatoria);
    }
  });
  
  // Seleccionar 1 pregunta adicional aleatoria de cualquier empresa (5ta pregunta)
  const todasLasPreguntas = Object.values(preguntasPorEmpresa).flatMap(e => e.preguntas);
  const preguntaAdicional = todasLasPreguntas[Math.floor(Math.random() * todasLasPreguntas.length)];
  preguntasSeleccionadas.push(preguntaAdicional);
  
  console.log('🎲 Preguntas seleccionadas para este juego:');
  preguntasSeleccionadas.forEach((p, index) => {
    console.log(`   ${index + 1}. ${p.empresa.toUpperCase()} (ID: ${p.id}) - ${p.color}`);
  });
  
  return preguntasSeleccionadas;
}

// Función para mostrar modal personalizado
function mostrarModalPersonalizado(icono, titulo, mensaje) {
  document.getElementById('alert-icon').textContent = icono;
  document.getElementById('alert-title').textContent = titulo;
  document.getElementById('alert-message').textContent = mensaje;
  document.getElementById('alert-modal').classList.add('show');
}

// Función para mostrar modal con auto-cierre
function mostrarModalConAutoCierre(icono, titulo, mensaje, tiempo = 2000) {
  document.getElementById('alert-icon').textContent = icono;
  document.getElementById('alert-title').textContent = titulo;
  document.getElementById('alert-message').textContent = mensaje;
  document.getElementById('alert-modal').classList.add('show');
  
  // Auto-cerrar después del tiempo especificado
  setTimeout(() => {
    cerrarModalAlerta();
  }, tiempo);
}

// Función para cerrar modal de alerta
function cerrarModalAlerta() {
  document.getElementById('alert-modal').classList.remove('show');
}

// Función para mostrar modal de confirmación de reinicio
function mostrarModalReinicio() {
  document.getElementById('confirm-restart-modal').classList.add('show');
}

// Función para cerrar modal de reinicio
function cerrarModalReinicio() {
  document.getElementById('confirm-restart-modal').classList.remove('show');
}

// Función para confirmar reinicio
function confirmarReinicio() {
  cerrarModalReinicio();
  ejecutarReinicio();
}

// Función para ejecutar el reinicio real
function ejecutarReinicio() {
  puntuacion = 0;
  juegoIniciado = false;
  juegoTerminado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  rotacionAcumulada = 0;
  actualizarPuntuacion();
  actualizarContadores();
  cerrarPregunta();
  
  // Resetear preguntas del juego
  preguntasUsadas = [];
  preguntasDelJuego = [];
  
  // Resetear botones
  document.getElementById('spin-btn').style.display = 'block';
  document.getElementById('girar-btn').style.display = 'none';
  document.getElementById('girar-btn').disabled = false;
  document.getElementById('girar-btn').textContent = traduccionesUI[idiomaActual].girarRuleta;
  
  // Resetear ruleta a posición inicial
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  actualizarRuleta();
  
  mostrarModalConAutoCierre('🔄', traduccionesUI[idiomaActual].juegoReiniciado, traduccionesUI[idiomaActual].mensajeReinicio, 2500);
}

// Función para iniciar el juego
function iniciarJuego() {
  console.log('🚀 Función iniciarJuego() llamada');
  
  try {
    console.log('Verificando elementos DOM...');
    const spinBtn = document.getElementById('spin-btn');
    const girarBtn = document.getElementById('girar-btn');
    const wheel = document.getElementById('wheel');
    
    if (!spinBtn) {
      console.error('❌ Elemento spin-btn no encontrado');
      return;
    }
    if (!girarBtn) {
      console.error('❌ Elemento girar-btn no encontrado');
      return;
    }
    if (!wheel) {
      console.error('❌ Elemento wheel no encontrado');
      return;
    }
    
    console.log('✅ Todos los elementos DOM encontrados');
    
    juegoIniciado = true;
    juegoTerminado = false;
    tirosRestantes = 5;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    puntuacion = 0;
    rotacionAcumulada = 0;
    
    console.log('Seleccionando preguntas...');
    // Seleccionar las 5 preguntas para este juego
    preguntasDelJuego = seleccionarPreguntasParaJuego();
    preguntasUsadas = [];
    
    console.log('Cambiando botones...');
    // Cambiar botones INMEDIATAMENTE
    spinBtn.style.display = 'none';
    girarBtn.style.display = 'block';
    
    console.log('Actualizando interfaz...');
    // Actualizar contadores
    actualizarContadores();
    actualizarPuntuacion();
    actualizarRuleta();
    
    // Resetear posición de la ruleta
    wheel.style.transform = 'rotate(0deg)';
    
    console.log('🎮 Juego iniciado correctamente');
    console.log(`📚 ${preguntasDelJuego.length} preguntas seleccionadas para este juego`);
    
  } catch (error) {
    console.error('❌ Error en iniciarJuego():', error);
  }
}

// Función para actualizar la ruleta dinámicamente
function actualizarRuleta() {
  const wheel = document.getElementById('wheel');
  if (!wheel) return;
  
  // MANTENER SIEMPRE 20 SECCIONES VISUALES para consistencia
  // Solo cambiar la lógica interna de qué preguntas están disponibles
  const gradientStops = [
    '#D1BA30 0deg 18deg',    /* Fundación */
    '#2D753E 18deg 36deg',   /* DAO */
    '#00A3FF 36deg 54deg',   /* Sirius */
    '#D97523 54deg 72deg',   /* Guaicaramo */
    '#D1BA30 72deg 90deg',   /* Fundación */
    '#2D753E 90deg 108deg',  /* DAO */
    '#00A3FF 108deg 126deg', /* Sirius */
    '#D97523 126deg 144deg', /* Guaicaramo */
    '#D1BA30 144deg 162deg', /* Fundación */
    '#2D753E 162deg 180deg', /* DAO */
    '#00A3FF 180deg 198deg', /* Sirius */
    '#D97523 198deg 216deg', /* Guaicaramo */
    '#D1BA30 216deg 234deg', /* Fundación */
    '#2D753E 234deg 252deg', /* DAO */
    '#00A3FF 252deg 270deg', /* Sirius */
    '#D97523 270deg 288deg', /* Guaicaramo */
    '#D1BA30 288deg 306deg', /* Fundación */
    '#2D753E 306deg 324deg', /* DAO */
    '#00A3FF 324deg 342deg', /* Sirius */
    '#D97523 342deg 360deg'  /* Guaicaramo */
  ];
  
  const conicGradient = `conic-gradient(${gradientStops.join(', ')})`;
  wheel.style.background = conicGradient;
}

// Función para actualizar contadores
function actualizarContadores() {
  const correctasCount = document.getElementById('correctas-count');
  const incorrectasCount = document.getElementById('incorrectas-count');
  const tirosCount = document.getElementById('tiros-count');
  if (correctasCount) correctasCount.textContent = respuestasCorrectas;
  if (incorrectasCount) incorrectasCount.textContent = respuestasIncorrectas;
  if (tirosCount) tirosCount.textContent = tirosRestantes;
}

// Función para girar la ruleta
function girarRuleta() {
  if (girando || !juegoIniciado || tirosRestantes <= 0 || juegoTerminado || preguntasDelJuego.length === 0) return;
  
  girando = true;
  const girarBtn = document.getElementById('girar-btn');
  const wheel = document.getElementById('wheel');
  
  // Deshabilitar botón
  girarBtn.disabled = true;
  girarBtn.textContent = traduccionesUI[idiomaActual].girando;
  
  // RESETEAR RULETA A 0° INSTANTÁNEAMENTE (sin animación, invisible al usuario)
  wheel.style.transition = 'none'; // Quitar animación temporalmente
  wheel.style.transform = 'rotate(0deg)'; // Resetear a posición inicial
  rotacionAcumulada = 0; // Resetear contador interno
  
  // Forzar el navegador a aplicar el cambio antes de continuar
  wheel.offsetHeight; // Trigger reflow
  
  // Calcular rotación final desde 0°
  const vueltas = Math.floor(Math.random() * 3) + 6; // 6-8 vueltas completas
  const anguloFinal = Math.floor(Math.random() * 360); // Ángulo final donde va a parar
  const rotacionTotal = (vueltas * 360) + anguloFinal;
  
  // Restaurar animación y aplicar rotación
  wheel.style.transition = 'transform 4s cubic-bezier(0.23, 1, 0.32, 1)';
  wheel.style.transform = `rotate(${rotacionTotal}deg)`;
  
  // Actualizar rotación acumulada para futuros cálculos
  rotacionAcumulada = rotacionTotal;
  
  // CÁLCULO PRECISO: El puntero apunta hacia abajo desde arriba (posición 12 o'clock = 0°)
  // Cuando la ruleta gira, el puntero fijo apunta a diferentes secciones
  
  // Normalizar el ángulo final entre 0 y 360
  let anguloApuntado = anguloFinal % 360;
  
  // IMPORTANTE: Ajustar por la posición inicial de los colores en el CSS
  // En el CSS, el primer color (Fundación #D1BA30) va de 0deg a 18deg
  // Esto significa que cuando el ángulo es 0-18, debe seleccionar Fundación
  
  const seccion = Math.floor(anguloApuntado / 18); // 18° por sección (360°/20 secciones)
  
  // Mapear sección a empresa según la definición del CSS
  // CSS: Fundación(0-18°), DAO(18-36°), Sirius(36-54°), Guaicaramo(54-72°), luego se repite
  const patronEmpresas = ['fundacion', 'dao', 'sirius', 'guaicaramo'];
  const empresaSeleccionada = patronEmpresas[seccion % 4];
  
  // Función helper para obtener el color esperado según el ángulo
  function obtenerColorEsperado(angulo) {
    const seccionColor = Math.floor((angulo % 360) / 18);
    const colores = ['#D1BA30', '#2D753E', '#00A3FF', '#D97523']; // Fundación, DAO, Sirius, Guaicaramo
    return colores[seccionColor % 4];
  }
  
  // Obtener preguntas disponibles (las del juego menos las ya usadas)
  const preguntasDisponibles = preguntasDelJuego.filter(p => !preguntasUsadas.includes(p.id));
  
  // Filtrar preguntas que coincidan exactamente con el color esperado
  const colorEsperado = obtenerColorEsperado(anguloApuntado);
  const preguntasColorCorrecto = preguntasDisponibles.filter(p => p.color === colorEsperado);
  
  let preguntaFinal;
  if (preguntasColorCorrecto.length > 0) {
    // Elegir una pregunta aleatoria que tenga el color correcto
    preguntaFinal = preguntasColorCorrecto[Math.floor(Math.random() * preguntasColorCorrecto.length)];
  } else {
    // Si no hay preguntas del color exacto, buscar de la empresa correspondiente
    const preguntasEmpresa = preguntasDisponibles.filter(p => p.empresa === empresaSeleccionada);
    if (preguntasEmpresa.length > 0) {
      preguntaFinal = preguntasEmpresa[Math.floor(Math.random() * preguntasEmpresa.length)];
      console.warn(`⚠️  No hay preguntas del color ${colorEsperado}, usando empresa ${empresaSeleccionada}`);
    } else if (preguntasDisponibles.length > 0) {
      // Último recurso: cualquier pregunta disponible del juego
      preguntaFinal = preguntasDisponibles[Math.floor(Math.random() * preguntasDisponibles.length)];
      console.warn(`⚠️  No hay preguntas del color ni empresa correctas, usando pregunta disponible del juego`);
    } else {
      // No hay preguntas disponibles, debería terminar el juego
      console.log('No hay más preguntas disponibles en este juego');
      return;
    }
  }
  
  console.log(`🎯 ANÁLISIS DETALLADO DEL GIRO:`);
  console.log(`   Rotación total: ${rotacionTotal}°`);
  console.log(`   Ángulo final donde para: ${anguloFinal}°`);
  console.log(`   Ángulo donde apunta el puntero: ${anguloApuntado}°`);
  console.log(`   Sección calculada: ${seccion} (de 20 secciones)`);
  console.log(`   Color esperado por CSS: ${colorEsperado}`);
  console.log(`   Empresa seleccionada: ${empresaSeleccionada}`);
  console.log(`   Color de la pregunta: ${preguntaFinal.color}`);
  console.log(`   Pregunta ID: ${preguntaFinal.id}`);
  console.log(`   ¿Colores coinciden?: ${colorEsperado === preguntaFinal.color ? '✅ SÍ' : '❌ NO'}`);
  
  // Esperar que termine la animación (mismo tiempo para consistencia)
  setTimeout(() => {
    girando = false;
    tirosRestantes--;
    actualizarContadores();
    
    // Verificar si quedan preguntas disponibles para el siguiente tiro
    const preguntasRestantes = preguntasDelJuego.filter(p => !preguntasUsadas.includes(p.id));
    
    if (tirosRestantes > 0 && preguntasRestantes.length > 0) {
      girarBtn.disabled = false;
      girarBtn.textContent = traduccionesUI[idiomaActual].girarRuleta;
    } else {
      juegoTerminado = true;
      girarBtn.disabled = true;
      girarBtn.textContent = traduccionesUI[idiomaActual].juegoTerminado;
    }
    
    // Mostrar pregunta
    mostrarPregunta(preguntaFinal);
  }, 4000); // Tiempo consistente de 4 segundos
}

// Función para mostrar pregunta
function mostrarPregunta(preguntaSeleccionada) {
  preguntaActual = preguntaSeleccionada;
  
  // Marcar pregunta como usada
  preguntasUsadas.push(preguntaSeleccionada.id);
  
  // Actualizar logo según la empresa
  const logoElement = document.querySelector('.question-logo');
  logoElement.src = preguntaSeleccionada.logo;
  logoElement.alt = `Logo ${preguntaSeleccionada.empresa}`;
  
  // Llenar modal con información de la pregunta
  const empresaTitulos = {
    'fundacion': 'FUNDACIÓN GUAICARAMO',
    'dao': 'DEL LLANO ALTO OLEICO – DAO',
    'sirius': 'SIRIUS REGENERATIVE',
    'guaicaramo': 'GUAICARAMO'
  };
  
  document.getElementById('category-title').textContent = traduccionesUI[idiomaActual].empresaTitulos[preguntaSeleccionada.empresa];
  document.getElementById('question-text').textContent = preguntaSeleccionada['pregunta_' + idiomaActual];
  
  // Crear opciones
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  preguntaSeleccionada['opciones_' + idiomaActual].forEach((opcion, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = opcion;
    button.onclick = () => verificarRespuesta(index);
    optionsContainer.appendChild(button);
  });
  
  // Mostrar modal
  document.getElementById('question-modal').classList.add('show');
  
  // Limpiar resultados anteriores
  document.getElementById('result-message').style.display = 'none';
  document.getElementById('close-btn').style.display = 'none';
}

// Función para verificar respuesta
function verificarRespuesta(indiceSeleccionado) {
  if (!preguntaActual) return;
  
  const esCorrecta = indiceSeleccionado === preguntaActual.respuestaCorrecta;
  const resultMessage = document.getElementById('result-message');
  const closeBtn = document.getElementById('close-btn');
  
  // Deshabilitar botones
  const opciones = document.querySelectorAll('.option-btn');
  opciones.forEach((btn, index) => {
    btn.onclick = null;
    if (index === preguntaActual.respuestaCorrecta) {
      btn.classList.add('correct');
    } else if (index === indiceSeleccionado && !esCorrecta) {
      btn.classList.add('incorrect');
    }
  });
  
  // Mostrar resultado
  let mensajeCompleto = '';
  if (esCorrecta) {
    puntuacion += 10;
    respuestasCorrectas++;
    mensajeCompleto = `
      <div style="margin-bottom: 15px;">
        🎉 <strong>${traduccionesUI[idiomaActual].correcto}</strong> +10 puntos
      </div>
    `;
    resultMessage.className = 'result-message result-correct';
    actualizarPuntuacion();
    actualizarContadores();
  } else {
    respuestasIncorrectas++;
    const respuestaCorrecta = preguntaActual['opciones_' + idiomaActual][preguntaActual.respuestaCorrecta];
    mensajeCompleto = `
      <div style="margin-bottom: 15px;">
        ❌ <strong>${traduccionesUI[idiomaActual].incorrecto}</strong> ${traduccionesUI[idiomaActual].respuestaCorrectaEra}<br>
        <strong>${respuestaCorrecta}</strong>
      </div>
    `;
    resultMessage.className = 'result-message result-incorrect';
    actualizarContadores();
  }
  
  // Insertar el HTML formateado
  resultMessage.innerHTML = mensajeCompleto;
  resultMessage.style.display = 'block';
  closeBtn.style.display = 'inline-block';
  closeBtn.textContent = traduccionesUI[idiomaActual].continuar;
}

// Función para cerrar pregunta
function cerrarPregunta() {
  document.getElementById('question-modal').classList.remove('show');
  
  // Marcar pregunta como usada (ya se hace en mostrarPregunta, pero por seguridad)
  if (preguntaActual && !preguntasUsadas.includes(preguntaActual.id)) {
    preguntasUsadas.push(preguntaActual.id);
  }
  
  preguntaActual = null;
  
  // Verificar si quedan preguntas disponibles
  const preguntasRestantes = preguntasDelJuego.filter(p => !preguntasUsadas.includes(p.id));
  
  // Si el juego terminó o no quedan preguntas, mostrar resultado final
  if (juegoTerminado || preguntasRestantes.length === 0) {
    setTimeout(() => {
      mostrarResultadoFinal();
    }, 500);
  }
}

// Función para actualizar puntuación
function actualizarPuntuacion() {
  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.textContent = `🏆 ${traduccionesUI[idiomaActual].puntuacion}: ${puntuacion}`;
  }
}

// Función para mostrar resultado final
function mostrarResultadoFinal() {
  const porcentaje = Math.round((respuestasCorrectas / 5) * 100);
  let emoji = '';
  let titulo = '';
  
  if (respuestasCorrectas >= 4) {
    emoji = '🏆';
    titulo = traduccionesUI[idiomaActual].excelente;
  } else if (respuestasCorrectas >= 3) {
    emoji = '🎉';
    titulo = traduccionesUI[idiomaActual].muyBien;
  } else {
    emoji = '💪';
    titulo = traduccionesUI[idiomaActual].sigueIntentando;
  }
  
  // Actualizar modal de resultado
  document.getElementById('result-icon').textContent = emoji;
  document.getElementById('result-title').textContent = titulo;
  
  const statsHTML = `
    <p><strong>${traduccionesUI[idiomaActual].respuestasCorrectas}</strong> ${respuestasCorrectas}/5</p>
    <p><strong>${traduccionesUI[idiomaActual].respuestasIncorrectas}</strong> ${respuestasIncorrectas}/5</p>
    <p class="percentage"><strong>${traduccionesUI[idiomaActual].porcentajeAcierto}</strong> ${porcentaje}%</p>
    <p class="score"><strong>${traduccionesUI[idiomaActual].puntuacionFinal}</strong> ${puntuacion} ${traduccionesUI[idiomaActual].puntos}</p>
  `;
  
  document.getElementById('result-stats').innerHTML = statsHTML;
  document.getElementById('result-modal').classList.add('show');
  
  // Actualizar texto del botón continuar en el modal de resultado
  const resultContinueBtn = document.querySelector('#result-modal .modal-btn.confirm-btn');
  if (resultContinueBtn) resultContinueBtn.textContent = traduccionesUI[idiomaActual].continuar;
}

// Función para cerrar resultado final y reiniciar automáticamente
function cerrarResultadoFinal() {
  document.getElementById('result-modal').classList.remove('show');
  
  // Reiniciar el juego automáticamente
  puntuacion = 0;
  juegoIniciado = false;
  juegoTerminado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  rotacionAcumulada = 0;
  
  // Resetear preguntas del juego
  preguntasUsadas = [];
  preguntasDelJuego = [];
  
  // Resetear botones
  document.getElementById('spin-btn').style.display = 'block';
  document.getElementById('girar-btn').style.display = 'none';
  document.getElementById('girar-btn').disabled = false;
  document.getElementById('girar-btn').textContent = traduccionesUI[idiomaActual].girarRuleta;
  
  // Resetear ruleta a posición inicial
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  actualizarPuntuacion();
  actualizarContadores();
  actualizarRuleta();
  
  console.log('🔄 Juego reiniciado automáticamente después del resultado final');
}

// Función para reiniciar juego (ahora recarga la página)
function reiniciarJuego() {
  // Recargar la página completamente
  location.reload();
}

// Función para actualizar textos de la UI según el idioma
function actualizarTextosUI() {
  const titulo = document.getElementById('titulo');
  if (titulo) titulo.textContent = traduccionesUI[idiomaActual].titulo;
  const subtitulo = document.getElementById('subtitulo');
  if (subtitulo) subtitulo.textContent = traduccionesUI[idiomaActual].subtitulo;
  actualizarPuntuacion();
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length >= 3) {
    statItems[0].innerHTML = `✅ ${traduccionesUI[idiomaActual].correctas}: <span id="correctas-count">${respuestasCorrectas}</span>`;
    statItems[1].innerHTML = `❌ ${traduccionesUI[idiomaActual].incorrectas}: <span id="incorrectas-count">${respuestasIncorrectas}</span>`;
    statItems[2].innerHTML = `🎯 ${traduccionesUI[idiomaActual].tirosRestantes}: <span id="tiros-count">${tirosRestantes}</span>`;
  }
  const resetBtn = document.querySelector('.reset-btn');
  if (resetBtn) resetBtn.textContent = `🔄 ${traduccionesUI[idiomaActual].reiniciar}`;
  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) spinBtn.innerHTML = traduccionesUI[idiomaActual].iniciarJuego;
  const girarBtn = document.getElementById('girar-btn');
  if (girarBtn) girarBtn.innerHTML = traduccionesUI[idiomaActual].girarRuleta;
  const instructionsH3 = document.querySelector('.instructions h3');
  if (instructionsH3) instructionsH3.textContent = `🎮 ${traduccionesUI[idiomaActual].reglaJuego}`;
  const puntosTexto = idiomaActual === 'es' ? '10 puntos' : '10 points';
  const instructionsP = document.querySelector('.instructions p');
  if (instructionsP) instructionsP.innerHTML = traduccionesUI[idiomaActual].descripcionRegla.replace(puntosTexto, `<strong>${puntosTexto}</strong>`);
  const footerP = document.querySelector('.instructions .instructions p');
  if (footerP) footerP.textContent = traduccionesUI[idiomaActual].desarrolladoPor;
  const reiniciarTitulo = document.getElementById('reiniciar-titulo');
  if (reiniciarTitulo) reiniciarTitulo.textContent = traduccionesUI[idiomaActual].reiniciarJuego;
  const reiniciarMensaje = document.getElementById('reiniciar-mensaje');
  if (reiniciarMensaje) reiniciarMensaje.textContent = traduccionesUI[idiomaActual].confirmarReinicio;
  const btnSiReiniciar = document.getElementById('btn-si-reiniciar');
  if (btnSiReiniciar) btnSiReiniciar.textContent = traduccionesUI[idiomaActual].siReiniciar;
  const btnCancelar = document.getElementById('btn-cancelar');
  if (btnCancelar) btnCancelar.textContent = traduccionesUI[idiomaActual].cancelar;
  
  // Actualizar botones de continuar
  const closeBtn = document.getElementById('close-btn');
  if (closeBtn) closeBtn.textContent = traduccionesUI[idiomaActual].continuar;
  const resultContinueBtn = document.querySelector('#result-modal .modal-btn.confirm-btn');
  if (resultContinueBtn) resultContinueBtn.textContent = traduccionesUI[idiomaActual].continuar;
}



// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌴 DOM cargado - Iniciando trivia...');
  
  try {
    actualizarPuntuacion();
    actualizarContadores();
    actualizarRuleta();
    
    const totalPreguntas = Object.values(preguntasPorEmpresa).reduce((sum, e) => sum + e.preguntas.length, 0);
    console.log('📚 Preguntas disponibles:', totalPreguntas);
    
    // Verificar que el botón esté disponible
    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) {
      console.log('✅ Botón iniciar juego encontrado y listo');
    } else {
      console.error('❌ Botón iniciar juego NO encontrado');
    }
    
    console.log('🌴 Trivia Fundación Guaicaramo iniciada correctamente');
    
  } catch (error) {
    console.error('❌ Error en la inicialización:', error);
  }
});