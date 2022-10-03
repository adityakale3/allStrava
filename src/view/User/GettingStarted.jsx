import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import image1 from "../../asset/images/undraw/1.svg";
import image2 from "../../asset/images/undraw/2.svg";
import image3 from "../../asset/images/undraw/3.svg";
import image4 from "../../asset/images/undraw/4.svg";
import image5 from "../../asset/images/undraw/6.svg";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const GettingStarted = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("msg"));

  if (searchParams.get("msg")) {
    toast.error(searchParams.get("msg"));
    searchParams.delete("msg");
  }

  return (
    <div className="slider-container">
      <Splide
        aria-label="My Favorite Images"
        style={{ height: "100vh", padding: "0" }}>
        <SplideSlide>
          <div className=" text-center d-flex justify-content-center">
            <div className="content mt-n5" style={{ maxWidth: "320px" }}>
              <img className="mb-3 mx-auto" width="320" src={image1} />
              <h1 className="mt-5 mb-0 font-33 font-700">Selfit</h1>
              <p className="mt-n1 text-turmaric font-12">
                Simply the Best Firness motivation platform
              </p>
              <p className="boxed-text-xl">
                Make money while you run, as simple as that
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="text-center d-flex justify-content-center">
            <div className="content mt-n5" style={{ maxWidth: "320px" }}>
              <img className="mb-3 mx-auto" width="250" src={image2} />
              <h1 className="mt-5 mb-0 font-33 font-700">
                Take up a Challenge
              </h1>
              <p className="mt-n1 text-turmaric font-12">
                Its like betting on yourself
              </p>
              <p className="boxed-text-xl">
                Create a challenge and add factors like distance you want to
                cover and amount you want to bet
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="text-center d-flex justify-content-center">
            <div className="content mt-n5" style={{ maxWidth: "320px" }}>
              <img className="mb-3 mx-auto" width="280" src={image3} />
              <h1 className="mt-5 mb-0 font-33 font-700">
                Multipler has it all
              </h1>
              <p className="mt-n1 text-turmaric font-12">
                Return multipler will be a key factor
              </p>
              <p className="boxed-text-xl">
                Return multipler will decied, how much will you earn from the
                betted amount, it could be 2x , 4x or even 10x
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="text-center d-flex justify-content-center">
            <div className="content mt-n5" style={{ maxWidth: "320px" }}>
              <img className="mb-3 mx-auto" width="270" src={image4} />
              <h1 className="mt-5 mb-0 font-33 font-700">Increase multipler</h1>
              <p className="mt-n1 text-turmaric font-12">
                Every activity, affects the multipler
              </p>
              <p className="boxed-text-xl">
                Things like skipping days of activities or lossing streak
                affects multipler in negative way, but stuff like taking up
                challenge daily, and improving your speed does increase
                multipler
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="text-center d-flex justify-content-center">
            <div className="content mt-n5" style={{ maxWidth: "320px" }}>
              <img className="mb-3 mx-auto" width="285" src={image5} />
              <h1 className="mt-5 mb-0 font-33 font-700">Win more!</h1>
              <p className="mt-n1 text-turmaric font-12">
                We are coming up with more activities, that would make you win
                bunch of stuff
              </p>
              <p className="boxed-text-xl">
                Top leaderboard user will get 5x multipler and more... Keep
                running
              </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div className="cover-button-bottom d-flex justify-content-center align-items-center color-white">
        <div>
          <Link
            to="/signup"
            style={{ color: "white" }}
            className="btn scale-box btn-m btn-center-l rounded-l shadow-xl bg-turmaric color-white font-800 text-uppercase py-2">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
