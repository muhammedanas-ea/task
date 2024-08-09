import express from "express";
import {
  AddserviceDetails,
  serviceDetails,
} from "../controller/adminController.js";
const Routes = express.Router();

Routes.post("/addservices", AddserviceDetails);
Routes.get("/services", serviceDetails);

export default Routes;
