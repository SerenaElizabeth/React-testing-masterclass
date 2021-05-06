import React from 'react'
import { axe } from 'jest-axe'
import { getByAltText, render } from '@testing-library/react'
import ProductTile from '../../../components/ProductTile'

const testProps = {
  id: 12,
  name: 'Test Name',
  price: '$12.99',
  image: '/image.png',
  brand: 'Test Brand',
  createdAt: '2020-02-11 00:00:00',
  isActive: true,
}

describe('The <ProductTile /> component', () => {
  it('renders a product tile with name, image and price', () => {
    //render the product tile
    //as any tells typescript that we don't need to pass in all the props
    const { getByText, getByAltText } = render(
      <ProductTile {...(testProps as any)} />,
    )

    //expect element with name 'Test Name' to be in the doc
    expect(getByText(testProps.name)).toBeInTheDocument()
    expect(getByText(testProps.price)).toBeInTheDocument()
    expect(getByAltText(testProps.name)).toBeInTheDocument()
  })

  it('renders a product tile with name and price only', () => {
    //render a product tile with no image as a prop
    const { queryByAltText } = render(
      <ProductTile {...({ ...testProps, image: undefined } as any)} />,
    )
    //we are expecting the alt text for the image to be null because the image is condiionally rendered
    expect(queryByAltText(testProps.name)).toBeNull()
  })
})
