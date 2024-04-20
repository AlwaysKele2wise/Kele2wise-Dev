const userRoute = ("../routes/users")

require("../")
module.exports = (app) => {

    app.use("/users", usersRoute)
}