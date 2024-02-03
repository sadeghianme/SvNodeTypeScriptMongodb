import {CreateLogManagementDto} from "./dto/logManagement.dto";
import LogManagement from "./models/logManagement.model";

export class LogManagementService {
    async getLogManagementById(logManagementId: string) {
        return 'get logManagement'
    }

    async createLogError(createLogManagementDto: CreateLogManagementDto) {
        const logManagement = new LogManagement(createLogManagementDto);
        await logManagement.save();
        return logManagement;
    }
}
