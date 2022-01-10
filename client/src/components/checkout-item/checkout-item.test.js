import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CheckoutItem from "./checkout-item.component";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";
import { QuantityText } from "./checkout-item.styles";
import { RemoveButtonContainer } from "./checkout-item.styles";

const mockStore = configureMockStore([]);

describe("Checkout Item", () => {
  /**@type ReactWrapper */
  let wrapper;
  let store = mockStore({});

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <CheckoutItem cartItem={{}} />
      </Provider>
    );
  });

  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("call removeItem when the corresponding button is clicked", () => {
    const leftArrow = 0;

    wrapper.find(QuantityText).find("div").at(leftArrow).simulate("click");
    expect(store.getActions()).toContainEqual(removeItem({}));
  });

  it("call addItem when the corresponding button is clicked", () => {
    const rigthArrow = 1;
    wrapper.find(QuantityText).find("div").at(rigthArrow).simulate("click");
    expect(store.getActions()).toContainEqual(addItem({}));
  });

  it("call clearItem when the corresponding button is clicked", () => {
    wrapper.find(RemoveButtonContainer).simulate("click");
    expect(store.getActions()).toContainEqual(clearItemFromCart({}));
  });
});
