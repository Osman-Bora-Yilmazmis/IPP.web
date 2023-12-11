
export class Question {
    id!: number

    qText!: string

    qtype!: number

    qminvalidation?: number

    qmaxvalidation?: number

    isnecessary!: boolean

    qvalues!: string

    isdeleted!:boolean;

    fkcreatedby!: number
  
    createdat!: Date;
  
    fkchangedby!: number;

    fkchangedat!: Date;
}