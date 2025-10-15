
import Home from '@/components/Home'
import React from 'react'

// export const metadata = {
//   title: "Home",
//   robots: "noindex, nofollow", // 👈 prevents indexing
// };

export const metadata = {
  title: "Trekking India – Your Adventure Starts Here",
  description: "Explore Himalayan treks like Kedarkantha, Hampta Pass, and more – find your next trekking adventure!",
  openGraph: {
    title: "Trekking India – Your Adventure Starts Here",
    description: "Explore Himalayan treks like Kedarkantha, Hampta Pass, and more – find your next trekking adventure!",
    url: "https://trekkingindia.vercel.app",
    siteName: "Trekking India",
    images: [
      {
        url: "https://trekkingindia.vercel.app/images/home-og.jpg", // Use a real image path
        width: 1200,
        height: 630,
        alt: "Trekking India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trekking India – Your Adventure Starts Here",
    description: "Explore Himalayan treks like Kedarkantha, Hampta Pass, and more.",
    images: ["https://trekkingindia.vercel.app/images/home-og.jpg"],
  },
};


const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page
