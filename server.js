import express from "express";
import publicRoutes from "./routes/public.js";
const app = express();
app.use(express.json());

app.use("/", publicRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando 😄");
});

//caroline
// NGNaXzw1ihHiHcOA

// mongodb+srv://caroline:<db_password>@cluster0.dflqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://caroline:NGNaXzw1ihHiHcOA@cluster0.dflqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
