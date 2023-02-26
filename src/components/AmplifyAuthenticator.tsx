import { Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsmobile);

export default function AmplifyAuthenticator() {
  return (
    <Authenticator>
      <slot />
    </Authenticator>
  );
}
