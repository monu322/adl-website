import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner3 from "@/components/sections/Banner3"
import Blog3 from "@/components/sections/Blog3"
import Couter1 from "@/components/sections/Couter1"
import Faq3 from "@/components/sections/Faq3"
import Project3 from "@/components/sections/Project3"
import Roadmap2 from "@/components/sections/Roadmap2"
import Speciality2 from "@/components/sections/Speciality2"
import Team2 from "@/components/sections/Team2"
import Testimonials3 from "@/components/sections/Testimonials3"
import Token1 from "@/components/sections/Token1"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} big>
                <Banner3 />
                <About3 />
                <Token1 />
                <Project3 />
                <Roadmap2 />
                <Team2 />
                <Speciality2 />
                <Testimonials3 />
                <Couter1 />
                <Blog3 />
                <Faq3 />
            </Layout>
        </>
    )
}