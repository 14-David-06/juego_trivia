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

// Función para iniciar el juego
function iniciarJuego() {
  juegoIniciado = true;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  puntuacion = 0;
  
  // Resetear preguntas usadas
  preguntasUsadas = [];
  
  // Cambiar botones
  document.getElementById('spin-btn').style.display = 'none';
  document.getElementById('girar-btn').style.display = 'block';
  
  // Actualizar contadores
  actualizarContadores();
  actualizarPuntuacion();
  
  alert('🎮 ¡Juego iniciado! Tienes 5 giros de ruleta. ¡Buena suerte!');
}

// Función para actualizar contadores
function actualizarContadores() {
  document.getElementById('correctas-count').textContent = respuestasCorrectas;
  document.getElementById('incorrectas-count').textContent = respuestasIncorrectas;
  document.getElementById('tiros-count').textContent = tirosRestantes;
}

// Función para girar la ruleta
function girarRuleta() {
  if (girando || !juegoIniciado || tirosRestantes <= 0) return;
  
  girando = true;
  const girarBtn = document.getElementById('girar-btn');
  const wheel = document.getElementById('wheel');
  
  // Deshabilitar botón
  girarBtn.disabled = true;
  girarBtn.textContent = '🌪 GIRANDO...';
  
  // Calcular rotación aleatoria
  const vueltas = Math.floor(Math.random() * 4) + 5; // 5-8 vueltas
  const anguloExtra = Math.floor(Math.random() * 360);
  const rotacionTotal = (vueltas * 360) + anguloExtra;
  
  // Aplicar rotación
  wheel.style.transform = `rotate(${rotacionTotal}deg)`;
  
  // Calcular pregunta ganadora - NUEVA LÓGICA PARA 20 SECCIONES
  const anguloNormalizado = (360 - (anguloExtra % 360)) % 360; // Invertir porque la ruleta gira en sentido contrario
  const segmento = Math.floor(anguloNormalizado / 18); // 360/20 = 18 grados por segmento
  const preguntaGanadora = todasLasPreguntas[segmento];
  
  // Esperar que termine la animación
  setTimeout(() => {
    girando = false;
    tirosRestantes--;
    actualizarContadores();
    
    if (tirosRestantes > 0) {
      girarBtn.disabled = false;
      girarBtn.textContent = '🎯 ¡GIRAR RULETA!';
    } else {
      girarBtn.disabled = true;
      girarBtn.textContent = '🏁 JUEGO TERMINADO';
      setTimeout(() => {
        mostrarResultadoFinal();
      }, 1000);
    }
    
    // Mostrar pregunta
    mostrarPregunta(preguntaGanadora);
  }, 4000);
}

// Función para mostrar pregunta
function mostrarPregunta(preguntaSeleccionada) {
  // Verificar si la pregunta ya fue usada
  if (preguntasUsadas.includes(preguntaSeleccionada.id)) {
    alert('Esta pregunta ya fue respondida. ¡Inténtalo de nuevo!');
    return;
  }
  
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
  preguntaActual = null;
  categoriaActual = null;
}

// Función para actualizar puntuación
function actualizarPuntuacion() {
  document.getElementById('score-display').textContent = `🏆 Puntuación: ${puntuacion}`;
}

// Función para mostrar resultado final
function mostrarResultadoFinal() {
  const porcentaje = Math.round((respuestasCorrectas / 5) * 100);
  let mensaje = '';
  let emoji = '';
  
  if (respuestasCorrectas >= 4) {
    emoji = '🏆';
    mensaje = `¡EXCELENTE! ${respuestasCorrectas}/5 correctas (${porcentaje}%)`;
  } else if (respuestasCorrectas >= 3) {
    emoji = '🎉';
    mensaje = `¡MUY BIEN! ${respuestasCorrectas}/5 correctas (${porcentaje}%)`;
  } else {
    emoji = '💪';
    mensaje = `¡SIGUE INTENTANDO! ${respuestasCorrectas}/5 correctas (${porcentaje}%)`;
  }
  
  alert(`${emoji} JUEGO TERMINADO\n\n${mensaje}\n\nPuntuación final: ${puntuacion} puntos`);
}

// Función para reiniciar juego
function reiniciarJuego() {
  puntuacion = 0;
  juegoIniciado = false;
  tirosRestantes = 5;
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  actualizarPuntuacion();
  actualizarContadores();
  cerrarPregunta();
  
  // Resetear preguntas usadas
  preguntasUsadas = [];
  
  // Resetear botones
  document.getElementById('spin-btn').style.display = 'block';
  document.getElementById('girar-btn').style.display = 'none';
  document.getElementById('girar-btn').disabled = false;
  document.getElementById('girar-btn').textContent = '🎯 ¡GIRAR RULETA!';
  
  // Resetear ruleta
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  
  alert('🔄 ¡Juego reiniciado! Haz clic en "INICIAR JUEGO" para comenzar.');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  actualizarPuntuacion();
  actualizarContadores();
  console.log('🌴 Trivia Fundación Guaicaramo iniciada');
  console.log('📚 Categorías disponibles:', categorias.map(c => c.titulo));
});