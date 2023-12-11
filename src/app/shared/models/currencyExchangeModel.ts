import { DecimalPipe } from "@angular/common";

 
export class CurrencyExchange {
    id!: number;
    currency?: string;
    tocurrency?: string;
    exchangevalue?: DecimalPipe;
    curyear?: number;
    curmonth?: number;
    curday?: number;
    createdat?: Date;
    isdeleted!: boolean;
 
    
}