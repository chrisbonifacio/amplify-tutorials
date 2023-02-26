import type { FC, PropsWithChildren } from "react";
import { Amplify } from "aws-amplify";
import awsmobile from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsmobile);

const AmplifyAuthenticator: FC<PropsWithChildren> = ({ children }) => {
  return <Authenticator>{children}</Authenticator>;
};

export default AmplifyAuthenticator;
