/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('preferences').del()
  await knex('preferences').insert([
    { id: 1, name: 'TypeScript', type: 'Language' },
    { id: 2, name: 'Next.Js', type: 'Framework' },
    { id: 3, name: 'Tailwind', type: 'UI' },
  ])
}
