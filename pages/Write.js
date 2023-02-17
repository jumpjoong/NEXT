import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Write () {
  const base = {id: '', title: '', detail: '', hashtag: ''};
  const [value, setValue] = useState(base)
  const router = useRouter()
  
  function valueData (e) {
    let t = e.target;
    setValue( (obj) => {return {...obj, [t.name] : t.value}});
  }
  
  function send (e) {
    e.preventDefault();
    axios.post('/api/hello', {...value, id : Date.now().toString()});
    router.push('/')
  }
  return (
    <div className='write'>
      <div className='write-wrap'>
        <form onSubmit={send}>
          <div>
            <p>제목</p><input type="text" name='title' onChange={valueData}></input>
          </div>
          <div>
            <p>내용</p><input type="text" name='detail' onChange={valueData}></input>
          </div>
          <div>
            <p>태그</p><input type="text" name='hashtag' onChange={valueData}></input>
          </div>
          <input type="submit" value="전송"></input>
        </form>
      </div>
    </div>
  )
}

export default Write