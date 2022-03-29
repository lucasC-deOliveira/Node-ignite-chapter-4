import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/user";
import { IUserRepository } from "../IUsersRepository";


class UserRepositoryInMemory implements IUserRepository {

    users: User[] = [];

    async create({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {
        const user = new User()

        Object.assign(user,{
            driver_license,
            email,
            name,
            password
         })

        this.users.push(user);

        
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id)
    }

}

export { UserRepositoryInMemory }