import "~/styles/globals.css";

import {Inter} from "next/font/google";

import {TRPCReactProvider} from "~/trpc/react";
import {ClerkLoaded, ClerkLoading, ClerkProvider} from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ClerkProvider afterSignInUrl={"/"} afterSignUpUrl={"/"} signInUrl={"/"} signUpUrl={"/"}>
      <ClerkLoading>
        <h1>Loading clerk...</h1>
      </ClerkLoading>
      <ClerkLoaded>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ClerkLoaded>
    </ClerkProvider>
    </body>
    </html>
  );
}
