import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("post")
    .find({})
    .project({email:1,name:1})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
    console.log(movies);
  res.json(movies);
};