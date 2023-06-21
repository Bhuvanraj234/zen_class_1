
import express from "express";
const app = express();
const port = 3000;


let rooms = [];
let bookings = [];


app.post('/rooms', (req, res) => {
  console.log(req.body);
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const roomId = generateRoomId();
  const room = { roomId, numberOfSeats, amenities, pricePerHour };
  rooms.push(room);
  res.status(201).json({ message: 'Room created successfully.', room });
});


app.post('/bookings', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  
 
  if (isRoomBooked(roomId, date, startTime, endTime)) {
    return res.status(409).json({ message: 'Room already booked for the given date and time.' });
  }

  const bookingId = generateBookingId();
  const booking = { bookingId, customerName, date, startTime, endTime, roomId };
  bookings.push(booking);
  res.status(201).json({ message: 'Room booked successfully.', booking });
});


app.get('/rooms/bookings', (req, res) => {
  const roomsWithBookings = rooms.map(room => {
    const bookedData = bookings.filter(booking => booking.roomId === room.roomId);
    return { ...room, bookedData };
  });
  res.status(200).json(roomsWithBookings);
});


app.get('/customers/bookings', (req, res) => {
  const customersWithBookings = bookings.map(booking => {
    const room = rooms.find(room => room.roomId === booking.roomId);
    return { ...booking, roomName: room.roomName };
  });
  res.status(200).json(customersWithBookings);
});


app.get('/customers/:customerName/bookings', (req, res) => {
  const { customerName } = req.params;
  const customerBookings = bookings.filter(booking => booking.customerName === customerName);
  res.status(200).json(customerBookings);
});


function generateRoomId() {
 
  return Math.floor(100000 + Math.random() * 900000);
}

// Helper function to generate a booking ID
function generateBookingId() {
  // Generate a random 6-digit number as the booking ID
  return Math.floor(100000 + Math.random() * 900000);
}

// Helper function to check if a room is already booked for the given date and time
function isRoomBooked(roomId, date, startTime, endTime) {
  return bookings.some(
    booking =>
      booking.roomId === roomId &&
      booking.date === date &&
      ((booking.startTime >= startTime && booking.startTime < endTime) ||
        (booking.endTime > startTime && booking.endTime <= endTime))
  );
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
