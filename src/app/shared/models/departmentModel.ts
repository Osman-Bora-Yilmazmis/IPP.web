export class Department {
    id!: number

    name!:string
  
    description!: string;

    isdeleted!:boolean;

    fkcreatedby!: number
  
    createdat!: Date;
  
    fkchangedby!: number;

    fkchangedat!: Date;
}