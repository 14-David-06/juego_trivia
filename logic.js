// Base de datos de preguntas por categorías
const preguntasDatabase = {
  fundacion: [
    {
      pregunta: "¿Hace cuantos años se fundó la Fundación Guaicaramo?",
      opciones: ["12 AÑOS", "15 AÑOS", "8 AÑOS"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Cuántas personas se han visto beneficiadas en las zonas de influencia?",
      opciones: ["+ 5.000 beneficiados", "+ 10.000 beneficiados", "No ha habido beneficiados"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Cuántos son los municipios impactados por la labor realizada por la fundación Guaicaramo?",
      opciones: ["32 Municipios", "4 Municipios", "12 Municipios"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Hasta que año se está desarrollando todo el plan educativo de la Fundación Guaicaramo?",
      opciones: ["2026", "2030", "2032"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuál es el principal objetivo de la Fundación Guaicaramo?",
      opciones: ["Mitigar necesidades básicas insatisfechas en Educación de la primera infancia", "Dar apoyo en gestión social en los territorios", "Todas las anteriores"],
      respuestaCorrecta: 2
    }
  ],
  
  palma: [
    {
      pregunta: "¿Hace cuantos años se fundó Del Llano Alto Oleico - DAO?",
      opciones: ["12 AÑOS", "10 AÑOS", "8 AÑOS"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué tipo de Aceite de fruto de Palma comercializamos?",
      opciones: ["Aceite de fruto de palma convencional", "Aceite de fruto de Palma Alto Oleico", "Aceite de Aguacate"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Dónde están ubicadas nuestras plantaciones aliadas?",
      opciones: ["Mani – Casanare", "Bogotá – Cundinamarca", "Barranca de Upía – Meta"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Cuáles de los siguientes son productos con semilla?",
      opciones: ["Canola, Girasol y Soya", "Aguacate, Oliva y Palma Alto Oleico", "Ninguna de las anteriores"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Qué certificaciones respaldan el compromiso de DAO con la sostenibilidad?",
      opciones: ["RSPO, Cero Deforestación, APSColombia", "ISCC, EUDR, Seedless Oils", "Todas las anteriores"],
      respuestaCorrecta: 2
    }
  ],
  
  sostenibilidad: [
    {
      pregunta: "¿Cuál es la principal biomasa que utiliza Sirius Regenerative para producir biochar?",
      opciones: ["Cascarilla de palma africana", "Cáscara de arroz", "Bagazo de caña"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Cuál de los siguientes productos hace parte del portafolio de Sirius Regenerative?",
      opciones: ["Biochar Blend", "Sirius Bacter (biológico)", "Todas las anteriores"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿En cuántas hectáreas ha trabajado Sirius con aplicaciones de biochar y bioinsumos?",
      opciones: ["Más de 6.000 hectáreas", "Más de 10.000 hectáreas", "Más de 13.000 hectáreas"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Cuál es el principal beneficio del biochar producido por Sirius Regenerative?",
      opciones: ["Control de malezas", "Captura y almacenamiento de carbono en el suelo", "Transformación de biomasa, fertilización y remoción de carbono de la atmósfera"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Cómo se llama el proceso por medio del cual se transforman biomasas en biochar?",
      opciones: ["Pirolisis", "Compostaje", "Fermentación anaerobia"],
      respuestaCorrecta: 0
    }
  ],
  
  historia: [
    {
      pregunta: "Durante los últimos 4 años, Doña Pepa ha tenido un propósito principal. ¿Cuál ha sido?",
      opciones: ["La productividad", "El buen trato", "La disciplina", "El orden y aseo"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "Generamos alianzas con empresas del sector para proteger y conservar al:",
      opciones: ["Oso palmero", "Chigüiro", "Venado", "Jaguar"],
      respuestaCorrecta: 0
    },
    {
      pregunta: "En este Congreso estamos lanzando el libro titulado:",
      opciones: ["La expedición de Doña Pepa", "Los caminos del oso palmero", "Las aventuras de Doña Pepa", "El viaje del chigüiro"],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué tipo de proyecto sostenible implementado en Guaicaramo ayuda a mejorar la calidad de las aguas residuales?",
      opciones: ["Reciclaje", "Humedales artificiales", "Siembra de árboles", "Compostaje"],
      respuestaCorrecta: 1
    },
    {
      pregunta: "En el tratamiento de aguas residuales, logramos obtener un recurso energético. ¿Cuál es?",
      opciones: ["Carbón", "Gasolina", "Diésel", "Biogás"],
      respuestaCorrecta: 3
    }
  ]
};

// Categorías para la ruleta
const categorias = [
  { nombre: 'fundacion', titulo: 'FUNDACIÓN GUAICARAMO' },
  { nombre: 'palma', titulo: 'DEL LLANO ALTO OLEICO – DAO' },
  { nombre: 'sostenibilidad', titulo: 'SIRIUS REGENERATIVE SOLUTIONS' },
  { nombre: 'historia', titulo: 'GUAICARAMO' }
];

// Variables globales
let puntuacion = 0;
let preguntaActual = null;
let categoriaActual = null;
let girando = false;
let preguntasUsadas = {
  fundacion: [],
  palma: [],
  sostenibilidad: [],
  historia: []
};

// Función para girar la ruleta
function girarRuleta() {
  if (girando) return;
  
  girando = true;
  const spinBtn = document.getElementById('spin-btn');
  const wheel = document.getElementById('wheel');
  
  // Deshabilitar botón
  spinBtn.disabled = true;
  spinBtn.textContent = '🌪 GIRANDO...';
  
  // Calcular rotación aleatoria
  const vueltas = Math.floor(Math.random() * 4) + 5; // 5-8 vueltas
  const anguloExtra = Math.floor(Math.random() * 360);
  const rotacionTotal = (vueltas * 360) + anguloExtra;
  
  // Aplicar rotación - AQUÍ ESTABA EL ERROR
  wheel.style.transform = `rotate(${rotacionTotal}deg)`;
  
  // Calcular categoría ganadora
  const anguloNormalizado = anguloExtra % 360;
  const segmento = Math.floor(anguloNormalizado / 90); // 360/4 = 90 grados por segmento
  const categoriaGanadora = categorias[segmento];
  
  // Esperar que termine la animación
  setTimeout(() => {
    girando = false;
    spinBtn.disabled = false;
    spinBtn.textContent = '🎯 ¡GIRAR RULETA!';
    
    // Mostrar pregunta
    mostrarPregunta(categoriaGanadora);
  }, 4000);
}

// Función para mostrar pregunta
function mostrarPregunta(categoria) {
  categoriaActual = categoria;
  const preguntas = preguntasDatabase[categoria.nombre];
  
  if (!preguntas || preguntas.length === 0) {
    alert('No hay preguntas disponibles para esta categoría');
    return;
  }
  
  // Filtrar preguntas no utilizadas
  const preguntasDisponibles = preguntas.filter((_, index) => 
    !preguntasUsadas[categoria.nombre].includes(index)
  );
  
  if (preguntasDisponibles.length === 0) {
    alert('Ya has respondido todas las preguntas de esta categoría. ¡Felicitaciones!');
    return;
  }
  
  // Seleccionar pregunta aleatoria de las disponibles
  const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
  const preguntaSeleccionada = preguntasDisponibles[indiceAleatorio];
  const indiceOriginal = preguntas.indexOf(preguntaSeleccionada);
  
  preguntaActual = preguntaSeleccionada;
  
  // Marcar pregunta como usada
  preguntasUsadas[categoria.nombre].push(indiceOriginal);
  
  // Actualizar logo según la categoría
  const logoElement = document.querySelector('.question-logo');
  let logoSrc = '';
  let logoAlt = '';
  
  switch(categoria.nombre) {
    case 'fundacion':
      logoSrc = '/media/Logo-Fundacion.png';
      logoAlt = 'Logo Fundación Guaicaramo';
      break;
    case 'palma':
      logoSrc = '/media/Logo-DAO.png';
      logoAlt = 'Logo DAO';
      break;
    case 'sostenibilidad':
      logoSrc = '/media/Logo-Sirius.png';
      logoAlt = 'Logo Sirius Regenerative';
      break;
    case 'historia':
      logoSrc = '/media/logo-Guaicaramo.png';
      logoAlt = 'Logo Guaicaramo';
      break;
  }
  
  logoElement.src = logoSrc;
  logoElement.alt = logoAlt;
  
  // Llenar modal
  document.getElementById('category-title').textContent = categoria.titulo;
  document.getElementById('question-text').textContent = preguntaActual.pregunta;
  
  // Crear opciones
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  preguntaActual.opciones.forEach((opcion, index) => {
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
    resultMessage.textContent = '🎉 ¡Correcto! +10 puntos';
    resultMessage.className = 'result-message result-correct';
    actualizarPuntuacion();
  } else {
    const respuestaCorrecta = preguntaActual.opciones[preguntaActual.respuestaCorrecta];
    // AQUÍ ESTABA OTRO ERROR
    resultMessage.textContent = `❌ Incorrecto. La respuesta correcta era: ${respuestaCorrecta}`;
    resultMessage.className = 'result-message result-incorrect';
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
  // AQUÍ ESTABA OTRO ERROR
  document.getElementById('score-display').textContent = `🏆 Puntuación: ${puntuacion}`;
}

// Función para reiniciar juego
function reiniciarJuego() {
  puntuacion = 0;
  actualizarPuntuacion();
  cerrarPregunta();
  
  // Resetear preguntas usadas
  preguntasUsadas = {
    fundacion: [],
    palma: [],
    sostenibilidad: [],
    historia: []
  };
  
  // Resetear ruleta
  document.getElementById('wheel').style.transform = 'rotate(0deg)';
  
  alert('🔄 ¡Juego reiniciado! Puntuación: 0');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  actualizarPuntuacion();
  console.log('🌴 Trivia Fundación Guaicaramo iniciada');
  console.log('📚 Categorías disponibles:', categorias.map(c => c.titulo));
});