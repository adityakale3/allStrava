import React from "react";

const verify = () => {
  return (
    <div>
      <div className="card-center">
        <div className="ps-5 pe-5">
          <div
            id="menu-expense-1"
            className="qna-section menu-box-bottom menu-box-detached rounded-m">
            <div class="content mb-0">
              <h1 class="text-center font-28">Verify Phone</h1>
              <p class="text-center font-12 pb-3 m-0">
                Enter your One Time Passcode to Confirm Phone / Email
              </p>
              <div class="divider"></div>
              <p class="text-center font-12 mt-n2 mb-n1">
                Enter your OTP Code to send on +91-96231-24231
              </p>
              <div class="text-center mb-3 pt-3 pb-2">
                <form action="">
                  <input
                    class="otp mx-1 text-center font-24 font-900"
                    type="tel"
                    maxLength={1}
                  />
                  <input
                    class="otp mx-1 text-center font-24 font-900"
                    type="tel"
                    maxLength={1}
                  />
                  <input
                    class="otp mx-1 text-center font-24 font-900"
                    type="tel"
                    maxLength={1}
                  />
                  <input
                    class="otp mx-1 text-center font-24 font-900"
                    type="tel"
                    maxLength={1}
                  />
                </form>
              </div>
              <div className="text-center mt-4">
                <input
                  type="submit"
                  value="Verify"
                  className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-green-dark px-5"
                />
              </div>
              <p class="pt-3 font-11 text-center pb-3 m-0">
                Didn't receive your code? <a href="#">Resend OTP</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verify;
