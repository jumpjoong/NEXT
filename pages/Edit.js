import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

function Edit() {
  const router = useRouter();
  const { query } = router;
  const base = {id: query.id, name: query.name, email: query.email, tel: query.tel};
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
    <div>
      <form onSubmit={update}>
        <input value={value.name} type="name" name='name' onChange={valueData}></input>
        <input value={value.email} type="email" name='email' onChange={valueData}></input>
        <input value={value.tel} type="tel" name='tel' onChange={valueData}></input>
        <input type="submit" value="전송"></input>
      </form>
    </div>
  )
}

export default Edit