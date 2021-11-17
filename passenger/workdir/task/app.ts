interface PassengerInt {
  name: string;
  location: string;
}
interface Output {
  boarded: object[];
  reservation: object[];
  count: number;
}
let locations: string[] = ["Abuja", "Benue", "Katsina", "Lagos", "Sambisa"];

let passangerGenerator = function (passengers: number): object[] {
  let passengerArr: object[] = [];
  for (let i = 0; i < passengers; i++) {
    let passenger: PassengerInt = {
      name: "",
      location: "",
    };

    let locationIndex = i % 5;
    let passengerIndex = i + 1;
    passenger.location = locations[locationIndex];
    passenger.name = `passenger${passengerIndex}`;
    passengerArr.push(passenger);
  }
  return passengerArr;
};

const taskOne = (passengers: number, shuffle: number) => {
  let output: Output = {
    boarded: [],
    reservation: [],
    count: 0,
  };
  let totalPassengers = passangerGenerator(passengers);

  if (totalPassengers.length < 5) {
    output.reservation.push(...totalPassengers);
    return output;
  }

  if (totalPassengers.length <= 50 && totalPassengers.length >= 5) {
    let remainder: number = totalPassengers.length % 5;
    let extraPassengers: object[] = totalPassengers.splice(
      totalPassengers.length - remainder
    );
    output.reservation.push(...extraPassengers);
    output.boarded.push(...totalPassengers);
    output.count += 1;
    return output;
  }

  if (totalPassengers.length > 50 && shuffle <= 0) {
    let extraPassengers: object[] = totalPassengers.splice(50);
    output.reservation.push(...extraPassengers);
    output.boarded.push(...totalPassengers);
    output.count += 1;
    return output;
  }

  if (totalPassengers.length > 50 && shuffle > 0) {
    shuffle += 1;

    while (totalPassengers.length > 50 && shuffle > 1) {
      shuffle -= 1;
      output.count += 1;
      totalPassengers = totalPassengers.splice(50);
    }

    if (shuffle > 1) {
      let remainder: number = totalPassengers.length % 5;
      let extraPassengers: object[] = totalPassengers.splice(
        totalPassengers.length - remainder
      );
      output.reservation.push(...extraPassengers);
      output.boarded.push(...totalPassengers);
      output.count += 1;
      shuffle -= 1;
      console.log(output);
    } else {
      let extraPassengers = totalPassengers.splice(50);
      output.boarded.push(...totalPassengers);
      output.reservation.push(...extraPassengers);
      output.count += 1;
      shuffle -= 1;
      console.log(output);
    }
  }

  return output;
};

// taskOne(34, 3);
export default taskOne;
