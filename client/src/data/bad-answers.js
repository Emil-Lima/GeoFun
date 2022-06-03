const getBadAnswers = (name, userAnswer, correctAnswer) => {
  return [
    `❌ Incorrect! This is ${userAnswer}, not ${correctAnswer}. Don't you learn anything in school or what? 🧐`,
    `❌ No. Just no.`,
    `❌ Matt Norris`,
    `❌ You == smart returns false. This is ${userAnswer}.`,
    `❌ Andddd ${name} fails... again.`,
    `❌ Ok not ok 😐`,
    `❌ You are wrong, you absolute Anonymous Wombat. This is ${userAnswer}.`,
    `❌ Nope. *Note: You are supposed to select the right country. 🙄`,
    `❌ You are good at selecting the wrong country 🙂`,
    `❌ You tried... And you failed; this is ${userAnswer}.`,
  ];
};

export default getBadAnswers;
