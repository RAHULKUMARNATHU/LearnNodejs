const dbConnect = require("./mongodb");

const deleteDb = async () => {
  let db = await dbConnect();
  let result = await db.deleteMany(
    {name : 'note 5'}
    );

    if(result.acknowledged){
        console.warn("Success")
    }
};

deleteDb();
