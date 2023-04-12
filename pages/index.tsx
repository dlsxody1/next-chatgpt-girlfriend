import ChatBox from "./components/ChatBox";
import { signIn, useSession } from "next-auth/react";
import type { Adapter } from "next-auth/adapters";
import Register from "./api/auth/Register";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="h-[900px] w-[900px] bg-white">
          hihi
          {session ? (
            <Register session={session} />
          ) : (
            <>
              <div className="text-5xl">
                이렇게라도... 이야기 해볼 수 있다면...
              </div>
              <button
                onClick={() => {
                  signIn("kakao");
                }}
              >
                로그인....
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
