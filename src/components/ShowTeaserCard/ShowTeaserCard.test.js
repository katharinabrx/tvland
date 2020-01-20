import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShowTeaserCard from "./ShowTeaserCard";

it("expect to render ShowTeaserCard component with empty input", () => {
  expect(toJson(shallow(<ShowTeaserCard />))).toMatchSnapshot();
});

it("expect to render ShowTeaserCard component with placeholder image", () => {
  const mockShow = [
    {
      id: 1,
      name: "Show Name 1",
      image: undefined
    }
  ];
  expect(
    toJson(
      shallow(
        <ShowTeaserCard showId={mockShow.id} showName={mockShow.name} showImage={undefined} />
      )
    )
  ).toMatchSnapshot();
});

it("expect to render ShowTeaserCard component with image", () => {
  let image = [{ medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg" }];
  expect(
    toJson(shallow(<ShowTeaserCard showId="1" showName="Test Name" showImage={image} />))
  ).toMatchSnapshot();
});
