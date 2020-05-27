// useState, useEffect が React Hooksの機能
// フックとは、関数コンポーネントにstateやライフサイクルといったReactの機能を"接続(hook into)"するもの
// フックはReactをクラスなしに使うためのものなのでクラスコンポーネントでは使えない
import React, { useState, useEffect } from 'react'
// PropTypes を用いた型チェック
// https://ja.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import BookListCard from './BookListCard'
import Loading from './Loading'

const BookList = props => {
  // useStateの戻り値は [value, updateFunc]
  const [bookData, setBookData] = useState(null)
  // 外部データ取得などの副作用(side-effects)を取り扱うためのフック
  // useEffect(実施したい処理, [変更をウォッチする対象])

  useEffect(() => {
    props.getData(props.language)
      .then(response => setBookData(response))
  }, [props])

  return (
    <Grid container spacing={1}>
      { !bookData ? <Loading /> :
          bookData.data.totalItems && bookData.data.items.map((item, index) => {
          const title = item.volumeInfo.title
          const imgUrl = item.volumeInfo.imageLinks?.thumbnail || 'https://dummyimage.com/128x181/b5b5b5/ffffff&text=No+Image'
          const url = item.volumeInfo.infoLink
          return (
            <Grid container item xs={12} key={index}>
              <BookListCard
                title={title}
                imgUrl={imgUrl}
                url={url}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

BookList.propTypes = {
  getData: PropTypes.func,
  language: PropTypes.string
}

export default BookList
