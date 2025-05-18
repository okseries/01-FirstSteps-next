import React from 'react'

export const metadata = {
    title: 'About',
    description: 'About page',
    keywords: 'About, page',
    openGraph: {
        title: 'About',
        description: 'About page',
        url: 'https://example.com/About',
        siteName: 'Example',
        images: [
            {
                url: 'https://example.com/image.png',
                width: 800,
                height: 600,
                alt: 'About Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

}

const AboutPage = () => {
  return (
    <div>
      AboutPage
    </div>
  )
}

export default AboutPage
