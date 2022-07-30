import React from 'react'
import { getOrdinary } from './functions'

const Test = () => {
  return (
    <><div>{getOrdinary(15)}</div>
    <div>{getOrdinary(155)}</div>
    <div>{getOrdinary(111)}</div>
    <div>{getOrdinary(116)}</div>
    <div>{getOrdinary(1)}</div>
    <div>{getOrdinary(3)}</div>
    <div>{getOrdinary(2)}</div>
    <div>{getOrdinary(23)}</div></>
  )
}

export default Test