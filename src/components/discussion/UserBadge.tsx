import React from "react";

interface UserBadgeProps {
  avatarSrc: string;
  username: string;
  timestamp: string;
  role: string;
}

export const UserBadge: React.FC<UserBadgeProps> = ({
  avatarSrc,
  username,
  timestamp,
  role,
}) => {
  return (
    <div className="flex items-stretch gap-2.5">
      <div className="flex items-center gap-1 text-[15px] grow shrink basis-auto">
        <img
          src={avatarSrc}
          className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 rounded-[50%]"
          alt={`${username}'s avatar`}
        />
        <div className="text-black font-medium self-stretch my-auto">
          {username}
        </div>
        <div className="text-[rgba(110,126,146,1)] font-normal self-stretch basis-auto my-auto">
          {timestamp}
        </div>
      </div>
      <div className="bg-gray-300 text-xs text-black font-[275] whitespace-nowrap my-auto px-[15px] py-px rounded-[20px]">
        {role}
      </div>
    </div>
  );
};
