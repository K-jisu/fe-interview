import SignupHeader from "../../widgets/signup/ui/signup-header";
import SignupForm from "../../widgets/signup/ui/signup-form";

const SignUp = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-md mx-auto">
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
