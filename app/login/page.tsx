import LoginForm from "../../widgets/login/ui/login-form";
import LoginHeader from "../../widgets/login/ui/login-header";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-md mx-auto">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
