const questions = [
    {
        question: "What is the total cost of buying 20 ingredients for ₹50 each?",
        options: ["₹500", "₹750", "₹1000", "₹1500"],
        answer: "₹1000"
    },
    {
        question: "If you sell each dish for ₹100 and you sold 30 dishes, what is your total revenue?",
        options: ["₹3000", "₹5000", "₹7500", "₹9000"],
        answer: "₹3000"
    },
    {
        question: "If your total expenses are ₹5000 and your total revenue is ₹10000, what is your profit?",
        options: ["₹3000", "₹5000", "₹7500", "₹9000"],
        answer: "₹5000"
    },
    {
        question: "What is 2 multiplied by 8?",
        options: ["8", "12", "16", "20"],
        answer: "16"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "If your restaurant sells 50 burgers at ₹150 each and the cost per burger is ₹80, what is your total profit?",
        options: ["₹3500", "₹4500", "₹5500", "₹6500"],
        answer: "₹3500"
    },
    {
        question: "Your restaurant bought 100 kg of potatoes for ₹2000. If the selling price of one dish including potatoes is ₹25 and each dish requires 200 grams of potatoes, how much profit will you make after selling all the dishes?",
        options: ["₹3000", "₹4000", "₹5000", "₹6000"],
        answer: "₹4000"
    },
    {
        question: "If your restaurant's monthly expenses are ₹50000 and your monthly revenue is ₹80000, what is your monthly profit?",
        options: ["₹20000", "₹30000", "₹40000", "₹50000"],
        answer: "₹30000"
    },
    {
        question: "Your restaurant sells 20 pizzas per day at ₹300 each. If the cost of making one pizza is ₹150, what is your daily profit from pizza sales?",
        options: ["₹3000", "₹4000", "₹5000", "₹6000"],
        answer: "₹3000"
    },
    {
        question: "If your restaurant's monthly rent is ₹10000 and monthly utilities are ₹5000, what is your total monthly fixed cost?",
        options: ["₹15000", "₹20000", "₹25000", "₹30000"],
        answer: "₹15000"
    }
];

const customerReviews = [
    "That was amazing! I've never tasted better food!",
    "Decent effort, but could use some improvement.",
    "Disappointing experience. I won't be coming back.",
    "I'm speechless! Absolutely terrible.",
    "Best meal of my life! I'll be a regular here."
];
const funnyFacts = [
    "Did you know? The world's largest pizza was made in Italy in 2012, measuring 1261 square meters!",
    "Fun Fact: The first restaurant in the world opened in Paris in 1765!",
    "Did you know? The world's most expensive burger costs $295 and contains gold flakes!",
    "Fun Fact: The ice cream cone was invented at the 1904 World's Fair in St. Louis!",
    "Did you know? The average person eats about 46 slices of pizza per year!"
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionDiv = document.getElementById('question');
    questionDiv.innerText = questions[currentQuestionIndex].question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.innerText = option;
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsDiv.appendChild(optionButton);
    });
}



function playAgain() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    document.getElementById('feedback').innerText = '';
    document.getElementById('customerReview').innerText = '';
    document.getElementById('playAgainButton').style.display = 'none';
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedbackDiv = document.getElementById('feedback');

    if (selectedAnswer === correctAnswer) {
        feedbackDiv.innerHTML = '<span class="feedback-correct">Correct!</span> You answered the question.';
        score++;
    } else {
        feedbackDiv.innerHTML = '<span class="feedback-incorrect">Incorrect.</span> Try again.';
    }
    document.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
    });

    // Display customer review
    const reviewDiv = document.getElementById('customerReview');
    reviewDiv.innerText = customerReviews[Math.floor(Math.random() * customerReviews.length)];

    const factDiv = document.getElementById('funFact');
    factDiv.innerText = funnyFacts[Math.floor(Math.random() * funnyFacts.length)];
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('feedback').innerText = '';
        document.getElementById('customerReview').innerText = '';
    } else {
        const feedbackDiv = document.getElementById('feedback');
        feedbackDiv.innerHTML = `Congratulations, you've completed the game! Your score is ${score}/${questions.length}`;
        document.getElementById('options').innerHTML = '';
        document.getElementById('playAgainButton').style.display = 'block'; // Show the Play Again button
    }
}


window.onload = function() {
    displayQuestion();
};
