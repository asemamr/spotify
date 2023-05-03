import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SideBar from "./SideBar";
import getData from "../lib/getData";
async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const spotifyApi = await getData();

  const {
    body: { items: playlists },
  } = await spotifyApi.getUserPlaylists();
  
  redirect(`/playlist/${playlists[0].id}`);
}

export default page;
