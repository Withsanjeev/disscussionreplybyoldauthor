import React from "react";
import { UserBadge } from "./UserBadge";
import { ReplyInput } from "./ReplyInput";

interface Reply {
  avatarSrc: string;
  username: string;
  timestamp: string;
  role: string;
  content: string;
}

interface ReplySectionProps {
  replies: Reply[];
}

export const ReplySection: React.FC<ReplySectionProps> = ({ replies }) => {
  return (
    <div className="bg-[rgba(247,248,250,1)] flex w-full flex-col mt-[17px] px-[35px] py-[13px] border-[rgba(217,217,217,1)] border-t border-b max-md:max-w-full max-md:px-5">
      {replies.map((reply, index) => (
        <React.Fragment key={index}>
          <UserBadge
            avatarSrc={reply.avatarSrc}
            username={reply.username}
            timestamp={reply.timestamp}
            role={reply.role}
          />
          <div className="text-black text-[15px] font-normal leading-[25px] self-stretch ml-[54px] mt-[19px] max-md:max-w-full max-md:mr-1">
            {reply.content}
          </div>
          {index < replies.length - 1 && (
            <div className="my-4"></div> /* Spacer between replies */
          )}
        </React.Fragment>
      ))}

      <div className="bg-[rgba(247,248,250,1)] flex w-full flex-col items-stretch justify-center px-[15px] py-2 rounded-[0px_0px_10px_10px] border-[rgba(110,126,146,1)] max-md:max-w-full max-md:mr-0.5 mt-4">
        <ReplyInput />
      </div>
    </div>
  );
};
