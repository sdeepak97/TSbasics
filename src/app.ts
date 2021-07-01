import express from "express";
import { authrouter } from "./routes/auth.router";
import { router } from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const  port = process.env.PORT


app.set("port", port);

app.use("/", router)
app.use("/auth",authrouter)

app.listen(app.get("port"), () => {
    console.log(`🚀 is rocking over ${app.get("port")}`)
})
