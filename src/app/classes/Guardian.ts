import { UserDTO } from "./DTO/UserDTO";

export class Guardian{

    constructor(
        public id: number,
        public user_id: UserDTO,
        public guardian_id: UserDTO,
    )
    {}
    
}