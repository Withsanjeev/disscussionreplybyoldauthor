import React from "react";
import { UserBadge } from "./UserBadge";

interface CommentCardProps {
  avatarSrc: string;
  username: string;
  timestamp: string;
  role: string;
  content: string;
  attachment?: {
    name: string;
    icon: string;
  };
}

export const CommentCard: React.FC<CommentCardProps> = ({
  avatarSrc,
  username,
  timestamp,
  role,
  content,
  attachment,
}) => {
  return (
    <div className="flex w-full flex-col text-[15px] px-9 max-md:max-w-full max-md:px-5">
      <UserBadge
        avatarSrc={avatarSrc}
        username={username}
        timestamp={timestamp}
        role={role}
      />
      <div className="text-black font-normal self-stretch mt-[15px] max-md:max-w-full">
        {content}
      </div>
      {attachment && (
        <div className="bg-[rgba(249,249,249,1)] border-gray-300 border flex items-stretch gap-[3px] text-xl text-black font-normal whitespace-nowrap ml-[15px] mt-7 px-[23px] py-[5px] rounded-[27px] border-solid max-md:ml-2.5 max-md:px-5">
          <img
            src={attachment.icon}
            className="aspect-[1] object-contain w-6 shrink-0 my-auto"
            alt="Document icon"
          />
          <div>{attachment.name}</div>
        </div>
      )}
    </div>
  );
};
