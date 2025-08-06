"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signupConstants } from "../consts/signup-constants";

type signupFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const {
    handleSubmit,
    formState: { isLoading },
  } = useForm<signupFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{signupConstants.signupForm.signupTitle}</CardTitle>
        <CardDescription>
          {signupConstants.signupForm.signupDescription}
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
            <Label htmlFor="name">
              {signupConstants.signupForm.nameLabel}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={signupConstants.signupForm.namePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {signupConstants.signupForm.emailLabel}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={signupConstants.signupForm.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              {signupConstants.signupForm.passwordLabel}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder={signupConstants.signupForm.passwordPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              {signupConstants.signupForm.confirmPasswordLabel}
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={signupConstants.signupForm.confirmPasswordPlaceholder}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? signupConstants.signupForm.signupLoading
              : signupConstants.signupForm.signupButton}
          </Button>
        </form>

        <Separator />

        <Button variant="outline" className="w-full bg-transparent">
          <Mail className="mr-2 h-4 w-4" />
          {signupConstants.signupForm.googleLogin}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">
            {signupConstants.signupForm.alreadyHaveAccount}
          </span>
          <Link href="/login" className="text-blue-600 hover:underline">
            {signupConstants.signupForm.login}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
