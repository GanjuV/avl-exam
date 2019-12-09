const csv = require("csvtojson");

// Retrieve data
exports.getCSVData = async (req, res) => {
  try {
    // require csvtojson

    // Convert a csv file with csvtojson
    csv()
      .fromFile('../../filedata/restaurant_data.csv')
      .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
        console.log(jsonArrayObj); 
        res.send(jsonArrayObj);
      })

    // // Parse large csv with stream / pipe (low mem consumption)
    // csv()
    //   .fromStream(readableStream)
    //   .subscribe(function(jsonObj){ //single json object will be emitted for each csv line
    //     // parse each json asynchronousely
    //     return new Promise(function(resolve,reject){
    //         asyncStoreToDb(json,function(){resolve()})
    //     })
    //   }) 

    // //Use async / await
    // const jsonArray = await csv().fromFile(filePath);
  } catch(err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving notes."
    });
  }
};