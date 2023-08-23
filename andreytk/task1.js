// В рамках БД "Соц/сеть"
// вывести среднее значение реакции незаблокированных юзеров

db.reactions.aggregate([
    {
        $lookup: {
            'from': 'users',
            'localField': 'author_id',
            'foreignField': '_id',
            'as': 'author'
        }
    },
    { $unwind: '$author' },
    { $match: { 'author.is_blocked': { $ne: true } } },
    { $group: {
            _id: "$value",
            avg_react: { $avg: "$value" }
        }
    }
])