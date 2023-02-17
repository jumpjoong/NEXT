import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Router, useRouter } from 'next/router'
function Basic() {
  const [data, setData] = useState([])
  const router = useRouter();
  
  function getData () {
    axios.get('/api/hello')
    .then(res => {
      setData(res.data)
    })
  }
  function remove (id) {
    axios.delete('/api/hello', {data: id})
    getData();
  }
  
  useEffect(()=> {
    getData();
  },[])


  if(!data.length) return (
  <main className='first'>
    <div className='wrap'>
      <div className='first-wrap'>
        <p>게시물이 없습니다! 게시물을 작성해주세요.</p>
      </div>
        <Link href="./Write">글쓰기로 이동</Link>
    </div>
  </main>
  )
  return (
    <main>
      <div>
        <ul>
          {
            data.map((obj, key)=> {
              return <div key={key}>
                <li>
                  <p>{obj.title}</p>
                  <p>{obj.detail}</p>
                  <p>{obj.hashtag}</p>
                  <button onClick={()=> router.push({ pathname: './Edit', query : obj})}>수정</button>
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