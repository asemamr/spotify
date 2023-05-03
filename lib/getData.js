import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import spotifyApi from "./spotify";
import { signIn } from "next-auth/react";


export default async function getData() {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session.error === "REFRESH_ACCESS_TOKEN_ERROR_FROM_ME") {
      signIn();
    }
  }
  spotifyApi.setAccessToken(session.user.accessToken);

  return spotifyApi;
}