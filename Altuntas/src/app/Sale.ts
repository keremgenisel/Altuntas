import { Seller } from './Seller';
import { Buyer } from './Buyer';
export class Sale {
  public id: number;
  public sellerId: number;
  public buyerId: number;
  public buyer: Buyer;
  public seller: Seller;
  public adress: string;
  public model: string;
  public width: number;
  public height: number;
  public length: number;
  public recievedForms: string;
  public warrantyEndDate: Date;
  public ınvoicePrice: number;
  public ourSellPrice: number;
  public commission: number;
  public extraFormPrice: string;
  public description: string;
  public createDate: Date;
  public createdBy: string; 
  public updateDate: Date;
  public updatedBy: string;

}
