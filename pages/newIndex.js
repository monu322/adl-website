import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Contact from "@/components/sections/contact"
import Banner4 from "@/components/sections/Banner4"
import Create1 from "@/components/sections/Create1"
import Portfolio2 from "@/components/sections/Portfolio2"
import Testimonials4 from "@/components/sections/Testimonials4"
import Token2 from "@/components/sections/Token2"
import How from "@/components/sections/How"
import Blog4 from "@/components/sections/Blog4"
import Faq4 from "@/components/sections/Faq4"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} big>
                <Banner4 />    
                <About4 />
                <Portfolio2 />
                <Token2/>
                <Testimonials4/>
                <How/>
                <Create1 />
                <Blog4/>
                <Faq4/>
                <Contact/>
            </Layout>
        </>
    )
}