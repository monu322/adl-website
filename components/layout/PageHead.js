import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "ADL Robotics - World's first  Robot Butler"}
                </title>
            </Head>
        </>
    )
}

export default PageHead