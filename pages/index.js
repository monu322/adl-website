import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import VideoPlayerSection from "@/components/sections/VideoPlayer"
import Contact from "@/components/sections/contact"
import Banner1 from "@/components/sections/Banner1"
import Create1 from "@/components/sections/Create1"
import Faq1 from "@/components/sections/Faq1"
import Portfolio1 from "@/components/sections/Portfolio1"
import Project1 from "@/components/sections/Project1"
import Roadmap1 from "@/components/sections/Roadmap1"
import Speciality1 from "@/components/sections/Speciality1"
import Team1 from "@/components/sections/Team1"
import Testimonials2 from "@/components/sections/Testimonials2"


import Portfolio3 from "@/components/sections/Portfolio3"
import About4 from "@/components/sections/About4"
import Banner4 from "@/components/sections/Banner4"
import Portfolio2 from "@/components/sections/Portfolio2"
import Token2 from "@/components/sections/Token2"
import Testimonials4 from "@/components/sections/Testimonials4"
import How from "@/components/sections/How"
import Blog4 from "@/components/sections/Blog4"
import Faq4 from "@/components/sections/Faq4"
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