import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Write () {
  const base = {id: '', name: '', email: '', tel: ''};
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
    <div>
      <form onSubmit={send}>
        <input type="name" name='name' onChange={valueData}></input>
        <input type="email" name='email' onChange={valueData}></input>
        <input type="tel" name='tel' onChange={valueData}></input>
        <input type="submit" value="전송"></input>
      </form>
    </div>
  )
}

export default Write