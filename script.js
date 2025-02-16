const words = [
    "ABOUT", "ALERT", "ARGUE", "BEACH", "ABOVE", "ALIKE", "ARISE", "BEGAN", "ABUSE", "ALIVE", "ARRAY", "BEGIN",
    "ACTOR", "ALLOW", "ASIDE", "BEGUN", "ACUTE", "ALONE", "ASSET", "BEING", "ADMIT", "ALONG", "AUDIO", "BELOW",
    "ADOPT", "ALTER", "AUDIT", "BENCH", "ADULT", "AMONG", "AVOID", "BILLY", "AFTER", "ANGER", "AWARD", "BIRTH",
    "AGAIN", "ANGLE", "AWARE", "BLACK", "AGENT", "ANGRY", "BADLY", "BLAME", "AGREE", "APART", "BAKER", "BLIND",
    "AHEAD", "APPLE", "BASES", "BLOCK", "ALARM", "ARENA", "BASIC", "BLOOD", "ALBUM", "ARGUE", "BASIS", "BOARD",
    "BOOST", "BUYER", "CHINA", "COVER", "BOOTH", "CABLE", "CHOSE", "CRAFT", "BOUND", "CALIF", "CIVIL", "CRASH",
    "BRAIN", "CARRY", "CLAIM", "CREAM", "BRAND", "CATCH", "CLASS", "CRIME", "BREAD", "CAUSE", "CLEAR", "CROSS",
    "BREAK", "CHAIN", "CLICK", "CROWD", "BREED", "CHAIR", "CLOCK", "CROWN", "BRIEF", "CHART", "CLOSE", "CURVE",
    "BROAD", "CHASE", "COACH", "CYCLE", "BROKE", "CHECK", "COAST", "DAILY", "BROWN", "CHEST", "COUNT", "DANCE",
    "BUILD", "CHIEF", "COULD", "DEALT", "BUILT", "CHILD", "COURT", "DEATH", "DEBUT", "ENTRY", "FORTH", "GROUP",
    "DELAY", "EQUAL", "FORTY", "GROWN", "DEPTH", "ERROR", "FORUM", "GUARD", "DOING", "EVENT", "FOUND", "GUESS",
    "DOUBT", "EVERY", "FRAME", "GUEST", "DOZEN", "EXACT", "FRANK", "GUIDE", "DRAFT", "EXIST", "FRESH", "HAPPY",
    "DRAMA", "EXTRA", "FRUIT", "HARRY", "DRAWN", "FAITH", "FRONT", "HEART", "DREAM", "FALSE", "FULLY", "HENCE",
    "DRESS", "FAULT", "FUNNY", "NIGHT", "DRILL", "FIBRE", "GIANT", "HORSE", "DRINK", "FIELD", "GIVEN", "HOTEL",
    "DRIVE", "FIFTH", "GLASS", "HOUSE", "DROVE", "FIFTY", "GLOBE", "HUMAN", "DYING", "FIGHT", "GOING", "IDEAL",
    "EAGER", "FINAL", "GRADE", "IMAGE", "EARLY", "FIRST", "GRAND", "INDEX", "EARTH", "FIXED", "GRASS", "INNER",
    "EIGHT", "FLASH", "GRANT", "INPUT", "ELITE", "FLEET", "GRASP", "ISSUE", "EMPTY", "FLOOR", "GREAT", "IRONY",
    "ENEMY", "FLUID", "GREEN", "JUICE", "ENJOY", "FOCUS", "GROSS", "JOINT", "ENTER", "FORCE", "GUARD", "JUDGE",
    "METAL", "MEDIA", "NEWLY", "NOISE", "KNOWN", "LOCAL", "MIGHT", "NORTH", "LABEL", "LOGIC", "MINOR", "NOTED",
    "LARGE", "LOOSE", "MINUS", "NOVEL", "LASER", "LOWER", "MIXED", "NURSE", "LATER", "LUCKY", "MODEL", "OCCUR",
    "LAUGH", "LUNCH", "MONEY", "OCEAN", "LAYER", "LYING", "MONTH", "OFFER", "LEARN", "MAGIC", "MORAL", "OFTEN",
    "LEASE", "MAJOR", "MOTOR", "ORDER", "LEAST", "MAKER", "MOUNT", "OTHER", "LEAVE", "MARCH", "MOUSE", "OUGHT",
    "LEGAL", "MUSIC", "MOUTH", "PAINT", "LEVEL", "MATCH", "MOVIE", "PAPER", "LIGHT", "MAYOR", "NEEDS", "PARTY",
    "LIMIT", "MEANT", "NEVER", "PEACE", "POWER", "RADIO", "ROUND", "ROUTE", "PANEL", "PRESS", "RAISE", "ROYAL",
    "PHASE", "PRICE", "RANGE", "RURAL", "PHONE", "PRIDE", "RAPID", "SCALE", "PHOTO", "PRIME", "RATIO", "SCENE",
    "PIECE", "PRINT", "REACH", "SCOPE", "PILOT", "PRIOR", "READY", "SCORE", "PITCH", "PROOF", "RIGHT", "SENSE",
    "PLACE", "PROUD", "RIVAL", "SERVE", "PLAIN", "PROVE", "RIVER", "SEVEN", "PLANE", "QUEEN", "QUICK", "SHALL",
    "PLANT", "SIXTH", "STAND", "SHAPE", "PLATE", "QUIET", "ROMAN", "SHARE", "POINT", "QUITE", "ROUGH", "SHARP",
    "POUND", "RADIO", "ROUND", "SHEET", "SPARE", "STYLE", "TIMES", "TIRED", "SHELF", "SPEAK", "SUGAR", "TITLE",
    "SHELL", "SPEED", "SUITE", "TODAY", "SHIFT", "SPEND", "SUPER", "TOPIC", "SHIRT", "SPENT", "SWEET", "TOTAL",
    "SHOCK", "SPLIT", "TABLE", "TOUCH", "SHOOT", "SPOKE", "TAKEN", "TOUGH", "SHORT", "SPORT", "TASTE", "TOWER",
    "SHOWN", "STAFF", "TAXES", "TRACK", "SIGHT", "STAGE", "TEACH", "TRADE", "SINCE", "STAKE", "TEETH", "TREAT",
    "SIXTY", "START", "TEXAS", "TREND", "SIZED", "STATE", "THANK", "TRIAL", "SKILL", "STEAM", "THEFT", "TRIED",
    "SLEEP", "STEEL", "THEIR", "TRIES", "SLIDE", "STICK", "THEME", "TRUCK", "SMALL", "STILL", "THERE", "TRULY",
    "SMART", "STOCK", "THESE", "TRUST", "SMILE", "STONE", "THICK", "TRUTH", "SMITH", "STOOD", "THING", "TWICE",
    "SMOKE", "STORE", "THINK", "UNDER", "SOLID", "STORM", "THIRD", "UNDUE", "SOLVE", "STORY", "THOSE", "UNION",
    "SORRY", "STRIP", "THREE", "UNITY", "SOUND", "STUCK", "THREW", "UNTIL", "SOUTH", "STUDY", "THROW", "UPPER",
    "SPACE", "STUFF", "TIGHT", "UPSET", "WHOLE", "WASTE", "WOUND", "WRITE", "URBAN", "WHOSE", "WATCH", "WRONG",
    "USAGE", "WOMAN", "WATER", "WROTE", "USUAL", "TRAIN", "WHEEL", "YIELD", "VALID", "WORLD", "WHERE", "YOUNG",
    "VALUE", "WORRY", "WHICH", "YOUTH", "VIDEO", "WORSE", "WHITE", "WORTH", "VIRUS", "WORST", "VITAL", "VOICE"
];

let secretWord = "";
let guessesRemaining = 6;
let currentGuess = "";
let guessedLetters = {};

const gameBoard = document.getElementById("game-board");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");

function initializeGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    guessesRemaining = 6;
    currentGuess = "";
    guessedLetters = {};
    gameBoard.innerHTML = "";
    message.textContent = "";
    initializeKeyboard();

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.innerHTML = `
                <div class="letter"></div>
                <div class="front"></div>
                <div class="back"></div>
            `;
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

function initializeKeyboard() {
    const keyboardLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ];

    keyboard.innerHTML = "";
    keyboardLayout.forEach(row => {
        const keyboardRow = document.createElement("div");
        keyboardRow.className = "keyboard-row";
        row.forEach(key => {
            const keyElement = document.createElement("div");
            keyElement.className = "keyboard-key";
            keyElement.textContent = key;
            keyElement.addEventListener("click", () => handleKeyPress(key));
            keyboardRow.appendChild(keyElement);
        });
        keyboard.appendChild(keyboardRow);
    });
}

function handleKeyPress(key) {
    if (key === "ENTER") {
        submitGuess();
    } else if (key === "BACKSPACE") {
        currentGuess = currentGuess.slice(0, -1);
        updateBoard();
    } else if (currentGuess.length < 5 && /^[A-Za-z]$/.test(key)) {
        currentGuess += key.toUpperCase();
        updateBoard();
    }
}

function updateBoard() {
    const row = gameBoard.children[6 - guessesRemaining];
    for (let i = 0; i < 5; i++) {
        const cell = row.children[i];
        const letterElement = cell.querySelector(".letter");
        letterElement.textContent = currentGuess[i] || "";
    }
}

function submitGuess() {
    if (currentGuess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    const row = gameBoard.children[6 - guessesRemaining];
    let correctLetters = 0;

    for (let i = 0; i < 5; i++) {
        const cell = row.children[i];
        const letter = currentGuess[i];
        const back = cell.querySelector(".back");

        if (letter === secretWord[i]) {
            back.style.backgroundColor = "#6aaa64"; // Green
            guessedLetters[letter] = "green";
            correctLetters++;
        } else if (secretWord.includes(letter)) {
            back.style.backgroundColor = "#c9b458"; // Yellow
            if (guessedLetters[letter] !== "green") {
                guessedLetters[letter] = "yellow";
            }
        } else {
            back.style.backgroundColor = "#787c7e"; // Gray
            guessedLetters[letter] = "gray";
        }

        cell.classList.add("flip");
    }

    updateKeyboard();

    if (correctLetters === 5) {
        message.textContent = "Congratulations! You've guessed the word!";
        endGame();
    } else {
        guessesRemaining--;
        if (guessesRemaining === 0) {
            message.textContent = `Game over! The word was ${secretWord}.`;
            endGame();
        } else {
            currentGuess = "";
        }
    }
}

function updateKeyboard() {
    const keys = document.querySelectorAll(".keyboard-key");
    keys.forEach(key => {
        const letter = key.textContent;
        if (guessedLetters[letter]) {
            key.classList.add(guessedLetters[letter]);
        }
    });
}

function endGame() {
    setTimeout(initializeGame, 3000); // Restart the game after 3 seconds
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitGuess();
    } else if (e.key === "Backspace") {
        handleKeyPress("BACKSPACE");
    } else if (/^[A-Za-z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
    }
});

initializeGame();
