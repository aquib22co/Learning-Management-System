import { Subject } from "../models/subjects.model.js";
import { Semester } from "../models/sem.model.js";

// Example of adding a new subject to semester 4
async function addSubjectToSemester() {
    try {
        // Find the semester (e.g., semester 4)
        const semester4 = await Semester.findOne({ semester: 4 });
        
        if (!semester4) throw new Error('Semester not found');

        // Create a new subject
        const newSubject = new Subject({
            name: "Analysis of Algorithms",
            code: "AOA",
            semester: semester4._id
        });

        // Save the subject and associate it with the semester
        await newSubject.save();

        // Add the subject to the semester's subjects array
        semester4.subjects.push(newSubject._id);
        await semester4.save();

        console.log('Subject added successfully');
    } catch (error) {
        console.error(error);
    }
}

addSubjectToSemester();
