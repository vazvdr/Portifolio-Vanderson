import { render, screen } from '@testing-library/react'
import Footer from '../Pages/Footer'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Footer component', () => {
  it('deve renderizar corretamente', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('deve exibir o ano atual', () => {
    const currentYear = new Date().getFullYear()
    render(<Footer />)
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument()
  })

  it('deve conter o texto completo de copyright', () => {
    const currentYear = new Date().getFullYear()
    const expectedText = `Copyright © ${currentYear} by Vanderson de Azevedo. All rights reserved.`
    render(<Footer />)
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it('deve conter uma linha decorativa com a classe "header-line"', () => {
    const { container } = render(<Footer />)
    const line = container.querySelector('.header-line')
    expect(line).toBeTruthy()
    expect(line?.className).toContain('header-line')
  })

  it('deve conter as classes "text-center" e "mt-[4%]" no footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('text-center')
    expect(footer.className).toContain('mt-[4%]')
  })
})
