import { useMission } from '@/components/StarTrekMission/useMission'
import { fireEvent, render, screen, renderHook, act } from '@testing-library/react'
import { StarTrekMission } from '@/components/StarTrekMission'

describe('Star Trek Mission', () => {
  it('should be able to verify count hook', async () => {
    const { result } = renderHook(useMission)
    act(() => {
      result.current.sendMission()
    })
    expect(result.current.missionCount).toBe(1)
  })

  it('should be able to render StarTrekMission and get one click', () => {
    render(<StarTrekMission />)
    fireEvent.click(screen.getByRole('button', { name: /send mission/i }))
    expect(screen.getByText(/missions sent: 1/i)).toBeDefined()
  })

  it('should be able to render StarTrekMission and get two clicks', () => {
    render(<StarTrekMission />)
    fireEvent.click(screen.getByRole('button', { name: /send mission/i }))
    fireEvent.click(screen.getByRole('button', { name: /send mission/i }))
    expect(screen.getByText(/missions sent: 2/i)).toBeDefined()
  })
})