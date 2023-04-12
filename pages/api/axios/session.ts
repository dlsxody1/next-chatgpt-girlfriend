import axios from "axios";
import { SessionTypes } from "@/pages/types/session.type";

const instance = axios.create({
  baseURL: "localhost:3001",
});

export const registerUser = (session: SessionTypes) => {
  instance
    .post("/register", {
      id: session.session.user.id,
      image: session.session.user.image,
      name: session.session.user.name,
      expires: session.session.expires,
    })
    .then((res) => {})
    .catch((err) => {
      alert(err);
    });
};
