import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const data = [
    {
      question: "What is Return Multipler",
      answer:
        "It decides the return you will receive at end of activity completion, based on amount invested",
    },
    {
      question: "What is Return Multipler",
      answer:
        "It decides the return you will receive at end of activity completion, based on amount invested",
    },
  ];

  const handleDropdown = (i) => {
    setOpenDropdown(!openDropdown);
    if (openDropdown != i) {
      setOpenDropdown(i);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="pt-5">
      <div className="card faq-style mx-0 rounded-m mt-3 mb-0">
        <div className="card-overlay bg-black rounded-m opacity-60"></div>
        <div className="premium-text ps-3 mt-5 text-center">
          <h1 className=" mb-0 text-white font-700">
            <FaSearch style={{ fontSize: "4rem" }} />
          </h1>
          <h1 className="text-white font-31 font-700">Knowledge Base</h1>

          <p className="mb-0 text-white font-11 mt-2 ">
            Search for all you need in 1 page
          </p>
        </div>
        <div className="input-age-box ">
          <input
            type="text"
            placeholder="search here - try the new demo"
            max={3}
            name="amountToBet"
            className="mx-1 px-3 py-3 mt-1"
          />
        </div>
      </div>
      <div>
        <div
          className="you-container menu-box-bottom menu-box-detached rounded-m"
          style={{ marginBottom: "8rem" }}
        >
          <div className="content mb-2">
            <h3 className="font-23">Frequent Questions</h3>
            <p className="color-highlight font-12 mt-n2 mb-2">
              Really, we get asked this often.
            </p>
            <p>
              We get asked these questions a lot, so we made this small section
              to help you out identifying what you need faster.
            </p>
            <div className="divider mt-3 mb-3"></div>
            {data?.map((item, index) => {
              return (
                <div key={index} className="mb-4">
                  <h5
                    role="button"
                    className="font-600 font-18 d-flex justify-space-between "
                    onClick={() => handleDropdown(index)}
                  >
                    {item.question}
                    {openDropdown == index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </h5>
                  {openDropdown == index ? (
                    <div>
                      <p className="pb-1 m-0">{item.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="divider mt-3 mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
