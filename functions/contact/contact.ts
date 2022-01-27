import { Handler } from "@netlify/functions";
import {
  successResponse,
  badRequest,
  internalServerError,
} from "../../function-helpers/utils";

export const handler: Handler = async (event) => {
  if (!event.body) return badRequest("Request body is empty");

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return internalServerError();
  }

  if (!body.email) return badRequest("Email is missing");
  if (!body.message) return badRequest("Message is missing");

  return successResponse("Contact request sent");
};
