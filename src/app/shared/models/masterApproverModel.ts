import { DecimalPipe } from "@angular/common"

export class masterApprover {
    id!: number

    fkuserid!: number

    sequence!: number

    fkrole!: number

    pricelimit!: DecimalPipe

    fkcurrency!: number

    qipp!: number

    ipp!: number

    ipprelease!:number

    lease!:number

    isfirstapprovergroup!:boolean

    plant!:number

    related?:string

    isdeleted!:boolean;

    fkcreatedby!: number
  
    createdat!: Date;
  
    fkchangedby!: number;

    fkchangedat!: Date;

    isvisible?: boolean;
}