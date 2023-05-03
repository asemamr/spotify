import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SideBar from "./SideBar";
import getData from "../lib/getData";
async function page() {
  const spotifyApi = await getData();

  const {
    body: { items: playlists },
  } = await spotifyApi.getUserPlaylists();
  const session = await getServerSession(authOptions);
  // const {body: { items: playlists }} = await spotifyApi.getUserPlaylists();
  if (!session) {
    redirect("/login");
  }
  // console.log("the id of the first or the last in the main page", playlists[0].id);
  redirect(`/playlist/${playlists[0].id}`);
}

export default page;
