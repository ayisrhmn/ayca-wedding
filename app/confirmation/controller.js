const Confirmation = require('./model');

module.exports = {
  confirmList: async (_, res) => {
    try {
      const Data = await Confirmation.find().select(
        '_id Name Confirmation createdAt updatedAt',
      );

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

      let Data = new Confirmation(payload);
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
  countConfirmation: async (_, res) => {
    try {
      let count_hadir = await Confirmation.countDocuments({
        Confirmation: 'Hadir',
      });

      let count_tidak_hadir = await Confirmation.countDocuments({
        Confirmation: 'Tidak Hadir',
      });

      const payload = {
        Hadir: count_hadir,
        TidakHadir: count_tidak_hadir,
      };

      res.status(200).json({
        Success: true,
        Message: '',
        Data: payload,
      });
    } catch (err) {
      res.status(500).json({Message: err.message || 'Internal server error!'});
    }
  },
};
