import { BookItem } from "./book-item.interface";

export interface OrderItem {
  name: string,
  email: string,
  phone: string,
  city: string,
  address: string,
  postal: number,
  payableAmount: number,
  books: BookItem[]
}