db.reactions.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user"
        }
    },
    {
        $unwind: "$user"
    },
    {
        $match: { "user.is_blocked": { $ne: true } }
    },
    {
        $group: {
            _id: null,
            averageReaction: { $avg: "$value" }
        }
    }
]);
