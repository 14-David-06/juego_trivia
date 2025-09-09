// Base de datos de preguntas reorganizada para 20 secciones individuales
const todasLasPreguntas = [
  // FUNDACIÓN - 5 preguntas (amarillo #D1BA30)
  { id: 0, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Hace cuantos años se fundó la Fundación Guaicaramo?", opciones: ["12 AÑOS", "15 AÑOS", "8 AÑOS"], respuestaCorrecta: 0 },
  { id: 1, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Hace cuantos años se fundó Del Llano Alto Oleico - DAO?", opciones: ["12 AÑOS", "10 AÑOS", "8 AÑOS"], respuestaCorrecta: 1 },
  { id: 2, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cuál es la principal biomasa que utiliza Sirius Regenerative para producir biochar?", opciones: ["Cascarilla de palma africana", "Cáscara de arroz", "Bagazo de caña"], respuestaCorrecta: 0 },
  { id: 3, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "Durante los últimos 4 años, Doña Pepa ha tenido un propósito principal. ¿Cuál ha sido?", opciones: ["La productividad", "El buen trato", "La disciplina", "El orden y aseo"], respuestaCorrecta: 1 },
  { id: 4, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Cuántas personas se han visto beneficiadas en las zonas de influencia?", opciones: ["+ 5.000 beneficiados", "+ 10.000 beneficiados", "No ha habido beneficiados"], respuestaCorrecta: 1 },
  
  { id: 5, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Qué tipo de Aceite de fruto de Palma comercializamos?", opciones: ["Aceite de fruto de palma convencional", "Aceite de fruto de Palma Alto Oleico", "Aceite de Aguacate"], respuestaCorrecta: 1 },
  { id: 6, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cuál de los siguientes productos hace parte del portafolio de Sirius Regenerative?", opciones: ["Biochar Blend", "Sirius Bacter (biológico)", "Todas las anteriores"], respuestaCorrecta: 2 },
  { id: 7, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "Generamos alianzas con empresas del sector para proteger y conservar al:", opciones: ["Oso palmero", "Chigüiro", "Venado", "Jaguar"], respuestaCorrecta: 0 },
  { id: 8, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Cuántos son los municipios impactados por la labor realizada por la fundación Guaicaramo?", opciones: ["32 Municipios", "4 Municipios", "12 Municipios"], respuestaCorrecta: 1 },
  { id: 9, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Dónde están ubicadas nuestras plantaciones aliadas?", opciones: ["Mani – Casanare", "Bogotá – Cundinamarca", "Barranca de Upía – Meta"], respuestaCorrecta: 2 },
  
  { id: 10, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿En cuántas hectáreas ha trabajado Sirius con aplicaciones de biochar y bioinsumos?", opciones: ["Más de 6.000 hectáreas", "Más de 10.000 hectáreas", "Más de 13.000 hectáreas"], respuestaCorrecta: 0 },
  { id: 11, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "En este Congreso estamos lanzando el libro titulado:", opciones: ["La expedición de Doña Pepa", "Los caminos del oso palmero", "Las aventuras de Doña Pepa", "El viaje del chigüiro"], respuestaCorrecta: 2 },
  { id: 12, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Hasta que año se está desarrollando todo el plan educativo de la Fundación Guaicaramo?", opciones: ["2026", "2030", "2032"], respuestaCorrecta: 2 },
  { id: 13, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Cuáles de los siguientes son productos con semilla?", opciones: ["Canola, Girasol y Soya", "Aguacate, Oliva y Palma Alto Oleico", "Ninguna de las anteriores"], respuestaCorrecta: 0 },
  { id: 14, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cuáles son los principales beneficios del biochar?", opciones: ["Regula el pH del suelo y aumenta la capacidad de intercambio catiónico (CIC)", "Retiene humedad y mejora la resiliencia en épocas de sequía", "Captura y fija carbono atmosférico por miles de años, además de mejorar la porosidad y oxigenación del suelo", "Contribuye a la regeneración: mejora la salud del suelo y se convierte en una vivienda ideal para los microorganismos, gracias a su nanostructura", "Todas las anteriores"], respuestaCorrecta: 4 },

  { id: 15, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "¿Qué tipo de proyecto sostenible implementado en Guaicaramo ayuda a mejorar la calidad de las aguas residuales?", opciones: ["Reciclaje", "Humedales artificiales", "Siembra de árboles", "Compostaje"], respuestaCorrecta: 1 },
  { id: 16, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Cuál es el principal objetivo de la Fundación Guaicaramo?", opciones: ["Mitigar necesidades básicas insatisfechas en Educación de la primera infancia", "Dar apoyo en gestión social en los territorios", "Todas las anteriores"], respuestaCorrecta: 2 },
  { id: 17, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Qué certificaciones respaldan el compromiso de DAO con la sostenibilidad?", opciones: ["RSPO, Cero Deforestación, APSColombia", "ISCC, EUDR, Seedless Oils", "Todas las anteriores"], respuestaCorrecta: 2 },
  { id: 18, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cómo se llama el proceso por medio del cual se transforman biomasas en biochar?", opciones: ["Pirolisis", "Compostaje", "Fermentación anaerobia"], respuestaCorrecta: 0 },
  { id: 19, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "En el tratamiento de aguas residuales, logramos obtener un recurso energético. ¿Cuál es?", opciones: ["Carbón", "Gasolina", "Diésel", "Biogás"], respuestaCorrecta: 3 }
];

// Base de datos de datos curiosos por empresa
const datosCuriosos = {
  'fundacion': [
    "🌱 Origen social: Nació en 2014 como vehículo independiente de inversión social del grupo.",
    "🏘️ Impacto real: En 2022 benefició a más de 1.000 familias en Barranca de Upía y Villanueva.",
    "👵 Identidad pedagógica: 'Doña Pepa' es el personaje que acompaña el bienestar de la comunidad.",
    "🌍 Estrategia sostenible: Foco en Desarrollo Territorial Sostenible en su zona de influencia.",
    "🤝 Brazo social: Se presenta como la extensión del grupo para transformar las dinámicas regionales."
  ],
  'dao': [
    "💯 Visión clara: Su promesa es 'nunca perder tu confianza'.",
    "📈 Crecimiento sostenido: Comunican aceptación continua del mercado año tras año.",
    "🌍 Agricultura consciente: Reconocen a la 'madre tierra' como base de su narrativa.",
    "⚙️ Innovación tecnológica: Mejoras en planta para eficiencia logística y de procesos.",
    "🌐 Nuestro sitio web es bilingüe, permitiendo una navegación global."
  ],
  'guaicaramo': [
    "⚡ Energía limpia: Generan energía renovable con biogás de aguas residuales.",
    "🦋 Biodiversidad activa: Mantienen Áreas de Alto Valor de Conservación (AVC) y concursos de avistamiento.",
    "📸 Fauna protegida: Cámaras trampa han registrado más de 30 especies, incluido el ocelote.",
    "🔄 Diversificación: Negocios en aceites, cítricos, ganadería y biocombustibles.",
    "🏅 Certificaciones verdes: RSPO, ISCC y Cero Deforestación avalan su gestión ambiental."
  ],
  'sirius': [
    "🔬 Evolución tecnológica: Rediseño de planta de pirólisis en 2024 (Rafaela 2.0).",
    "🎯 Portafolio innovador: Biochar Blend, Star Dust y Sirius Bacter.",
    "🎯 Meta 2030: Regenerar 100.000 ha; ya reportan 8.750 ha y 2.450 t de CO₂ capturadas.",
    "🤖 Triple enfoque: Integran pirólisis + biotecnología + IA (Agentics, Piroliapp y Alma).",
    "📍 Raíz local: Operan desde Barranca de Upía con datos de contacto claros en su web."
  ]
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

// Función para seleccionar preguntas para el juego actual
function seleccionarPreguntasParaJuego() {
  const preguntasPorEmpresa = {
    'fundacion': todasLasPreguntas.filter(p => p.empresa === 'fundacion'),
    'dao': todasLasPreguntas.filter(p => p.empresa === 'dao'),
    'sirius': todasLasPreguntas.filter(p => p.empresa === 'sirius'),
    'guaicaramo': todasLasPreguntas.filter(p => p.empresa === 'guaicaramo')
  };
  
  const preguntasSeleccionadas = [];
  
  // Seleccionar 1 pregunta de cada empresa (4 preguntas)
  Object.keys(preguntasPorEmpresa).forEach(empresa => {
    const preguntasEmpresa = preguntasPorEmpresa[empresa];
    if (preguntasEmpresa.length > 0) {
      const preguntaAleatoria = preguntasEmpresa[Math.floor(Math.random() * preguntasEmpresa.length)];
      preguntasSeleccionadas.push(preguntaAleatoria);
    }
  });
  
  // Seleccionar 1 pregunta adicional aleatoria de cualquier empresa (5ta pregunta)
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
  document.getElementById('girar-btn').textContent = '🎯 ¡GIRAR RULETA!';
  
  // Resetear ruleta a posición inicial
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  actualizarRuleta();
  
  mostrarModalConAutoCierre('🔄', '¡Juego Reiniciado!', '¡Perfecto! El juego se ha reiniciado correctamente. Haz clic en "INICIAR JUEGO" para comenzar.', 2500);
}

// Función para iniciar el juego
function iniciarJuego() {
  juegoIniciado = true;
  juegoTerminado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  puntuacion = 0;
  rotacionAcumulada = 0;
  
  // Seleccionar las 5 preguntas para este juego
  preguntasDelJuego = seleccionarPreguntasParaJuego();
  preguntasUsadas = [];
  
  // Cambiar botones INMEDIATAMENTE
  document.getElementById('spin-btn').style.display = 'none';
  document.getElementById('girar-btn').style.display = 'block';
  
  // Actualizar contadores
  actualizarContadores();
  actualizarPuntuacion();
  actualizarRuleta();
  
  // Resetear posición de la ruleta
  const wheel = document.getElementById('wheel');
  wheel.style.transform = 'rotate(0deg)';
  
  console.log('🎮 Juego iniciado correctamente');
  console.log(`📚 ${preguntasDelJuego.length} preguntas seleccionadas para este juego`);
}

// Función para actualizar la ruleta dinámicamente
function actualizarRuleta() {
  const wheel = document.getElementById('wheel');
  
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
  document.getElementById('correctas-count').textContent = respuestasCorrectas;
  document.getElementById('incorrectas-count').textContent = respuestasIncorrectas;
  document.getElementById('tiros-count').textContent = tirosRestantes;
}

// Función para girar la ruleta
function girarRuleta() {
  if (girando || !juegoIniciado || tirosRestantes <= 0 || juegoTerminado || preguntasDelJuego.length === 0) return;
  
  girando = true;
  const girarBtn = document.getElementById('girar-btn');
  const wheel = document.getElementById('wheel');
  
  // Deshabilitar botón
  girarBtn.disabled = true;
  girarBtn.textContent = '🌪 GIRANDO...';
  
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
      girarBtn.textContent = '🎯 ¡GIRAR RULETA!';
    } else {
      juegoTerminado = true;
      girarBtn.disabled = true;
      girarBtn.textContent = '🏁 JUEGO TERMINADO';
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
  
  document.getElementById('category-title').textContent = empresaTitulos[preguntaSeleccionada.empresa];
  document.getElementById('question-text').textContent = preguntaSeleccionada.pregunta;
  
  // Crear opciones
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  preguntaSeleccionada.opciones.forEach((opcion, index) => {
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
  
  // Obtener dato curioso correspondiente a esta pregunta
  const datosCuriosEmpresa = datosCuriosos[preguntaActual.empresa];
  const indicePregunta = todasLasPreguntas.filter(p => p.empresa === preguntaActual.empresa).findIndex(p => p.id === preguntaActual.id);
  const datoCurioso = datosCuriosEmpresa[indicePregunta % datosCuriosEmpresa.length];
  
  // Mostrar resultado
  let mensajeCompleto = '';
  if (esCorrecta) {
    puntuacion += 10;
    respuestasCorrectas++;
    mensajeCompleto = `
      <div style="margin-bottom: 15px;">
        🎉 <strong>¡Correcto!</strong> +10 puntos
      </div>
      <div style="padding: 10px; background: rgba(255,255,255,0.2); border-radius: 8px; border-left: 4px solid #22543d;">
        <strong>💡 Dato curioso:</strong><br>
        ${datoCurioso}
      </div>
    `;
    resultMessage.className = 'result-message result-correct';
    actualizarPuntuacion();
    actualizarContadores();
  } else {
    respuestasIncorrectas++;
    const respuestaCorrecta = preguntaActual.opciones[preguntaActual.respuestaCorrecta];
    mensajeCompleto = `
      <div style="margin-bottom: 15px;">
        ❌ <strong>Incorrecto.</strong> La respuesta correcta era:<br>
        <strong>${respuestaCorrecta}</strong>
      </div>
      <div style="padding: 10px; background: rgba(255,255,255,0.2); border-radius: 8px; border-left: 4px solid #822727;">
        <strong>💡 Dato curioso:</strong><br>
        ${datoCurioso}
      </div>
    `;
    resultMessage.className = 'result-message result-incorrect';
    actualizarContadores();
  }
  
  // Insertar el HTML formateado
  resultMessage.innerHTML = mensajeCompleto;
  resultMessage.style.display = 'block';
  closeBtn.style.display = 'inline-block';
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
  document.getElementById('score-display').textContent = `🏆 Puntuación: ${puntuacion}`;
}

// Función para mostrar resultado final
function mostrarResultadoFinal() {
  const porcentaje = Math.round((respuestasCorrectas / 5) * 100);
  let emoji = '';
  let titulo = '';
  
  if (respuestasCorrectas >= 4) {
    emoji = '🏆';
    titulo = '¡EXCELENTE!';
  } else if (respuestasCorrectas >= 3) {
    emoji = '🎉';
    titulo = '¡MUY BIEN!';
  } else {
    emoji = '💪';
    titulo = '¡SIGUE INTENTANDO!';
  }
  
  // Actualizar modal de resultado
  document.getElementById('result-icon').textContent = emoji;
  document.getElementById('result-title').textContent = titulo;
  
  const statsHTML = `
    <p><strong>Respuestas Correctas:</strong> ${respuestasCorrectas}/5</p>
    <p><strong>Respuestas Incorrectas:</strong> ${respuestasIncorrectas}/5</p>
    <p class="percentage"><strong>Porcentaje de Acierto:</strong> ${porcentaje}%</p>
    <p class="score"><strong>Puntuación Final:</strong> ${puntuacion} puntos</p>
  `;
  
  document.getElementById('result-stats').innerHTML = statsHTML;
  document.getElementById('result-modal').classList.add('show');
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
  document.getElementById('girar-btn').textContent = '🎯 ¡GIRAR RULETA!';
  
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

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  actualizarPuntuacion();
  actualizarContadores();
  actualizarRuleta();
  console.log('🌴 Trivia Fundación Guaicaramo iniciada');
  console.log('📚 Preguntas disponibles:', todasLasPreguntas.length);
});