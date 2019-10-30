import React from "react"

export default ({ src }) => (
  <div
    style={{
      boxShadow: `3px 3px 6px -5px rgba(0,0,0,0.75)`,
      border: `solid 1px`,
      background: `url(https://res.cloudinary.com/guayo/image/upload/v1572459895/slides/loader.gif) #fff center center no-repeat`
    }}
  >
    <iframe
      title="I frame"
      src={src}
      width="700px"
      height="400px"
      style={{
        margin: 0,
        padding: 0,
        border: `none`,
        display: `block`
      }}
    />
  </div>
);