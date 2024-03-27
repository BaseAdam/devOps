import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Counter, register } from "prom-client";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const dummyCounter = new Counter({
  name: 'dummy_counter',
  help: "I'm a dummy counter",
  registers: [register]
})

setInterval(() => {
  dummyCounter.inc()
}, 5000)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});