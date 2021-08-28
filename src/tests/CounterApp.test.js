import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Testing <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("Render component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Componet Render value correctly", () => {
    let value = 100;
    let wrapperV = shallow(<CounterApp value={value} />);
    let valueData = wrapperV.find("h2").text();
    expect(valueData).toBe("100");
  });
  test("should increment button correctly", () => {
    wrapper.find("button").at(0).simulate("click");
    let valueData = wrapper.find("h2").text();
    expect(valueData).toBe("1");
  });
  test("should decrement button correctly", () => {
    wrapper.find("button").at(2).simulate("click");
    let valueData = wrapper.find("h2").text();
    expect(valueData).toBe("-1");
  });
  test("should reset button correctly", () => {
    wrapper.find("button").at(1).simulate("click");
    let lastValueData = wrapper.find("h2").text();
    wrapper.find("button").at(1).simulate("click");
    let valueData = wrapper.find("h2").text();
    expect(valueData).toBe(lastValueData);
  });
});
