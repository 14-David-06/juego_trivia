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
  { id: 14, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cuál es el principal beneficio del biochar producido por Sirius Regenerative?", opciones: ["Control de malezas", "Captura y almacenamiento de carbono en el suelo", "Transformación de biomasa, fertilización y remoción de carbono de la atmósfera"], respuestaCorrecta: 1 },
  
  { id: 15, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "¿Qué tipo de proyecto sostenible implementado en Guaicaramo ayuda a mejorar la calidad de las aguas residuales?", opciones: ["Reciclaje", "Humedales artificiales", "Siembra de árboles", "Compostaje"], respuestaCorrecta: 1 },
  { id: 16, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta: "¿Cuál es el principal objetivo de la Fundación Guaicaramo?", opciones: ["Mitigar necesidades básicas insatisfechas en Educación de la primera infancia", "Dar apoyo en gestión social en los territorios", "Todas las anteriores"], respuestaCorrecta: 2 },
  { id: 17, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta: "¿Qué certificaciones respaldan el compromiso de DAO con la sostenibilidad?", opciones: ["RSPO, Cero Deforestación, APSColombia", "ISCC, EUDR, Seedless Oils", "Todas las anteriores"], respuestaCorrecta: 2 },
  { id: 18, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta: "¿Cómo se llama el proceso por medio del cual se transforman biomasas en biochar?", opciones: ["Pirolisis", "Compostaje", "Fermentación anaerobia"], respuestaCorrecta: 0 },
  { id: 19, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta: "En el tratamiento de aguas residuales, logramos obtener un recurso energético. ¿Cuál es?", opciones: ["Carbón", "Gasolina", "Diésel", "Biogás"], respuestaCorrecta: 3 }
];

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
let preguntasDisponibles = [...todasLasPreguntas];
let rotacionAcumulada = 0;

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

// Función para iniciar el juego
function iniciarJuego() {
  juegoIniciado = true;
  juegoTerminado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  puntuacion = 0;
  rotacionAcumulada = 0;
  
  // Resetear preguntas usadas y disponibles
  preguntasUsadas = [];
  preguntasDisponibles = [...todasLasPreguntas];
  
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
}

// Función para actualizar la ruleta dinámicamente
function actualizarRuleta() {
  const wheel = document.getElementById('wheel');
  
  // Calcular ángulo por sección
  const numSecciones = preguntasDisponibles.length;
  const anguloPorSeccion = 360 / numSecciones;
  
  // Generar gradiente cónico dinámico
  let gradientStops = [];
  let currentAngle = 0;
  
  preguntasDisponibles.forEach((pregunta, index) => {
    const nextAngle = currentAngle + anguloPorSeccion;
    gradientStops.push(`${pregunta.color} ${currentAngle}deg ${nextAngle}deg`);
    currentAngle = nextAngle;
  });
  
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
  if (girando || !juegoIniciado || tirosRestantes <= 0 || juegoTerminado || preguntasDisponibles.length === 0) return;
  
  girando = true;
  const girarBtn = document.getElementById('girar-btn');
  const wheel = document.getElementById('wheel');
  
  // Deshabilitar botón
  girarBtn.disabled = true;
  girarBtn.textContent = '🌪 GIRANDO...';
  
  // Calcular rotación fuerte y consistente para cada giro
  const vueltas = Math.floor(Math.random() * 3) + 6; // 6-8 vueltas (más vueltas)
  const anguloExtra = Math.floor(Math.random() * 360);
  const nuevaRotacion = (vueltas * 360) + anguloExtra;
  
  // Sumar a la rotación acumulada para evitar giros hacia atrás
  rotacionAcumulada += nuevaRotacion;
  
  // Aplicar la rotación acumulada total
  wheel.style.transform = `rotate(${rotacionAcumulada}deg)`;
  
  // Calcular pregunta ganadora basada solo en el ángulo extra (no en la rotación total)
  const numSecciones = preguntasDisponibles.length;
  const anguloPorSeccion = 360 / numSecciones;
  const anguloNormalizado = (360 - (anguloExtra % 360)) % 360;
  const segmento = Math.floor(anguloNormalizado / anguloPorSeccion);
  const preguntaGanadora = preguntasDisponibles[segmento];
  
  // Esperar que termine la animación (mismo tiempo para consistencia)
  setTimeout(() => {
    girando = false;
    tirosRestantes--;
    actualizarContadores();
    
    if (tirosRestantes > 0 && preguntasDisponibles.length > 1) {
      girarBtn.disabled = false;
      girarBtn.textContent = '🎯 ¡GIRAR RULETA!';
    } else {
      juegoTerminado = true;
      girarBtn.disabled = true;
      girarBtn.textContent = '🏁 JUEGO TERMINADO';
    }
    
    // Mostrar pregunta
    mostrarPregunta(preguntaGanadora);
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
  
  // Mostrar resultado
  if (esCorrecta) {
    puntuacion += 10;
    respuestasCorrectas++;
    resultMessage.textContent = '🎉 ¡Correcto! +10 puntos';
    resultMessage.className = 'result-message result-correct';
    actualizarPuntuacion();
    actualizarContadores();
  } else {
    respuestasIncorrectas++;
    const respuestaCorrecta = preguntaActual.opciones[preguntaActual.respuestaCorrecta];
    resultMessage.textContent = `❌ Incorrecto. La respuesta correcta era: ${respuestaCorrecta}`;
    resultMessage.className = 'result-message result-incorrect';
    actualizarContadores();
  }
  
  resultMessage.style.display = 'block';
  closeBtn.style.display = 'inline-block';
}

// Función para cerrar pregunta
function cerrarPregunta() {
  document.getElementById('question-modal').classList.remove('show');
  
  // Eliminar la pregunta respondida de las disponibles
  preguntasDisponibles = preguntasDisponibles.filter(p => p.id !== preguntaActual.id);
  
  // Actualizar ruleta después de responder (solo colores, sin logos)
  if (preguntasDisponibles.length > 0) {
    actualizarRuleta();
  }
  
  preguntaActual = null;
  
  // Si el juego terminó, mostrar resultado final
  if (juegoTerminado || preguntasDisponibles.length === 0) {
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
  
  // Reiniciar automáticamente el juego
  setTimeout(() => {
    ejecutarReinicioAutomatico();
  }, 500);
}

// Función para ejecutar reinicio automático después del juego
function ejecutarReinicioAutomatico() {
  puntuacion = 0;
  juegoIniciado = false;
  juegoTerminado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  rotacionAcumulada = 0;
  actualizarPuntuacion();
  actualizarContadores();
  
  // Resetear preguntas usadas y disponibles
  preguntasUsadas = [];
  preguntasDisponibles = [...todasLasPreguntas];
  
  // Resetear botones
  document.getElementById('spin-btn').style.display = 'block';
  document.getElementById('girar-btn').style.display = 'none';
  document.getElementById('girar-btn').disabled = false;
  document.getElementById('girar-btn').textContent = '🎯 ¡GIRAR RULETA!';
  
  // Resetear ruleta a posición inicial
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  actualizarRuleta();
  
  console.log('🔄 Juego reiniciado automáticamente después de finalizar');
}

// Función para reiniciar juego (ahora recarga la página)
function reiniciarJuego() {
  // Mostrar confirmación antes de recargar
  if (confirm('¿Estás seguro de que quieres reiniciar? Se recargará la página y se perderá todo el progreso.')) {
    location.reload();
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  actualizarPuntuacion();
  actualizarContadores();
  actualizarRuleta();
  console.log('🌴 Trivia Fundación Guaicaramo iniciada');
  console.log('📚 Preguntas disponibles:', todasLasPreguntas.length);
});
