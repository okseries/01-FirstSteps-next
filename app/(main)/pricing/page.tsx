import React from 'react'

export const metadata = {
    title: 'Pricing',
    description: 'Pricing page',
    keywords: 'pricing, page',
    openGraph: {
        title: 'Pricing',
        description: 'Pricing page',
        url: 'https://example.com/pricing',
        siteName: 'Example',
        images: [
            {
                url: 'https://example.com/image.png',
                width: 800,
                height: 600,
                alt: 'Pricing Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

}

const PricingPage = () => {
  return (
    <div>
      PricingPage
    </div>
  )
}

export default PricingPage
