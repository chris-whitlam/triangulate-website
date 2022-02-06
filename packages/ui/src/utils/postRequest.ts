export type APIResponse = {
  data?: any;
  error?: {
    error: string;
  };
};

const defaultOptions: Partial<Request> = {
  method: "POST",
  cache: "no-cache",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
};

const postRequest = async (
  url: string,
  data: any = {},
  options: Partial<Request> = {}
) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...defaultOptions,
      ...options,
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then(resolve, reject);
      }

      return response
        .json()
        .then(reject)
        .catch(() => reject(response));
    });
  });
};

export default postRequest;
