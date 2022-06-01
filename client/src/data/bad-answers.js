const getBadAnswers = (name, userAnswer, correctAnswer) => {
  return [`❌ Incorrect! That was ${userAnswer}, not ${correctAnswer}. Don't you learn anything in school or what? 🧐`, `❌ No. Just no.`, `❌ Matt Norris`, `❌ You == smart returns false. That was ${userAnswer}.`, `❌ Andddd ${name} fails... again.`, `❌ Ok not ok 😐`, `❌ You are wrong, you absolute Anonymous Wombat. That is ${userAnswer}.`, `❌ Nope. *Note: You are supposed to select the right country. 🙄`, `❌ You are good at selecting the wrong country 🙂`, `❌ You tried... And you failed; that was ${userAnswer}.`]
}

export default getBadAnswers;