import { useIsLoading } from '@/components/AsyncButton/isLoading'
import { fireEvent, render, waitFor, screen, renderHook, act } from '@testing-library/react'
import { AsyncButton } from '@/components/AsyncButton'

describe('AsyncButton', () => {
  it('should be able to render isLoading', async () => {
    const { result } = renderHook(useIsLoading)
    act(() => {
      result.current.simulateAPI()
    })
    expect(result.current.isLoading).toBe(true)
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    }, { timeout: 3000 })
  })

  it('should be able to render AsyncButton', () => {
    render(<AsyncButton />)
    fireEvent.click(screen.getByRole('button', { name: /click me!/i }))
    expect(screen.getByRole('button', { name: /loading.../i })).toBeDefined()
  })
})