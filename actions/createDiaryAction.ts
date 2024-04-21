"use server";

import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export const createDiaryAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("content") as string;
  const { avatar, username, email } = await getUserData();

  if (!content || !username || !email || !avatar)
    await supabase.from("diary").insert({ content, email, username, avatar });

  return redirect("/dashboard/my-diary");
};
