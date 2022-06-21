module.exports = reqFilter = (req, res, next) => {
      if (!req.query.age) {
        res.send("Plz Provide age");
      }else if(req.query.age<18){
        res.send("U can't Access this Page");
       }
      
      else {
        next();
      }
    };