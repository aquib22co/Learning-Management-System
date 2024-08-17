import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema({
    semester: {
        type: Number,
        required: true,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Subject",
    }],
}, {timestamps: true});

export const Semester = mongoose.model("Semester", semesterSchema);
