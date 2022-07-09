const router = require("express").Router();
const setLayout = require("../middlewares/setLayout");
const { dashboard } = require("../controllers");
const authenticate = require("../middlewares/authenticate");

// Routers
router.use(authenticate);
router.use(setLayout("dashboard"));
router.get("/", dashboard.home);
router.get("/post", dashboard.post.index);

module.exports = router;
