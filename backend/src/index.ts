import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 4000;

// Enable CORS for all origins (or specify your frontend URL)
app.use(
  cors({
    origin: "http://localhost:5173", // allow only your frontend
    methods: ["GET"],
    credentials: true,
  })
);

app.get("/api/communities", async (_req, res) => {
  try {
    const response = await axios.get(
      "https://devsow.wpengine.com/wp-json/communities/all/",
      {
        headers: {
          Authorization: `Basic ${process.env.API_KEY}`,
        },
      }
    );
    res.status(200).json({ Success: true, data: response.data?.data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({
      Success: false,
      error: error.message || "Failed to fetch communities",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
