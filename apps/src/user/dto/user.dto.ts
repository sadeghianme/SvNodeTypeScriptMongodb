export interface CreateUserDto {
    username: string;
    email: string;
    password: string;
    // Add any other fields as necessary
}

export interface UpdateUserDto {
    username?: string;
    email?: string;
    password?: string;
    // Optional fields for updating a user
}