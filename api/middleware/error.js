module.exports = function (error, req, res, next) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
}