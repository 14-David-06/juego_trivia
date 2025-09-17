// Base de datos de preguntas y datos curiosos reorganizados por empresa
const preguntasPorEmpresa = {
  'fundacion': {
    color: '#D1BA30',
    logo: '/media/Logo-Fundacion.png',
    preguntas: [
      { id: 0, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Hace cuantos años se fundó la Fundación Guaicaramo?", pregunta_en: "How many years ago was Fundación Guaicaramo founded?", opciones_es: ["12 AÑOS", "15 AÑOS", "8 AÑOS"], opciones_en: ["12 YEARS", "15 YEARS", "8 YEARS"], respuestaCorrecta: 0 },
      { id: 1, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Cuántas personas se han visto beneficiadas en las zonas de influencia?", pregunta_en: "How many people have benefited in the areas of influence?", opciones_es: ["+ 5.000 beneficiados", "+ 10.000 beneficiados", "No ha habido beneficiados"], opciones_en: ["+ 5,000 benefited", "+ 10,000 benefited", "No one has been benefited"], respuestaCorrecta: 1 },
      { id: 2, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Cuántos son los municipios impactados por la labor realizada por la fundación Guaicaramo?", pregunta_en: "How many municipalities have been impacted by Fundación Guaicaramo's work?", opciones_es: ["32 Municipios", "4 Municipios", "12 Municipios"], opciones_en: ["32 Municipalities", "4 Municipalities", "12 Municipalities"], respuestaCorrecta: 1 },
      { id: 3, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Cuáles de estos conceptos NO hacen parte del modelo de trabajo de la Fundación Guaicaramo?", pregunta_en: "Which of these concepts is NOT part of Fundación Guaicaramo's work model?", opciones_es: ["El valor compartido", "El fortalecimiento institucional", "El ordenamiento territorial", "El trabajo en el ser", "La construcción de parques"], opciones_en: ["Shared value", "Institutional strengthening", "Territorial planning", "Work on being", "Construction of parks"], respuestaCorrecta: 4 },
      { id: 4, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Con qué propósito se creó la Fundación Guaicaramo?", pregunta_en: "For what purpose was Fundación Guaicaramo created?", opciones_es: ["Ser un vehículo de responsabilidad social empresarial.", "Impulsar la filantropía en la zona de Barranca de Upía.", "Ahorrar en impuestos.", "Ser un agente de cambio local a través de un modelo de desarrollo territorial sostenible."], opciones_en: ["To be a vehicle for corporate social responsibility.", "To promote philanthropy in the Barranca de Upía area.", "To save on taxes.", "To be a local change agent through a sustainable territorial development model."], respuestaCorrecta: 3 },
      { id: 5, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "Verdadero o falso:\nLa Fundación Guaicaramo está interesada en desarrollar proyectos de vivienda de interés social para que más personas puedan tener un hogar.", pregunta_en: "True or false:\nFundación Guaicaramo is interested in developing affordable housing projects so that more people can have a home.", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 1 },
      { id: 6, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Verdadero o falso?\nLa Fundación Guaicaramo tiene como único enfoque la educación del territorio. Por eso ha invertido únicamente en tener cursos y en apoyar a la institución educativa.", pregunta_en: "True or false?\nFundación Guaicaramo has territorial education as its only focus. That's why it has only invested in courses and supporting the educational institution.", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 1 },
      { id: 7, empresa: 'fundacion', color: '#D1BA30', logo: '/media/Logo-Fundacion.png', pregunta_es: "¿Verdadero o falso?\nDesde su concepción, la Fundación Guaicaramo ha tenido un componente ambiental y, a través de él, ha trabajado en mapear las cuencas hídricas del territorio, apoyar proyectos de reforestación, construir viveros y acompañar la formación de clubes verdes con los jóvenes.", pregunta_en: "True or false?\nSince its conception, Fundación Guaicaramo has had an environmental component and, through it, has worked on mapping the territory's watersheds, supporting reforestation projects, building nurseries, and accompanying the formation of green clubs with young people.", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 0 }
    ],
    datosCuriosos_es: [
      "🌱 Origen social: Nació en 2014 como un agente de desarrollo territorial sostenible en la zona de influencia de Guaicaramo",
      "🏘️ Impacto real: En 2024 benefició a más de 1.000 familias en Barranca de Upía y Villanueva.",
      "🏘️ La Fundación siempre ha tenido un enfoque sistémico de desarrollo, centrado en un enfoque territorial en Barranca de Upía (Meta), Cabuyaro (Meta), Villanueva (Casanare), Paratebueno (Cundinamarca).",
      "🤝 Modelo de trabajo: La Fundación Guaicaramo siempre ha buscado ir más allá de la filantropía tradicional. Su apuesta es por la inversión social estratégica, donde conceptos como el valor compartido, el fortalecimiento institucional, el ordenamiento territorial y el trabajo en el ser generan retornos profundos y sostenibles para el territorio. La construcción de parques, aunque valiosa, no hace parte central del modelo.",
      "🤝 Brazo social: La Fundación Guaicaramo no nació para el bienestar interno de los colaboradores —esa labor la cumple otra área de la empresa—, sino para ir más allá y construir una estrategia de desarrollo territorial sostenible, que impulse el progreso de las comunidades y municipios de la región.",
      "🏠 Visión holística: La visión de la Fundación Guaicaramo no es construir vivienda como fin en sí mismo, sino construir comunidad. La infraestructura puede ser un componente, pero lo esencial es un modelo holístico que impulse el bienestar, la armonía con la naturaleza y el uso de la tecnología para generar desarrollo sostenible. La Fundación no busca ser \"una más\" en proyectos de VIS, sino soñar y materializar territorios integrales",
      "📚 Enfoque integral: La educación es un pilar fundamental, pero no es el único. La Fundación Guaicaramo también cuenta con un equipo técnico que formula proyectos de desarrollo territorial de largo plazo. Uno de sus mayores logros ha sido la aprobación de un proyecto de obras por impuestos para la institución educativa de Barranca de Upía, que está siendo implementado para dotar la escuela con tecnología, capacitar a los profesores y cerrar brechas de calidad educativa.",
      "🌿 Compromiso ambiental: El cuidado ambiental ha sido un pilar de la Fundación Guaicaramo desde sus inicios. Su labor va más allá de lo social y educativo: ha promovido la gestión integral del agua, la reforestación, la creación de viveros comunitarios y la vinculación de la juventud en clubes verdes, sembrando así conciencia y compromiso ambiental en el territorio."
    ],
    datosCuriosos_en: [
      "🌱 Social origin: Born in 2014 as an agent for sustainable territorial development in Guaicaramo's area of influence",
      "🏘️ Real impact: In 2024, it benefited more than 1,000 families in Barranca de Upía and Villanueva.",
      "🏘️ The Foundation has always had a systemic approach to development, focused on a territorial approach in Barranca de Upía (Meta), Cabuyaro (Meta), Villanueva (Casanare), Paratebueno (Cundinamarca).",
      "🤝 Work model: Fundación Guaicaramo has always sought to go beyond traditional philanthropy. Its bet is on strategic social investment, where concepts such as shared value, institutional strengthening, territorial planning, and work on being generate deep and sustainable returns for the territory. Park construction, although valuable, is not central to the model.",
      "🤝 Social arm: Fundación Guaicaramo was not born for the internal well-being of collaborators —that work is done by another area of the company—, but to go further and build a sustainable territorial development strategy, that drives the progress of the communities and municipalities of the region.",
      "🏠 Holistic vision: Fundación Guaicaramo's vision is not to build housing as an end in itself, but to build community. Infrastructure can be a component, but the essential is a holistic model that drives well-being, harmony with nature, and the use of technology to generate sustainable development. The Foundation does not seek to be \"one more\" in VIS projects, but to dream and materialize integral territories.",
      "📚 Integral approach: Education is a fundamental pillar, but not the only one. Fundación Guaicaramo also has a technical team that formulates long-term territorial development projects. One of its greatest achievements has been the approval of a tax works project for the educational institution in Barranca de Upía, which is being implemented to equip the school with technology, train teachers, and close educational quality gaps.",
      "🌿 Environmental commitment: Environmental care has been a pillar of Fundación Guaicaramo since its beginnings. Its work goes beyond the social and educational: it has promoted integral water management, reforestation, community nursery construction, and youth involvement in green clubs, thus sowing environmental awareness and commitment in the territory."
    ]
  },
  'dao': {
    color: '#2D753E',
    logo: '/media/Logo-DAO.png',
    preguntas: [
      { id: 8, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Hace cuantos años se fundó Del Llano Alto Oleico - DAO?", pregunta_en: "How many years ago was Del Llano Alto Oleico - DAO founded?", opciones_es: ["12 AÑOS", "10 AÑOS", "8 AÑOS"], opciones_en: ["12 YEARS", "10 YEARS", "8 YEARS"], respuestaCorrecta: 1 },
      { id: 9, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Verdadero o falso?\nEl aceite alto oleico es como un \"aceite de oliva del trópico\": proviene de un fruto y no de una semilla, aporta vitaminas y minerales, tiene un punto de fritura más alto (lo que le da mayor resistencia y eficiencia en el fritado), se necesita en menor cantidad, es beneficioso para la salud y, cultivado de manera regenerativa, puede ser incluso climáticamente positivo.", pregunta_en: "True or false?\nHigh oleic oil is like a \"tropical olive oil\": it comes from a fruit and not a seed, provides vitamins and minerals, has a higher frying point (which gives it greater resistance and frying efficiency), is needed in smaller quantities, is beneficial for health, and, when cultivated regeneratively, can even be climatically positive.", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 0 },
      { id: 10, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Verdadero o falso?\nEl aceite de palma alto oleico en Colombia consume más agua y deteriora los suelos.", pregunta_en: "True or false?\nHigh oleic palm oil in Colombia consumes more water and deteriorates soils.", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 1 },
      { id: 11, empresa: 'dao', color: '#2D753E', logo: '/media/Logo-DAO.png', pregunta_es: "¿Cuál de los siguientes NO es un objetivo principal de la empresa Del Llano Alto Oleico?", pregunta_en: "Which of the following is NOT a main objective of Del Llano Alto Oleico company?", opciones_es: ["Buscar un mercado de valor agregado para el aceite alto oleico.", "Emprender en la misión de llegar al consumidor final con un producto de alta calidad.", "Diversificar el mercado de los aceites y apostarle al futuro.", "Ampliar márgenes económicos.", "Porque en Colombia es difícil conseguir 100% aceite de palma alto oleico."], opciones_en: ["Seek a value-added market for high oleic oil.", "Embark on the mission to reach the end consumer with a high-quality product.", "Diversify the oil market and bet on the future.", "Expand economic margins.", "Because in Colombia it is difficult to get 100% high oleic palm oil."], respuestaCorrecta: 3 }
    ],
    datosCuriosos_es: [
      "💯 Visión clara: Su promesa es 'nunca perder tu confianza'.",
      " Aceite premium: El aceite alto oleico es un aceite premium del trópico, comparable al aceite de oliva por su perfil saludable y su desempeño culinario. A traves de nuestra experiencia con el mercado hemos validado estas bondades.",
      "🌱 Bendición agrícola: La palma híbrida alto oleico es en realidad una bendición agrícola y ambiental: Es resiliente ante los cambios climáticos y resistente a enfermedades. Es más productiva por hectárea que cualquier otro cultivo de aceites en el mundo. En Colombia se siembra sobre pasturas degradadas, transformándolas en ecosistemas productivos. Con el tiempo, estas áreas se convierten en hábitats diversos que aportan a la regeneración de la biodiversidad local.",
      "🎯 Visión empresarial: Del Llano Alto Oleico es el resultado de una visión construida durante décadas. Mauricio Herrera Vélez y Philippe Genty impulsaron un cruce genético que permitió desarrollar la palma híbrida alto oleico. Al descubrir las grandes bondades de este aceite, nació la convicción de que merecía tener su propio mercado. Por eso se creó esta empresa como un vehículo no solo de comercialización, sino de valor agregado, diversificación y conexión directa con el consumidor final."
    ],
    datosCuriosos_en: [
      "💯 Clear vision: Its promise is 'never lose your trust'.",
      " Premium oil: High oleic oil is a premium tropical oil, comparable to olive oil for its healthy profile and culinary performance. Its business journey has validated these hypotheses: International market (has entered the US market), kitchen quality (greater crispiness and yield), nutrition (recent studies show underestimated benefits), climate and biodiversity (positive carbon footprint, removes carbon per liter, decent jobs and use of biologicals to protect biodiversity).",
      "🌱 Agricultural blessing: The high oleic hybrid palm is actually an agricultural and environmental blessing: It is resilient to climate changes and resistant to diseases. It is more productive per hectare than any other oil crop in the world. In Colombia, it is planted on degraded pastures, transforming them into productive ecosystems. Over time, these areas become diverse habitats that contribute to the regeneration of local biodiversity.",
      "🎯 Business vision: Del Llano Alto Oleico is the result of a vision built over decades. Mauricio Herrera Vélez and Philippe Genty promoted a genetic cross that allowed the development of the high oleic hybrid palm. Upon discovering the great benefits of this oil, the conviction was born that it deserved its own market. That's why this company was created as a vehicle not only for commercialization, but for value addition, diversification, and direct connection with the end consumer."
    ]
  },
  'sirius': {
    color: '#00A3FF',
    logo: '/media/Logo-Sirius.png',
    preguntas: [
      { id: 17, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿De que tamaño son la mayoria de las estrellas fugaces?", pregunta_en: "What size are most shooting stars?", opciones_es: ["Del tamaño del sol", "Mas grande que nuestro planeta", "Del tamaño de un fruto de palma", "Del tamaño de un autobus", "Del tamaño de un grano de arroz"], opciones_en: ["The size of the sun", "Bigger than our planet", "The size of a palm fruit", "The size of a bus", "The size of a grain of rice"], respuestaCorrecta: 4 },
      { id: 18, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Cuáles son los principales beneficios del biochar?", pregunta_en: "What are the main benefits of biochar?", opciones_es: ["Regula el pH del suelo y aumenta la capacidad de intercambio catiónico (CIC)", "Retiene humedad y mejora la resiliencia en épocas de sequía", "Captura y fija carbono atmosférico por miles de años, además de mejorar la porosidad y oxigenación del suelo", "Contribuye a la regeneración: mejora la salud del suelo y se convierte en una vivienda ideal para los microorganismos, gracias a su nanostructura", "Todas las anteriores"], opciones_en: ["Regulates soil pH and increases cation exchange capacity (CEC)", "Retains moisture and improves resilience in drought periods", "Captures and fixes atmospheric carbon for thousands of years, in addition to improving soil porosity and oxygenation", "Contributes to regeneration: improves soil health and becomes an ideal home for microorganisms, thanks to its nanostructure", "All of the above"], respuestaCorrecta: 4 },
      { id: 19, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Cómo se llama el proceso por medio del cual se transforman biomasas en biochar?", pregunta_en: "What is the name of the process by which biomasses are transformed into biochar?", opciones_es: ["Pirolisis", "Compostaje", "Fermentación anaerobia"], opciones_en: ["Pyrolysis", "Composting", "Anaerobic fermentation"], respuestaCorrecta: 0 },
      { id: 20, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "¿Cual estos valores no hace parte del toque Sirius?", pregunta_en: "Which of these values is NOT part of the Sirius touch?", opciones_es: ["Transparencia", "Energia limpia", "Perrenque", "Pulidez", "Esfuerzo"], opciones_en: ["Transparency", "Clean energy", "Perseverance", "Politeness", "Effort"], respuestaCorrecta: 4 },
      { id: 21, empresa: 'sirius', color: '#00A3FF', logo: '/media/Logo-Sirius.png', pregunta_es: "Verdadero o Falso, ¿la sostenibilidad es todo para nosotros?", pregunta_en: "True or False, is sustainability everything for us?", opciones_es: ["Verdadero", "Falso"], opciones_en: ["True", "False"], respuestaCorrecta: 1 }
    ],
    datosCuriosos_es: [
      "La mayoria de las estrellas fugaces, no son mas grande que un grano de arroz, son pequeñas particulas que cruzan en el espacio a gran velocidad y colicionan con nuestra admosfera, creando una explision de luz, mas alla del tamaño es la energia detras, en Sirius valoramos la energia.",
      "🤖 Triple enfoque: Integran pirólisis + biotecnología +  IA (Agentics, Piroliapp y Alma).",
      "📍 Raíz local: Operan desde Barranca de Upía con datos de contacto claros en su web.",
      "En Sirius fluimos y trabajamos en dar lo mejor, los resultados llegan en correspondencia sin necesidad de desgastarse con esfuerzo innecesario.",
      "No basta con ser sostenible, es el tiempo de la regeneracion y de reversar el daño que ya hemos hecho, no vale seguir sosteniendo un problema."
    ],
    datosCuriosos_en: [
      "Most shooting stars are no bigger than a grain of rice; they are small particles that cross space at high speed and collide with our atmosphere, creating an explosion of light. Beyond size, it's the energy behind them, and at Sirius we value energy.",
      "🤖 Triple approach: They integrate pyrolysis + biotechnology + AI (Agentics, Piroliapp and Alma).",
      "📍 Local root: They operate from Barranca de Upía with clear contact information on their website.",
      "At Sirius we flow and work to give our best; results come accordingly without needing to wear ourselves out with unnecessary effort.",
      "It's not enough to be sustainable; it's time for regeneration and reversing the damage we've already done. It's not worth continuing to sustain a problem."
    ]
  },
  'guaicaramo': {
    color: '#D97523',
    logo: '/media/logo-Guaicaramo.png',
    preguntas: [
      { id: 12, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "Durante los últimos 4 años, Doña Pepa ha tenido un propósito principal. ¿Cuál ha sido?", pregunta_en: "During the last 4 years, Doña Pepa has had a main purpose. What has it been?", opciones_es: ["La productividad", "El buen trato", "La disciplina", "El orden y aseo"], opciones_en: ["Productivity", "Good treatment", "Discipline", "Order and cleanliness"], respuestaCorrecta: 1 },
      { id: 13, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "Generamos alianzas con empresas del sector para proteger y conservar al:", pregunta_en: "We generate alliances with sector companies to protect and conserve the:", opciones_es: ["Oso palmero", "Chigüiro", "Venado", "Jaguar"], opciones_en: ["Palm bear", "Chigüiro", "Deer", "Jaguar"], respuestaCorrecta: 0 },
      { id: 14, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "En este Congreso estamos lanzando el libro titulado:", pregunta_en: "In this Congress we are launching the book titled:", opciones_es: ["La expedición de Doña Pepa", "Los caminos del oso palmero", "Las aventuras de Doña Pepa", "El viaje del chigüiro"], opciones_en: ["Doña Pepa's expedition", "The paths of the palm bear", "Doña Pepa's adventures", "The chigüiro's journey"], respuestaCorrecta: 2 },
      { id: 15, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "¿Qué tipo de proyecto sostenible implementado en Guaicaramo ayuda a mejorar la calidad de las aguas residuales?", pregunta_en: "What type of sustainable project implemented in Guaicaramo helps improve the quality of wastewater?", opciones_es: ["Reciclaje", "Humedales artificiales", "Siembra de árboles", "Compostaje"], opciones_en: ["Recycling", "Artificial wetlands", "Tree planting", "Composting"], respuestaCorrecta: 1 },
      { id: 16, empresa: 'guaicaramo', color: '#D97523', logo: '/media/logo-Guaicaramo.png', pregunta_es: "En el tratamiento de aguas residuales, logramos obtener un recurso energético. ¿Cuál es?", pregunta_en: "In wastewater treatment, we manage to obtain an energy resource. What is it?", opciones_es: ["Carbón", "Gasolina", "Diésel", "Biogás"], opciones_en: ["Coal", "Gasoline", "Diesel", "Biogas"], respuestaCorrecta: 3 }
    ],
    datosCuriosos_es: [
      "⚡ Energía limpia: Generan energía renovable con biogás de aguas residuales.",
      "🦋 Biodiversidad activa: Mantienen Áreas de Alto Valor de Conservación (AVC) y concursos de avistamiento.",
      "📸 Fauna protegida: Cámaras trampa han registrado más de 30 especies, incluido el ocelote.",
      "🔄 Diversificación: Negocios en aceites, cítricos, ganadería y biocombustibles.",
      "🏅 Certificaciones verdes: RSPO, ISCC y Cero Deforestación avalan su gestión ambiental."
    ],
    datosCuriosos_en: [
      "⚡ Clean energy: They generate renewable energy with biogas from wastewater.",
      "🦋 Active biodiversity: They maintain High Conservation Value Areas (HCV) and sighting contests.",
      "📸 Protected fauna: Trap cameras have recorded more than 30 species, including the ocelot.",
      "🔄 Diversification: Businesses in oils, citrus, livestock and biofuels.",
      "🏅 Green certifications: RSPO, ISCC and Zero Deforestation endorse their environmental management."
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
    datoCurioso: "Dato curioso:",
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
    datoCurioso: "Fun fact:",
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
  
  // Obtener dato curioso correspondiente a esta pregunta
  const datosCuriosEmpresa = preguntasPorEmpresa[preguntaActual.empresa]['datosCuriosos_' + idiomaActual];
  const indicePregunta = preguntasPorEmpresa[preguntaActual.empresa].preguntas.findIndex(p => p.id === preguntaActual.id);
  const datoCurioso = datosCuriosEmpresa[indicePregunta % datosCuriosEmpresa.length];
  
  // Mostrar resultado
  let mensajeCompleto = '';
  if (esCorrecta) {
    puntuacion += 10;
    respuestasCorrectas++;
    const respuestaCorrecta = preguntaActual['opciones_' + idiomaActual][preguntaActual.respuestaCorrecta];
    mensajeCompleto = `
      <div style="margin-bottom: 15px;">
        🎉 <strong>${traduccionesUI[idiomaActual].correcto}</strong> +10 puntos
      </div>
      <div style="padding: 10px; background: rgba(255,255,255,0.2); border-radius: 8px; border-left: 4px solid #22543d;">
        <strong>💡 ${traduccionesUI[idiomaActual].datoCurioso}</strong><br>
        ${datoCurioso}
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
      <div style="padding: 10px; background: rgba(255,255,255,0.2); border-radius: 8px; border-left: 4px solid #822727;">
        <strong>💡 ${traduccionesUI[idiomaActual].datoCurioso}</strong><br>
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
}

// Función para mostrar modal de idioma
function mostrarModalIdioma() {
  document.getElementById('language-modal').classList.add('show');
}

// Función para seleccionar idioma
function seleccionarIdioma(idioma) {
  idiomaActual = idioma;
  document.getElementById('language-modal').classList.remove('show');
  actualizarTextosUI();
  iniciarJuego();
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  actualizarPuntuacion();
  actualizarContadores();
  actualizarRuleta();
  console.log('🌴 Trivia Fundación Guaicaramo iniciada');
  const totalPreguntas = Object.values(preguntasPorEmpresa).reduce((sum, e) => sum + e.preguntas.length, 0);
  console.log('📚 Preguntas disponibles:', totalPreguntas);
});