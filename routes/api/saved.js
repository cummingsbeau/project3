const router = require("express").Router();
const similarController = require("../../controllers/similarController");

// Matches with "/api/books"
router.route("/")
  .get(similarController.findAll)
  .post(similarController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(similarController.findById)
  .delete(similarController.remove);

module.exports = router;