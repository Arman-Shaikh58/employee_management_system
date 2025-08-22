import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    role:{type: String, enum:["admin","employee"], required: true},
    profileImage:{type: String},
    employeeRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}, // Reference to Employee
    createAt:{type: Date ,default: Date.now},
    PaymentRequestUpdateEventAt:{type: Date ,default: Date.now},
})


const User = mongoose.model("User", userSchema)
export default User