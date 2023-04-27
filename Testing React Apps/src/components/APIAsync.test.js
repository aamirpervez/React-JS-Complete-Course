import { render, screen } from "@testing-library/react";
import APIAsync from "./APIAsync";

describe("Api Async Component", () => {
  test("renders posts if request succeeds", async () => {
    render(<APIAsync />);

    const listItemsCount = await screen.findAllByRole("listitem");
    expect(listItemsCount).not.toHaveLength(0);
  });
});
