import { render } from "@testing-library/vue";
import Button from "./Button.vue";

describe("Button", () => {
  it("SHOULD render component correctly", () => {
    const buttonText = "Hello";

    const { getByTestId } = render(Button, {
      slots: {
        default: buttonText,
      },
    });

    const button = getByTestId("button");
    expect(button).toHaveTextContent(buttonText);
    expect(button).toBeInTheDocument();
  });
});
