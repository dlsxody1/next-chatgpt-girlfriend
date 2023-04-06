import React, { useState } from "react";
import Chat from "./Chat";
import { query, sendMessage } from "../service/openAPI";

const ChatBox = () => {
  const [messageData, setMessageData] = useState("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(messageData);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessageData(value);
  };

  return (
    <>
      <div className="h-[900px] w-[900px] bg-white">
        <Chat />
        <form onSubmit={formSubmit} className="flex">
          <div className="bottom-0 absolute">
            <input
              className=" w-[850px] h-[50px] border-solid border-slate-600 p-5"
              placeholder="여자친구에게 말해보세요...주륵.."
              onChange={inputChange}
            />
            <button className="w-[50px] h-[50px] bg-white border border-solid border-black">
              {" "}
              전송
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
