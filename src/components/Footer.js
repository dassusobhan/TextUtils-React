import React from 'react'

export default function Footer(props) {
    let color=props.mode==='light'?'dark':'light';
  return (
<footer className={`text-center text-light bg-${props.mode} sticky-bottom`}>
  {/* <!-- Grid container --> */}
  <div className="container pt-1">
    {/* <!-- Section: Social media --> */}
    <section className="mb-1">
      {/* <!-- Facebook --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://www.facebook.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-facebook-f i-plain"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://twitter.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-twitter i-plain"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://mail.google.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-google i-plain"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://www.instagram.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-instagram i-plain"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://www.linkedin.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-linkedin i-plain"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        className={`btn btn-link btn-floating btn-lg text-${color} m-1`}
        href="https://github.com/"
        target="_blank"
        role="button"
        rel="noreferrer"
        data-mdb-ripple-color={color}
        ><i className="fab fa-github i-plain"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className={`text-center text-${color} p-0`} style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
   <i>© 2022 Copyright :</i> 
    <a className={`text-${color}`} href="/"><span className='mx-1'><i>TextUtils.com</i></span></a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
  )
}

