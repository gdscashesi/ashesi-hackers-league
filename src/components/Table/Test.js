import React from 'react'
import Table from './table'

const headers = ["rank", "name", "algorithms", "scripting", "sql", "points"]

const teamScores = [
	{
		name: "Berekusu Warriors",
		algorithms: 21,
		scripting: 45,
		sql: 3,
	},
	{
		name: "Ashesi Ninjas",
		algorithms: 27,
		scripting: 9,
		sql: 6,
	},
	{
		name: "Crusading Coders",
		algorithms: 18,
		scripting: 1,
		sql: 0,
	}
];

function Test() {
  return (
    <div>
        <Table headers={headers} body={teamScores}/>
    </div>
  )
}

export default Test