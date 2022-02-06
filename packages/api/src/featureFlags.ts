interface FeatureFlags {
  emailSendingEnabled: boolean;
}

export const getFeatureFlags = (): FeatureFlags => {
  const { EMAIL_SENDING_ENABLED: emailSendingEnabled = true } = process.env;

  return {
    emailSendingEnabled: emailSendingEnabled === "true",
  };
};
