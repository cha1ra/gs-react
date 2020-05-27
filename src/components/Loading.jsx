import React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loading = () => {
  return (
    <div style={{ width: '200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size={20} />
      <p style={{ paddingLeft: '8px', textAlign: 'center' }}>Loading...</p>
    </div>
  )
}

export default Loading
