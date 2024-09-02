import React from 'react'

const Contact = ({contacts}) => {
  return (
    <>
    <ul>
      {contacts.map(el=>{
        return (
          <li key={el.id}>
            <p>{el.name}</p>
            <p>{el.number}</p>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default Contact