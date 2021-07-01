import Router from "express";

const authrouter = Router();


authrouter.get("/user", (req, res) => {
    res.send({
        data: "User"

    });
})

export { authrouter };
