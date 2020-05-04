// Booklist.jsx
import React, {useState, useEffect} from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null)
  useEffect(() =>{
    const result = props.getData?.(props.language).then(response => setBookData(response) )
  }, [props])
  // const result = props.getData?.(props.language) // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる
  return (
      <div>
        <ul>
          {     // このあたり編集
            bookData === null
                ? <p>now loading...</p>
                : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}</li>)
          }
        </ul>
      </div>
  );
}
export default Booklist;
