import { db } from "../config/db";

interface User {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    password?: string;
}

export default class UserDao {
    async getAllUsers(): Promise<User[]> {
        return await db
            .column("first_name", "last_name", "age")
            .select()
            .from<User>("users");
    }

    async getUserById(id: string): Promise<User> {
        return await db
            .from("users")
            .column("first_name", "last_name", "age")
            .select()
            .where("id", id)
            .first();
    }
}
