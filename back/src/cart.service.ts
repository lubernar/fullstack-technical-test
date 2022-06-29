import { Injectable, NotImplementedException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type Cart = {
  id: string;
  items: Item[];
};

export type Item = {
  objectID: string;
  quantity: number;
};

@Injectable()
export class CartService {
  // Use this array as your database
  private carts: Cart[] = [
    {
      id : '',
      items : []
    }
  ];

  create(): Cart {
    throw new NotImplementedException();
  }

  getCart(id: string): Cart {
    throw new NotImplementedException();
  }

  getCarts(): Cart[] {
    return this.carts;
  }

  putItem(id: string, item: Item): Cart {
    this.carts[0].items.push(item);
    return this.carts[0];
  }

  putItems(id: string, items: Item[]): Cart {
    throw new NotImplementedException();
  }

  removeItem(id: string): Cart {
    const indexOfObj = this.carts[0].items.findIndex((item) => item.objectID === id);
    this.carts[0].items.splice(indexOfObj, 1);
    return this.carts[0];
  }
}
