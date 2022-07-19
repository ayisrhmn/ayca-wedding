module.exports = {
  index: async (_, res) => {
    try {
      res.status(200).json({
        Success: true,
        Message: 'alive',
        Value: 'ayca-wedding | api-test',
      });
    } catch (err) {
      res.status(500).json({Message: err.message || 'Internal server error!'});
    }
  },
};
