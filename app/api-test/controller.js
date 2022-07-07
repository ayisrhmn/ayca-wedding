module.exports = {
  index: async (_, res) => {
    try {
      res.status(200).json({
        title: 'Aycashop Admin (Backend & API)',
        message: 'alive',
      });
    } catch (err) {
      res.status(500).json({message: err.message || 'Internal server error!'});
    }
  },
};
