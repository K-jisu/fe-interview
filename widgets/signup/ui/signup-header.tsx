import { BookOpen } from "lucide-react";

const SignupHeader = () => {
  return (
    <div className="text-center mb-8">
      <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-700" />
      <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
      <p className="text-gray-600 mt-2">
        Start your interview preparation journey
      </p>
    </div>
  );
};

export default SignupHeader;
