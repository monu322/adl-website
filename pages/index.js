import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Home-v1/contact"
import Create1 from "@/components/sections/Home-v1/Create1"
import Portfolio1 from "@/components/sections/Home-v1/Portfolio1"
import Speciality1 from "@/components/sections/Home-v1/Speciality1"

import Portfolio3 from "@/components/sections/Home-v1/Portfolio3"
import About4 from "@/components/sections/Home-v1/About4"
import Banner4 from "@/components/sections/Home-v1/Banner4"
import Token2 from "@/components/sections/Home-v1/Token2"
import Testimonials4 from "@/components/sections/Home-v1/Testimonials4"
import How from "@/components/sections/Home-v1/How"
import Blog4 from "@/components/sections/Home-v1/Blog4"
import Faq4 from "@/components/sections/Home-v1/Faq4"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} big>
                <Banner4 />
                <About4 />
                
                <Portfolio3/>
                <Speciality1 />
                <Portfolio1 />
                {/* <Portfolio2 /> */}
                <Token2/>
                {/* <Project1 /> */}
                {/* <Roadmap1 /> */}
                {/* <Team1 /> */}
                <Testimonials4 />
                <How/>
                {/*<Faq1 /> */}
                <Create1 />
                <Blog4/>
                <Faq4/>
                <Contact/>
            </Layout>
        </>
    )
}