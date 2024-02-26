import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
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
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} big>
                <Banner1 />
                <About1 />
                <Speciality1 />
                <Portfolio1 />
                {/* <Project1 /> */}
                <Roadmap1 />
                {/* <Team1 /> */}
                <Testimonials2 />
                {/*<Faq1 /> */}
                <Create1 />
                <Contact/>
            </Layout>
        </>
    )
}