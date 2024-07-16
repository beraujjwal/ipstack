import http from "http";
import { IIpstack } from "./libs/interface";

const ipstack = (
  ip: string,
  token: string,
  callback: Function
): IIpstack | any | void => {
  if (callback === null) {
    console.error("Please provide a callback!");
    return;
  }
  http.get(
    {
      hostname: "api.ipstack.com",
      port: 80,
      path: `/${ip}?access_key=${token}`,
      agent: false,
    },
    (res) => {
      let body: IIpstack | any | void = null;
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        let { error } = body;
        if (error !== undefined) {
          callback(error, null);
        } else {
          callback(null, body);
        }
      });
      res.on("error", (err) => {
        callback(err, null);
      });
    }
  );
};

export default ipstack;
