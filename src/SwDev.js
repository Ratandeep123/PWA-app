import React from 'react'

const SwDev = () => {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.warn("response",response)
    })
  return (
    <div>
      <h2>hello</h2>
    </div>
  )
}

export default SwDev
