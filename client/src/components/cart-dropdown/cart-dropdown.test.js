import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import CartDropdown from "./cart-dropdown.component";
import { CartDropdownButton, EmptyMessage } from "./cart-dropdown.styles";

const mockStore = configureMockStore([]);
const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("CartDropdown component", () => {
  /**@type ReactWrapper */
  let wrapper;

  let store = mockStore({});

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItems: mockCartItems,
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <CartDropdown />
      </Provider>
    );
  });

  it("expects a render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find(CartDropdownButton).simulate("click");
    expect(mockHistoryPush).toHaveBeenCalled();
    expect(store.getActions()).toContainEqual(toggleCartHidden());
  });

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if cartItems is empty", () => {
    const newWrapper = mount(
      <Provider
        store={mockStore({
          cart: {
            cartItems: [],
          },
        })}
      >
        <CartDropdown />
      </Provider>
    );

    expect(newWrapper.find(EmptyMessage).length).toBe(1);
  });
});
