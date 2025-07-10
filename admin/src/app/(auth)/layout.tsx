import BlockAuthForLoggedIn from "@/lib/context/BlockAuthForLoggedIn";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlockAuthForLoggedIn>{children}</BlockAuthForLoggedIn>;
}
