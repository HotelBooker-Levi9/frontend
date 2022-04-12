export interface DestinationModel {
    id: number;
    name: string; 
    imageUrl: string;
    isDeleted: boolean;

}

export class DestinationModel implements DestinationModel {
    constructor(destination: DestinationModel) {
        this.id = destination.id;
        this.name = destination.name;
        this.imageUrl = destination.imageUrl;
        this.isDeleted = destination.isDeleted;
    }
}