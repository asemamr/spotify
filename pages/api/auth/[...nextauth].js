import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessTokenFunction(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("THE REFRESHED TOKEN IS ", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      // so the expires_in return 3600 seconds so we turned to milliseconds and also i want the future time 
      // that the accessToken will expired so we added the time now
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      // take the refresh token otherwise take the previous refresh token
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    }
  } catch (error) {
    console.error(error);
    return {
      ...token,
      error: "REFRESH_ACCESS_TOKEN_ERROR_FROM_ME"
    }
  }
}
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // the initial login
      if (user && account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
          // we want to the the accessTokenExpires in milliseconds
        };
      }
      // after an hour the accessToken will expires so if i login in before the access expires
      if (Date.now() < token.accessTokenExpires) {
        console.log("THE ACCESS TOKEN STILL REUSABLE");
        return token;
      }
      // the accessToken has expired. so we need to refresh it by refreshToken
      console.log("THE ACCESS TOKEN HAS EXPIRED. REFRESHING...");
      return await refreshAccessTokenFunction(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username

      return session;
      
    }
  },
};

export default NextAuth(authOptions);
