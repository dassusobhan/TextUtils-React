import React from 'react'

export default function Abouts(props) {
  return (
      <>
    <div className='container space-15'  style={{color: props.mode==='dark'?"white":"black"}}>
        <div className='text-center'>
        <h2>
              About Us
            </h2>
        </div>
        
        <div className={`accordion-body border boarder-about}`}>
              <code>TextUtils.com</code> is a leading cloud-based text converter
              with millions of users worldwide. We make it easy for everyone to
              play with your text in different option. Promote your words,
              showcase your art, test up your text or just test out new ideas
              with this free website.<br/>
              <div className='text-center'>
              <code >
                <i>© 2022 TextUtils.com, Inc</i>
              </code>
              </div>
            </div>

    </div>

    <div className='space-down'>

    </div>
    </>
  )
}
