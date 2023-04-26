import React from 'react'

const Th = (props) => {
  const { data: headers ,isEditable} = props;

  return (
    <>
      {isEditable?<th></th>:null}
      <th></th>
      {headers?.map((header, index) => (
        <th key={index}>{header.fa}</th>
      ))}
    </>
  )
}

Th.defaultProps = {
  isEditable: false,
}

export default Th