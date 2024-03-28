import React, { lazy, Suspense } from "react"
//import { Home, ServicePage, About, ContactPage, ProjectPage, ProjectDetailPage, ServiceDetailPage, OrtherServiceDetailPage, BookingService } from './page/index'
import { path } from './ultils/constant'
import { Route, Routes } from 'react-router-dom'
import { ContactBar, Footer, Navbar } from './component'

const Home = lazy(() => import('./page/index').then(module => {
  return { default: module.Home }
}))
const ServicePage = lazy(() => import('./page/index').then(module => {
  return { default: module.ServicePage }
}))
const About = lazy(() => import('./page/index').then(module => {
  return { default: module.About }
}))
const ContactPage = lazy(() => import('./page/index').then(module => {
  return { default: module.ContactPage }
}))
const ProjectPage = lazy(() => import('./page/index').then(module => {
  return { default: module.ProjectPage }
}))
const ProjectDetailPage = lazy(() => import('./page/index').then(module => {
  return { default: module.ProjectDetailPage }
}))
const ServiceDetailPage = lazy(() => import('./page/index').then(module => {
  return { default: module.ServiceDetailPage }
}))
const OrtherServiceDetailPage = lazy(() => import('./page/index').then(module => {
  return { default: module.OrtherServiceDetailPage }
}))
const BookingService = lazy(() => import('./page/index').then(module => {
  return { default: module.BookingService }
}))

function App() {
  const serviceList = [
    {
      id: 1,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-5.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-5.png',
      title: 'Quản trị Fanpage',
      sub: [
        'Quản lý Fanpage', 'Content', 'Facebook Ads'
      ]
    },
    {
      id: 2,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-1.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-1.png',
      title: 'Digital Marketing Tổng Thế',
      sub: [
        'Nghiên Cứu & Lập Kế Hoạch', 'Tư Vấn Chiến Lược', 'Truyền Thông Số Tích Hợp'
      ]
    },
    {
      id: 3,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-2.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-2.png',
      title: 'Quảng Cáo Facebook',
      sub: [
        'Gia Tăng Nhận Biết', 'Thu Hút Tương Tác', 'Thúc Đẩy Chuyển Đổi'
      ]
    },
    {
      id: 4,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-5.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-5.png',
      title: 'Quản trị Fanpage',
      sub: [
        'Quản lý Fanpage', 'Content', 'Facebook Ads'
      ]
    },
    {
      id: 5,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-1.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-1.png',
      title: 'Digital Marketing Tổng Thế',
      sub: [
        'Nghiên Cứu & Lập Kế Hoạch', 'Tư Vấn Chiến Lược', 'Truyền Thông Số Tích Hợp'
      ]
    },
    {
      id: 6,
      img: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/dich-vu-2.png',
      imgHover: 'https://agency.mauthemewp.com/wp-content/uploads/2021/09/hover-dich-vu-2.png',
      title: 'Quảng Cáo Facebook',
      sub: [
        'Gia Tăng Nhận Biết', 'Thu Hút Tương Tác', 'Thúc Đẩy Chuyển Đổi'
      ]
    },
  ]

  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 className="font-fontRoboto text-center text-green pt-24">Loading...</h1>}>
        <div className='pt-24'>
          <Routes>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.HOME2} element={<Home />} />
            <Route path={path.SERVICE} element={<ServicePage />} />
            <Route path={path.ABOUT} element={<About />} />
            <Route path={path.CONTACT} element={<ContactPage />} />
            <Route path={path.PROJECT} element={<ProjectPage />} />
            <Route path={path.PROJECTDETAIL} element={<ProjectDetailPage />} />
            <Route path={path.SERVICEDETAIL} element={<ServiceDetailPage />} />
            <Route path={path.SERVICE2DETAIL} element={<OrtherServiceDetailPage />} />
            <Route path={path.SERVICEBOOKING} element={<BookingService />} />
          </Routes>
        </div>
        <Footer serviceList={serviceList} />
      </Suspense >
      <ContactBar />
    </>
  )
}

export default App