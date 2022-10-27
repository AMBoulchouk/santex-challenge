import { REDUCER_ACTIONS } from "../..";
import { Item } from "../../types/product";

interface addProductInterface {
  product: Item;
  quantity: number;
}

export const addProduct = (product: addProductInterface) => ({
  type: REDUCER_ACTIONS.ADD_PRODUCT,
  value: product,
});