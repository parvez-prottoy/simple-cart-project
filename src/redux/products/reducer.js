import { CREATEPRODUCT } from "./actionTypes";
import { initialState } from "./initialState";
import { v4 as uuidv4 } from "uuid";

const reducer = (state = [...initialState], action) => {
  switch (action.type) {
    case CREATEPRODUCT:
      const { productName, category, imgUrl, price, qty } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          productName,
          category,
          imgUrl,
          price,
          qty,
        },
      ];

    default:
      return state;
  }
};

export default reducer;
