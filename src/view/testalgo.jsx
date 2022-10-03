import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
//  import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
import "./../asset/styles/bootstrap.css";
const { calFirstBet } = require("./test/firstChallengeCalculations");

function Testalgo() {
  const [dropDownVals, setdropDownVals] = useState({
    workoutFrequency: "",
    workoutConsumption: "",
    workoutType: "",
    height: 0,
    weight: 0,
    age: 0,
  });

  const [nextbetRMS, setnextbetRM] = useState({
    rm: 1.5,
    minRefSpeed: 0,
  });

  const [thisBetStuff, setthisBetStuff] = useState({
    minDistanceCondition: 0,
    isFirstBet: true,
    amountBetted: 0,
    distanceCovered: 0,
    timeInSeconds: 0,
  });

  const [results, setResults] = useState({
    newRM: 0,
    result: 0,
    reason: 0,
    finalAmount: 0,
    actualRm: 0,
    finalRm: 0,
    mfn: 0,
    avgRm: 0,
    percentOfBetsTaken: 0,
    nextBetSpeed: 0,
  });

  const [thisActivityData, setthisActivityData] = useState({
    activitySpeed: 0,
    percentOfBetsTaken: 0,
    totalChallenges: 0,
    membersinceDays: 0,
    totalEarning: 0,
  });

  const [algoSpecificVariables, setAlgoSpecificVariables] = useState({
    percentImproSpeed: 0,
    winningSteak: 0,
    challengeTakenToday: 0,
    mileStonesUnlocked: 0,
    daysSkipped: 0,
    additionalFactor: 0.75,
    divisionFactor: 0,
    distancePerformanceNumber: 0,
  });

  const [algoSpecific] = useState({
    wtPertSpeed: 1,
    wtWinningStreak: 0.2,
    wtNumbOfChallengesInDay: 0.8,
    wtDistancePerf: 1,
    wtForMilestoneUnlocked: 0.6,
    wtSkippedDays: 0.4,
  });

  const [bmi, setBMI] = useState(0);

  useEffect(() => {
    if (
      thisActivityData.totalChallenges != 0 &&
      thisActivityData.membersinceDays != 0
    ) {
      let pobt = Number(
        (
          Number(
            thisActivityData.totalChallenges / thisActivityData.membersinceDays
          ) * 100
        ).toFixed(2)
      );

      setthisActivityData({ ...thisActivityData, percentOfBetsTaken: pobt });
    }
  }, [thisActivityData.totalChallenges, thisActivityData.membersinceDays]);

  useEffect(() => {
    setAlgoSpecificVariables({
      ...algoSpecificVariables,
      distancePerformanceNumber: Number(
        (
          0.5 +
          (1 +
            (Number(thisBetStuff.minDistanceCondition) -
              Number(thisBetStuff.minDistanceCondition)) /
              thisBetStuff.minDistanceCondition)
        ).toFixed(2)
      ),
    });
  }, [thisBetStuff.minDistanceCondition]);

  useEffect(() => {
    if (thisBetStuff.amountBetted != 0 || thisBetStuff.amountBetted != "") {
      if (thisBetStuff.amountBetted > 300 || thisBetStuff.amountBetted < 10) {
        alert("Amount must be between 10 - 299");
      } else {
        if (thisBetStuff.isFirstBet) {
        } else {
          if (thisBetStuff.amountBetted > 9 || thisBetStuff.amountBetted < 99) {
            setthisBetStuff({ ...thisBetStuff, distanceCovered: 1 });
          } else if (
            thisBetStuff.amountBetted > 99 ||
            thisBetStuff.amountBetted < 200
          ) {
            setthisBetStuff({ ...thisBetStuff, distanceCovered: 2 });
          } else if (
            thisBetStuff.amountBetted >= 200 ||
            thisBetStuff.amountBetted < 300
          ) {
            setthisBetStuff({ ...thisBetStuff, distanceCovered: 3 });
          }
        }

        if (thisBetStuff.amountBetted > 9 || thisBetStuff.amountBetted < 99) {
          setAlgoSpecificVariables({
            ...algoSpecificVariables,
            divisionFactor: 5,
          });
        } else if (
          thisBetStuff.amountBetted > 99 ||
          thisBetStuff.amountBetted < 200
        ) {
          setAlgoSpecificVariables({
            ...algoSpecificVariables,
            divisionFactor: 10,
          });
        } else if (
          thisBetStuff.amountBetted >= 200 ||
          thisBetStuff.amountBetted < 300
        ) {
          setAlgoSpecificVariables({
            ...algoSpecificVariables,
            divisionFactor: 15,
          });
        }
      }
    }
  }, [thisBetStuff.amountBetted]);

  useEffect(() => {
    if (thisBetStuff.timeInSeconds != 0 && thisBetStuff.distanceCovered != 0) {
      setthisActivityData({
        ...thisActivityData,
        activitySpeed: getActivitySpeed(),
      });
    }
  }, [thisBetStuff.timeInSeconds, thisBetStuff.distanceCovered]);

  useEffect(() => {
    setResults({ ...results, nextBetSpeed: getNextBetRefSpeed() });
    setAlgoSpecificVariables({
      ...algoSpecificVariables,
      percentImproSpeed: Number(getPercentImproSpeed()),
    });
    console.log("ACTIVITY SPEED::::", thisActivityData.activitySpeed);
  }, [thisActivityData.activitySpeed]);

  let getActivitySpeed = () =>
    Number(
      Number(
        Number(thisBetStuff.timeInSeconds) /
          Number(Number((thisBetStuff.distanceCovered / 1000).toFixed(2)))
      ).toFixed(2)
    );

  let getNextBetRefSpeed = () => {
    console.log(
      "NEXT BET REF SPEED ::::",
      Number(
        thisActivityData.activitySpeed < nextbetRMS.minRefSpeed
          ? thisActivityData.activitySpeed
          : nextbetRMS.minRefSpeed
      ),
      thisActivityData.activitySpeed,
      nextbetRMS.minRefSpeed
    );
    return Number(
      thisActivityData.activitySpeed < nextbetRMS.minRefSpeed
        ? thisActivityData.activitySpeed
        : nextbetRMS.minRefSpeed
    );
  };

  let getPercentImproSpeed = () => {
    if (Number(nextbetRMS.minRefSpeed - thisActivityData.activitySpeed) < 0) {
      return 0;
    } else {
      return Number(
        (
          ((nextbetRMS.minRefSpeed - thisActivityData.activitySpeed) /
            nextbetRMS.minRefSpeed) *
          100
        ).toFixed(2)
      );
    }
  };

  let actualRM = () => {
    console.log(
      "Algo Data ",
      algoSpecificVariables.percentImproSpeed,
      algoSpecific.wtPertSpeed,
      algoSpecificVariables.winningSteak,
      algoSpecific.wtWinningStreak,
      algoSpecificVariables.challengeTakenToday,
      algoSpecific.wtNumbOfChallengesInDay,
      algoSpecificVariables.distancePerformanceNumber,
      algoSpecific.wtDistancePerf,
      algoSpecificVariables.mileStonesUnlocked,
      algoSpecific.wtForMilestoneUnlocked,
      algoSpecificVariables.daysSkipped,
      algoSpecific.wtSkippedDays,
      algoSpecificVariables.divisionFactor,
      algoSpecificVariables.additionalFactor
    );

    return Number(
      Number(
        Number(
          Number(
            Number(
              Number(
                Number(
                  Number(algoSpecificVariables.percentImproSpeed) *
                    Number(algoSpecific.wtPertSpeed)
                ) +
                  Number(
                    Number(algoSpecificVariables.winningSteak) *
                      Number(algoSpecific.wtWinningStreak)
                  ) +
                  Number(
                    Number(algoSpecificVariables.challengeTakenToday) *
                      Number(algoSpecific.wtNumbOfChallengesInDay)
                  )
              ) *
                Number(
                  Number(algoSpecificVariables.distancePerformanceNumber) *
                    Number(algoSpecific.wtDistancePerf)
                )
            ) +
              Number(
                Number(algoSpecificVariables.mileStonesUnlocked) *
                  Number(algoSpecific.wtForMilestoneUnlocked)
              ) -
              Number(
                Number(algoSpecificVariables.daysSkipped) *
                  Number(algoSpecific.wtSkippedDays)
              )
          ) / Number(algoSpecificVariables.divisionFactor)
        ) + Number(algoSpecificVariables.additionalFactor)
      ).toFixed(2)
    );
  };

  let getUserCurrentBetStats = (rm) => {
    // WIN = true | LOST = false

    let result =
      thisBetStuff.minDistanceCondition <
        Number((thisBetStuff.distanceCovered / 1000).toFixed(2)) &&
      thisActivityData.activitySpeed <= nextbetRMS.minRefSpeed
        ? true
        : false;

    // Win / Lost Reason
    let reason;

    if (thisBetStuff.minDistanceCondition > thisBetStuff.distanceCovered) {
      reason = "Min distance was not met";
    } else if (thisActivityData.activitySpeed >= nextbetRMS.minRefSpeed) {
      reason = "Current activity speed was slower than required";
    } else {
      reason = "You did a great job today";
    }

    // Win / Lost Amount
    let finalAmount;
    if (result) {
      finalAmount = Number(nextbetRMS.rm * thisBetStuff.amountBetted);
    } else {
      finalAmount = Number(0);
    }

    // Next Bet RM
    let nextBetRMValue = 0;
    if (Number(rm) <= 1.1) {
      nextBetRMValue = 1.1;
    } else {
      nextBetRMValue = rm;
    }

    let avgRM = Number(Number((nextbetRMS.rm * nextBetRMValue) / 2).toFixed(2));
    let mfn = Number(
      (
        Number(thisActivityData.percentOfBetsTaken * avgRM) +
        Number(thisActivityData.totalEarning / thisActivityData.membersinceDays)
      ).toFixed(2)
    );

    return {
      result,
      reason,
      finalAmountWonLost: Number(Number(finalAmount).toFixed(2)),
      nextBetRMValue,
      avgRM,
      mfn,
    };
  };

  let handleChange = (e) => {
    setdropDownVals({ ...dropDownVals, [e.target.name]: e.target.value });
  };

  let handleclick = (e) => {
    let err = [];
    !!!dropDownVals.workoutFrequency || dropDownVals.workoutFrequency == ""
      ? err.push("Workout Freq is required")
      : null;
    !!!dropDownVals.workoutConsumption || dropDownVals.workoutConsumption == ""
      ? err.push("Workout Consumption is required")
      : null;
    !!!dropDownVals.workoutType || dropDownVals.workoutType == ""
      ? err.push("Workout Type is required")
      : null;
    !!!dropDownVals.height || dropDownVals.height == ""
      ? err.push("Height is required")
      : null;
    !!!dropDownVals.weight || dropDownVals.weight == ""
      ? err.push("Weight is required")
      : null;
    !!!dropDownVals.age || dropDownVals.age == ""
      ? err.push("Age is required")
      : null;

    if (err.length) {
      toast.warning("All fields are required " + err.join(","));
    } else {
      let bmi = Number(
        (
          (Number(dropDownVals.weight) /
            Number(dropDownVals.height) /
            Number(dropDownVals.height)) *
          10000
        ).toFixed(2)
      );
      setBMI(bmi);

      let firstActivityData = calFirstBet(
        bmi,
        dropDownVals.workoutConsumption,
        dropDownVals.workoutType,
        dropDownVals.workoutFrequency,
        dropDownVals.age
      );

      console.log(firstActivityData);
      setthisBetStuff({
        ...thisBetStuff,
        minDistanceCondition: firstActivityData.distanceInKm,
      });
      setnextbetRM({
        ...nextbetRMS,
        minRefSpeed: firstActivityData.minRefSpeed,
      });
    }
  };

  let handleclickResult = (e) => {
    let rm = actualRM();
    console.log("ACTUAL RM :::::", rm);
    let resultsData = getUserCurrentBetStats(rm);

    setResults({
      ...results,
      result: resultsData.result,
      reason: resultsData.reason,
      finalAmount: resultsData.finalAmountWonLost,
      avgRm: resultsData.avgRM,
      mfn: resultsData.mfn,
      newRM: resultsData.nextBetRMValue,
      actualRm: rm,
    });
  };

  return (
    <div>
      <center>
        <h1>Test Page</h1>
      </center>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <table style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Next bet RM</th>
                <th>Next bet Ref Speed</th>
                <th>BMI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nextbetRMS.rm}</td>
                <td>{nextbetRMS.minRefSpeed}</td>
                <td>{bmi}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <p className="row">
            <div className="col-3">
              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout type
                </label>
                <select onChange={handleChange} name="workoutType">
                  <option defaultValue="default" disabled selected>
                    Your workout type
                  </option>
                  <option value="Walking">Walking</option>
                  <option value="Jogging">Jogging</option>
                  <option value="Mix">Mix</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout frequency
                </label>
                <select onChange={handleChange} name="workoutFrequency">
                  <option defaultValue="default" disabled selected>
                    Your workout frequency
                  </option>
                  <option value="4 times a week">4 times a week</option>
                  <option value="Once in 2 weeks">Once in 2 weeks</option>
                  <option value="Once in a month">Once in a month</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="input-style no-borders no-icon mb-4">
                <label htmlfor="form5a" className="color-highlight">
                  Your workout consumption
                </label>
                <select onChange={handleChange} name="workoutConsumption">
                  <option defaultValue="default" disabled selected>
                    Your workout consumption
                  </option>
                  <option value="Less than 2 Kms">Less than 2 Kms</option>
                  <option value="2 to 5 Kms">2 to 5 Kms</option>
                  <option value="5 Plus Kms">5 Plus Kms</option>
                </select>
              </div>
            </div>
          </p>
          <p className="row">
            <div className="col-3">
              <input
                type="number"
                className="form-control validate-name"
                id="form1"
                placeholder="Height in CM"
                onChange={(e) =>
                  setdropDownVals({
                    ...dropDownVals,
                    height: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                className="form-control validate-name"
                id="form2"
                placeholder="Weight in Kg"
                onChange={(e) =>
                  setdropDownVals({
                    ...dropDownVals,
                    weight: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="col-3">
              <input
                type="number"
                className="form-control validate-name"
                id="form3"
                placeholder="Age in numbers"
                onChange={(e) =>
                  setdropDownVals({
                    ...dropDownVals,
                    age: Number(e.target.value),
                  })
                }
              />
            </div>
          </p>
          <input
            type="button"
            value="Calculate"
            onClick={handleclick}
            className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-green-dark  w-100"
          />
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-5">
              <center>Amount To Bet in Rs</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form4"
                placeholder="Amount Betted in Rs"
                onChange={(e) =>
                  setthisBetStuff({
                    ...thisBetStuff,
                    amountBetted: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="col-5">
              <center>Min Distance condition</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form8"
                placeholder="Distance to travel mtrs"
                disabled={thisBetStuff.isFirstBet}
                value={thisBetStuff.minDistanceCondition}
                onChange={(e) =>
                  setthisBetStuff({
                    ...thisBetStuff,
                    minDistanceCondition: Number(e.target.value),
                  })
                }
              />
              <br />
            </div>
            <br />

            <hr />

            <div className="col-5">
              <center>Distance in mtr's strava</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form5"
                placeholder="Distance in Meters"
                onChange={(e) =>
                  setthisBetStuff({
                    ...thisBetStuff,
                    distanceCovered: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="col-5">
              <center>Time in minutes strava</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form6"
                placeholder="Time in minutes"
                onChange={(e) =>
                  setthisBetStuff({
                    ...thisBetStuff,
                    timeInSeconds: Number(e.target.value),
                  })
                }
              />
            </div>

            <hr />
            <center>
              <h3>Variable's</h3>
            </center>
            <hr />

            <div className="col-5">
              <center>Win Streak</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form9"
                placeholder="In Days"
                value={algoSpecificVariables.winningSteak}
                onChange={(e) =>
                  setAlgoSpecificVariables({
                    ...algoSpecificVariables,
                    winningSteak: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="col-5">
              <center>Challenges Taken Today</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form61"
                placeholder="Challenges Taken Today"
                value={algoSpecificVariables.challengeTakenToday}
                onChange={(e) =>
                  setAlgoSpecificVariables({
                    ...algoSpecificVariables,
                    challengeTakenToday: Number(e.target.value),
                  })
                }
              />
            </div>

            <br />
            <div className="col-5">
              <center>MileStones Unlocked</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form9"
                placeholder="MileStones Unlocked"
                value={algoSpecificVariables.mileStonesUnlocked}
                onChange={(e) =>
                  setAlgoSpecificVariables({
                    ...algoSpecificVariables,
                    mileStonesUnlocked: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="col-5">
              <center>Days Skipped</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form61"
                placeholder="Days Skipped"
                value={algoSpecificVariables.daysSkipped}
                onChange={(e) =>
                  setAlgoSpecificVariables({
                    ...algoSpecificVariables,
                    daysSkipped: Number(e.target.value),
                  })
                }
              />
            </div>

            <br />
            <div className="col-5">
              <center>Total Challenges Till date, in days</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form9"
                placeholder="Total Challenges Till date"
                value={thisActivityData.totalChallenges}
                onChange={(e) =>
                  setthisActivityData({
                    ...thisActivityData,
                    totalChallenges: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="col-5">
              <center>Member since in days</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form61"
                placeholder="Member Since Days"
                value={thisActivityData.membersinceDays}
                onChange={(e) =>
                  setthisActivityData({
                    ...thisActivityData,
                    membersinceDays: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="col-5">
              <center>Total Earning's</center>
              <input
                type="number"
                className="form-control validate-name"
                id="form61"
                placeholder="Total Earnings"
                value={thisActivityData.totalEarning}
                onChange={(e) =>
                  setthisActivityData({
                    ...thisActivityData,
                    totalEarning: Number(e.target.value),
                  })
                }
              />
            </div>

            <input
              type="button"
              value="Calculate BET Result"
              onClick={handleclickResult}
              className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-green-dark  w-100"
            />
          </div>
        </div>

        <div className="col-8">
          <table
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0",
              padding: 0,
            }}>
            <thead>
              <tr>
                <th>Ref Speed</th>
                <th>Current Speed</th>
                <th>Min Distance Condition</th>
                <th>Distance Covered</th>
                <th>Addition Factor</th>
                <th>Avg Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nextbetRMS.minRefSpeed} min/km</td>
                <td>{thisActivityData.activitySpeed} min/km</td>
                <td>{thisBetStuff.minDistanceCondition} km</td>
                <td>
                  {Number((thisBetStuff.distanceCovered / 1000).toFixed(2))} km
                </td>
                <td>{algoSpecificVariables.additionalFactor}</td>
                <td>{algoSpecificVariables.additionalFactor} min/km</td>
              </tr>
            </tbody>
          </table>

          <br />
          <table
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0",
              padding: 0,
            }}>
            <thead>
              <tr>
                <th>% Impro in Speed</th>
                <th>Division Factor</th>
                <th>Distance Performance Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{algoSpecificVariables.percentImproSpeed} %</td>
                <td>{algoSpecificVariables.divisionFactor}</td>
                <td>{algoSpecificVariables.distancePerformanceNumber}</td>
              </tr>
            </tbody>
          </table>

          <hr />
          <h2>
            <center>Final Results</center>
          </h2>
          <table style={{ textAlign: "center", width: "100%" }}>
            <thead>
              <tr>
                <th>Bet Status</th>
                <th>Reason</th>
                <th>Final Amount Won / Lost</th>
                <th>Avg RM</th>
                <th>MFN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{results.result ? "WON" : "LOST"}</td>
                <td>{results.reason}</td>
                <td>{results.finalAmount}</td>
                <td>{results.avgRm}</td>
                <td>{results.mfn}</td>
              </tr>
            </tbody>
          </table>

          <br />
          <hr />
          <center>
            <h2>Next Bet Stuff</h2>
          </center>

          <table style={{ textAlign: "center", width: "100%" }}>
            <thead>
              <tr>
                <td>Next Bet RM</td>
                <td>Actual RM</td>
                <td>Next Bet Ref Speed</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{results.newRM}</td>
                <td>{results.actualRm}</td>
                <td>{results.nextBetSpeed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Testalgo;
