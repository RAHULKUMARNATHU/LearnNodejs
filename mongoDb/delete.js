const dbConnect = require("./mongodb");

const deleteDb = async () => {
  let db = await dbConnect();
  let result = await db.deleteMany(
    {name : 'realme 8'}
    );

    if(result.acknowledged){
        console.warn("Success")
    }
};

deleteDb();
