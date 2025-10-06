"use server";

import { getUserByAddress } from "@/helpers/read-db";

export async function getUserByAddressAction(address: string) {
  return await getUserByAddress(address);
}
