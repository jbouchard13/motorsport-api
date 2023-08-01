const db = {
  drivers: [
    {
      name: "Aric Almirola",
      age: 38,
      carNumber: 10,
      manufacturer: "Ford",
      wins: 3,
      team: "Stewart Haas Racing",
      series: "Nascar Cup Series",
      id: 1,
    },
    {
      name: "Aric Almirola",
      age: 38,
      carNumber: 10,
      manufacturer: "Ford",
      wins: 3,
      team: "Stewart Haas Racing",
      series: "Nascar Cup Series",
      id: 2,
    },
  ],
  series: [
    {
      title: "Nascar Cup Series",
      id: 2,
    },
    {
      title: "Nascar Xfinity Series",
      id: 1,
    },
  ],
  manufacturers: [
    {
      name: "Ford",
      id: 1,
    },
    {
      name: "Chevrolet",
      id: 2,
    },
    {
      name: "Toyota",
      id: 3,
    },
  ],
  teams: [
    {
      name: "Stewart Haas Racing",
      manufacturer: "Ford",
      id: 1,
    },
    {
      name: "Hendrick Motorsports",
      manufacturer: "Chevrolet",
      id: 2,
    },
  ],
};

export default db;
