import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Home-v2/contact"
import Create1 from "@/components/sections/Home-v2/Create1"
import Portfolio1 from "@/components/sections/Home-v2/Portfolio1"
import Speciality1 from "@/components/sections/Home-v2/Speciality1"

import Portfolio3 from "@/components/sections/Home-v2/Portfolio3"
import About4 from "@/components/sections/Home-v2/About4"
import Banner4 from "@/components/sections/Home-v2/Banner4"
import Token2 from "@/components/sections/Home-v2/Token2"
import Testimonials4 from "@/components/sections/Home-v2/Testimonials4"
import How from "@/components/sections/Home-v2/How"
import Blog4 from "@/components/sections/Home-v2/Blog4"
import Faq4 from "@/components/sections/Home-v2/Faq4"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} big>
                <Banner4 />
                <About4 />
                
                <Portfolio3/>
                {/* <Speciality1 /> */}
                {/* <Portfolio1 /> */}
               
                <Token2/>
       
                <Testimonials4 />
                <How/>
               
                <Create1 />
                <Blog4/>
                <Faq4/>
                <Contact/>
            </Layout>
        </>
    )
}