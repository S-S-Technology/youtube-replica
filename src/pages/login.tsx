import mobile from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import googleplay from "../assets/googleplay.png";
import microsoft from "../assets/microsoft.png";
import Input from "../Components/Input";
import Button from "../Components/button";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [params] = useSearchParams();
  const [username, setUserName] = useState<string>("");

  useEffect(() => {
    setUserName(params.get("username") || "");
  });

  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <div className="flex h-full space-x-8">
        <div className="flex items-center justify-end w-full ">
          <img src={mobile} height={20} width={250} />
        </div>
        <div className="w-full">
          <div className="flex flex-col items-start justify-center h-full max-w-xs space-y-5">
            <div className="w-full p-8 border-2 ">
              <h1 className="mb-6 text-2xl font-semibold text-center">
                Instagram
              </h1>
              <form className="mb-6">
                <Input value={username} />
                <Button>Sign In</Button>
              </form>
              <div className="flex items-center justify-center mb-4">
                <div className="w-1/4 mr-4 border-b border-gray-400"></div>
                <p className="text-sm text-gray-600">OR</p>
                <div className="w-1/4 ml-4 border-b border-gray-400"></div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img src={facebook} alt="Facebook Logo" className="h-8 mr-2" />
                <p className="text-sm text-gray-600">Login With Facebook</p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <p className="items-center text-xs text-gray-600">
                  Forgotten your password?
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full p-5 border-2">
              <p className="text-sm text-gray-600">
                Don't Have An Account?{" "}
                <span className="font-bold text-blue-600">Sign Up</span>
              </p>
            </div>
            <div className="flex flex-col items-center w-full p-5">
              <p className="mb-3 text-sm text-black">Get The App</p>
              <div className="flex justify-center space-x-5">
                <div>
                  <img src={microsoft} height={40} width={80} />
                </div>
                <div>
                  <img src={googleplay} height={40} width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
