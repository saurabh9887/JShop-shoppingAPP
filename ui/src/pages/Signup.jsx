import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
import { useDialogStore } from "@/Store/AuthStore";
import { RegisterAPI } from "@/Services/AuthAPI/AuthAPI";
import { toast } from "sonner";

function SignupDialog() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { isSignupOpen, closeSignup, openLogin } = useDialogStore();

  const handleRegister = async () => {
    debugger;
    const params = {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    };

    try {
      const res = await RegisterAPI(params);

      if (res.status === 200) {
        toast.success("Registration successful", {
          style: {
            background: "#61894d", // slate-800
            color: "white", // amber-400
            alignContent: "right",
            fontSize: "15px",
          },
        });
        closeSignup();
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
    <Dialog open={isSignupOpen} onOpenChange={closeSignup}>
      <DialogContent className="sm:max-w-[425px] p-2 mt-10">
        <Card className="w-full max-w-sm shadow-none border-0">
          <CardHeader className="text-center">
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your details below to create a new account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" required />
                </div> */}
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <Button onClick={handleRegister} className="w-full">
              Sign Up
            </Button>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Button
                variant="link"
                className="p-0 h-auto font-medium text-primary"
                onClick={() => {
                  closeSignup();
                  openLogin();
                }}
              >
                Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default SignupDialog;
