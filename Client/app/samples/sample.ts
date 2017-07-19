export interface ISample {
    //Created to reflect the Complete Sample View from Server
    //  Good News is that the JSON serializer makes the 
    //      property names conform to JSON standard :)
    sampleId: number;
    barcode: string;
    createdAt: string;
    createdBy: number;
    firstName: string;
    lastName: string;
    statusId: number;
    status: string;
};
