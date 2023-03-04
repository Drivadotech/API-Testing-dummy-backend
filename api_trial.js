const axios = require("axios");


//  Login Api

exports.login = async (req, res) => {
  let data = JSON.stringify({
    email: req.body.email,
    password: req.body.password,
  });

  const config = {
    method: "post",

    // url: "https://api.drivado.com/api/v1/api/apiLogin",
    url: "https://api.drivado.com/api/v1/api/apiLogin",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    withCredentials: true,
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Access TOKEN

exports.accessToken = async (req, res) => {
  //  const url="https://api.drivado.com/api/v1/user/login"
  const config = {
    method: "post",
    url: "https://api.drivado.com/api/v1/api/apiGetAccessToken",
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZiOTFmMGZlMTgzODQ0MzllYmRhZCIsImlhdCI6MTY3NzUwMDE5MCwiZXhwIjoxNjc4MzY0MTkwfQ.Vrg-_ETek4djaFN6O3iPSc6xmcNm-G8ePOVERlt9phk",
    },
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Places API

exports.placesAutoComplete = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apiplacesAutoComplete?input=${req.query.input}&GOOGLE_MAPS_API_KEY=${req.query.GOOGLE_MAPS_API_KEY}`,
    headers: {},
    // params: {
    //   input: req.query.input,
    // },
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.placesDetailsSource = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apiplacesDetailsSource?place_id=${req.query.place_id}&GOOGLE_MAPS_API_KEY=${req.query.GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    // console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.placesDetailsDestination = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apiplacesDetailsDestination?place_id=${req.query.place_id}&GOOGLE_MAPS_API_KEY=${req.query.GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.placeTimezone = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apiplaceTimezone?location=${req.query.location}&API_KEY=${req.query.API_KEY}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.checkDistance = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/places/checkDistance?origin=${req.query.origin}&destination=${req.query.destination}&GOOGLE_MAPS_API_KEY=${req.query.GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.showVehicleWithPrice = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apishowVehicleWithPrice?date=${req.query.date}&km=${req.query.km}&userId=${req.query.userId}&time=${req.query.time}&sourceLatLng=${req.query.sourceLatLng}&destinationLatLng=${req.query.destinationLatLng}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.showVehicleWithPriceHourly = async (req, res) => {
  const config = {
    method: "get",
    url: `https://api.drivado.com/api/v1/api/apishowVehicleWithPriceHourly?sourcePLaceId=${req.query.sourcePLaceId}&distance=${req.query.distance}&hour=${req.query.hour}&date=${req.query.date}&userId=${req.query.userId}&time=${req.query.time}&GOOGLE_MAPS_API_KEY=${req.query.GOOGLE_MAPS_API_KEY}`,
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.bookingWithVechile = async (req, res) => {
  const data = JSON.stringify({
    source: {
      placename: req.body.placename,
      placeid: req.body.placeid,
      lat: req.body.lat,
      lng: req.body.lng,
    },
    destination: {
      placename: req.body.placename,
      placeid: req.body.placeid,
      lat: req.body.lat,
      lng: req.body.lng,
    },
    userName: req.body.userName,
    travelDate: req.body.travelDate,
    travelTime: req.body.travelTime,
    timeZone: req.body.timeZone,
    passenger: req.body.passenger,
    bookingType: req.body.bookingType,
    duration: req.body.duration,
    priceDetails: {
      amount: req.body.amount,
      currency: req.body.currency,
    },
    travelDistance: req.body.travelDistance,
    vehicle: {
      vehicleName: req.body.vehicleName,
    },
  });

  const config = {
    method: "post",
    url: `https://api.drivado.com/api/v1/api/apibookingWithVechile`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.createPassenger = async (req, res) => {
  let data = JSON.stringify({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    country: req.body.country,
    dial_code: req.body.dial_code,
    bookingId: req.body.bookingId,
    flightNumber: req.body.flightOrTrain,
    referenceNumber: req.body.reference,
    specialRequest: req.body.specialRequest,
  });

  const config = {
    method: "post",
    url: `https://api.drivado.com/api/v1/api/apipassengerCreateAndBooking`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Conform Booking

exports.bookingStatus = async (req, res) => {
  const config = {
    method: "patch",
    url: `https://api.drivado.com/api/v1/api/apibookingStatus?bookingId=${req.query.bookingId}`,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2NzcwNTA1NTcsImV4cCI6MTY3NzkxNDU1N30.BLdKlgwvw1tpY8_2_1oK1GmI-oTqdTF-FkqzBe2E3Fo",
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Payment Request

exports.paymentRequest = async (req, res) => {
  let data = JSON.stringify({
    bookingId: req.body.bookingId,
    bookingStatus: req.body.bookingStatus,
    paymentStatus: req.body.paymentStatus,
  });

  const config = {
    method: "patch",
    url: `https://api.drivado.com/api/v1/api/apipaymentRequest`,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjkxZjBmZTE4Mzg0NDM5ZWJkYWQiLCJpYXQiOjE2Nzc1MDAxOTMsImV4cCI6MTY3ODM2NDE5M30.7gWcSl26FqGXpowJPmJmLoIo75OxB3bp3eL0zvKQFZY',
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Update Booking

exports.cancelBooking = async (req, res) => {
  let data = JSON.stringify({
    bookingId: req.body.bookingId,
    bookingStatus: req.body.bookingStatus,
    cancellationFee: req.body.cancellationFee,
  });

  const config = {
    method: "patch",
    url: `https://api.drivado.com/api/v1/api/apicancelBooking`,
    headers: {
      Authorization:req.header("Authorization")
        ,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
