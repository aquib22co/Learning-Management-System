import { Student } from "../models/student.model.js";
import { Semester } from "../models/sem.model.js";

export async function createSemesters() {
  try {
    await Semester.create([
      { semester: 4, subjects: { /* semester 4 subjects */ } },
      { semester: 5, subjects: { /* semester 5 subjects */ } },
      // Add other semesters as needed
    ]);
    console.log("Semesters created successfully");
  } catch (error) {
    console.error("Error creating semesters:", error);
  }
}



// export async function getStudentsBySemester() {
//     const semesters = await Semester.find({ semester: { $in: [4, 5] } });

//     semesters.forEach(async (sem) => {
//         const students = await Student.find({ sem: sem._id }).populate('sem').exec();
//         console.log(`Students in Semester ${sem.semester}:`, students);
//     });
// }
