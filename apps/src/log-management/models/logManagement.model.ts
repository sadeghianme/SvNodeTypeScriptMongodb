import mongoose, { Document } from 'mongoose';
import { CreateLogManagementDto } from '../dto/logManagement.dto';

// Extending CreateUserDto with Document for Mongoose
interface LogManagementDocument extends CreateLogManagementDto, Document {}

const logManagementSchema = new mongoose.Schema<LogManagementDocument>({
    systemPath: { type: String, required: true },
    errorCode: { type: String, required: true },
    stacktraceText: { type: String, required: true },
// Add other fields as necessary
}, {
    timestamps: true // Automatically creates createdAt and updatedAt fields
});

const LogManagement = mongoose.model<LogManagementDocument>('LogManagement', logManagementSchema);

export default LogManagement;