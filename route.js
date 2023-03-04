const express = require("express");

const {
  login,
  placesAutoComplete,
  placesDetailsSource,
  placesDetailsDestination,
  placeTimezone,
  checkDistance,
  bookingWithVechile,
  createPassenger,
  bookingStatus,
  paymentRequest,
  cancelBooking,
  accessToken,
  showVehicleWithPrice,
  showVehicleWithPriceHourly,
} = require("./api_trial");

const { loginTwo } = require("./trial");


// const {
//   login,
//   placesAutoComplete,
//   placesDetailsSource,
//   placesDetailsDestination,
//   checkDistance,
//   placeTimezone,
//   showVehicleWithPrice,
//   showVehicleWithPriceHourly,
//   createPassenger,
//   bookingStatus,
//   bookingWithVechile,
//   conformCancellation,
//   paymentRequest,
//   cancelBooking,
// } = require("./trial");

const router = express.Router();

// router.route("/login").post(login);
// router.route("/placesAutoComplete").get(placesAutoComplete);
// router.route("/placesDetailsSource").get(placesDetailsSource);
// router.route("/placesDetailsDestination").get(placesDetailsDestination);
// router.route("/placeTimezone").get(placeTimezone);
// router.route("/checkDistance").get(checkDistance);
// router.route("/showVehicleWithPrice").get(showVehicleWithPrice);
// router.route("/showVehicleWithPriceHourly").get(showVehicleWithPriceHourly);
// router.route("/bookingWithVechile").post(bookingWithVechile);
// router.route("/createPassenger").post(createPassenger);
// router.route("/bookingStatus").patch(bookingStatus);
// // router.route("/conformCancellation").patch(conformCancellation);
// router.route("/paymentRequest").patch(paymentRequest);
// router.route("/cancelBooking").patch(cancelBooking);




router.route("/login").post(login);
router.route("/accessToken").post(accessToken);
router.route("/placesAutoComplete").get(placesAutoComplete);
router.route("/placesDetailsSource").get(placesDetailsSource);
router.route("/placesDetailsDestination").get(placesDetailsDestination);
router.route("/placeTimezone").get(placeTimezone);
router.route("/checkDistance").get(checkDistance);
router.route("/showVehicleWithPrice").get(showVehicleWithPrice);
router.route("/showVehicleWithPriceHourly").get(showVehicleWithPriceHourly);
router.route("/bookingWithVechile").post(bookingWithVechile);
router.route("/createPassenger").post(createPassenger);
router.route("/bookingStatus").patch(bookingStatus);
router.route("/paymentRequest").patch(paymentRequest);
router.route("/cancelBooking").patch(cancelBooking);



// router.route("/loginMain").post(loginTwo);


module.exports = router;



