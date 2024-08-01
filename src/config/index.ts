import packagejson from "../../package.json";

export default {
  web: {
    name: packagejson.name,
    version: packagejson.version,
  },
  api: {
    baseUrl: "http://localhost:3000/api/v1",
  },
};
