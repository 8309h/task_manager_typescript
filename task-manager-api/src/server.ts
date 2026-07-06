import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";
import  router  from "./routes/task.routes";
import { loggerMiddleware } from "./middlewares/logger.middleware";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Register middleware BEFORE routes
app.use(loggerMiddleware);
app.use("/api/tasks", router);

const startServer = async (): Promise<void> => {
      try {
            await connectDB();

            app.listen(PORT, () => {
                  console.log(`🚀 Server is running on http://localhost:${PORT}`);
            });
      } catch (error) {
            console.error("❌ Failed to start server:", error);
            process.exit(1);
      }
};

startServer();