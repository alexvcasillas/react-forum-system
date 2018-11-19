export const graphQLErrorHandler = graphQLError => {
  console.log({ graphQLError });
  const { message } = graphQLError;
  const extractedError = message.substring(message.lastIndexOf('{'), message.lastIndexOf('}') + 1);
  return JSON.parse(extractedError);
};
