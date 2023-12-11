
export class UserGroup {
    id!: number

    fkplant?: number

    fkrole?: number

    name!: string

    description?: string

    authlevel!: number

    fkusergroup?: number

    fkcurrency?: number

    isdeleted!:boolean;

    ismutable!: boolean

    fktypeofapproval?: number
  
    createdat!: Date;
  
    changedat!: Date;

    fkcreatedbyid!:number;

    fkchangedbyid!:number;
}