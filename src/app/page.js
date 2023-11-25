import Image from 'next/image'
import styles from './page.module.css'
import Announcement from '@/components/announcement/Announcement'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import FeatureBrands from '@/components/featuredBrands/FeatureBrands'

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Banner />
      <FeatureBrands />
    </div>
  )
}
