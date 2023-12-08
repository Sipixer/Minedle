import express, { Express } from "express";
import { checkGuess } from "./guesser";
import { Mob, Mobs } from "./utils/mobs";
import crypto from "crypto";

export const gameSessions = new Map<string, Mob>();
const app: Express = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/newGame", (req, res) => {
  const mob = Mobs.getRandomMob();
  const sessionId = crypto.randomBytes(20).toString("hex");
  if (!gameSessions.has(sessionId)) {
    gameSessions.set(sessionId, mob);
  }

  res.json({ gameID: sessionId });
});

app.post("/guess", (req, res) => {
  if (!req.body.sessionId) {
    res.status(400).send("Missing sessionId");
    return;
  }
  if (!req.body.guess) {
    res.status(400).send("Missing guess");
    return;
  }
  const sessionId = req.body.sessionId;
  if (!gameSessions.has(sessionId)) {
    res.status(400).send("Session not found");
    return;
  }

  const mob = gameSessions.get(sessionId);

  if (!mob) {
    res.status(400).send("Session not found");
    return;
  }

  const guessValidation = checkGuess(mob, req.body.guess);
  return res.status(guessValidation.status).send(guessValidation.content);
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});
