"use server";

import { getUserById } from "@/helpers/read-db";

export async function getUserByIdAction(id: string) {
  return await getUserById(id);
}
