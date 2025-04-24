import React from "react";
import { CommentCard } from "./CommentCard";
import { ReplySection } from "./ReplySection";
import { ReplyInput } from "./ReplyInput";
import { QuestionForm } from "./QuestionForm";

export const DiscussionThread: React.FC = () => {
  // Sample data for the discussion thread
  const mainComment = {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/91ea76314cc1f47a788434913a1a88868dba4782?placeholderIfAbsent=true",
    username: "Uiopa",
    timestamp: "on Jan 17, 2024 at 2:10 PM",
    role: "Author",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  };

  const replies = [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/a33eb1b811b0730c9272d8352abe6e02c4185ef6?placeholderIfAbsent=true",
      username: "Qwerty",
      timestamp: "on Jan 17, 2024 at 3:30 PM",
      role: "Maintainer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Curabitur pretium tincidunt lacus, nulla gravida orci a odio convallis. Fusce sed est sit amet ipsum interdum ullamcorper. Nam tincidunt, sapien nec congue porta, tortor risus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere. Proin fermentum magna sit amet mauris commodo quis imperdiet massa.",
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/91ea76314cc1f47a788434913a1a88868dba4782?placeholderIfAbsent=true",
      username: "Uiopa",
      timestamp: "on Jan 17, 2024 at 3:45 PM",
      role: "Author",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/a33eb1b811b0730c9272d8352abe6e02c4185ef6?placeholderIfAbsent=true",
      username: "Qwerty",
      timestamp: "on Jan 17, 2024 at 4:04 PM",
      role: "Maintainer",
      content:
        "Nam maximus libero nec lorem luctus, sit amet vulputate lectus tincidunt.",
    },
  ];

  const secondComment = {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/4add7d7fb7ac549561314ab883111bdb36dacf23?placeholderIfAbsent=true",
    username: "Zxcvbn",
    timestamp: "on Jan 20, 2024 at 9:38 AM",
    role: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur interdum, tortor nec fermentum suscipit, metus libero tincidunt libero, eget convallis quam nisl non nisi. Integer ac mauris ut tortor tristique ullamcorper eget vel nulla. Morbi elementum auctor quam, ut varius nulla venenatis ac. Vivamus tincidunt, sapien nec dictum cursus, ligula risus venenatis nulla, eget feugiat arcu turpis non sapien.",
    attachment: {
      name: "Doc.pdf",
      icon: "https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/e4affde7f2ae1c756d1c75a95ad06f816bde099c?placeholderIfAbsent=true",
    },
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <header className="bg-white border-gray-300 z-10 w-full text-4xl text-black font-semibold pt-[31px] pb-3 px-[70px] border-b max-md:max-w-full max-md:px-5">
        External Agency
      </header>

      <main className="bg-[rgba(247,248,250,1)] self-center mt-[-39px] w-[1281px] max-w-full pt-[59px] pb-[29px] px-[39px] max-md:px-5">
        <section className="bg-[rgba(246,250,254,1)] border-gray-300 border flex flex-col items-center py-[38px] rounded-[10px] border-solid max-md:max-w-full">
          <div className="self-stretch flex w-full flex-col items-stretch px-[62px] max-md:max-w-full max-md:px-5">
            <div className="flex w-full max-w-[1068px] gap-5 flex-wrap justify-between mr-[26px] max-md:max-w-full max-md:mr-2.5">
              <h1 className="text-gray-900 text-[32px] font-semibold">
                Project name{" "}
              </h1>
              <div className="bg-[rgba(218,251,225,1)] border text-xs text-black font-normal whitespace-nowrap mt-5 px-4 py-2 rounded-[23px] border-[rgba(26,127,55,1)] border-solid">
                Approve
              </div>
            </div>

            <div className="text-black text-lg font-normal ml-[19px] max-md:ml-2.5">
              <span
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Discussion on{" "}
              </span>
              <span
                style={{
                  fontFamily:
                    "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Project Name
              </span>
            </div>

            <div className="flex w-40 max-w-full items-stretch gap-[19px] text-[15px] text-black font-normal whitespace-nowrap mt-3">
              <button className="self-stretch bg-white border-gray-300 border gap-2.5 p-2.5 rounded-[10px] border-solid">
                Newest
              </button>
              <button className="self-stretch bg-white border-gray-300 border gap-2.5 p-2.5 rounded-[10px] border-solid">
                Oldest
              </button>
            </div>
          </div>

          {/* First comment thread */}
          <article className="bg-white border w-full max-w-[1115px] mt-3 pt-[17px] rounded-[10px] border-[rgba(110,126,146,1)] border-solid max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch px-[37px] max-md:max-w-full max-md:px-5">
              <CommentCard
                avatarSrc={mainComment.avatarSrc}
                username={mainComment.username}
                timestamp={mainComment.timestamp}
                role={mainComment.role}
                content={mainComment.content}
              />
            </div>

            <ReplySection replies={replies} />
          </article>

          {/* Second comment thread */}
          <article className="bg-white border w-full max-w-[1115px] mt-[23px] py-5 rounded-[10px] border-[rgba(110,126,146,1)] border-solid max-md:max-w-full">
            <CommentCard
              avatarSrc={secondComment.avatarSrc}
              username={secondComment.username}
              timestamp={secondComment.timestamp}
              role={secondComment.role}
              content={secondComment.content}
              attachment={secondComment.attachment}
            />

            <div className="bg-[rgba(247,248,250,1)] flex w-full flex-col items-stretch justify-center mt-[13px] px-4 py-3.5 border-[rgba(217,217,217,1)] border-t border-b max-md:max-w-full">
              <ReplyInput fontSize="text-[15px]" fontWeight="font-normal" />
            </div>

            <QuestionForm />
          </article>
        </section>
      </main>
    </div>
  );
};
