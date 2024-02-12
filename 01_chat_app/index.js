const chatList = [
  {
    id: 1,
    date: new Date(),
    name: "Ritesh",
    img: "images/p1.jpg",

    messages: [
      {
        userId: 2,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 4,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 5,
        img: ``,
        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 2,
    date: new Date(),
    name: "Lakshay",
    img: "images/p2.jpg",
    messages: [
      {
        userId: 2,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 2,
        img: ``,
        msg: "I am also good, we are talking to each other after so long",
      },
      {
        userId: 1,
        img: ``,
        msg: "Yeah righ",
      },

      {
        userId: 3,
        img: ``,
        msg: "Hello, how are you",
      },

      {
        userId: 4,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 5,
        img: ``,
        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 3,
    date: new Date(),
    name: "Hitesh",
    img: "images/p3.jpg",
    messages: [
      {
        userId: 2,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "Same here",
      },
      {
        userId: 3,
        img: ``,
        msg: "I am getting bore",
      },
      {
        userId: 5,
        img: ``,
        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 4,
    date: new Date(),
    name: "Sakib",
    img: "images/p4.jpg",
    messages: [
      {
        userId: 2,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "Ohh right",
      },
      {
        userId: 4,
        img: ``,
        msg: "Okay, bye",
      },
      {
        userId: 5,
        img: ``,
        msg: "How was your day",
      },
    ],
  },
  {
    id: 5,
    date: new Date(),
    img: "images/p5.jpg",
    name: "Dinesh",
    messages: [
      {
        userId: 2,
        img: ``,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        img: ``,
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        img: ``,
        msg: "How do you do?",
      },
      {
        userId: 1,
        img: ``,
        msg: "How was the movie",
      },
      {
        userId: 4,
        img: ``,
        msg: "It was great movie",
      },
      {
        userId: 5,
        img: ``,
        msg: "It's pleasure meeting you",
      },
    ],
  },
];

const chatLi = document.getElementById("chat_list");
const myUserId = 1;
const searchButton = document.getElementById("search");
const conversations = document.getElementById("conversations");
const convList = document.getElementById("conv_list");

// Displayed Chats

/******************************************************* */

chatList.forEach((chat) => {
  let li = document.createElement("li");
  let user = {}; // object
  let messages = [];

  li.addEventListener("click", (e) => {
    conversations.classList.remove("hidden");
    user = getUser(chat.id);
    messages = user.messages.filter(
      (msg) => msg.userId === user.id || myUserId === msg.userId
    );

    getConversation(messages);
  });

  li.className =
    "flex hover:bg-purple-700 justify-between w-full py-4 px-8 gap-4";
  li.innerHTML = `

        <img
            src=${chat.img}
            alt=${chat.name}
            class="w-20 h-20 object-cover rounded-full border-4 border-purple-500"
        />
        <div>
            <h3 class="font-semibold text-2xl">${chat.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <time class="text-purple-200 text-lg" datetime="18:20">${chat.date.getHours()}:${chat.date.getMinutes()}</time>
    
    `;

  chatLi.append(li);
});

/******************************************************* */

//Display input

/******************************************************* */

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.remove("hidden");
  searchBar.focus();
});

/******************************************************* */

function getUser(uid) {
  const conv = chatList.find((chat) => chat.id === uid);

  return conv;
}

function getConversation(msgs) {
  convList.innerHTML = "";
  let content = "";
  msgs.forEach((text) => {
    let div = document.createElement("div");
    let user = getUser(text.userId);
    div.className = `flex ${
      text.userId === myUserId ? "flex-row-reverse" : ""
    } justify-between w-full py-4 px-8 gap-4`;
    div.innerHTML = `
        <img
        src="${user.img}"
        alt="${user.name}"
        class="w-20 h-20 object-cover rounded-full border-4 border-white"
        />

        <p class="bg-white p-4 rounded w-full">
            ${text.msg}
        </p>
    `;

    convList.append(div);
  });
}
