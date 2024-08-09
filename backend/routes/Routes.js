import express from "express"
import {AddserviceDetails} from "../controller/adminController.js"
const Routes = express.Router()



Routes.post("/addservices",AddserviceDetails)

export default Routes