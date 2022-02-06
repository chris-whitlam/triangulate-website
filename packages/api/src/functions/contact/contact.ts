import { Handler } from "@netlify/functions";
import { successResponse, badRequest, internalServerError } from "../../utils";
import sendEmail from "../../services/sendEmail";
import { getFeatureFlags } from "../../featureFlags";
import Joi, { ValidationError } from "joi";
import { ContactFormInput } from "../../types";

const validateContactFormInput = async (contactFormInput: ContactFormInput) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
      "string.base": `Name should be a string`,
      "string.empty": `Name cannot be empty`,
      "string.min": `Name should have a minimum length of {#limit}`,
      "string.max": `Name should have less than {#limit} characters`,
      "any.required": `Name is a required field`,
    }),

    email: Joi.string().email().required().messages({
      "string.base": `Email should be a string`,
      "string.empty": `Email cannot be empty`,
      "any.required": `Email is a required field`,
      "string.email": `Must be a valid email`,
    }),

    message: Joi.string().required().messages({
      "string.base": `Message should be a string`,
      "string.empty": `Message cannot be empty`,
      "any.required": `Message is a required field`,
    }),
  });

  return schema.validateAsync(contactFormInput);
};

export const handler: Handler = async (event) => {
  const { emailSendingEnabled } = getFeatureFlags();

  if (!event.body) return badRequest("Request body cannot be empty");

  let body: ContactFormInput;
  try {
    body = JSON.parse(event.body);
  } catch {
    return internalServerError();
  }

  try {
    await validateContactFormInput(body);
  } catch (error) {
    if (error instanceof ValidationError) {
      return badRequest(error.message);
    }
    return internalServerError();
  }

  if (!emailSendingEnabled) {
    return internalServerError("Email sending is not available");
  }

  await sendEmail(body);

  return successResponse({ message: "Contact request sent" });
};
