const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
    .connect("mongodb://localhost/DBITShare")
    .then(() => console.log("Connection done"))
    .catch((err) => console.log("Connection faild"));

// Schema
// Collection = Table
// Document = raw
// Schema Types
/*
    String - Number - Boolean  - Date - Array - Buffer - ObjectID
    */

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    date: { type: Date, default: Date.now() },
    tags: [String],
    IsPublished: Boolean,
});

// Model
// Class ==> Pascal Notion
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    // Take Object - Camel Notion

    const course = new Course({
        name: "MEAN Stack",
        author: "Ahmed Rabea",
        price: 1000,
        tags: ["back end", "frond end"],
        IsPublished: true,
    });
    // CRUD : Create - Read -Update - Delete
    const result = await course.save();
    console.log(result);
}

// zeigt alle Document

async function getAllDocument() {
    const courses = await Course
    .find()
    console.log("Alle Ducoment");
    console.log(`${courses} `);
}
getAllDocument();


async function getubdate() {
    const courses = await Course
    .updateMany({author: 'Ahmed masri'},{
        $set:{
            price:1029 // wird ändern 
        }

    })
    console.log(courses);
    
}
getubdate();

// async function getPaging() {
//     const pageNumber = 1; // kommt unten in Paging nummer
//     const pageSize = 2; // wie viel object hat seite 1
//     const courses = await Course
//     .find()
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
//     .select({name:1})
    
//     console.log(courses);
// }
// getPaging(); // hier zeigt nur 2 object weil pagSize = 2

/*
equal =eq
not equal =ne
greater than = gt
greater than or equal to  = gte
less than = lt
less than or equal to = lte
in (25,30,35) = in
not in = nin

*/
