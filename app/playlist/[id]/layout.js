import AccountPrev from "./AccountPrev";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import SideBar from "../../SideBar";
import { redirect } from "next/navigation";
import Center from "../../Center";

async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  const playlistId = children.props.segmentPath[3][1];

  if (!session) {
    redirect("/login");
  }
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="bg-black flex w-full" style={{height: "calc(100% - 90px)"}}>
          <SideBar />
          <div className="flex-1 text-white relative overflow-y-scroll">
            <AccountPrev name={session.user.name} />
            <section>
              <Center playlistId={playlistId} />
            </section>
          </div>
        </div>
        <div className="h-[90px]">
        {children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
