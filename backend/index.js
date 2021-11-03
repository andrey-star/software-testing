const cors = require("cors");

const express = require("express");

const app = express();
const PORT = 5000;

const allowedOrigins = ["http://localhost:4200"];

const options = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.get("/packs", (req, res) => {
  res.send(JSON.stringify(packs));
});

app.get("/pack", (req, res) => {
  const id = req.query.id;
  const pack = packs.find((pack) => pack.id === +id);
  if (pack) {
    res.send(JSON.stringify(pack));
  } else {
    res.status(404).send(`Invalid id: '${id}'`);
  }
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

const packs = [
  {
    id: 1,
    name: "Pure Gold",
    author: "@andreystar",
    description: "Funny pack with some memes",
    previewUrl:
      "https://www.meme-arsenal.com/memes/77cbb60bf5ee3f836a41be3582a38dc0.jpg",
    stickerUrls: [],
  },
  {
    id: 2,
    name: "Icebear",
    author: "@bears",
    description: "Pack from We Bare Bears",
    previewUrl:
      "https://www.meme-arsenal.com/memes/3f4cf1304984d4f9ddfb6e645c38b9eb.jpg",
    stickerUrls: [],
  },
  {
    id: 3,
    name: "Пушок",
    author: "@stickroom",
    description: "Funny pack with some memes",
    previewUrl:
      "https://tlgrm.ru/_/stickers/c14/acf/c14acf87-8032-3cdc-866f-f9b2d7ca7c51/3.webp",
    stickerUrls: [],
  },
];
