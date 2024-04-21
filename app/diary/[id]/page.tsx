import CreateCommentForm from "@/app/components/auth/CreateCommentForm";
import CommentList from "@/app/components/global/(diary)/CommentList";
import Wrapper from "@/app/components/global/Wrapper";
import { supabase } from "@/utils/supabase";

import React from "react";

type ParamsProps = {
  params: {
    id: number;
  };
};
const page = async ({ params }: ParamsProps) => {
  const { data, error } = await supabase
    .from("diary")
    .select()
    .eq("id", params.id)
    .single();

  const posted_at = new Date(data?.created_at).toLocaleDateString();
  if (error) return <p>please reload the page</p>;
  console.log(params.id);
  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mx-auto justify-center">
          <img src={data.avatar} alt={data.avatar} width={250} height={250} />
          <i className="text-center">posted at {posted_at}</i>
        </div>
        <h3 className="italic font-bold ">~{data.username || data.email}</h3>
        <p className="text-lg">{data.content}</p>
        <div className="divider"></div>
        <CommentList diary_id={data.id} />
        <div className="divider"></div>
        <CreateCommentForm diary_id={data.id} />
      </div>
    </Wrapper>
  );
};

export default page;
