import Router from "express";

const router = Router();


router.get("/", (req, res) => {
    res.send({
        data: "Home",
    }); 
});  

router.get("/profile", (req,res) => {
    res.send({
        data: "Profile"

    });
})

export { router};
