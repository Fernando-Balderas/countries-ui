import React from 'react'
import { render } from '@testing-library/react'
import Footer from 'components/Footer'

test('renders footer', () => {
  const { getByText } = render(<Footer />)
  const element = getByText(/2022 Fernando Balderas/i)
  expect(element).toBeInTheDocument()
})
