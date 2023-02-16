// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  let fs = require('fs')
  let db = require('bigData/bigData.json')
  // let edit = require('bigData/fix.josn')

  export default function handler(req, res) {
    const {method, body} = req 

    switch (method) {
      case 'POST' : addData(); break;
      case 'GET' : getData(); break;
      case 'DELETE' : remove(); break;
      case 'PUT' : fix(); break;
    }

    function addData() {
      db.push(body);
      saveData();
    }
    function getData() {
      res.status(200).json(db);
    }
    function remove() {
      db = db.filter((item)=> item.id !== body);
      saveData()
    }
    // function fix() {
      
    // }
    function saveData() {
      fs.writeFileSync('bigData/bigData.json', JSON.stringify(db));
      res.status(200).json(db);
    }
  }

  // res.status(200).json({ name: 'John Doe' })
