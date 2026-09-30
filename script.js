/* =========================================
   OVA IAMII
   María Clara Meléndez Ramírez
   E.S.E Hospital San Jerónimo - 2026
========================================= */


/* =========================================
   FUNCIONES GENERALES
========================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================
   PROPÓSITOS
========================================= */

const purposes = [

  [
    "♡",
    "Promover la salud",
    "Promover la salud de la mujer y la infancia.",
    "Favorece acciones integrales de promoción del bienestar materno e infantil."
  ],

  [
    "🤰",
    "Maternidad segura",
    "Favorecer una maternidad segura y humanizada.",
    "Orienta la atención hacia condiciones seguras, respetuosas y dignas durante la maternidad."
  ],

  [
    "🤱",
    "Lactancia materna",
    "Promover, proteger y apoyar la lactancia materna.",
    "Fortalece el acompañamiento a las madres y sus familias para la práctica de la lactancia."
  ],

  [
    "♥",
    "Atención digna",
    "Garantizar una atención respetuosa y digna.",
    "Ubica los derechos y el trato digno como elementos centrales de la atención."
  ],

  [
    "∞",
    "Vínculo afectivo",
    "Favorecer el vínculo afectivo entre madre, padre, cuidador y recién nacido.",
    "Reconoce el vínculo como parte del cuidado y bienestar familiar."
  ],

  [
    "👨‍👩‍👧",
    "Participación",
    "Promover la participación de la familia en el cuidado.",
    "Fortalece el papel de la familia y cuidadores en el proceso de atención."
  ],

  [
    "🛡️",
    "Prevención",
    "Prevenir enfermedades y complicaciones.",
    "Integra acciones de prevención y cuidado oportuno."
  ],

  [
    "🥗",
    "Alimentación",
    "Fortalecer las prácticas de alimentación saludable.",
    "Promueve prácticas de alimentación favorables para la salud materna e infantil."
  ],

  [
    "💬",
    "Información",
    "Garantizar información clara y comprensible a los usuarios.",
    "Favorece que las personas reciban orientación que puedan comprender y utilizar."
  ],

  [
    "⚖️",
    "Derechos",
    "Proteger los derechos de las mujeres, niños y niñas.",
    "Reconoce a las personas usuarias como sujetos de derechos."
  ],

  [
    "✦",
    "Talento humano",
    "Fortalecer las competencias del talento humano.",
    "Impulsa capacidades para brindar una atención coherente con la estrategia."
  ],

  [
    "📈",
    "Calidad",
    "Mejorar continuamente la calidad de los servicios de salud.",
    "Promueve una cultura institucional orientada a la mejora continua."
  ]

];


/* =========================================
   10 PASOS IAMII
========================================= */

const steps = [

  [
    "Voluntad política institucional",

    "Disponer de una política institucional para la promoción, protección, atención y apoyo en salud y nutrición a la población materna e infantil."
  ],

  [
    "Armonización conceptual y práctica del personal de salud",

    "Capacitar a todo el personal que atiende a la población materna e infantil para poner en práctica la política IAMII institucional de salud y nutrición."
  ],

  [
    "Empoderamiento de las mujeres y sus familias para el cuidado",

    "Brindar a las mujeres gestantes y sus familias información, educación y atención oportuna y pertinente para vivir satisfactoriamente la gestación, prepararse para el parto, el puerperio, la lactancia materna y la crianza."
  ],

  [
    "Las mejores condiciones para el nacimiento",

    "Garantizar la atención del trabajo de parto y el parto con calidad y calidez, acompañada de una persona significativa para la madre, dentro de un ambiente digno y de respeto."
  ],

  [
    "Ayuda efectiva para iniciar el cuidado del recién nacido y de la puérpera",

    "Ofrecer orientación y ayuda efectiva a madres, padres y otros cuidadores sobre promoción, protección y atención en salud y nutrición durante el posparto."
  ],

  [
    "Promoción, protección y apoyo efectivo en la práctica de la lactancia materna",

    "Promover, proteger y dar apoyo efectivo a las madres y sus familias para la lactancia materna exclusiva durante los primeros seis meses y con alimentación complementaria adecuada hasta los dos años de edad o más."
  ],

  [
    "Favorecer el alojamiento y el acompañamiento",

    "Favorecer el alojamiento conjunto de la madre y el niño o niña, incluso en caso de hospitalización de alguno de los dos."
  ],

  [
    "Seguimiento sistemático al crecimiento y desarrollo",

    "Proveer atención integral en salud y nutrición a las niñas y niños menores de cinco años, asegurando el seguimiento dinámico del crecimiento y desarrollo."
  ],

  [
    "La institución de salud como un entorno protector y un espacio amigable",

    "Garantizar atención con calidad y calidez, reconociendo a las usuarias y usuarios como sujetos de derechos, promoviendo respeto a la diferencia, participación y trato digno."
  ],

  [
    "Cuidado de la salud y nutrición materna e infantil más allá de la institución de salud",

    "Disponer de mecanismos y estrategias de apoyo institucional y comunitario que favorezcan la continuidad de las acciones más allá de los servicios institucionales."
  ]

];


/* =========================================
   BENEFICIOS LACTANCIA
========================================= */

const benefits = {

  baby: [

    "Fortalece el sistema inmunológico.",
    "Previene enfermedades.",
    "Favorece el crecimiento y desarrollo.",
    "Mejora la digestión.",
    "Reduce el riesgo de alergias y sobrepeso."

  ],

  mom: [

    "Favorece la recuperación después del parto.",
    "Disminuye el riesgo de cáncer de mama y ovario.",
    "Fortalece el vínculo con su bebé.",
    "Es práctica, económica y siempre está disponible."

  ]

};


/* =========================================
   POSICIONES DE AMAMANTAMIENTO
========================================= */

const positions = [

  [
    "🫶",
    "Cuna",
    "El bebé descansa en el brazo de la madre; su cabeza queda en el antebrazo y su cuerpo frente al de la madre."
  ],

  [
    "🤱",
    "Balón de rugby",
    "El bebé queda bajo el brazo de la madre, con el cuerpo hacia un costado; puede ser útil para bebés pequeños, prematuros o con dificultades para succionar."
  ],

  [
    "🛌",
    "Acostada",
    "La madre y el bebé están de lado, frente a frente; es cómoda para descansar y para la noche."
  ],

  [
    "🪑",
    "Sentada con apoyo",
    "Puede usarse una almohada o cojín para mayor comodidad y ayuda a mantener una buena postura."
  ]

];


/* =========================================
   SIGNOS DE ALARMA DEL RECIÉN NACIDO
========================================= */

const newbornAlarms = [

  [
    "Dificultad para respirar",
    "Respiración rápida, pausas, hundimiento de costillas o coloración azulada."
  ],

  [
    "Fiebre o temperatura muy baja",
    "Cualquier alteración de la temperatura."
  ],

  [
    "Coloración anormal",
    "Piel o labios azulados, palidez o ictericia que aumenta."
  ],

  [
    "Dificultad para alimentarse",
    "Rechazo del alimento, disminución de la succión o vómitos."
  ],

  [
    "Vómitos persistentes",
    "Especialmente si son repetidos o con sangre."
  ],

  [
    "Somnolencia excesiva",
    "Dificultad para despertar o poca respuesta a estímulos."
  ],

  [
    "Convulsiones",
    "Movimientos anormales, rigidez o episodios de desconexión."
  ],

  [
    "Llanto inconsolable",
    "Irritabilidad intensa o cambio en su comportamiento."
  ],

  [
    "Alteraciones del cordón",
    "Enrojecimiento, secreción, mal olor o sangrado."
  ],

  [
    "Disminución de la orina",
    "Puede indicar una alteración en el estado de salud."
  ],

  [
    "Pocas deposiciones",
    "Especialmente acompañadas de distensión abdominal u otros síntomas."
  ]

];


/* =========================================
   SIGNOS DE ALARMA EMBARAZO
========================================= */

const pregnancyAlarms = [

  [
    "Sangrado vaginal",
    "Cualquier sangrado durante el embarazo."
  ],

  [
    "Dolor abdominal intenso",
    "Persistente o acompañado de otras molestias."
  ],

  [
    "Dolor de cabeza intenso",
    "Con alteraciones visuales o dolor en el abdomen."
  ],

  [
    "Alteraciones visuales",
    "Luces, manchas o visión borrosa."
  ],

  [
    "Hinchazón repentina",
    "En cara, manos o pies, especialmente con otros síntomas."
  ],

  [
    "Fiebre",
    "Cualquier temperatura elevada."
  ],

  [
    "Salida de líquido por vagina",
    "Puede ser ruptura de membranas."
  ],

  [
    "Disminución de movimientos fetales",
    "Cuando ya los sientes habitualmente."
  ],

  [
    "Dificultad para respirar o dolor en el pecho",
    "Puede estar relacionado con complicaciones graves."
  ],

  [
    "Convulsiones o pérdida de la conciencia",
    "Requiere atención inmediata."
  ],

  [
    "Vómitos persistentes",
    "Impiden la alimentación o hidratación."
  ]

];


/* =========================================
   PREGUNTAS DE EVALUACIÓN
========================================= */

const quizData = [

  [
    "¿Qué describe mejor a IAMII?",

    [
      "Una estrategia centrada únicamente en la lactancia.",
      "Una estrategia de atención en salud integral, humanizada y respetuosa de derechos.",
      "Un protocolo exclusivo para recién nacidos.",
      "Un programa administrativo de los hospitales."
    ],

    1
  ],

  [
    "¿Cuál es el propósito relacionado con la lactancia?",

    [
      "Eliminar la lactancia después del parto.",
      "Promover, proteger y apoyar la lactancia materna.",
      "Reemplazar la leche materna por fórmulas.",
      "Limitar el acompañamiento familiar."
    ],

    1
  ],

  [
    "Según el material del folleto, ¿hasta cuándo se indica lactancia materna exclusiva?",

    [
      "3 meses",
      "4 meses",
      "6 meses",
      "12 meses"
    ],

    2
  ],

  [
    "¿Qué posición de amamantamiento aparece en el folleto?",

    [
      "Cuna",
      "De pie",
      "Sentadilla",
      "Boca abajo"
    ],

    0
  ],

  [
    "¿Cuál corresponde al paso 7 de IAMII?",

    [
      "Voluntad política institucional.",
      "Favorecer el alojamiento y el acompañamiento.",
      "Seguimiento al crecimiento y desarrollo.",
      "Cuidado más allá de la institución."
    ],

    1
  ],

  [
    "Ante un signo de alarma del recién nacido, el folleto recomienda:",

    [
      "Esperar varios días.",
      "Consultar únicamente si empeora mucho.",
      "Acudir de inmediato a un servicio de salud.",
      "Suspender todos los controles."
    ],

    2
  ],

  [
    "¿Qué busca el paso 9?",

    [
      "Que la institución sea un entorno protector y espacio amigable.",
      "Eliminar la participación de la familia.",
      "Reducir el seguimiento.",
      "Atender únicamente emergencias."
    ],

    0
  ],

  [
    "¿Qué elemento forma parte del cuidado del recién nacido?",

    [
      "Mantener objetos sueltos en su espacio de sueño.",
      "Ignorar la vacunación.",
      "Realizar controles de crecimiento y desarrollo.",
      "Evitar el vínculo afectivo."
    ],

    2
  ]

];


/* =========================================
   GENERAR PROPÓSITOS
========================================= */

function renderPurposes() {

  $("#purposeGrid").innerHTML = purposes
    .map((p, i) => `

      <article
        class="purpose-card reveal"
        data-purpose="${i}"
      >

        <div class="purpose-icon">
          ${p[0]}
        </div>

        <h3>
          ${p[1]}
        </h3>

        <p>
          ${p[2]}
        </p>

      </article>

    `)
    .join("");


  $$(".purpose-card").forEach(card => {

    card.addEventListener("click", () => {

      const p = purposes[card.dataset.purpose];

      openModal(

        "PROPÓSITO",

        p[1],

        p[2],

        `<div class="modal-extra">
          ${p[3]}
        </div>`

      );

    });

  });

}


/* =========================================
   GENERAR LOS 10 PASOS
========================================= */

function renderSteps() {

  $("#stepsGrid").innerHTML = steps
    .map((s, i) => `

      <article
        class="step-card reveal"
        data-step="${i}"
      >

        <div class="step-num">
          ${String(i + 1).padStart(2, "0")}
        </div>

        <div>

          <h3>
            ${s[0]}
          </h3>

          <p>
            ${s[1]}
          </p>

        </div>

      </article>

    `)
    .join("");


  $$(".step-card").forEach(card => {

    card.addEventListener("click", () => {

      const i = +card.dataset.step;

      updateStep(i);

      openModal(

        `PASO ${i + 1}`,

        steps[i][0],

        steps[i][1],

        `
        <div class="modal-extra">

          Haz de este paso una pregunta guía:

          <strong>
            ¿Cómo puede la institución convertir
            este principio en una práctica cotidiana?
          </strong>

        </div>
        `

      );

    });

  });

}


/* =========================================
   ACTUALIZAR PASO
========================================= */

function updateStep(i) {

  $$(".step-card").forEach(card => {

    card.classList.toggle(
      "active",
      +card.dataset.step === i
    );

  });


  $("#stepNumber").textContent =
    String(i + 1).padStart(2, "0");


  $("#stepCounter").textContent =
    i + 1;


  $("#stepProgress").style.height =
    ((i + 1) / 10 * 100) + "%";

}


/* =========================================
   BENEFICIOS
========================================= */

function renderBenefits(kind = "baby") {

  $("#benefitList").innerHTML =
    benefits[kind]
      .map(item => `<li>${item}</li>`)
      .join("");

}


/* =========================================
   POSICIONES
========================================= */

function renderPositions() {

  $("#positionGrid").innerHTML =
    positions
      .map((p, i) => `

        <article
          class="position-card reveal"
          data-pos="${i}"
        >

          <div class="position-emoji">
            ${p[0]}
          </div>

          <h4>
            ${p[1]}
          </h4>

          <p>
            ${p[2]}
          </p>

        </article>

      `)
      .join("");


  $$(".position-card").forEach(card => {

    card.addEventListener("click", () => {

      const p =
        positions[card.dataset.pos];

      openModal(

        "LACTANCIA",

        p[1],

        p[2],

        `
        <div class="modal-extra">

          El folleto indica que una buena posición
          ayuda a evitar el dolor, facilitar la
          succión y mejorar la producción de leche.

        </div>
        `

      );

    });

  });

}


/* =========================================
   GENERAR ALARMAS
========================================= */

function renderAlarms() {

  $("#newbornAlarms").innerHTML =
    newbornAlarms
      .map(a => `

        <div class="alarm-item">

          <b>
            ${a[0]}
          </b>

          <span>
            ${a[1]}
          </span>

        </div>

      `)
      .join("");


  $("#pregnancyAlarms").innerHTML =
    pregnancyAlarms
      .map(a => `

        <div class="alarm-item">

          <b>
            ${a[0]}
          </b>

          <span>
            ${a[1]}
          </span>

        </div>

      `)
      .join("");

}


/* =========================================
   GENERAR EVALUACIÓN
========================================= */

function renderQuiz() {

  $("#quiz").innerHTML =
    quizData
      .map((q, i) => `

        <div
          class="question"
          data-q="${i}"
        >

          <h3>
            ${i + 1}. ${q[0]}
          </h3>


          <div class="answers">

            ${q[1]
              .map((answer, j) => `

                <label class="answer">

                  <input
                    type="radio"
                    name="q${i}"
                    value="${j}"
                  >

                  <span>
                    ${answer}
                  </span>

                </label>

              `)
              .join("")}

          </div>

        </div>

      `)
      .join("");


  $$('input[type="radio"]')
    .forEach(input => {

      input.addEventListener(
        "change",
        updateQuizProgress
      );

    });

}


/* =========================================
   PROGRESO EVALUACIÓN
========================================= */

function updateQuizProgress() {

  let answered =
    $$(".question")
      .filter(question =>
        question.querySelector("input:checked")
      )
      .length;


  $("#scoreLive").textContent =
    Math.round(
      answered / quizData.length * 100
    ) + "%";

}


/* =========================================
   FINALIZAR EVALUACIÓN
========================================= */

function finishQuiz() {

  let score = 0;
  let unanswered = 0;


  quizData.forEach((question, i) => {

    const checked =
      $(`input[name="q${i}"]:checked`);


    if (!checked) {

      unanswered++;

    }

    else if (
      +checked.value === question[2]
    ) {

      score++;

    }

  });


  if (unanswered) {

    showToast(
      `Te faltan ${unanswered} pregunta${
        unanswered > 1 ? "s" : ""
      } por responder.`
    );

    return;

  }


  const percentage =
    Math.round(
      score / quizData.length * 100
    );


  $("#scoreLive").textContent =
    percentage + "%";


  const result =
    $("#quizResult");


  result.classList.remove("hidden");


  let message;


  if (percentage >= 80) {

    message =
      "¡Muy buen dominio del tema!";

  }

  else if (percentage >= 60) {

    message =
      "Buen avance. Revisa los apartados que quieras reforzar.";

  }

  else {

    message =
      "Te recomendamos recorrer nuevamente los contenidos y volver a intentarlo.";

  }


  result.innerHTML = `

    <h3>
      Resultado:
      ${score}/${quizData.length}
      · ${percentage}%
    </h3>

    <p>
      ${message}
    </p>

  `;


  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =========================================
   REINICIAR EVALUACIÓN
========================================= */

function resetQuiz() {

  $$('input[type="radio"]')
    .forEach(input => {

      input.checked = false;

    });


  $("#scoreLive").textContent =
    "0%";


  $("#quizResult")
    .classList.add("hidden");

}


/* =========================================
   MODAL
========================================= */

function openModal(
  eyebrow,
  title,
  text,
  extra = ""
) {

  $("#modalEyebrow").textContent =
    eyebrow;

  $("#modalTitle").textContent =
    title;

  $("#modalText").textContent =
    text;

  $("#modalExtra").innerHTML =
    extra;


  $("#infoModal")
    .classList.add("open");


  $("#infoModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal() {

  $("#infoModal")
    .classList.remove("open");


  $("#infoModal")
    .setAttribute(
      "aria-hidden",
      "true"
    );

}


/* =========================================
   MENSAJE TOAST
========================================= */

function showToast(text) {

  const toast =
    $("#toast");


  toast.textContent =
    text;


  toast.classList.add(
    "show"
  );


  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 3000);

}


/* =========================================
   INICIALIZAR
========================================= */

renderPurposes();

renderSteps();

renderBenefits();

renderPositions();

renderAlarms();

renderQuiz();

updateStep(0);


/* =========================================
   BOTONES DE LACTANCIA
========================================= */

$$("[data-benefit]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        $$("[data-benefit]")
          .forEach(item =>
            item.classList.remove("active")
          );


        button.classList.add(
          "active"
        );


        renderBenefits(
          button.dataset.benefit
        );

      }
    );

  });


/* =========================================
   BOTONES EVALUACIÓN
========================================= */

$("#finishQuiz")
  .addEventListener(
    "click",
    finishQuiz
  );


$("#resetQuiz")
  .addEventListener(
    "click",
    resetQuiz
  );


/* =========================================
   CERRAR MODAL
========================================= */

$$("[data-close]")
  .forEach(element => {

    element.addEventListener(
      "click",
      closeModal
    );

  });


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =========================================
   MENÚ MÓVIL
========================================= */

$("#menuBtn")
  .addEventListener(
    "click",
    () => {

      $("#mainNav")
        .classList.toggle("open");

    }
  );


$$("nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        $("#mainNav")
          .classList.remove("open");

      }
    );

  });


/* =========================================
   GUÍA DEL OVA
========================================= */

$("#tourBtn")
  .addEventListener(
    "click",
    () => {

      openModal(

        "GUÍA RÁPIDA",

        "¿Cómo usar este OVA?",

        "Recorre las secciones desde el menú superior. Haz clic en las tarjetas de propósitos y pasos, explora la lactancia, revisa los cuidados y termina con la evaluación.",

        `
        <div class="modal-extra">

          Consejo:

          en la sección
          <strong>
            10 pasos
          </strong>

          puedes seleccionar cada tarjeta
          para ampliar su explicación.

        </div>
        `

      );

    }
  );


/* =========================================
   BARRA DE PROGRESO
========================================= */

window.addEventListener(
  "scroll",
  () => {

    const documentElement =
      document.documentElement;


    const scrollPercentage =
      window.scrollY /
      (
        documentElement.scrollHeight -
        window.innerHeight
      ) *
      100;


    $("#progressBar")
      .style.width =
      scrollPercentage + "%";

  }
);


/* =========================================
   ANIMACIONES
========================================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("visible");

          }

        }
      );

    },

    {
      threshold: .08
    }

  );


$$(".reveal")
  .forEach(element => {

    observer.observe(element);

  });