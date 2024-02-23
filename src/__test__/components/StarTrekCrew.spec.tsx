import { StarTrekCrew } from '@/components/StarTrekCrew'
import { useCrew } from '@/components/StarTrekCrew/useCrew'
import { fireEvent, render, screen, renderHook, act } from '@testing-library/react'

describe('Star Trek Crew', () => {
  it('should be able to verify count', () => {
    const { result } = renderHook(useCrew)
    expect(result.current.totalCrewCount).toBe(6)
  })

  it('should be able to verify count after add one item', () => {
    const { result } = renderHook(useCrew)
    act(() => {
      result.current.setEnterpriseCrew([...result.current.enterpriseCrew, 'Worf'])
    })
    expect(result.current.totalCrewCount).toBe(7)
  })

  it('should be able to verify count after add two items', () => {
    const { result } = renderHook(useCrew)
    act(() => {
      result.current.setEnterpriseCrew([...result.current.enterpriseCrew, 'Worf'])
      result.current.setVoyagerCrew([...result.current.voyagerCrew, 'Seven of Nine'])
    })
    expect(result.current.totalCrewCount).toBe(8)
  })

  it('should be able to render StarTrekCrew and add worf to enterprise', () => {
    render(<StarTrekCrew />)
    expect(screen.getByText(/total crew count: 6/i)).toBeDefined()
    fireEvent.click(screen.getByRole('button', { name: /add worf to enterprise/i }))
    expect(screen.getByText(/total crew count: 7/i)).toBeDefined()
  })
})