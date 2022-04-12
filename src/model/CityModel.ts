import { DestinationModel } from "./DestinationModel";

export interface CityModel {
    id: number;
    name: string; 
    imageUrl: string;
    isDeleted: boolean;
    destinationDTO: DestinationModel;

}

export class CityModel implements CityModel {
    constructor(city: CityModel) {
        this.id = city.id;
        this.name = city.name;
        this.imageUrl = city.imageUrl;
        this.isDeleted = city.isDeleted;
        this.destinationDTO = city.destinationDTO;
    }
}