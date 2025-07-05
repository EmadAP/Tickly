import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginUser, SignupUser } from "@/lib/api/auth/mutations";
import { loginProps, SignupProps } from "@/lib/types/types";

type NavAuthProps = {
  onClose: () => void;
};

function NavAuth({ onClose }: NavAuthProps) {
  const { mutate: signup } = SignupUser();
  const { mutate: login } = LoginUser();
  const [signupData, setSignupData] = useState<SignupProps>({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState<loginProps>({
    username: "",
    password: "",
  });

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(signupData, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginData, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="login" className="bg-slate-900">
        <TabsList className="bg-slate-900">
          <TabsTrigger
            value="login"
            className="text-lg bg-slate-800 text-white cursor-pointer data-[state=active]:bg-orange-500"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="text-lg bg-slate-800 text-white cursor-pointer data-[state=active]:bg-orange-500"
          >
            Sign up
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form onSubmit={handleLoginSubmit}>
            <Card className="bg-slate-800 border-slate-800 text-white">
              <CardHeader>
                <CardTitle className="text-orange-500 text-lg">Login</CardTitle>
                <CardDescription>
                  Login to your account here. Click submit when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Username</Label>
                  <Input
                    id="tabs-demo-username"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    id="tabs-demo-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-lg"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={handleSignupSubmit}>
            <Card className="bg-slate-800 border-slate-800 text-white">
              <CardHeader>
                <CardTitle className="text-orange-500 text-lg">
                  Sign up
                </CardTitle>
                <CardDescription>
                  Create a new account here. Click submit when you&apos;re done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Username</Label>
                  <Input
                    id="tabs-demo-username"
                    value={signupData.username}
                    onChange={(e) =>
                      setSignupData({ ...signupData, username: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-email">Email</Label>
                  <Input
                    id="tabs-demo-email"
                    type="email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    id="tabs-demo-password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-lg"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default NavAuth;
