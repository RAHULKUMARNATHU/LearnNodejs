const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "note 5",
      brand: "xiomi",
      price: 250,
      category: "mobile",
    },
    {
      name: " nord 10",
      brand: "onePlus",
      price: 350,
      category: "mobile",
    }
  ]);

  if (result.acknowledged) {
    console.log("success");
  }
};

insert();
