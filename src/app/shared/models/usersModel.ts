
export class Users {
    id!: number

    username!: string

    firstname!: string

    lastname!: string

    fkusergroup?: number

    fkdepartment!: number

    personalno?:string

    email?:string

    title?:string

    avatarurl?:string

    thumbnailphoto?: Blob //BURAYI SOR

    weight?:number

    related?:string

    isdeleted!:boolean;

    ismutable?:boolean;

    fkcreatedby!: number
  
    createdat!: Date;
  
    fkchangedby!: number;

    fkchangedat!: Date;

    fktimezone?:number

    domain?:string
}