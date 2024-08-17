import mongoose from "mongoose";

// Define a schema for each subject group (Semester 4 and 5)
const sem4SubjectsSchema = {
    AOA: {
        type: String,
        required: true,
        default: 'Analysis of Algorithms',
    },
    M4: {
        type: String,
        required: true,
        default: 'Mathematics 4',
    },
    MP: {
        type: String,
        required: true,
        default: 'Microprocessors',
    },
    DBMS: {
        type: String,
        required: true,
        default: 'Database Management Systems',
    },
};

const sem5SubjectsSchema = {
    CN: {
        type: String,
        required: true,
        default: 'Computer Networks',
    },
    TCS: {
        type: String,
        required: true,
        default: 'Theory of Computation',
    },
    DWM: {
        type: String,
        required: true,
        default: 'Data Warehousing and Mining',
    },
    SE: {
        type: String,
        required: true,
        default: 'Software Engineering',
    },
};

// Define the Semester schema
const semesterSchema = new mongoose.Schema({
    semester: {
        type: Number,
        required: true,
        unique: false,
    },
    subjects: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        validate: {
            validator: function(v) {
                if (this.semester === 4) {
                    return !Object.keys(v).some(key => !(key in sem4SubjectsSchema));
                }
                if (this.semester === 5) {
                    return !Object.keys(v).some(key => !(key in sem5SubjectsSchema));
                }
                return false;
            },
            message: props => `Invalid subjects for semester ${props.value.semester}`
        },
    },
}, {timestamps: true});

export const Semester = mongoose.model("Semester", semesterSchema);
