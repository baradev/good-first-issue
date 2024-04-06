import db from './connection.js'

export async function getAllNames() {
  return await db('preferences').select()
}
console.log(await getAllNames())
