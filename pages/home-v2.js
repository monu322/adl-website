import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Blog2 from "@/components/sections/Blog2"
import Couter1 from "@/components/sections/Couter1"
import Faq2 from "@/components/sections/Faq2"
import Project2 from "@/components/sections/Project2"
import Roadmap2 from "@/components/sections/Roadmap2"
import Team2 from "@/components/sections/Team2"
import Testimonials2 from "@/components/sections/Testimonials2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Banner2 />
                <About2 />
                <Couter1 />
                <Project2 />
                <Roadmap2 />
                <Team2 />
                <Testimonials2 />
                <Faq2 />
                <Blog2 />
            </Layout>
        </>
    )
}