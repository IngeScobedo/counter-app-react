import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";
import { shallow } from "enzyme";

describe("Testing - FirstApp Component", () => {
  test("Debe Mostrar un saludo", () => {
    // let saludo = 'que verga quieres';
    // let {getByText} = render( <FirstApp saludo={saludo} /> )
    // expect(getByText(saludo)).toBeInTheDocument();
  });
  test("should render", () => {
    let saludo = "que verga quieres";
    let wrapper = shallow(<FirstApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should render subtitle correctly", () => {
    let saludo = "que verga quieres";
    let subtitle = "perra madre juan";
    let wrapper = shallow(<FirstApp saludo={saludo} subtitle={subtitle} />);

    let paragraphText = wrapper.find('p').text();
expect(paragraphText).toBe(subtitle);
  });
});
