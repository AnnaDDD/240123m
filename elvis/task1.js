// В рамках БД "Соц/сеть"
// вывести среднее значение раекции незаблокированных юзеров

db.reactions.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $match: {
        "user.isBlocked": false
      }
    },
    {
      $group: {
        _id: null,
        averageReaction: { $avg: "$reactionValue" }
      }
    },
    {
      $project: {
        _id: 0,
        averageReaction: 1
      }
    }
  ])
  