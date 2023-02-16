import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
function Basic() {
  const [data, setData] = useState([])
  const [reverse, setReverse] = useState([])
  
  function getData () {
    axios.get('/api/hello')
    .then(res => {
      setData(res.data)
    })
  }
  function remove (id) {
    axios.delete('/api/hello', {data: id})
  }
  function editMode (key) {
    // e.preventDefault();
    event.stopPropagation()
    // setReverse(true);
  }
  function change() {

  }
  
  
  useEffect(()=> getData,[])
  if(!data.length) return (<>loading....<Link href="/src/Write">글쓰기로 이동</Link></>)
  return (
    <main>
      <div>
        <ul>
          {
            data.map((obj, key)=> {
              return <div key={key}>
                <li>
                    {reverse ? <input type="text" /> : 
                      <>
                      <p>{obj.name}</p>
                      <p>{obj.email}</p>
                      <p>{obj.tel}</p>
                      </>}
                    <button onClick={()=> editMode(key)}>수정</button>
                    <button onClick={()=> remove(obj.id)}>삭제</button>
                </li>
            </div>
            })
          }
        </ul>
        <Link href="/src/Write">글쓰기로 이동</Link>
      </div>
    </main>
  )
}

export default Basic