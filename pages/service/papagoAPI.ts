import axios from "axios";
export const translate = () => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const options = {
    url: "http://localhost:3000",
  };
  const response = axios.post("/translate", {});
};
