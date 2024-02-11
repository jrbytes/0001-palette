import { render, screen } from '@testing-library/react'
import { ConditionalRendering } from '@/components/ConditionalRendering'

describe('ConditionalRendering', () => {
  it('should be able to render the first image', () => {
    render(ConditionalRendering({ spaceshipPicture: '1' }))
    const text = 'Nave espacial no planeta'
    expect(screen.getByRole('img', { name: text })).toBeDefined()
    expect(screen.getByText(text)).toBeDefined()
  })

  it('should be able to render the second image', () => {
    render(ConditionalRendering({ spaceshipPicture: '2' }))
    const text = 'Foto vintage de nave espacial'
    expect(screen.getByRole('img', { name: text })).toBeDefined()
    expect(screen.getByText(text)).toBeDefined()
  })
})