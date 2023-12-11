export class MailDetail {
    id!: number

    mailname!:string
  
    mailtitle!: string;

    mailsubject?:string;

    maildetail?:string;

    iserrormail?:boolean;

    isdeleted?:boolean;

    fkcreatedby?: number
  
    createdat?: Date;
  
    fkchangedby?: number;

    fkchangedat?: Date;
}