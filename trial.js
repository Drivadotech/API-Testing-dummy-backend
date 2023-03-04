// const axios = require("axios");

// //  Login Api

// exports.loginTwo = async (req, res) => {
//   let data = JSON.stringify({
//     email: req.body.email,
//     password: req.body.password,
//   });
  
//   const config = {
//     method: "post",
//     url: "https://api.drivado.com/api/v1/user/login",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//     withCredentials: true,
//   };

//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// // Places API

// exports.placesAutoComplete = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/places/placesAutoComplete?input=${req.query.input}`,
//     headers: {},
//     // params: {
//     //   input: req.query.input,
//     // },
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.placesDetailsSource = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/places/placesDetailsSource?place_id=${req.query.place_id}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     // console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.placesDetailsDestination = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/places/placesDetailsDestination?place_id=${req.query.place_id}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.placeTimezone = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/places/placeTimezone?location=${req.query.location}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.checkDistance = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/places/checkDistance?origin=${req.query.origin}&destination=${req.query.destination}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.showVehicleWithPrice = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/vehicles/showVehicleWithPrice?date=${req.query.date}&km=${req.query.km}&userId=${req.query.userId}&time=${req.query.time}&sourceLatLng=${req.query.sourceLatLng}&destinationLatLng=${req.query.destinationLatLng}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.showVehicleWithPriceHourly = async (req, res) => {
//   const config = {
//     method: "get",
//     url: `https://api.drivado.com/api/v1/vehicles/showVehicleWithPriceHourly?sourcePLaceId=${req.query.sourcePLaceId}&distance=${req.query.distance}&hour=${req.query.hour}&date=${req.query.date}&userId=${req.query.userId}&time=${req.query.time}`,
//     headers: {},
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.bookingWithVechile = async (req, res) => {
//   const data = JSON.stringify({
//     source: {
//       placename: "Heathrow Airport (LHR), Longford, UK",
//       placeid: "ChIJ6W3FzTRydkgRZ0H2Q1VT548",
//       lat: "51.4700223",
//       lng: "-0.4542955",
//     },
//     destination: {
//       placename: "Hilton London Metropole, Edgware Road, London, UK",
//       placeid: "ChIJG8cTDrQadkgRQun6nrhjMfU",
//       lat: "51.5193229",
//       lng: "-0.1695228",
//     },
//     userName: "techsupport@drivado.com",
//     travelDate: "2023-02-25",
//     travelTime: "10:16",
//     timeZone: "Europe/London",
//     passenger: "4",
//     bookingType: "ONEWAY",
//     duration: "43 mins",
//     priceDetails: {
//       amount: 109,
//       currency: "USD",
//     },
//     travelDistance: "26.875978",
//     vehicle: {
//       vehicleName: "COROLLA",
//     },
//   });

//   const config = {
//     method: "post",
//     url: `https://api.drivado.com/api/v1/bookings/bookingWithVechile`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// exports.createPassenger = async (req, res) => {
//   let data = JSON.stringify({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     phone: req.body.phone,
//     country: req.body.country,
//     dial_code: req.body.dial_code,
//     bookingId: req.body.bookingId,
//     flightNumber: req.body.flightOrTrain,
//     referenceNumber: req.body.reference,
//     specialRequest: req.body.specialRequest,
//   });

//   const config = {
//     method: "post",
//     url: `https://api.drivado.com/api/v1/passengers/passengerCreateAndBooking`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// // Conform Booking

// exports.bookingStatus = async (req, res) => {
//   let data = JSON.stringify({
//     bookingStatus: req.body.bookingStatus,
//   });

//   const config = {
//     method: "patch",
//     url: `https://api.drivado.com/api/v1/bookings/bookingStatus?bookingId=${req.query.bookingId}`,
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2NzcwNTA1NTcsImV4cCI6MTY3NzkxNDU1N30.BLdKlgwvw1tpY8_2_1oK1GmI-oTqdTF-FkqzBe2E3Fo",
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// // //  Conform Cancellation

// // exports.conformCancellation = async (req, res) => {
// //   let data = JSON.stringify({
// //     bookingStatus: CANCELLED,
// //   });

// //   const config = {
// //     method: "patch",
// //     url: `https://api.drivado.com/api/v1/bookings/bookingStatus?bookingId=${req.query.bookingId}`,
// //     headers: {
// //       Authorization:
// //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2NzcwNTA1NTcsImV4cCI6MTY3NzkxNDU1N30.BLdKlgwvw1tpY8_2_1oK1GmI-oTqdTF-FkqzBe2E3Fo",
// //       "Content-Type": "application/json",
// //     },
// //     data: data,
// //   };
// //   try {
// //     const response = await axios(config);
// //     console.log(JSON.stringify(response.data));
// //     res.send(response.data);
// //   } catch (error) {
// //     console.log(error);
// //     res.send(error);
// //   }
// // };

// // Payment Request

// exports.paymentRequest = async (req, res) => {
//   let data = JSON.stringify({
//     bookingId: "D1122-EBEJ6",
//     bookingStatus: "CONFIRMED",
//     paymentStatus: "UNPAID",
//   });

//   const config = {
//     method: "patch",
//     url: `https://api.drivado.com/api/v1/bookings/updateBooking`,
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2NzcwNTA1NTcsImV4cCI6MTY3NzkxNDU1N30.BLdKlgwvw1tpY8_2_1oK1GmI-oTqdTF-FkqzBe2E3Fo",
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

// // Update Booking

// exports.cancelBooking = async (req, res) => {
//   let data = JSON.stringify({
//     bookingId: "D1122-MTHY6",
//     bookingStatus: "CANCELLED",
//     cancellationFee: "50",
//   });

//   const config = {
//     method: "patch",
//     url: `https://api.drivado.com/api/v1/bookings/updateBooking`,
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2NzcwNTA1NTcsImV4cCI6MTY3NzkxNDU1N30.BLdKlgwvw1tpY8_2_1oK1GmI-oTqdTF-FkqzBe2E3Fo",
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(JSON.stringify(response.data));
//     res.send(response.data);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };
