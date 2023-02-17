import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

function Edit() {
  const router = useRouter();
  const { query } = router;
  const base = {id: query.id, title: query.title, detail: query.detail, hashtag: query.hashtag};
  const [value, setValue] = useState(base)
  
  function valueData (e) {
    let t = e.target;
    setValue( (obj) => {return {...obj, [t.name] : t.value}});
  }
  
  function update (e) {
    e.preventDefault();
    axios.put('/api/hello', {...value, id : query.id});
    router.push('/')
  }
  console.log(value)
  return (
    <div className='write'>
      <div className='write-wrap'>
        <form onSubmit={update}>
          <div>
            <p>제목</p><input type="text" name='title' onChange={valueData} value={value.title}></input>
          </div>
          <div>
            <p>내용</p><input type="text" name='detail' onChange={valueData} value={value.detail}></input>
          </div>
          <div>
            <p>태그</p><input type="text" name='hashtag' onChange={valueData} value={value.hashtag}></input>
          </div>
          <input type="submit" value="전송"></input>
        </form>
      </div>
    </div>
  )
}

export default Edit