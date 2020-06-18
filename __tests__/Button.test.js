import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Button from "./../src/Components/Button";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Button: ", () => {
  let props, wrapper;

  beforeEach(() => {
    // ...
    props = {
      type: "success",
      value: "提交"
    };
    wrapper = mount(<Button {...props} />);
  });

  // it("snapshot：", () => {
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });

  it("props()的使用方法: ", () => {
    expect(wrapper.find('button[type="success"]').props().value).toEqual(
      "提交"
    );
  });

  it("prop()的使用方法: ", () => {
    expect(wrapper.find('button[type="success"]').prop("value")).toEqual(
      "提交"
    );
  });

  it("state()的使用方法: ", () => {
    expect(wrapper.state().name).toEqual("提交");
  });

  it("setState()的使用方法: ", () => {
    const state = {
      name: "先提交"
    };
    wrapper.setState(state);
    expect(wrapper.state().name).toEqual("先提交");
  });

  it("setProps()的使用方法: ", () => {
    const newProps = {
      type: "success",
      value: "提交"
    };
    wrapper.setProps(newProps);
    expect(wrapper.find('button[type="success"]').props().value).toEqual(
      "提交"
    );
  });

  it("text()的使用方法: ", () => {
    expect(wrapper.find("Empty").prop("text")).toEqual("暂无数据");
  });

  it("simulate()的使用方法: ", () => {
    expect(wrapper.state().count).toEqual(0);
    wrapper.find("button").simulate("click");
    expect(wrapper.state().count).toEqual(1);
  });
});

describe("Buttons lifecycle: ", () => {
  it("lifecycle test:", () => {
    let props = {
      type: "success",
      value: "提交"
    };
    let wrapper = shallow(<Button {...props} />);
    jest.spyOn(Button.prototype, "componentDidMount");
    wrapper.instance().componentDidMount();
    expect(Button.prototype.componentDidMount.mock.calls.length).toBe(1);
    // expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().name).toEqual("提交");
  });
});

describe("jest .fn() & .spyOn()", () => {
  const myObj = {
    doSomething() {
      console.log("does something");
    }
  };

  test("stub .toBeCalled()", () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);
    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    // expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });

  test("spyOn().mockImplementation()", () => {
    const somethingSpy = jest.spyOn(myObj, "doSomething").mockImplementation();
    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalled();
    somethingSpy.mockRestore();
  });
  test("spyOn().mockReturnValue()", () => {
    const somethingSpy = jest.spyOn(myObj, "doSomething").mockReturnValue();
    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalled();
    somethingSpy.mockRestore();
  });
});
