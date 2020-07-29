// console.log(__dirname);
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
console.log(process.env.MONGO_URL);
