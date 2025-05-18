import React from 'react'

export const metadata = {
    title: 'Contact',
    description: 'Contact page',
    kewords: 'contact, page',
    openGraph: {
        title: 'Contact',
        description: 'Contact page',
        url: 'https://example.com/contact',
        siteName: 'Example',
        images: [
            {
                url: 'https://example.com/image.png',
                width: 800,
                height: 600,
                alt: 'Contact Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

}

const ContactPage = () => {
  return (
    <div>
      Nuevo contacto
    </div>
  )
}

export default ContactPage
