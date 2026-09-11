import './App.css'

import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'



function App() {
  return (

    /* เพิ่ม max-w-7xl และ mx-auto เพื่อจำกัดความกว้างในจอใหญ่ และจัดให้อยู่ตรงกลาง */
    <div className='max-w-7xl mx-auto flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-primarybg text-slate-200'>

      {/* ฝั่งซ้าย: แบ่งพื้นที่ 40% และเพิ่ม padding-right (lg:pr-10) เพื่อไม่ให้ข้อความชิดขอบขวา */}
      <div className='w-full lg:w-[30%] h-auto lg:h-full lg:pr-10'>
        <LeftSection />
      </div>

      {/* ฝั่งขวา: แบ่งพื้นที่ 60% และเพิ่ม padding-left (lg:pl-10) เพื่อเว้นระยะจากฝั่งซ้าย */}
      <div className='w-full lg:w-[70%] h-auto lg:h-full lg:overflow-y-auto scroll-smooth lg:pl-10'>
        <RightSection />
      </div>
    </div>

  )
}


export default App