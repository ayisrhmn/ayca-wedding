const Greetings = require('./model');

module.exports = {
  greetingList: async (_, res) => {
    try {
      const Data = await Greetings.find()
        .sort({createdAt: -1})
        .select('Name Greeting Color createdAt updatedAt');

      res.status(200).json({
        Success: true,
        Message: '',
        Data,
      });
    } catch (err) {
      res.status(500).json({Message: err.message || 'Internal server error!'});
    }
  },
  actionCreate: async (req, res) => {
    try {
      const payload = req.body;

      let Data = new Greetings(payload);
      await Data.save();

      res.status(201).json({
        Success: true,
        Message: '',
        Data,
      });
    } catch (err) {
      if (err && err.name === 'ValidationError') {
        return res.status(422).json({
          Error: true,
          Message: err.message,
          Fields: err.errors,
        });
      }
      next(err);
    }
  },
};
