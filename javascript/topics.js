// Topic buttons...
const topic01Btn = document.querySelector('#topic01Btn');
const topic02Btn = document.querySelector('#topic02Btn');
const topic03Btn = document.querySelector('#topic03Btn');

// Contents and Exercise containers...
const content01 = document.querySelector('#topic-1');
const exercise01 = document.querySelector('#exercise-1');
const content02 = document.querySelector('#topic-2');
const exercise02 = document.querySelector('#exercise-2');
const content03 = document.querySelector('#topic-3');
const exercise03 = document.querySelector('#exercise-3');

// Contents and Exercise Navigation buttons...
const exerciseBtn01 = document.querySelector('#exercise__btn-1');
const courseBtn01 = document.querySelector('#course__btn-1');
const exerciseBtn02 = document.querySelector('#exercise__btn-2');
const courseBtn02 = document.querySelector('#course__btn-2');
const exerciseBtn03 = document.querySelector('#exercise__btn-3');
const courseBtn03 = document.querySelector('#course__btn-3');
const choices = document.querySelectorAll('input[type="radio"]');

// Other Navigation buttons
const completeBtn = document.querySelector('#complete__btn');
const completeWrapper = document.querySelector('.complete__wrapper');
const feedbackBtn = document.querySelector('#congrats__btn');
const contentHeader = document.querySelector('.content__header');
const ellipsis = document.querySelector('.ellipsis');
const asideBar = document.querySelector('.aside');
const previousBtn = document.querySelector('.previous');
const gradeButton01 = document.querySelector('.gradeButton01');
const gradeButton02 = document.querySelector('.gradeButton02');
const gradeButton03 = document.querySelector('.gradeButton03');
const score01 = document.querySelector('#score01');
const score02 = document.querySelector('#score02');
const score03 = document.querySelector('#score03');

// Progress and Meters
const meter01 = document.querySelector('.meter01');
const meter02 = document.querySelector('.meter02');
const meter03 = document.querySelector('.meter03');
const progress01 = document.querySelector('.progress01');
const progress02 = document.querySelector('.progress02');
const progress03 = document.querySelector('.progress03');
const progressText01 = document.querySelector('.progress01__text');
const progressText02 = document.querySelector('.progress02__text');
const progressText03 = document.querySelector('.progress03__text');
let totalScore = 0;

// Functions to show exercises and contents
const showExercise01 = () => {
  hideAllContentsAndExercises();
  exercise01.style.display = 'block';
};
const showExercise02 = () => {
  hideAllContentsAndExercises();
  exercise02.style.display = 'block';
};
const showExercise03 = () => {
  hideAllContentsAndExercises();
  exercise03.style.display = 'block';
};

const showContent01 = () => {
  resetExercise();
  hideAllContentsAndExercises();
  removeActiveClass();
  content01.style.display = 'block';
  topic01Btn.classList.add('active');
};
const showContent02 = () => {
  resetExercise();
  hideAllContentsAndExercises();
  removeActiveClass();
  content02.style.display = 'block';
  topic02Btn.classList.add('active');
};
const showContent03 = () => {
  resetExercise();
  hideAllContentsAndExercises();
  removeActiveClass();
  content03.style.display = 'block';
  topic03Btn.classList.add('active');
};
const showCongratsMessage = () => {
  hideAllContentsAndExercises();
  completeWrapper.style.display = 'block';
  feedbackBtn.style.display = 'block';
  topic01Btn.style.display = 'none';
  contentHeader.style.display = 'none';
  previousBtn.style.display = 'none';
};

// Result update functions
const calculateScore01 = () => {
  let correctAnswers = document.querySelectorAll(
    'input[type="radio"].correct:checked'
  ).length;
  let total = correctAnswers * 20;
  score01.innerHTML = `<h2>Score: ${total}%</h2><p>Saved sucessfully.</p>`;
  score01.style.display = 'block';
  meter01.style.display = 'block';
  completeBtn.style.display = 'block';
  gradeButton01.style.display = 'none';

  if (total < 80) {
    score01.innerHTML = `<h2>Score: ${total}%</h2><p>You didn't reach the benchmark.</p><br><p>Go over the topic and try again.</p>`;
    courseBtn01.style.display = 'block';
    completeBtn.style.display = 'none';
    meter01.style.display = 'none';
  } else {
    totalScore += total;
    topic01Btn.disabled = true;
  }
  progress01.innerHTML = `<span>${totalScore}</span>`;
};

const calculateScore02 = () => {
  let correctAnswers = document.querySelectorAll(
    'input[type="radio"].correct:checked'
  ).length;
  let total = correctAnswers * 20;
  score02.innerHTML = `<h2>Score: ${total}%</h2><p>Saved sucessfully.</p>`;
  score02.style.display = 'block';
  meter02.style.display = 'block';
  gradeButton02.style.display = 'none';

  if (total < 80) {
    score02.innerHTML = `<h2>Score: ${total}%</h2><p>You didn't reach the benchmark.</p><br><p>Go over the topic and try again.</p>`;
    courseBtn02.style.display = 'block';
    meter02.style.display = 'none';
  } else {
    totalScore += total;
    topic02Btn.disabled = true;
    progressText02.innerHTML = `<p>You passed!</p>`;
  }
  progress02.innerHTML = `<span>${totalScore}</span>`;
};

const calculateScore03 = () => {
  let correctAnswers = document.querySelectorAll(
    'input[type="radio"].correct:checked'
  ).length;
  let total = correctAnswers * 20;
  score03.innerHTML = `<h2>Score: ${total}%</h2><p>Saved sucessfully.</p>`;
  score03.style.display = 'block';
  meter03.style.display = 'block';
  gradeButton03.style.display = 'none';
  
  // Update totalScore 
  if (total < 80) {
    score03.innerHTML = `<h2>Score: ${total}%</h2><p>You didn't reach the benchmark.</p><p>Go over the topic and try again.</p>`;
    courseBtn03.style.display = 'block';
    meter03.style.display = 'none';
  } else {
    totalScore += total;
    topic03Btn.disabled = true;
    progressText03.innerHTML = `<p>Sucess!</p>`;
  }
  progress03.innerHTML = `<span>${totalScore}</span>`;
};

const openAside = () => {
  asideBar.classList.toggle('show');
}

// reset exercise div
const resetExercise = () => {
  offCheckedRadio();
  gradeButton01.style.display = 'block';
  gradeButton02.style.display = 'block';
  gradeButton03.style.display = 'block';
  courseBtn01.style.display = 'none';
  courseBtn02.style.display = 'none';
  courseBtn03.style.display = 'none';
  score01.style.display = 'none';
  score02.style.display = 'none';
  score03.style.display = 'none';
  meter01.style.display= 'none';
  meter02.style.display= 'none';
  meter03.style.display= 'none';
};

// remove checked radios when switching divs
const offCheckedRadio = () => {
  for (selected of choices) {
    selected.checked = false;
  }
};

// Function to hide all contents and exercises
const hideAllContentsAndExercises = () => {
  content01.style.display = 'none';
  content02.style.display = 'none';
  content03.style.display = 'none';
  exercise01.style.display = 'none';
  exercise02.style.display = 'none';
  exercise03.style.display = 'none';
  completeBtn.style.display = 'none';
};

// Function to remove active class
const removeActiveClass = () => {
  topic01Btn.classList.remove('active');
  topic02Btn.classList.remove('active');
  topic03Btn.classList.remove('active');
};

// Event handlers
topic01Btn.addEventListener('click', showContent01);
topic02Btn.addEventListener('click', showContent02);
topic03Btn.addEventListener('click', showContent03);
courseBtn01.addEventListener('click', showContent01);
courseBtn02.addEventListener('click', showContent02);
courseBtn03.addEventListener('click', showContent03);
exerciseBtn01.addEventListener('click', showExercise01);
exerciseBtn02.addEventListener('click', showExercise02);
exerciseBtn03.addEventListener('click', showExercise03);
completeBtn.addEventListener('click', showCongratsMessage);
gradeButton01.addEventListener('click', calculateScore01);
gradeButton02.addEventListener('click', calculateScore02);
gradeButton03.addEventListener('click', calculateScore03);
ellipsis.addEventListener('click', openAside);
