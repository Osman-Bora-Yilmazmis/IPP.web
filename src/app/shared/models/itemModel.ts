export class Item {
    id!: number

    itemname?:string
  
    itemdescription?: string;

    isdeleted?:boolean;

    fkcreatedby?: number
  
    createdat?: Date;
  
    fkchangedby?: number;

    fkchangedat?: Date;
}