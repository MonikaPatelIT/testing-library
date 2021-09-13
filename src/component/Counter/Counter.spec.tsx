import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  describe("Render Counter with title 'test counter' and set defautl counter to 10", () => {
    beforeEach(() => {
      render(<Counter description="test counter" defaultCounter={10} />);
    });

    it("Check counter title", () => {
      expect(screen.getByText("test counter")).toBeInTheDocument();
    });

    it("default counter is 10", () => {
      expect(screen.getByText("Current Count : 10")).toBeInTheDocument();
    });
  });

  // describe("Incrementor changes to 5 and '+' button clicked", () => {
  //     beforeEach(() => {
  //         user.type(screen.getByLabelText(/Incrementor/), '{selectall}5');
  //         user.click(screen.getByRole('button', { name: 'Add to Counter' }));
  //     })
  //     it("current counter value is 15", () => {
  //         expect(screen.getByText('Current Count : 15')).toBeInTheDocument();
  //     })
  // })

  describe('when the incrementor changes to empty string and "+" button is clicked', () => {
    beforeEach(() => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}{delete}");
      user.click(screen.getByRole("button", { name: "Add to Counter" }));
    });

    it('renders "Current Count: 16"', () => {
      expect(screen.getByText("Current Count: 16")).toBeInTheDocument();
    });
  });
});
