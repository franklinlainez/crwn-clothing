import { shallow } from "enzyme";
import CollectionPage from "./collection.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

const mockCollectionItems = {
  title: "Hats",
  items: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => ({ collectionId: 69 })),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(() => mockCollectionItems),
}));

describe("Collection component", () => {
  let wrapper = shallow(<CollectionPage />);

  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("render the same number of collection as collection array", () => {
    expect(wrapper.find(CollectionItem).length).toBe(
      mockCollectionItems.items.length
    );
  });
});
