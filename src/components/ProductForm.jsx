import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/products/actions";
const initValues = {
  productName: "",
  category: "",
  imgUrl: "",
  price: 0,
  qty: 0,
};
const ProductForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ ...initValues });
  const handleChangeValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(values));
    setValues(initValues);
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            onChange={handleChangeValues}
            name="productName"
            value={values.productName}
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            onChange={handleChangeValues}
            name="category"
            value={values.category}
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            onChange={handleChangeValues}
            name="imgUrl"
            value={values.imgUrl}
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              onChange={handleChangeValues}
              name="price"
              value={values.price}
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              onChange={handleChangeValues}
              name="qty"
              value={values.qty}
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
