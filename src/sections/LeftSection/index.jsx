// LeftSection.jsx
import Header from "../Header"
import Navbar from "../Navbar"
import Contact from "../Contact"

const LeftSection = () => {
    return (
        /* จอเล็ก: h-auto + gap-6 (เรียงต่อกันชิดๆ กระชับ) 
           จอใหญ่ (lg): lg:h-full + lg:justify-between (ยืดเต็มฝั่งซ้ายและกระจายพื้นที่) */
        <div className='flex flex-col gap-6 h-auto lg:h-full lg:justify-between pb-5 px-4'>
            
            {/* รวม Header กับ Navbar ไว้ด้วยกัน */}
            <div>
                <Header />
                
                {/* ซ่อน Navbar ในจอเล็กด้วย hidden และโชว์เฉพาะจอใหญ่ด้วย lg:block */}
                <div className='hidden lg:block mt-8'>
                    <Navbar />
                </div>
            </div>

            {/* Contact จะขยับขึ้นมาอยู่ต่อจาก Header ในจอเล็กทันที ไม่โดนดันไปล่างสุด */}
            <Contact />
            
        </div>
    )
}

export default LeftSection