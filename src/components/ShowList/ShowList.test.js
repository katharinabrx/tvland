import { shallow } from "enzyme";
import React from "react";
import toJson from "enzyme-to-json";
import ShowList from "./ShowList";

it("expect to render ShowList component with placeholders", () => {
  const mockShowList = [];
  expect(toJson(shallow(<ShowList isLoading={true} showList={mockShowList} />))).toMatchSnapshot();
});

it("expect to render ShowList component", () => {
  const mockShowList = [
    {
      id: 1,
      name: "Show Name 1"
    },
    {
      id: 2,
      name: "Show Name 2"
    }
  ];
  expect(toJson(shallow(<ShowList isLoading={false} showList={mockShowList} />))).toMatchSnapshot();
});
