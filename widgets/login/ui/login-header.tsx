import { BookOpen } from "lucide-react";
import { loginConstants } from "../consts/login-constants";

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-700" />
      <h1 className="text-2xl font-bold text-gray-900">
        {loginConstants.loginHeader}
      </h1>
      <p className="text-gray-600 mt-2">{loginConstants.loginDescription}</p>
    </div>
  );
};

export default LoginHeader;
