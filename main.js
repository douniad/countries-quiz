const STORE = [
    {
      question: 'What is the capital of Japan?',
      answers: [
       'Shanghai',
       'Hong-Kong',
       'Tokyo',
       'Wuhan'
      ],
      correctAnswer:
        'Tokyo'
    },
    {
      question:
        'Which of these countries spreads across two continents?',
      answers: [
        'Korea',
        'Russia',
        'Switzerland',
        'Denmark'
      ],
      correctAnswer:
        'Russia'
    },
    {
      question:
        'Which of these countries shares a name with its capital?',
      answers: [
        'Luxembourg',
        'Sweden',
        'Hungary',
        'Liechtenstein'

      ],
      correctAnswer: 
        'Luxembourg'
    },
    {
      question: 'What city can the famous statue of "Christ the Redeemer" be seen in?',
      answers: [
        'Lisbon',
        'Mexico City',
        'Barcelona',
        'Rio de Janeiro'
      ],
      correctAnswer: 
        'Rio de Janeiro'
    },
    {
      question:
        'What is the famous City Of Lights?',
      answers: [
        'Denver',
        'Stuttgart',
        'Paris',
        'Madrid'
      ],
      correctAnswer:
        'Paris'
    },
    {
      question: 'How many capitals does South Africa have',
      answers: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswer: '3'
    },
    {
      question:
        'Nairobi is the capital of which African country?',
      answers: [
        'Kenya',
        'Zimbabwe',
        'Namibia',
        'Eritrea'
      ],
      correctAnswer:
        'Kenya'
    },
    {
      question: 'What is the biggest country in the world?',
      answers: [
        'Russia',
        'Canada',
        'Australia',
        'Korea'
      ],
      correctAnswer:
        'Russia'
    },
    {
      question: 'Which country has another country inside its capital?',
      answers: [
        'Spain',
        'Italy',
        'Bosnia',
        'Philippines'
      ],
      correctAnswer: 
        'Italy'
    },
    {
      question:
        'How many countries are in the European Union?',
      answers: [
        '8',
        '19',
        '27',
        '32'
      ],
      correctAnswer:
        '27'
    },
    {
        question:
          'Which is the city that never sleeps?',
        answers: [
          'Kuwait',
          'London',
          'New York City',
          'Munich'
        ],
        correctAnswer:
          'New York City'
      },
      {
        question:
          'How many continents are there?',
        answers: [
          '5',
          '6',
          '7',
          '8'
        ],
        correctAnswer:
          '7'
      },
      {
        question:
          'What is the capital of Poland?',
        answers: [
          'Lublin',
          'Warsaw',
          'Kraków',
          'Chorzów'
        ],
        correctAnswer:
          'Warsaw'
      },
      {
        question:
          'Which ocean did the Titanic sink in?',
        answers: [
          'Pacific Ocean',
          'Indian Ocean',
          'Arctic Ocean',
          'Atlantic Ocean'
        ],
        correctAnswer:
          'Atlantic Ocean'
      },
      {
        question:
          'Where is Antarctica?',
        answers: [
          'in the North',
          'in the South',
          'in the East',
          'in the West'
        ],
        correctAnswer:
          'in the South'
      }
  ];
  
  let score = 0;
  let questionNumber = 0;

  function incrementScore() {
    score++;
    $('.score').text(score);
  }

  function incrementQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
  }

  function createForm(questionIndex) {
    let formMaker = $(`<form>
      <fieldset>
        <legend class="questionText">${STORE[questionIndex].question}</legend>
      </fieldset>
    </form>`)
  
    let fieldSelector = $(formMaker).find('fieldset');
  
    STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
      $(`<label class="keepTrack" for="${answerIndex}">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
    return formMaker;
  }

  function correctAnswer() {
    $('.response').html(
      `<h3>Your answer is correct!</h3>
      <img src="images/thumbsup.jpg" alt="thumbs up" class="images" width="200px">
        <p class="keepTrack">Well done!</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    incrementScore();
  }

  function wrongAnswer() {
    $('.response').html(
      `<h3>Your answer is incorrect</h3>
      <img src="images/thumbsdown.jpg" alt="thumbs down" class="images" width="200px">
      <p class="keepTrack">The correct answer is:</p>
      <p class="keepTrack">${STORE[questionNumber].correctAnswer}</p>
      <button type="button" class="nextButton button">Next</button>`
    );
  }

  function finalScore() {
    $('.final').show();
  
    const awesome = [
      'Awesome!',
      'images/globetrotter.jpg',
      'globetrotter',
      'You are a true globetrotter!'
    ];
  
    const good = [
      'Good job!',
      'images/map.jpg',
      'map',
      'I would not trust you with a map just yet...'
    ];

    const alright = [
       'Good enough, I guess',
       'images/lost.jpg',
       'lost tourists',
       'Maybe call a guide?'
    ];
  
    const bad = [
      'Uh oh...',
      'images/bad.jpg',
      'bad student',
      'Looks like someone skipped geography...'
    ];
  
    if (score >= 13) {
      array = awesome;
    } else if (score < 13 && score >= 10) {
      array = good;
    } else if (score < 10 && score >= 7) {
        array = alright;
    } else {
      array = bad;
    }
    return $('.final').html(
      `<h3>${array[0]}</h3>
        <img src="${array[1]}" alt="${array[2]}" class="images">
          <h3>Your score is ${score} / 15</h3>
          <p class="keepTrack">${array[3]}</p>
          <button type="submit" class="restartButton button">Restart</button>`
    );
  }

  function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
  }

function startQuiz() {
    $('.altBox').hide();
    $('.startQuiz').on('click', '.startButton', function (event) {
      $('.startQuiz').hide();
      $('.questionNumber').text(1);
      $('.questionBox').show();
      $('.questionBox').prepend(displayQuestion());
    });
  }

  function displayQuestion() {
    if (questionNumber < STORE.length) {
      return createForm(questionNumber);
    } else {
      $('.questionBox').hide();
      finalScore();
      $('.questionNumber').text(15);
    }
  }

  function submitAnswer() {
    $('.globeBox').on('submit', function (event) {
      event.preventDefault();
      $('.altBox').hide();
      $('.response').show();
      let selected = $('input:checked');
      let answer = selected.val();
      let correct = STORE[questionNumber].correctAnswer;
      if (answer === correct) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    });
  }

function nextQuestion() {
    $('.globeBox').on('click', '.nextButton', function (event) {
      $('.altBox').hide();
      $('.questionBox').show();
      incrementQuestionNumber();
      $('.questionBox form').replaceWith(displayQuestion());
    });
  }

function restartQuiz() {
    $('.globeBox').on('click', '.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.altBox').hide();
      $('.startQuiz').show();
    });
  }

  function makeQuiz() {
    startQuiz();
    displayQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
  }
  
  $(makeQuiz);
  
