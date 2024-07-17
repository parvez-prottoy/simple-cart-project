import BillDetails from "../components/BillDetails";
import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <section className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* Cart item */}
          <CartItem />
        </div>
        <div>
          {/* Bill Details */}
          <BillDetails />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
