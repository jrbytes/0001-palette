import { render, screen } from '@testing-library/react'
import { ListsAndKeys, ListsAndKeysProps } from '@/components/ListsAndKeys'

const data: ListsAndKeysProps = {
  users: [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Doe', role: 'Designer' }
  ]
}

describe('ListsAndKeys', () => {
  it.each(data.users)('should be able to render the list %s', (user) => {
    render(ListsAndKeys(data))
    expect(screen.getByRole('listitem', { name: user.name })).toBeDefined()
  })
})