import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartIconContainer, ItemCount } from "./cart-icon-styles";
import CartIcon from "./cart-icon.component";

const getMockCartItems = (cartItems = []) => ({
  cart: {
    cartItems,
  },
});

const mockStore = createMockStore([]);

describe("Cart Icon Component", () => {
  /**@type ReactWrapper */
  let wrapper;

  let store = mockStore({});

  beforeEach(() => {
    store = mockStore(getMockCartItems());

    wrapper = mount(
      <Provider store={store}>
        <CartIcon />
      </Provider>
    );
  });

  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("display the number of items when the cart is empty", () => {
    expect(wrapper.find(ItemCount).text()).toBe("0");
  });

  it("display the number of items when the cart has elements", () => {
    let notEmptyStore = mockStore(
      getMockCartItems([
        { id: 1, quantity: 1 },
        { id: 2, quantity: 3 },
      ])
    );

    let wrapper2 = mount(
      <Provider store={notEmptyStore}>
        <CartIcon />
      </Provider>
    );

    expect(wrapper2.find(ItemCount).text()).toBe("4");
  });

  it("toggle cart hidde action when is clicked", () => {
    wrapper.find(CartIconContainer).simulate("click");
    expect(store.getActions()).toContainEqual(toggleCartHidden());
  });
});
