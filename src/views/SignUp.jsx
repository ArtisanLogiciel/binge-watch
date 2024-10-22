import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Input from "../components/Input";
import Button from "../components/Button";
import LogoLink from "../components/LogoLink";

export default function SignUp({ props }) {
  const navigate = useNavigate();
  const { signUp } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.clear();
  }, []);

  const formRef = useRef();
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  // // test mode
  // const [nOfTry, setNofTry] = useState(0);

  // function handleContinue() {
  //   // check on firebase if the email is know
  //   setNofTry(nOfTry + 1);
  // }
  const handleForm = (e) => {
    // e.preventDefault();
    console.log(inputs);
    try {
      signUp(inputs.current[0].value, inputs.current[1].value);
      navigate("/home");
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div className={`bg-dark-blue text-grey`}>
      <TopBar />
      <form ref={formRef} className="w-full h-full">
        <div className={`flex justify-center text-left`}>
          <div className={`flex flex-col w-96 h-screen -mb-64 py-8`}>
            <h3
              className={`font-Avenir-Bold text-2xl leading-tight select-none`}
            >
              Inscrivez-vous avec votre adresse e-mail
            </h3>
            <div className={`w-96 my-8`}>
              <input
                placeholder="Email"
                ref={addInputs}
                className={`bg-grey-dark flex justify-center items-center sm:p-4 md:p-4 lg:p-4 rounded text-grey-light text-xs sm:text-base md:text-lg sm:tracking-wider leading-4.5 cursor-pointer transition-all duration-400 w-full h-14 mb-6 text-15 sm:text-15 md:text-15 lg:text-15`}
              />
              <input
                placeholder="Mot de passe"
                ref={addInputs}
                className={`bg-grey-dark flex justify-center items-center sm:p-4 md:p-4 lg:p-4 rounded text-grey-light text-xs sm:text-base md:text-lg sm:tracking-wider leading-4.5 cursor-pointer transition-all duration-400 w-full h-14 mb-6 text-15 sm:text-15 md:text-15 lg:text-15`}
              />
              <Button
                type={`submit`}
                className={`h-12 text-grey-ultralight font-Avenir-Bold text-15 sm:text-15 md:text-15 lg:text-15`}
                onClick={() => {
                  handleForm();
                }}
              >
                S'inscrire
              </Button>
            </div>
            <p className={`my-2 text-15 whitespace-pre-wrap`}>
              Vous possédez déjà un compte ?{" "}
              <Link to="/login" className={`text-grey-light`}>
                S'identifier
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

const TopBar = () => {
  return (
    <div
      className={`flex items-center h-13 md:h-18 w-full border-b border-b-grey/20`}
    >
      <LogoLink />
    </div>
  );
};
