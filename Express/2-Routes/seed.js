import { faker } from "@faker-js/faker";
import Report from "./models/Report.js";

const deleteReports = async () => {
    return await Report.deleteMany();
}

const createReport = async () => {
    const report = new Report({
        title: faker.lorem.sentences(1),
        description: faker.lorem.sentences(),
    });
    await report.save();
}

const createReports = async (count = 1) => {
    for (let i = 0; i < count; i++) {
        console.log("creating report: ", i + 1);
        await createReport();
    }
}
try {
    if (!process.argv.includes("doNotDelete")) {
        console.log("deleting all records...");
        await deleteReports();
        console.log("done.");
    }
    console.log("creating new records...");
    const count = process.argv[2] === "doNotDelete" ? undefined : process.argv[2];
    await createReports(count);
    console.log("done.");
    console.log("seeding finished. happy coding!");
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}