const router = require("express").Router();

router.get("/page", async (req, res) => {
  try {
    const { page } = req.query;
    if (page.toLowerCase() === "apex")
      return res.status(200).json({
        page: "apex",
      });
    else if (page.toLocaleLowerCase() === "lol")
      return res.status(200).json({
        page: "lol",
      });
    else
      return res.status(200).json({
        page: "",
      });
  } catch (error) {}
});

module.exports = router;
