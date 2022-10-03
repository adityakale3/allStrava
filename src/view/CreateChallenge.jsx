import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbCurrencyRupee } from "react-icons/tb";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import CreateChallengePopup from "../components/CreateChallengePopup";
import { toast } from "react-toastify";
import apiClient from "../services/api";

const CreateChallenge = () => {
  const navigate = useNavigate();
  const [refSpeed, setRefSpeed] = useState();
  const [amountToBet, setAmountToBet] = useState();
  const [minDistance, setminDistance] = useState(1);
  const [estDistance, setestDistance] = useState(1);
  const [winAmount, setwinAmount] = useState(1);
  const [currentRm, setcurrentRm] = useState(1.1);
  const [offers, setOffers] = useState([]);
  const [isFirst, setisFirst] = useState(false);
  const [offerSelected, setOfferSelected] = useState({ amount: 0 });
  const [buttonText, setButtonText] = useState("Buy Multipler");
  const [display, setdisplay] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [winningPopup, setWinningPopup] = useState(false);
  const [paymentPopup, setPaymentPopup] = useState(false);
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  let handleChange = (e) => {
    // setOfferSelected(e.target.value);
    let name = offers.filter((item) => {
      if (item.id == e.target.value) {
        return true;
      }
    })[0];
    setOfferSelected(name);
    setButtonText("Offer Applied - " + name.offerName);
  };

  useEffect(() => {
    apiClient
      .get("/fetchRM", {
        amountBetted: amountToBet,
        offerApplied: 0,
        distanceEstimated: estDistance,
      })
      .then((data) => {
        console.log("RM ::::::::::");
        setRefSpeed(data.data.data.activeRefSpeed);
        setcurrentRm(data.data.data.activeRM);
      })
      .catch((error) => {
        console.error("User error ::iii::", error);
        setdisplay(true);
      });
  }, []);

  useEffect(() => {
    setTotalAmount(Number(amountToBet) + Number(offerSelected.amount));
  }, [amountToBet, offerSelected]);

  let makePayments = (orderId, amount, name, email, contact) => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then((dat) => {
      let options = {
        key: "rzp_test_40nD6Um1MMj9Uj", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Selfit",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // callback_url: "http://localhost:3000/payments",
        handler: function (response) {
          // toast.success(JSON.stringify(response));
          try {
            apiClient.post("/createChallengePayments", {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
            });

            setPaymentPopup(true);
          } catch (error) {}
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name,
          email,
          contact,
        },
        notes: {
          name,
          email,
          contact,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };

  let clickToCall = async () => {
    try {
      const data = await apiClient.post("/createChallenge", {
        amountBetted: amountToBet,
        offerApplied: 0,
        distanceEstimated: estDistance,
      });
      // console.log("User Resp ::::", data.data.data.userDetails);
      let orderId = data.data.data.id;
      makePayments(
        orderId,
        Number(data.data.data.finalAmount * 100),
        `${data.data.data.userDetails.firstName} ${data.data.data.userDetails.lastName}`,
        data.data.data.email,
        data.data.data.userDetails.phone
      );
    } catch (error) {
      console.error("User error ::iii::", error);
      setdisplay(true);
    }
  };

  useEffect(() => {
    if (amountToBet) {
      setwinAmount(Number(Number(amountToBet) * Number(currentRm)).toFixed(2));
    }
  }, [amountToBet]);

  useEffect(() => {
    apiClient
      .get("/offers")
      .then((data) => {
        console.log("OFFERS ::::", data.data.data.isFirstMatch);
        setOffers(data.data.data[0]);
        setisFirst(data.data.data.isFirstMatch);
      })
      .catch((error) => {
        console.error("User error ::iii::", error);
      });
  }, []);

  let onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name == "amountToBet") {
      if (
        (e.target.value < 10 || e.target.value > 299) &&
        typeof Number(e.target.value) == "number"
      ) {
        toast.clearWaitingQueue();
        toast.error("Bet amount 💰 cant be less than 10 and more than 299");
      } else {
        if (e.target.value < 99) {
          setminDistance(1);
          setestDistance(1);
          setAmountToBet(e.target.value);
        } else if (e.target.value > 99 && e.target.value <= 199) {
          setminDistance(2);
          setestDistance(2);
          setAmountToBet(e.target.value);
        } else if (e.target.value > 199 && e.target.value <= 299) {
          setminDistance(3);
          setestDistance(2);
          setAmountToBet(e.target.value);
        }
      }
    } else {
      if (e.target.value >= minDistance) {
        setestDistance(e.target.value);
      } else {
        toast.error("Estimate distance cant be less than minimum distance");
      }
    }
  };

  return (
    <div className="page-content">
      <div className="card mx-2 bg-transparent" style={{ border: "none" }}>
        <center>
          <h1
            className="text-center color-highlight font-700 color-red-light"
            style={{ fontSize: "60px", marginTop: "2rem" }}>
            {currentRm}x
          </h1>
          <span className="font-5">Current Challenge Multipler</span> <br />
          <span className="font-5">
            {refSpeed
              ? `Min Speed to win this challenge : ${refSpeed} min/km`
              : null}
          </span>
          <div
            className=" mb-4 rounded-m"
            style={{ display: isFirst ? "none" : "block" }}>
            <br />
            <button
              disabled={isFirst}
              onClick={() => {
                setWinningPopup(!winningPopup);
                setButtonText("Buy Multipler");
                setOfferSelected({ amount: 0 });
              }}
              className="btn bg-green-dark font-700 rounded-m text-uppercase
              px-4 py-2">
              {" "}
              {buttonText}
            </button>
            <br />
          </div>
        </center>
        <div
          className="input-age-container d-flex justify-content-center align-items-center row mx-1 px-4 py-3 mt-3"
          style={{ height: "20rem" }}>
          <div className="input-age-box">
            <input
              type="number"
              placeholder="Amount to between 10-299"
              max={3}
              name="amountToBet"
              onChange={onChange}
              className="mx-1 px-1 py-3 mt-1"
            />
            <span>Required</span>
            <TbCurrencyRupee className="input-age-icon" />
          </div>

          <div className="input-age-box">
            <input
              type="number"
              placeholder="Estimated Distance to travel"
              max={3}
              value={estDistance}
              name="estimatedDistance"
              onChange={onChange}
              className="mx-1 px-1 py-3 mt-1"
            />
            <TbCurrencyRupee className="input-age-icon" />
          </div>
        </div>
        <div className="morning-activity-card mx-1 px-4 py-3 mt-3">
          <center>
            <h3>Challenge Overview</h3>

            <table className="w-100 mb-3">
              <tbody>
                <tr>
                  <td className="text-center">
                    Min <FaRoad className="mx-2" /> {minDistance}kms
                  </td>
                  <td className="text-center">
                    Amount
                    <BsFillTrophyFill className="mx-2 color-yellow-dark" />
                    <b className="color-highlight">
                      {winAmount} <TbCurrencyRupee />
                    </b>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"> Total Amount to Pay </td>
                  <td className="text-center"> {totalAmount} Rs </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
        <div className="col-12 mt-3">
          <button
            className="btn  rounded-sm w-100 bg-green-dark text-uppercase font-700 py-2"
            onClick={clickToCall}>
            <b>Create challenge</b>
          </button>
        </div>
        {display ? <CreateChallengePopup setElement={setdisplay} /> : null}
        {winningPopup ? (
          <div>
            <div
              className="winning-popup menu-box-modal menu-box-detached rounded-m"
              style={{ display: "block" }}>
              <div className="boxed-text-xl mb-4">
                <h3 className="text-uppercase mt-4 font-800 font-26">
                  Select an offer
                </h3>

                <p className="font-15 mb-1 ">
                  Only one offer can be applied at a time
                </p>

                <div className="input-style no-borders no-icon mb-4">
                  <label for="form5a" className="color-highlight">
                    Select A Value
                  </label>
                  <select
                    id="form5a"
                    defaultValue="default"
                    name="offer"
                    onChange={handleChange}>
                    <option value="default" disabled="">
                      Select a Value
                    </option>

                    {offers.length
                      ? offers.map((item) => {
                          return (
                            <option value={item.id}>
                              {item.offerName} - {item.amount} Rs
                            </option>
                          );
                        })
                      : null}
                  </select>
                  <span>
                    <i className="fa fa-chevron-down"></i>
                  </span>
                  <i className="fa fa-check disabled valid color-green-dark"></i>
                  <i className="fa fa-check disabled invalid color-red-dark"></i>
                  <em></em>
                </div>

                <button
                  className="btn btn-sm rounded-s shadow-l bg-turmaric text-white px-5 btn-center-m text-uppercase font-900"
                  onClick={() => {
                    setWinningPopup(false);
                    setTimeout(() => {
                      navigate("/home");
                      // history("/home");
                    }, 3000);
                  }}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {paymentPopup ? (
          <div>
            <div
              className="menu menu-box-modal menu-box-detached menu-active"
              style={{ display: "block" }}>
              <div className="content text-center py-4">
                <i className="fa fa-check-circle color-green-dark fa-6x scale-box"></i>
                <h1 className="pt-4 mb-0">Payment Success</h1>
                <p>Start Activity in Strava</p>
                <button
                  className="btn btn-sm rounded-s shadow-l bg-turmaric text-white px-5 btn-center-m text-uppercase font-900"
                  onClick={() => {
                    setPaymentPopup(false);
                    navigate("/home");
                  }}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreateChallenge;
