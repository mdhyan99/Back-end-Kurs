import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
        type: String,
        default: "nicht verfügbar",
    },
    description: {
        type: String,
    },
    test: {
        type: String,
        default: "blubb",
    },
    price: {
        type: Number,
    },
});
const Report = mongoose.model("Report", schema);

export const create = async (title, description, test, price) => {
    const newReport = new Report({ title, description, test, price });
    const result = await newReport.save();
    return result;
};

export const deleteDaten = async (id,daten) => {
    const result = await Report.updateOne({
        _id:id,
    },{$set:{title:daten.title, description:daten.description, test:daten.test, price:daten.price}});
    return result;
};

export const getDaten = async (id) => {
 
    const result = await Report.findOne({_id:id});
    return result;
};

export default Report;
