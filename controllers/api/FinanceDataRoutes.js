const router = require("express").Router();

const { FinanceData } = require("../../models");

// protects routes from non-logged in users
const { apiGuard } = require("../../utils/authGuard");

router.post("/", apiGuard, async (req, res) => {
  try {
    const newFinanceData = await FinanceData.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newFinanceData);
  } catch (err) {
    console.error('Error:', err); //debugging
    res.status(500).json(err);
  }
});

router.put("/:id", apiGuard, async (req, res) => {
  try {
    const [updatedRows] = await FinanceData.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", apiGuard, async (req, res) => {
  try {
    const [destroyedRows] = FinanceData.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (destroyedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
