const messages = [
  "Daniel",
  "Carolina",
  "Paulina",
  "Ana",
  "Yessica",
  "Diana",
  "Laura"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
