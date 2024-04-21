import { IDiary } from "@/utils/supabase";
import Link from "next/link";
import React from "react";

const PostContent = ({ diary_id,avatar, content, username, email }: IDiary): React.ReactElement => {
  return (
    <Link href={`/diary/${diary_id}`} className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-105 h-72">
      <div className="flex items-center gap-4">
        <img
          src={avatar }
          alt={avatar }
          width={50}
          height={50}
          className="rounded-full bg-primary p-2"
        />
        <p className="font-semibold overflow-auto">{username || email}</p>
      </div>
      <p className="overflow-y-auto">{content}</p>
    </Link>
  );
};

export default PostContent;
