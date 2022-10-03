import React from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Wallet = () => {
  const upiPayments = [
    {
      isSuccess: true,
      status: true,
      money: "150",
      date: "15 July 2025",
    },
    {
      isSuccess: false,
      status: false,
      money: "200",
      date: "15 July 2025",
    },
  ];

  return (
    <div>
      <div
        className="you-container menu-box-bottom menu-box-detached rounded-m"
        style={{ marginBottom: "8rem" }}
      >
        <div className="you-container my-1 menu-box-bottom menu-box-detached rounded-m">
          {/*  */}
          {upiPayments?.map((item) => {
            return (
              <div className="d-flex justify-space-between align-items-center">
                <div className="d-flex align-center">
                  <span className="font-39 mx-2 ">
                    {item.isSuccess ? (
                      <BsFillArrowRightCircleFill className="color-green-dark " />
                    ) : (
                      <BsFillArrowLeftCircleFill className="color-red-light" />
                    )}
                  </span>
                  <div className="d-flex flex-column mt-2">
                    <span className="font-18 font-900">UPI</span>
                    <span className="color-gray-dark font-13">
                      {item.isSuccess ? "Payment Received" : "Payment Failed"}
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex flex-column ">
                    <span
                      className={`font-19 font-900 ${
                        item.status ? "color-green-dark" : "color-red-light"
                      }`}
                    >
                      Rs 150
                    </span>
                    <span className="color-gray-dark font-13">
                      15 July 2025
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
