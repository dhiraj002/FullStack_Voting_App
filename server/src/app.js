import express from "express";
import UserRouter from "./routes/user.routes.js";
import CandidateRouter from "./routes/candidate.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://yourdomain.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/users", UserRouter);
app.use("/api/candidates", CandidateRouter);

// Health check route
app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
