// const express = require("express");
import express from "express"
import * as controller from  "../controller/photoController.js"

const router = express.Router();

router
.get("/",controller.getAllPhotos)

.get("/:id",controller.getPhoto)

.put("/:id",controller.editPhoto)

.delete("/:id",controller.deletePhoto)

.post("/",controller.savePhoto)


export default router