import { useEnterprise } from '@/components/StarTrekEnterprise/useEnterprise'
import { render, screen, renderHook, waitFor } from '@testing-library/react'
import { StarTrekEnterprise } from '@/components/StarTrekEnterprise'

describe('Star Trek Enterprise', () => {
  it('should be able to verify hook loading data', async () => {
    const { result } = renderHook(useEnterprise)
    expect(result.current.isLoading).toBe(true)
    await waitFor(() => expect(result.current.isLoading).toBe(false), { timeout: 2100 })
    expect(result.current.enterpriseCrew[0]).toEqual('Picard')
  })

  it('should be able to render StarTrekEnterprise loading crew', async () => {
    render(<StarTrekEnterprise />)
    expect(screen.getByText('Loading crew information...')).toBeDefined()
    await waitFor(() => expect(screen.getByText('Picard')).toBeDefined(), { timeout: 2100 })
  })
})