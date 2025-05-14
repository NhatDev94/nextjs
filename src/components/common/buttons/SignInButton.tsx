import { Button } from "../../shadcn/button";

export default function SignInButton({ onClick }: { onClick?: () => void }) {
  return <Button onClick={onClick}>Sign In</Button>;
}
