import { useState } from "react";
import { toast } from "react-toastify";

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    month: "",
    day: "",
    time: "",
    partySize: 2,
    name: "",
    email: "",
  });

  const months = [
    { value: "", label: "Select Month" },
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  const timeSlots = [
    { value: "", label: "Select Time" },
    { value: "17:00", label: "5:00 PM" },
    { value: "17:30", label: "5:30 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Table reserved successfully!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <div className='reservationForm'>
      <div className='formHeader'>
        <h2>Reserve Your Table</h2>
        <p>Quick and easy reservation</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <select
            value={reservation.month}
            onChange={(e) =>
              setReservation({ ...reservation, month: e.target.value })
            }
            required
          >
            {months.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={reservation.day}
            onChange={(e) =>
              setReservation({ ...reservation, day: e.target.value })
            }
            required
          >
            <option value=''>Select Day</option>
            {days.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={reservation.time}
            onChange={(e) =>
              setReservation({ ...reservation, time: e.target.value })
            }
            required
          >
            {timeSlots.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='formGroup'>
          <select
            value={reservation.partySize}
            onChange={(e) =>
              setReservation({ ...reservation, partySize: e.target.value })
            }
            required
          >
            <option value=''>Number of Guests</option>
            {Array.from({ length: 20 }, (_, i) => (
              <option
                key={i + 1}
                value={i + 1}
              >
                {i + 1} {i === 0 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <div className='formGroup'>
          <input
            type='text'
            placeholder='Full Name'
            value={reservation.name}
            onChange={(e) =>
              setReservation({ ...reservation, name: e.target.value })
            }
            required
          />
        </div>

        <div className='formGroup'>
          <input
            type='email'
            placeholder='Email Address'
            value={reservation.email}
            onChange={(e) =>
              setReservation({ ...reservation, email: e.target.value })
            }
            required
          />
        </div>

        <button type='submit'>Confirm Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
