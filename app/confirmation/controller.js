const Confirmation = require('./model');

module.exports = {
  confirmList: async (_, res) => {
    try {
      const Data = await Confirmation.find().select(
        'Name Place Confirmation createdAt updatedAt',
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
      let count_confirm_tlg = {
        Hadir: await Confirmation.find({Place: 'tlg'}).countDocuments({
          Confirmation: 'Hadir',
        }),
        TidakHadir: await Confirmation.find({Place: 'tlg'}).countDocuments({
          Confirmation: 'Tidak Hadir',
        }),
      };

      let count_confirm_kdr = {
        Hadir: await Confirmation.find({Place: 'kdr'}).countDocuments({
          Confirmation: 'Hadir',
        }),
        TidakHadir: await Confirmation.find({Place: 'kdr'}).countDocuments({
          Confirmation: 'Tidak Hadir',
        }),
      };

      const payload = {
        Tulungagung: count_confirm_tlg,
        Kediri: count_confirm_kdr,
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
  getConfirmByName: async (req, res) => {
    try {
      const {Name} = req.body;
      const Data = await Confirmation.findOne({Name}).select(
        'Name Place Confirmation',
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
};
