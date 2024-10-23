// Fake credentials
const fakeUser = {
    username: "soccerfan",
    password: "worldcup2022"
};

// Login function
function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // To check credentials
    if (usernameInput === fakeUser.username && passwordInput === fakeUser.password) {
        // Hide login and show home screen
        document.getElementById("login").style.display = "none";
        document.getElementById("home").style.display = "flex";
    } else {
        // To show error message
        document.getElementById("login-error").style.display = "block";
    }

    return false;
}

// Quiz Data and Logic
const quizzes = {
  worldCup: {
    title: "2022 World Cup",
    questions: [{
        text: "Who won the 2022 FIFA World Cup?",
        options: ["Argentina", "France", "Brazil", "Germany"],
        answer: "Argentina",
      },
      {
        text: "Who was the top scorer?",
        options: [
          "Lionel Messi",
          "Kylian Mbappé",
          "Harry Kane",
          "Cristiano Ronaldo",
        ],
        answer: "Kylian Mbappé",
      },
      {
        text: "Which team was the runner-up in the 2022 World Cup?",
        options: ["France", "Argentina", "Croatia", "Brazil"],
        answer: "France",
      },
      {
        text: "Who won the Golden Boot in the 2022 World Cup?",
        options: [
          "Lionel Messi",
          "Kylian Mbappé",
          "Julian Alvarez",
          "Olivier Giroud",
        ],
        answer: "Kylian Mbappé",
      },
      {
        text: "Who won the Golden Ball (best player) in the 2022 World Cup?",
        options: [
          "Lionel Messi",
          "Luka Modric",
          "Antoine Griezmann",
          "Kylian Mbappé",
        ],
        answer: "Lionel Messi",
      },
      {
        text: "Who won the Best Young Player award in the 2022 World Cup?",
        options: ["Enzo Fernandez", "Jude Bellingham", "Jamal Musiala", "Gavi"],
        answer: "Enzo Fernandez",
      },
      {
        text: "Which country hosted the 2022 FIFA World Cup?",
        options: ["Qatar", "Russia", "USA", "Brazil"],
        answer: "Qatar",
      },
      {
        text: "Who was the captain of the Argentine team in the 2022 World Cup?",
        options: [
          "Lionel Messi",
          "Angel Di Maria",
          "Emiliano Martinez",
          "Rodrigo De Paul",
        ],
        answer: "Lionel Messi",
      },
      {
        text: "Which team finished in third place at the 2022 World Cup?",
        options: ["Croatia", "Morocco", "Portugal", "France"],
        answer: "Croatia",
      },
      {
        text: "How many goals did Lionel Messi score in the 2022 World Cup?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        text: "Which goalkeeper won the Golden Glove award in 2022?",
        options: [
          "Emiliano Martinez",
          "Hugo Lloris",
          "Dominik Livakovic",
          "Yassine Bounou",
        ],
        answer: "Emiliano Martinez",
      },
      {
        text: "Which team had the highest number of goals scored in the tournament?",
        options: ["France", "Argentina", "England", "Brazil"],
        answer: "France",
      },
      {
        text: "How many goals were scored in the final match between Argentina and France?",
        options: ["4", "5", "6", "7"],
        answer: "6",
      },
      {
        text: "Which player scored a hat-trick in the 2022 World Cup final?",
        options: [
          "Lionel Messi",
          "Julian Alvarez",
          "Olivier Giroud",
          "Kylian Mbappé",
        ],
        answer: "Kylian Mbappé",
      },
      {
        text: "Which African team reached the semi-finals for the first time in 2022?",
        options: ["Senegal", "Morocco", "Cameroon", "Ghana"],
        answer: "Morocco",
      },
      {
        text: "Which player scored the winning penalty in the final?",
        options: [
          "Lionel Messi",
          "Gonzalo Montiel",
          "Enzo Fernandez",
          "Julian Alvarez",
        ],
        answer: "Gonzalo Montiel",
      },
      {
        text: "How many teams participated in the 2022 World Cup?",
        options: ["28", "30", "32", "34"],
        answer: "32",
      },
      {
        text: "Which Asian team reached the round of 16 at the 2022 World Cup?",
        options: ["Japan", "South Korea", "Iran", "Saudi Arabia"],
        answer: "Japan",
      },
      {
        text: "Who was the manager of the French national team in the 2022 World Cup?",
        options: [
          "Didier Deschamps",
          "Laurent Blanc",
          "Zinedine Zidane",
          "Arsene Wenger",
        ],
        answer: "Didier Deschamps",
      },
      {
        text: "Which team knocked Brazil out of the 2022 World Cup?",
        options: ["Croatia", "France", "Argentina", "Morocco"],
        answer: "Croatia",
      },
      {
        text: "How many red cards were issued during the entire 2022 tournament?",
        options: ["4", "6", "8", "10"],
        answer: "4",
      },
      {
        text: "What was the final score of the 2022 World Cup final match before penalties?",
        options: ["2-2", "3-3", "4-4", "1-1"],
        answer: "3-3",
      },
      {
        text: "Which of these teams won their group but failed to reach the semi-finals in 2022?",
        options: ["England", "Netherlands", "Spain", "Brazil"],
        answer: "Brazil",
      },
      {
        text: "Which player scored the fastest goal of the 2022 World Cup, taking just 68 seconds?",
        options: [
          "Alphonso Davies",
          "Cristiano Ronaldo",
          "Richarlison",
          "Lionel Messi",
        ],
        answer: "Alphonso Davies",
      },
      {
        text: "Which match in the 2022 World Cup had the highest number of goals scored (combined by both teams)?",
        options: [
          "Spain vs. Costa Rica",
          "Portugal vs. Ghana",
          "England vs. Iran",
          "Argentina vs. France",
        ],
        answer: "Spain vs. Costa Rica",
      },
    ]
  },
  guessPlayer: {
    title: "Guess the Player",
    questions: [{
        text: "Which player is nicknamed 'La Pulga'?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Neymar Jr.",
          "Luka Modric",
        ],
        answer: "Lionel Messi",
      },
      {
        text: "Which player is famously known as 'The Pharaoh' ?",
        options: [
          "Mohamed Salah",
          "Hakim Ziyech",
          "Achraf Hakimi",
          "Riyad Mahrez",
        ],
        answer: "Mohamed Salah",
      },
      {
        text: "Which player is often referred to as 'CR7' ?",
        options: [
          "Cristiano Ronaldo",
          "Kylian Mbappé",
          "Erling Haaland",
          "Karim Benzema",
        ],
        answer: "Cristiano Ronaldo",
      },
      {
        text: "Who is nicknamed 'The Flea' ?",
        options: ["Lionel Messi", "Luka Modric", "Paulo Dybala", "Neymar Jr."],
        answer: "Lionel Messi",
      },
      {
        text: "Which player holds the record for the most goals scored in a single UEFA Champions League season (17 goals)?",
        options: [
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Lionel Messi",
          "Kylian Mbappé",
        ],
        answer: "Cristiano Ronaldo",
      },
      {
        text: "Who won the Ballon d'Or in 2022?",
        options: [
          "Karim Benzema",
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Robert Lewandowski",
        ],
        answer: "Karim Benzema",
      },
      {
        text: "Which player is known as 'The Egyptian King' ?",
        options: [
          "Mohamed Salah",
          "Hakim Ziyech",
          "Achraf Hakimi",
          "Ismaila Sarr",
        ],
        answer: "Mohamed Salah",
      },
      {
        text: "Who is often called 'El Pistolero' (The Gunman)?",
        options: [
          "Luis Suárez",
          "Edinson Cavani",
          "Sergio Agüero",
          "Paulo Dybala",
        ],
        answer: "Luis Suárez",
      },
      {
        text: "Which player is known as 'King Zlatan'?",
        options: [
          "Zlatan Ibrahimović",
          "Cristiano Ronaldo",
          "Lionel Messi",
          "Sergio Ramos",
        ],
        answer: "Zlatan Ibrahimović",
      },
      {
        text: "Who is referred to as 'O Fenômeno' (The Phenomenon)?",
        options: ["Ronaldo Nazário", "Ronaldinho", "Neymar Jr.", "Romário"],
        answer: "Ronaldo Nazário",
      },
      {
        text: "Which player is known as 'La Joya' (The Jewel)?",
        options: [
          "Paulo Dybala",
          "Lautaro Martínez",
          "Ángel Di María",
          "Giovani Lo Celso",
        ],
        answer: "Paulo Dybala",
      },
      {
        text: "Who is called 'The Lewangoalski' due to his prolific scoring ability?",
        options: [
          "Robert Lewandowski",
          "Erling Haaland",
          "Harry Kane",
          "Romelu Lukaku",
        ],
        answer: "Robert Lewandowski",
      },
      {
        text: "Which player is famously nicknamed 'The Little Magician' ?",
        options: [
          "Lionel Messi",
          "Philippe Coutinho",
          "David Silva",
          "Eden Hazard",
        ],
        answer: "Philippe Coutinho",
      },
      {
        text: "Who is often called 'El Niño Maravilla' (The Wonder Boy)?",
        options: [
          "Alexis Sánchez",
          "James Rodríguez",
          "Angel Di María",
          "Gonzalo Higuaín",
        ],
        answer: "Alexis Sánchez",
      },
      {
        text: "Who is known as 'El Apache' ?",
        options: [
          "Carlos Tevez",
          "Juan Román Riquelme",
          "Ángel Di María",
          "Sergio Agüero",
        ],
        answer: "Carlos Tevez",
      },
      {
        text: "Who is nicknamed 'El Capitano' for his leadership qualities?",
        options: [
          "Francesco Totti",
          "Paolo Maldini",
          "Sergio Ramos",
          "Carles Puyol",
        ],
        answer: "Francesco Totti",
      },
      {
        text: "Which player is known as 'The Welsh Wizard' ?",
        options: ["Gareth Bale", "Aaron Ramsey", "Ryan Giggs", "Joe Allen"],
        answer: "Gareth Bale",
      },
      {
        text: "Who is often called 'Big Rom' ?",
        options: [
          "Romelu Lukaku",
          "Marcus Rashford",
          "Harry Kane",
          "Tammy Abraham",
        ],
        answer: "Romelu Lukaku",
      },
      {
        text: "Which player is called 'The King of Rome' ?",
        options: [
          "Francesco Totti",
          "Daniele De Rossi",
          "Stephan El Shaarawy",
          "Edin Dzeko",
        ],
        answer: "Francesco Totti",
      },
      {
        text: "Who is known as 'El Matador' ?",
        options: [
          "Edinson Cavani",
          "Luis Suárez",
          "Gonzalo Higuaín",
          "Radamel Falcao",
        ],
        answer: "Edinson Cavani",
      },
      {
        text: "Which player is known as 'The Octopus' due to his defensive capabilities?",
        options: ["N'Golo Kanté", "Casemiro", "Sergio Busquets", "Fabinho"],
        answer: "N'Golo Kanté",
      },
      {
        text: "Who is nicknamed 'The Gladiator' for his physical play?",
        options: [
          "Sergio Ramos",
          "Chiellini",
          "Virgil van Dijk",
          "Thiago Silva",
        ],
        answer: "Sergio Ramos",
      },
      {
        text: "Who is often called 'The Engineer' due to his playmaking skills?",
        options: [
          "Kevin De Bruyne",
          "Luka Modric",
          "Toni Kroos",
          "David Silva",
        ],
        answer: "Kevin De Bruyne",
      },
      {
        text: "Which player is nicknamed 'The Viking' for his aggressive playing style?",
        options: [
          "Erling Haaland",
          "Zlatan Ibrahimović",
          "Martin Ødegaard",
          "Thomas Delaney",
        ],
        answer: "Erling Haaland",
      },
      {
        text: "Who is known as 'La Pulga Atomica' (The Atomic Flea)?",
        options: [
          "Lionel Messi",
          "Diego Maradona",
          "Paulo Dybala",
          "Sergio Agüero",
        ],
        answer: "Lionel Messi",
      },]
  },
  soccerClubs: {
    title: "Soccer Clubs",
    questions: [{
        text: "Which club has won the most UEFA Champions League titles?",
        options: ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"],
        answer: "Real Madrid",
      },
      
        {
          text: "Which club has won the most UEFA Champions League titles?",
          options: ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"],
          answer: "Real Madrid",
        },
        {
          text: "Which club is nicknamed 'The Old Lady'?",
          options: ["Juventus", "Inter Milan", "AC Milan", "AS Roma"],
          answer: "Juventus",
        },
        {
          text: "Which English club is known as 'The Gunners'?",
          options: ["Arsenal", "Chelsea", "Manchester City", "Tottenham"],
          answer: "Arsenal",
        },
        {
          text: "Which German club has won the most Bundesliga titles?",
          options: [
            "Bayern Munich",
            "Borussia Dortmund",
            "Hamburg",
            "Werder Bremen",
          ],
          answer: "Bayern Munich",
        },
        {
          text: "Which French club is based at the Parc des Princes?",
          options: ["Paris Saint-Germain", "Lyon", "Marseille", "Monaco"],
          answer: "Paris Saint-Germain",
        },
        {
          text: "Which Spanish club is nicknamed 'Los Colchoneros'?",
          options: ["Atletico Madrid", "Real Madrid", "Valencia", "Sevilla"],
          answer: "Atletico Madrid",
        },
        {
          text: "Which Italian club is known for its 'Black and Blue' colors?",
          options: ["Inter Milan", "Juventus", "Napoli", "Fiorentina"],
          answer: "Inter Milan",
        },
        {
          text: "Which English club has won the most FA Cup titles?",
          options: ["Arsenal", "Manchester United", "Chelsea", "Liverpool"],
          answer: "Arsenal",
        },
        {
          text: "Which club won the inaugural FIFA Club World Cup in 2000?",
          options: ["Corinthians", "Real Madrid", "Boca Juniors", "AC Milan"],
          answer: "Corinthians",
        },
        {
          text: "Which club is referred to as 'The Citizens'?",
          options: [
            "Manchester City",
            "Leicester City",
            "Chelsea",
            "Manchester United",
          ],
          answer: "Manchester City",
        },
        {
          text: "Which club is based at Anfield?",
          options: ["Liverpool", "Everton", "Manchester United", "Chelsea"],
          answer: "Liverpool",
        },
        {
          text: "Which Scottish club has won the most league titles?",
          options: ["Rangers", "Celtic", "Aberdeen", "Hearts"],
          answer: "Rangers",
        },
        {
          text: "Which Spanish club is known as 'Los Blancos'?",
          options: ["Real Madrid", "Barcelona", "Atletico Madrid", "Valencia"],
          answer: "Real Madrid",
        },
        {
          text: "Which Italian club is based in Naples?",
          options: ["Napoli", "Roma", "Juventus", "Lazio"],
          answer: "Napoli",
        },
        {
          text: "Which club has the most Eredivisie titles?",
          options: ["Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar"],
          answer: "Ajax",
        },
        {
          text: "Which club's home ground is Old Trafford?",
          options: [
            "Manchester United",
            "Manchester City",
            "Liverpool",
            "Everton",
          ],
          answer: "Manchester United",
        },
        {
          text: "Which Portuguese club has the nickname 'The Eagles'?",
          options: ["Benfica", "Porto", "Sporting CP", "Braga"],
          answer: "Benfica",
        },
        {
          text: "Which club has won the most Ligue 1 titles?",
          options: [
            "Saint-Étienne",
            "Paris Saint-Germain",
            "Marseille",
            "Lyon",
          ],
          answer: "Saint-Étienne",
        },
        {
          text: "Which club has won the most Serie A titles?",
          options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"],
          answer: "Juventus",
        },
        {
          text: "Which club's motto is 'You'll Never Walk Alone'?",
          options: ["Liverpool", "Manchester City", "Chelsea", "Tottenham"],
          answer: "Liverpool",
        },
        {
          text: "Which Dutch club's home is Johan Cruyff Arena?",
          options: ["Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar"],
          answer: "Ajax",
        },
        {
          text: "Which Brazilian club is based in Rio de Janeiro?",
          options: ["Flamengo", "Santos", "Corinthians", "Palmeiras"],
          answer: "Flamengo",
        },
        {
          text: "Which club is nicknamed 'The Blues'?",
          options: ["Chelsea", "Everton", "Manchester City", "Leicester City"],
          answer: "Chelsea",
        },
        {
          text: "Which Argentine club is based at La Bombonera?",
          options: [
            "Boca Juniors",
            "River Plate",
            "Racing Club",
            "Independiente",
          ],
          answer: "Boca Juniors",
        },
      ],
  },
  soccerRecords: {
    title: "Soccer Records",
    questions: [ {
        text: "Who holds the record for the most goals in a calendar year?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Gerd Müller"],
        answer: "Lionel Messi",
      },
      { 
        text: "Which player has the most Ballon d'Or awards?", 
        options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"], 
        answer: "Lionel Messi" 
    },
    { 
        text: "Who holds the record for the most World Cup goals?", 
        options: ["Miroslav Klose", "Ronaldo Nazário", "Pele", "Gerd Müller"], 
        answer: "Miroslav Klose" 
    },
    { 
        text: "Which goalkeeper has the most clean sheets in World Cup history?", 
        options: ["Peter Shilton", "Fabien Barthez", "Manuel Neuer", "Oliver Kahn"], 
        answer: "Peter Shilton" 
    },
    { 
        text: "Who scored the fastest goal in World Cup history?", 
        options: ["Hakan Şükür", "Cristiano Ronaldo", "Lionel Messi", "Pelé"], 
        answer: "Hakan Şükür" 
    },
    { 
        text: "Which player has the most appearances in the UEFA Champions League?", 
        options: ["Cristiano Ronaldo", "Iker Casillas", "Lionel Messi", "Xavi Hernandez"], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Which player holds the record for the most assists in a single World Cup?", 
        options: ["Pele", "Diego Maradona", "Lionel Messi", "Kevin De Bruyne"], 
        answer: "Diego Maradona" 
    },
    { 
        text: "Who has scored the most goals in UEFA Champions League history?", 
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raúl"], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Which team holds the record for the most FIFA World Cup titles?", 
        options: ["Brazil", "Germany", "Italy", "Argentina"], 
        answer: "Brazil" 
    },
    { 
        text: "Which player has the most appearances in World Cup matches?", 
        options: ["Lothar Matthäus", "Miroslav Klose", "Lionel Messi", "Cristiano Ronaldo"], 
        answer: "Lothar Matthäus" 
    },
    { 
        text: "Who is the oldest player to score in a World Cup match?", 
        options: ["Roger Milla", "Zlatan Ibrahimović", "Diego Forlán", "Cristiano Ronaldo"], 
        answer: "Roger Milla" 
    },
    { 
        text: "Which player has scored the most goals in a single UEFA Champions League season?", 
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Who holds the record for the most consecutive La Liga matches scored in?", 
        options: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Luis Suárez"], 
        answer: "Lionel Messi" 
    },
    { 
        text: "Which player has scored the most hat-tricks in international football?", 
        options: ["Cristiano Ronaldo", "Ali Daei", "Lionel Messi", "Pelé"], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Who is the youngest player to score in a World Cup final?", 
        options: ["Pelé", "Kylian Mbappé", "Lionel Messi", "Geoff Hurst"], 
        answer: "Pelé" 
    },
    { 
        text: "Which player has the most Premier League goals in a single season?", 
        options: ["Erling Haaland", "Mohamed Salah", "Alan Shearer", "Thierry Henry"], 
        answer: "Erling Haaland" 
    },
    { 
        text: "Who has scored the most goals in Copa América history?", 
        options: ["Zizinho", "Lionel Messi", "Gabriel Batistuta", "Eduardo Vargas"], 
        answer: "Zizinho" 
    },
    { 
        text: "Which player holds the record for the most goals scored in El Clásico matches?", 
        options: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Karim Benzema"], 
        answer: "Lionel Messi" 
    },
    { 
        text: "Who has scored the most goals in a single Bundesliga season?", 
        options: ["Robert Lewandowski", "Gerd Müller", "Pierre-Emerick Aubameyang", "Lukas Podolski"], 
        answer: "Robert Lewandowski" 
    },
    { 
        text: "Which player holds the record for the most goals scored for a national team?", 
        options: ["Cristiano Ronaldo", "Ali Daei", "Pelé", "Lionel Messi"], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Who has the most assists in UEFA Champions League history?", 
        options: ["Lionel Messi", "Cristiano Ronaldo", "Xavi Hernandez", "Angel Di María"], 
        answer: "Lionel Messi" 
    },
    { 
        text: "Which team holds the record for the longest unbeaten run in international football?", 
        options: ["Italy", "Spain", "Brazil", "Argentina"], 
        answer: "Italy" 
    },
    { 
        text: "Who holds the record for the most goals in a single European Championship?", 
        options: ["Michel Platini", "Cristiano Ronaldo", "Antoine Griezmann", "Alan Shearer"], 
        answer: "Michel Platini" 
    },
    { 
        text: "Which player has the most hat-tricks in the UEFA Champions League?", 
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Neymar Jr."], 
        answer: "Cristiano Ronaldo" 
    },
    { 
        text: "Who is the youngest player to debut in La Liga?", 
        options: ["Ansu Fati", "Vinícius Júnior", "Pedri", "Gavi"], 
        answer: "Gavi" 
    },]
  }
};

let currentQuiz, currentQuestions, currentQuestionIndex = 0;
let correctAnswers = 0, incorrectAnswers = 0;

function startQuiz(category) {
    currentQuiz = quizzes[category];
    currentQuestions = currentQuiz.questions;
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("quiz-title").innerText = currentQuiz.title;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById("current-question-number").innerText = currentQuestionIndex + 1;
    document.getElementById("question-text").innerText = question.text;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const optionCard = document.createElement("div");
        optionCard.classList.add("option-card");
        optionCard.innerText = option;
        optionCard.addEventListener("click", () => selectAnswer(option, optionCard));
        optionsContainer.appendChild(optionCard);
    });

    document.getElementById("next-button").style.display = "none";
}

function selectAnswer(selectedOption, selectedCard) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
        selectedCard.classList.add("correct");
        correctAnswers++;
    } else {
        selectedCard.classList.add("incorrect");
        incorrectAnswers++;
        highlightCorrectAnswer(question.answer);
    }

    disableOptions();
    document.getElementById("next-button").style.display = "block";
}

function highlightCorrectAnswer(correctAnswer) {
    const optionsContainer = document.getElementById("options-container");
    Array.from(optionsContainer.children).forEach((card) => {
        if (card.innerText === correctAnswer) {
            card.classList.add("correct");
        }
    });
}

function disableOptions() {
    const optionCards = document.querySelectorAll(".option-card");
    optionCards.forEach((card) => (card.style.pointerEvents = "none"));
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("correct-answers").innerText = correctAnswers;
    document.getElementById("incorrect-answers").innerText = incorrectAnswers;
    const percentage = ((correctAnswers / currentQuestions.length) * 100).toFixed(2);
    document.getElementById("percentage-score").innerText = percentage + "%";
}

function returnHome() {
    document.getElementById("result").style.display = "none";
    document.getElementById("home").style.display = "flex";
}
