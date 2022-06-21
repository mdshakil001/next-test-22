import '../styles/globals.css'

import { NextSeo } from "next-seo";

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <>
      <NextSeo
        title="My Healthcare Collective"
        titleTemplate='My Healthcare Collective | %s'
        defaultTitle='My Healthcare Collective'
        description="My Healthcare Collective is a platform for healthcare providers to connect with patients and get the best care possible."
        author="My Healthcare Collective"
        googleSiteVerification="1zHPMW_rQwOzL34pjRisHVkbGxm4KTPJvo1AnFy4S5M"
        site_name="My Healthcare Collective"
        charset="UTF-8"
        languageAlternates={[
          {
            "locale": "en",
            "content": "My Healthcare Collective",
          }
        ]}
        canonical="https://myhealthcarecollective.com"
        keywords={[
          'healthcare',
          'collective',
          'platform',
          'provider',
          'patient',
          'care',
        ]}
        viewPort="width=device-width, initial-scale=1.0"
        theme={{
          colors: {
            primary: '#F58232',
            secondary: '#91C9E3',
          },
        }}
        robotsProps={{
          index: true,
          follow: true,
        }}
        openGraph={{
          url: 'https://myhealthcarecollective.com',
          title: 'My Healthcare Collective',
          description: 'My Healthcare Collective is a platform for healthcare providers to connect with patients and get the best care possible.',
          locale: 'en_SG',
          images: [
            {
              url: '/public/assets/images/logo_primary.webp',
              width: 650,
              height: 234,
              alt: 'My Healthcare Collective',
            },
          ],
          site_name: 'My Healthcare Collective',
        }}
        // twitter={{
        //   handle: '@myhealthcarecollective',
        //   site: '@myhealthcarecollective',
        //   cardType: 'summary_large_image',
        // }}
        // facebook={{
        //   appId: '',
        // }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
