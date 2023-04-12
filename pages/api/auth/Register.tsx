import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { signOut } from "next-auth/react";
import { SessionTypes } from "@/pages/types/session.type";
import { registerUser } from "../axios/session";
const Register = ({ session }: SessionTypes) => {
  useEffect(() => {
    registerUser({ session });
  }, []);

  return (
    <>
      <div>{session.user?.name}님 안녕하세요 !</div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃!
      </button>
    </>
  );
};

export default Register;
