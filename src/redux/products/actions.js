import { CREATEPRODUCT } from "./actionTypes";

export const createProduct = (productInfo) => {
  return {
    type: CREATEPRODUCT,
    payload: productInfo,
  };
};
