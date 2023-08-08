module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      console.log("Async Middelware");
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
