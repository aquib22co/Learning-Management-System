import { Student } from "../../models/student.model.js";

const importUserForm = async (req, res) => {
  try {
    const {name,rollno,mobile,sem,dlo,mentor,email,password} = req.body;

    const newUser = new Student({
      name,
      rollno,
      mobile,
      sem,
      dlo,
      mentor,
      email,
      password,
    });

    await newUser.save();

    res.status(200).json({ success: true, msg: "User created successfully" });
    console.log('Received form data:', req.body);
  } catch (error) {
    if (error.code === 11000) {
      // This error code indicates a duplicate key error
      res.status(400).json({ success: false, msg: "Email or rollno number already exists" });
    } else {
      res.status(400).json({ success: false, msg: error.message });
    }
  }
};

export default importUserForm;