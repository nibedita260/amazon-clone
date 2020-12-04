import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subTotal">
      The Subtotal will go here
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal({cart.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subTotal_gift">
              <input type="checkbox" />
              This order contains a gift
              <button onClick={(e) => history.push("/payment")}>
                Proceed to Checkout
              </button>
            </small>
          </>
        )}
        decimalScal={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
