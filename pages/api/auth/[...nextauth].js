import NextAuth from "next-auth";
import GoogleProvider from "neext-auth/providers/google"

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
        // add more providers
    ],
})