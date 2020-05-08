exports.handler = (req, res) => {
  console.log(req.body.message);

  res.status(200).send({
    message: "Welcome!",
    time: new Date(),
  });
};
