import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Link = () => {
  const [dataLink, setDataLink] = useState([]);

  useEffect(() => {
    if (dataLink.length == 0) {
      fetchLink()
    }
  }, [dataLink])

  const fetchLink = () => {
    axios.get('/api/link')
      .then((response) => {
        setDataLink(response.data)
      })
  }

  return (
    <div className='baniere link'>
      <article className='container'>
        Lien utiles:
        <div style={{width:'70%', backgroundColor: '#1e73be', height:' 80vh', margin: '0 auto'}}>
          <NumberList data={dataLink} />
        </div>
      </article>
    </div>
  );
};

export default Link;

function NumberList({ data }) {

  const listItems = data.map((item) =>
    <li key={item.id}>
      site : {item.name}   lien : <a href={item.url}>{item.url}</a>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

