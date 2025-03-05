const bodyValidator = (schema) => {
  return async (req, res, next) => {
    try {
      let data = req.body;
      await schema.validateAsync(data, { abortEarly: false });

      next();
    } catch (exception) {
      let msgs = {};
      if (exception.details) {
        exception.details.map((errorObj) => {
          msgs = errorObj.message;
        });
      }
      next({
        code: 400,
        detail: exception,
        status: "VALIDATION_FALIED",
        message: "Data validation is failed",
        option: null,
      });
    }
  };
};

module.exports={bodyValidator}
