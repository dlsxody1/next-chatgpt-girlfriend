import ChatBox from "./components/ChatBox";
import { signIn, useSession, signOut } from "next-auth/react";
import type { Adapter } from "next-auth/adapters";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="h-[900px] w-[900px] bg-white">
          {session ? (
            <>
              <div>{session?.user.name}님 안녕하세요 !</div>
              <button
                onClick={() => {
                  signOut();
                }}
              >
                로그아웃!
              </button>
            </>
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
