import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardFooter as CardFooterBase,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDialogStore } from "@/Store/AuthStore";
import { LoginAPI } from "@/Services/AuthAPI/AuthAPI";
import { toast } from "sonner";

function LoginDialog() {
  const { isLoginOpen, closeLogin, openSignup, authSuccess } = useDialogStore();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const params = {
      email: userData.email,
      password: userData.password,
    };

    try {
      const res = await LoginAPI(params);

      if (res.status === 200) {
        authSuccess(res.data);
        toast.success("Login successful", {
          style: {
            background: "#61894d", // slate-800
            color: "white", // amber-400
            alignContent: "right",
            fontSize: "15px",
          },
        });
        closeLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const trimmedValue = value.startsWith(" ") ? value.trimStart() : value;

    setUserData((prev) => ({
      ...prev,
      [id]: trimmedValue,
    }));
  };

  return (
    <Dialog open={isLoginOpen} onOpenChange={closeLogin}>
      <DialogContent className="sm:max-w-[425px] p-2">
        {/* <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>  
          <DialogDescription>
            Enter your email below to access your account.
          </DialogDescription>
        </DialogHeader> */}

        <Card className="w-full max-w-sm shadow-none border-0">
          <CardHeader className="text-center">
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            {/* <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction> */}
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a> */}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>

            <div className="text-sm text-center">
              Don’t have an account?{" "}
              <Button
                variant="link"
                className="p-0 h-auto font-medium text-primary cursor-pointer"
                onClick={() => {
                  closeLogin();
                  openSignup();
                }}
              >
                Sign Up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
