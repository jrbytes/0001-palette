import { render, screen } from '@testing-library/react'
import { ComponentsAndProps } from '@/components/ComponentsAndProps'
import male from '@/assets/male.jpg'
import Image from 'next/image'

describe('ComponentsAndProps', () => {
  it('should be able to render', () => {
    render(
      <ComponentsAndProps
        id='1'
        firstName='Elijah'
        age='31'
        location='earth'
        beverage='coffee'
        image={<Image src={male} alt='Elijah' width={300} height={200} style={{ objectFit: 'cover' }} />}
      />
    )
    expect(screen.getByText(/elijah/i)).toBeDefined()
    expect(screen.getByText(/31/i)).toBeDefined()
    expect(screen.getByText(/earth/i)).toBeDefined()
    expect(screen.getByText(/coffee/i)).toBeDefined()
  })
})