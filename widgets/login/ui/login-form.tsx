"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import Link from "next/link";
import { loginConstants } from "../consts/login-constants";

type loginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { isLoading },
  } = useForm<loginFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{loginConstants.loginForm.loginTitle}</CardTitle>
        <CardDescription>
          {loginConstants.loginForm.loginDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form
          onSubmit={handleSubmit(() => {
            console.log("form submitted");
          })}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">{loginConstants.loginForm.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              placeholder={loginConstants.loginForm.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              {loginConstants.loginForm.passwordLabel}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder={loginConstants.loginForm.passwordPlaceholder}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? loginConstants.loginForm.loginLoading
              : loginConstants.loginForm.loginButton}
          </Button>
        </form>

        <Separator />

        <Button variant="outline" className="w-full bg-transparent">
          <Mail className="mr-2 h-4 w-4" />
          {loginConstants.loginForm.googleLogin}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">
            {loginConstants.loginForm.noAccount}{" "}
          </span>
          <Link href="/signup" className="text-blue-600 hover:underline">
            {loginConstants.loginForm.signUp}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
