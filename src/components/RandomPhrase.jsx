import React from "react";

const RandomPhrase = ({quote}) => {

  const {author, phrase} = quote;
  return (
    <div>
        <p className="frase">{phrase}</p>
        <p className="author">fuente:{author}</p>
    </div>
  )
}

export default RandomPhrase;