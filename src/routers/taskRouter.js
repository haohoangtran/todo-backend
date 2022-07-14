const mongoose = require("mongoose")
const router = require("express").Router()
const User = require("../models/user.model")
const {Task} = require("../models/task.model")
const ObjectId = mongoose.Types.ObjectId;
const httpCode = {
    SUCCESS: 200
}

router.post("/", async (req, res) => {
    // them moi
    try {
        const newTask = new Task(req.body);

        await newTask.save()
        await User.findByIdAndUpdate(req.user._id, {$push: {tasks: newTask._id}});
        res.status(httpCode.SUCCESS).json({msg: "Them task thanh cong"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
})

router.put("/", (req, res) => {
    // chinh sua
})


router.delete("/", (req, res) => {
    // xoa 
})

router.get("/:id", (req, res) => {
    // lay theo id 
})

router.get("/", async (req, res) => {
    // lay nhieu
    try {
        const tasks = await Task.aggregate([
            {
                $match: {
                    userId: ObjectId(req.user._id)
                }
            },
            {
                $lookup: {
                    from: "users",
                    let: {uId: "$userId",},
                    as: "user",
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$_id", '$$uId']
                                }
                            }
                        },
                        {
                            $addFields: {
                                a: "b"
                            }
                        }
                    ]
                }
            },
            {
                $addFields: {
                    user: {$arrayElemAt: ["$user", 0]}
                }
            },
            {
                $unset: ["userId"]
            }
        ])
        res.status(httpCode.SUCCESS).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
})

module.exports = router