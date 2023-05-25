// console.log("process.env", process.env);

export const getServerBaseRoute =
  process.env.NODE_ENV === "development"
    ? "http://ec2-13-49-77-110.eu-north-1.compute.amazonaws.com:8080"
    : `http://ec2-13-49-77-110.eu-north-1.compute.amazonaws.com:8080`;
