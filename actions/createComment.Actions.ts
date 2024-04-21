"use server";
import { getUserData } from "@/utils/clerk";
import { randomUUID } from "crypto";
import { IComment, supabase } from "../utils/supabase";

export const createCommentAction = async (formData: FormData) => {
  const content = formData.get("content") as string;
  const diary_id = formData.get("diary_id");
  const comment_id = randomUUID();

  const { avatar, username, email } = await getUserData();

  const data: IComment = {
    comment_id,
    avatar,
    email,
    username,
    content,
  };

  //   memerikasa komen terakhir
  const getComment = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();
  const existingComment = getComment.data?.comments || [];

  const newComment = [...existingComment, data];
  await supabase
    .from("diary")
    .update({ comments: newComment })
    .eq("id", diary_id);
};
