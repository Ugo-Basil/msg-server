import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        return console.log("Successfully connected to Database");
      })

      .catch((error) => {
        console.log("Error connecting to database: ", error.message);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect); 
};
