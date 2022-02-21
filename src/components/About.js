import React  from "react";


export default function About(props) {
   return (
    <>
<div  id="accordionExample"
      className={`accordion about-${props.mode} text-center`}
      style={{
        backgroundColor:
          props.mode === "dark" ? "rgba(14, 10, 10, 0.199)" : "white",
      }}
    >
        <div id="headingThree"
          className={`accordion-item text-center  about-${props.mode}`}
          style={{
            backgroundColor:
              props.mode === "dark" ? "rgba(14, 10, 10, 0.199)" : "white",
          }}
        >
		<h2 class="accordion-header">
          <button
            className={`accordion-button  p-0 d-grid text-center about-${props.mode}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "rgb(80 80 80 / 34%)"
                  : "rgb(178 176 171 / 20%)",
            }}
          >
            <h2>
              About Us
            </h2>
          </button>
		  </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse about-${props.mode}`}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgba(14, 10, 10, 0.199)" : "white",
            }}
          >
            <div
              className={`accordion-body about-${props.mode}`}
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgba(14, 10, 10, 0.199)" : "white",
              }}
            >
              <code>TextUtils.com</code> is a leading cloud-based text converter
              with millions of users worldwide. We make it easy for everyone to
              play with your text in different option. Promote your words,
              showcase your art, test up your text or just test out new ideas
              with this free website.<br/>
              <code>
                <i>© 2022 TextUtils.com, Inc</i>
              </code>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

