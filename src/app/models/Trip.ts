import { User } from "./User";

// trip = new Trip(tripId, location, destination, dateTime, price, numberPeople, user);
export class Trip { 
    id: number;
    location: string;
    destination: string;
    //dateTime: DateTime
    price: number;
    numberPeople: number;
    user: User;
}