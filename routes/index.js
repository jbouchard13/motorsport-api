const router = require("express").Router();
const apiRoutes = require("./API");

router.use("/", apiRoutes);

module.exports = router;
