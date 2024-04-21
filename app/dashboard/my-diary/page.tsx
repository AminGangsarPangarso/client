import PostContent from "@/app/components/global/(diary)/PostContent";
import Wrapper from "@/app/components/global/Wrapper";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";

import React from "react";

const page = async (): Promise<React.ReactElement> => {
  const {email} = await getUserData();
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);
  if (error) return <p>Please reload the page...</p>;
  return (
    <Wrapper title="my diary">
      <div className="grid md:grid-cols-3 gap-4">
      {data.map((diary) => {
      return (
          <PostContent
            key={diary.id}
            avatar={diary.avatar}
            username={diary.username}
            email={diary.email}
            content={diary.content}
          />
        );
      })}
    </div>
    </Wrapper>
  );
};

export default page;
