const messages = [
  "You shall not open YouTube.",
  "No coffee for the next 10 minutes.",
  "Stop thinking about that thing. Seriously.",
  "Do not touch your phone until further notice.",
  "You are banned from complaining today.",
  "Silence. Just... silence.",
  "No memes. Not even one.",
  "You must stand up and stretch. Now.",
  "Do not Google anything stupid for 15 minutes.",
  "You are not allowed to sigh again today."
];

const messageEl = document.getElementById('message')
const buttonEl = document.getElementById('command-btn')
const spinnerEl = document.getElementById('spinner')

buttonEl.addEventListener('click', () => {
    spinnerEl.classList.remove('hidden');
    buttonEl.disabled = true;

    setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        messageEl.textContent = `❌${randomMsg}`;
        spinnerEl.classList.add('hidden');
        buttonEl.disabled = false;
    }, 1500);
});