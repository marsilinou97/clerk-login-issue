import {SignIn} from "@clerk/nextjs";

export default function Page() {
  // Adding custom login page does not affect the issue
  // The issue appears regardless if we add this (and signup) page or not
  return <>
    <h1>Signin page</h1>
    <SignIn/>
  </>;
}