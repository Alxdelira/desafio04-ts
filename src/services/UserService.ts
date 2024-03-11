export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    static deleteUser(id: string) {
        throw new Error('Method not implemented.')
    }
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (id: string) => {
        const index = this.db.findIndex((user) => user.email === id)
        if (index === -1) {
            throw new Error('Usuário não encontrado')
        }
        this.db.splice(index, 1)
        return { message: 'Usuário deletado' }
    }
}

