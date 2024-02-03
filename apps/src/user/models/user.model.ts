import mongoose, { Document } from 'mongoose';
import { CreateUserDto } from '../dto/user.dto';

// Extending CreateUserDto with Document for Mongoose
export interface UserDocument extends CreateUserDto, Document {}

const userSchema = new mongoose.Schema<UserDocument>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
// Add other fields as necessary
}, {
    timestamps: true // Automatically creates createdAt and updatedAt fields
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;