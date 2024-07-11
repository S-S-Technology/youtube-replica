import instagramLogo from "../assets/facebook.png";
import googleplay from "../assets/googleplay.png";
import microsoft from "../assets/microsoft.png";
import Button from "../Components/button";
import Input from "../Components/Input/index1";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-sm">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <h1 className="mb-6 text-2xl font-semibold text-center">Instagram</h1>
          <p className="mb-4 text-sm text-center text-gray-600">
            Sign up to see photos and videos from your friends.
          </p>
          <div className="flex justify-center mt-8">
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md">
              <img
                src={instagramLogo}
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Login with Facebook
            </button>
          </div>
          <div className="mb-8" />{" "}
          <form className="mb-6">
            <Input />
            <Button>Sign Up</Button>
          </form>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms
              </a>{" "}
              ,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Data Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Cookies Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="px-8 py-4 text-center bg-white rounded-md shadow-md">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-600">Get the app</p>
        </div>
        <div className="flex justify-center mt-2">
          <img
            src={googleplay}
            alt="Google Play"
            className="mr-2"
            height={40}
            width={80}
          />
          <img
            src={microsoft}
            alt="Microsoft"
            className="ml-2"
            height={40}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
