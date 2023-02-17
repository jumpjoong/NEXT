// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  let fs = require('fs')
  let db = require('bigData/bigData.json')
  // let edit = require('bigData/fix.josn')

  export default function handler(req, res) {
    const {method, body} = req 
    console.log("테스트입니다.")
    switch (method) {
      case 'POST' : addData(); break;
      case 'GET' : getData(); break;
      case 'DELETE' : remove(); break;
      case 'PUT' : editData(); break;
    }

    function addData() {
      console.log("데이터 생성.")
      db.push(body);
      saveData();
    }
    function getData() {
      console.log("데이터 추출.")
      res.status(200).json(db);
    }
    function remove() {
      db = db.filter((item)=> item.id !== body);
      saveData()
    }
    function editData() {
      let user = db.find((item) => item.id == body.id)
      Object.assign(user,body)
      saveData()
    }
    function saveData() {
      fs.writeFileSync('bigData/bigData.json', JSON.stringify(db));
      res.status(200).json(db);
    }
  }

  // res.status(200).json({ name: 'John Doe' })
