import Image from 'next/image'
import styles from './page.module.css'
import Announcement from '@/components/announcement/Announcement'
import Navbar from '@/components/navbar/Navbar'
import FeatureBrands from '@/components/featuredBrands/FeatureBrands'
import BannerComponent from '@/components/banner/BannerComponent'

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <BannerComponent />
      <FeatureBrands />
    </div>
  )
}
