/// <reference types="jest" />

import { badRequest } from "./utils";

describe("Utils", () => {
  it("SHOULD return 400 error code and stringified error message", () => {
    // arrange
    const message = "My Message";
    // arrange + act
    const result = badRequest(message);
    // assert
    expect(result).toStrictEqual({
      statusCode: 400,
      body: JSON.stringify({ error: message }),
    });
  });
});
