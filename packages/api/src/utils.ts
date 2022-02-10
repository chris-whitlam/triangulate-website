export const badRequest = (message: string) => {
  console.log(message);
  return errorResponse(message, 400);
};

export const internalServerError = (message = "Something went wrong") => {
  console.log(message);
  return errorResponse(message, 500);
};

export const unprocessableEntity = (message = "Something went wrong") => {
  console.log(message);
  return errorResponse(message, 422);
};

const errorResponse = (
  message = "Something went wrong",
  statusCode: number
) => ({
  statusCode,
  body: JSON.stringify({
    error: message,
  }),
});

export const successResponse = (data: unknown, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify(data),
});
