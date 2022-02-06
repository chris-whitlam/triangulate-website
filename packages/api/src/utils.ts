export const badRequest = (message: string) => errorResponse(message, 400);

export const internalServerError = (message = "Something went wrong") =>
  errorResponse(message, 500);

const errorResponse = (
  message = "Something went wrong",
  statusCode: number
) => ({
  statusCode,
  body: JSON.stringify({
    error: message,
  }),
});

export const successResponse = (data: any, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify(data),
});
