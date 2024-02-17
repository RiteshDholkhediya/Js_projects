const chatList = [
  {
    id: 1,
    name: "Ritesh",
    img: "images/p1.jpg",
    messages: [
      {
        date: new Date(),
        userId: 2,
        msg: "Hello, how are you",
      },
      {
        date: new Date(),
        userId: 1,
        msg: "I am good, What about you",
      },
      {
        date: new Date(),
        userId: 3,
        msg: "Hello, how are you",
      },
      {
        date: new Date(),
        userId: 1,

        msg: "I am good, What about you",
      },
      {
        date: new Date(),
        userId: 4,

        msg: "I am good, What about you",
      },
      {
        date: new Date(),
        userId: 5,

        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 2,
    name: "Lakshay",
    img: "images/p2.jpg",
    messages: [
      {
        date: new Date(),
        userId: 2,

        msg: "Hello, how are you",
      },
      {
        date: new Date(),
        userId: 1,

        msg: "I am good, What about you",
      },
      {
        date: new Date(),
        userId: 2,

        msg: "I am also good, we are talking to each other after so long",
      },
      {
        date: new Date(),
        userId: 1,
        msg: "Yeah righ",
      },

      {
        date: new Date(),
        userId: 3,
        msg: "Hello, how are you",
      },

      {
        date: new Date(),
        userId: 4,
        msg: "I am good, What about you",
      },
      {
        date: new Date(),
        userId: 5,
        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 3,
    name: "Hitesh",
    img: "images/p3.jpg",
    messages: [
      {
        date: new Date(),
        userId: 2,

        msg: "Hello, how are you",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        date: new Date(),
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "Same here",
      },
      {
        userId: 3,
        date: new Date(),
        msg: "I am getting bore",
      },
      {
        userId: 5,
        date: new Date(),
        msg: "I am good, What about you",
      },
    ],
  },
  {
    id: 4,
    name: "Sakib",
    img: "images/p4.jpg",
    messages: [
      {
        date: new Date(),
        userId: 2,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        date: new Date(),
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "Ohh right",
      },
      {
        userId: 4,
        date: new Date(),
        msg: "Okay, bye",
      },
      {
        userId: 5,
        date: new Date(),
        msg: "How was your day",
      },
    ],
  },
  {
    id: 5,
    img: "images/p5.jpg",
    name: "Dinesh",
    messages: [
      {
        date: new Date(),
        userId: 2,
        msg: "Hello, how are you",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "I am good, What about you",
      },
      {
        userId: 3,
        date: new Date(),
        msg: "How do you do?",
      },
      {
        userId: 1,
        date: new Date(),
        msg: "How was the movie",
      },
      {
        userId: 4,
        date: new Date(),
        msg: "It was great movie",
      },
      {
        userId: 5,
        date: new Date(),
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
let activeConvId;

// Displayed Chats

loadChats();

//Display input

/******************************************************* */

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.remove("hidden");
  searchBar.focus();
});

/******************************************************* */

//Event listener on form

document.getElementById("sendMsg").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputFormVal = document.getElementById("formSendText").value;
  let conv;
  let msgObj = {
    date: new Date(),
    userId: myUserId,
  };
  conv = chatList.find((chat) => activeConvId === chat.id);
  if (conv) {
    msgObj.msg = inputFormVal;
    conv.messages.push(msgObj);
    displayConversation(yourConversation(conv));
    loadChats();
    document.getElementById("formSendText").value = "";
  }
});

function getUser(uid) {
  const conv = chatList.find((chat) => chat.id === uid);
  return conv;
}

function displayConversation(msgs) {
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

function yourConversation(chat) {
  messages = chat.messages.filter(
    (msg) => msg.userId === chat.id || myUserId === msg.userId
  );
  return messages;
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-us", { timeStyle: "short" }).format(date);
}

function getLastMessage(chat) {
  let msgs = yourConversation(chat);
  return msgs[msgs.length - 1];
} // this will return the object

function loadChats() {
  chatLi.innerHTML = "";
  chatList.forEach((chat) => {
    let li = document.createElement("li");
    // let user = {}; // object
    let messages = yourConversation(chat);

    li.addEventListener("click", (e) => {
      e.preventDefault();
      conversations.classList.remove("hidden"); // removed class from html ele
      messages = yourConversation(chat);
      displayConversation(messages);
      activeConvId = chat.id;
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
  
          <time class="text-purple-200  w-[5rem]" datetime="18:20">${
            activeConvId ? "" : formatTime(getLastMessage(chat).date)
          }</time>
      `;

    chatLi.append(li);
  });
}
