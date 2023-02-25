import * as Report from "../models/Report.js";

export const create = async (req, res) => {
    const result = await Report.create(req.body.title, req.body.description, req.body.test,req.body.price);
    res.status(201).json(result);
}
export const deleteDaten = async(req,res)=>{
    const result = await Report.deleteDaten(req.params.id,req.body)
    console.log(req.params.id,req.body);
    res.status(200).json(result);

}
export const getDaten = async (req, res) => {
    const result = await Report.getDaten(req.params.id);
    res.status(201).json(result);
}
