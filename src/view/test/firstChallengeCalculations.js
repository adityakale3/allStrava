let calFirstBet = (bmi, consumption, activityType, frequency, age) => {
  let distanceInKm = 0;
  if (bmi < 18 && consumption == "Less than 2 Kms") {
    distanceInKm = 1.5;
  } else if (bmi > 18 && bmi < 24 && consumption == "Less than 2 Kms") {
    distanceInKm = 2.5;
  } else if (bmi >= 24 && bmi < 29 && consumption == "Less than 2 Kms") {
    distanceInKm = 2;
  } else if (bmi >= 29 && consumption == "Less than 2 Kms") {
    distanceInKm = 1.5;
  }

  if (bmi < 18 && consumption == "2 to 5 Kms") {
    distanceInKm = 3;
  } else if (bmi > 18 && bmi < 24 && consumption == "2 to 5 Kms") {
    distanceInKm = 4.5;
  } else if (bmi >= 24 && bmi < 29 && consumption == "2 to 5 Kms") {
    distanceInKm = 4;
  } else if (bmi >= 29 && consumption == "2 to 5 Kms") {
    distanceInKm = 3.5;
  }

  if (bmi < 18 && consumption == "5 Plus Kms") {
    distanceInKm = 6;
  } else if (bmi > 18 && bmi < 24 && consumption == "5 Plus Kms") {
    distanceInKm = 7;
  } else if (bmi >= 24 && bmi < 29 && consumption == "5 Plus Kms") {
    distanceInKm = 6.5;
  } else if (bmi >= 29 && consumption == "5 Plus Kms") {
    distanceInKm = 5.5;
  }

  let minRefSpeed = 0;

  if (activityType == "Walking") {
    if (age >= 18 && age <= 25 && frequency == "4 times a week") {
      minRefSpeed = 10;
    } else if (age > 25 && age <= 40 && frequency == "4 times a week") {
      minRefSpeed = 10.5;
    } else if (age > 40 && age <= 60 && frequency == "4 times a week") {
      minRefSpeed = 11;
    } else if (age > 60 && frequency == "4 times a week") {
      minRefSpeed = 12;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in 2 weeks") {
      minRefSpeed = 11;
    } else if (age > 25 && age <= 40 && frequency == "Once in 2 weeks") {
      minRefSpeed = 11.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 12;
    } else if (age > 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 13;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in a month") {
      minRefSpeed = 12;
    } else if (age > 25 && age <= 40 && frequency == "Once in a month") {
      minRefSpeed = 12.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in a month") {
      minRefSpeed = 13;
    } else if (age > 60 && frequency == "Once in a month") {
      minRefSpeed = 14;
    }
  }
  if (activityType == "Jogging") {
    if (age >= 18 && age <= 25 && frequency == "4 times a week") {
      minRefSpeed = 6;
    } else if (age > 25 && age <= 40 && frequency == "4 times a week") {
      minRefSpeed = 6.5;
    } else if (age > 40 && age <= 60 && frequency == "4 times a week") {
      minRefSpeed = 7;
    } else if (age > 60 && frequency == "4 times a week") {
      minRefSpeed = 8;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in 2 weeks") {
      minRefSpeed = 7;
    } else if (age > 25 && age <= 40 && frequency == "Once in 2 weeks") {
      minRefSpeed = 7.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 8;
    } else if (age > 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 9;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in a month") {
      minRefSpeed = 8;
    } else if (age > 25 && age <= 40 && frequency == "Once in a month") {
      minRefSpeed = 8.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in a month") {
      minRefSpeed = 9;
    } else if (age > 60 && frequency == "Once in a month") {
      minRefSpeed = 10;
    }
  }
  if (activityType == "Mix") {
    if (age >= 18 && age <= 25 && frequency == "4 times a week") {
      minRefSpeed = 8;
    } else if (age > 25 && age <= 40 && frequency == "4 times a week") {
      minRefSpeed = 8.5;
    } else if (age > 40 && age <= 60 && frequency == "4 times a week") {
      minRefSpeed = 9;
    } else if (age > 60 && frequency == "4 times a week") {
      minRefSpeed = 10;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in 2 weeks") {
      minRefSpeed = 9;
    } else if (age > 25 && age <= 40 && frequency == "Once in 2 weeks") {
      minRefSpeed = 9.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 10;
    } else if (age > 60 && frequency == "Once in 2 weeks") {
      minRefSpeed = 11;
    }

    if (age >= 18 && age <= 25 && frequency == "Once in a month") {
      minRefSpeed = 10;
    } else if (age > 25 && age <= 40 && frequency == "Once in a month") {
      minRefSpeed = 10.5;
    } else if (age > 40 && age <= 60 && frequency == "Once in a month") {
      minRefSpeed = 11;
    } else if (age > 60 && frequency == "Once in a month") {
      minRefSpeed = 12;
    }
  }
  return { minRefSpeed, distanceInKm };
};

module.exports = {
  calFirstBet,
};
