export interface ICreateOrderDTO {
  table: number;
  name: string;
}

export interface IAddItem {
  order_id: string;
  product_id: string;
  amount: number;
}

export interface ISendOrder {
  order_id: string;
}
