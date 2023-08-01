import db from "../assets/data";

export default {
  // get series data
  getSeries: () => {
    return db.series;
  },

  // post series data
  createSeries: (newSeries) => {
    console.log("creating", newSeries);
  },
  // put series data
  editSeries: (id, newInfo) => {
    console.log("editing", {
      id: id,
      info: newInfo,
    });
  },
  // delete series data
  deleteSeries: (id) => {
    console.log("deleting", id);
  },

  // get manufacturers data
  getManufacturers: () => {
    return db.manufacturers;
  },
};
