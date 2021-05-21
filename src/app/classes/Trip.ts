import { UserDTO } from "./DTO/UserDTO";

export class Trip { 
    id: number;
    location: string;
    destination: string;
    price: number;
    numberPeople: number;
    userDTO: UserDTO;
}