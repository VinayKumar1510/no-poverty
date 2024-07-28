import React from 'react'
import Link from 'next/link'

const about = () => {
    return (

        <>
            <div className='sm:flex block text-gray-300'>
                <div className='images h-[150px] sm:h-[300px] border border-red-600 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] hover:scale-110 transition-all delay-75'>
                    <span><img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' width={450} src='/povertysituation.webp' alt='' /></span>
                </div>
                <div className='info sm:w-[60%] container mx-auto text-xl space-y-8'>
                    <p>
                        The global poverty situation is complex and multifaceted, influenced by a variety of economic, social, and political factors. Here's an overview of the current state of global poverty:
                    </p>

                    <p className='font-bold text-4xl'>Key Statistics</p>

                    <ul className='space-y-3'>
                        <li className='font-semibold'>1. Extreme Poverty:</li>

                        <li> As of recent estimates, around 9.2% of the world's population lives in extreme poverty, which is defined as living on less than $1.90 per day. This figure has declined significantly from 36% in 1990.</li>

                        <li className='font-semibold'>2.Global Inequality:</li>

                        <li> Despite progress, significant disparities exist between regions. Sub-Saharan Africa and South Asia have the highest rates of extreme poverty.</li>

                        <li className='font-semibold'>3. Impact of COVID-19:</li>

                        <li>The pandemic has reversed some of the progress made in poverty reduction. The World Bank estimates that the pandemic pushed an additional 97 million people into extreme poverty in 2020.
                        </li>

                    </ul>
                </div>


            </div>


            <div className='font-bold text-5xl mt-8 p-4 text-center'>Causes</div>

            <div className='sm:flex block text-gray-300 m p-10'>
                <div className='shadow-[0px_20px_20px_10px_#742a2a] border border-red-950 sm:h-[300px] h-[150px] '>
                    <span><img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' width={450} src='/situation2.jpg' alt='' /></span>
                </div>

                <div className='info sm:w-[60%] text-xl container mx-auto space-y-4 w-[300px]'>
                    <p className='mt-[60px]'>Poverty is driven by a complex interplay of economic, social, political, and environmental factors. Economically, unemployment, underemployment, and limited access to markets hinder individuals from earning sufficient income, while economic instability and high debt levels exacerbate financial vulnerability. Social factors, such as inadequate access to quality education and healthcare, discrimination, and family dynamics, further entrench poverty by limiting opportunities for advancement. Politically, poor governance, corruption, and ongoing conflicts disrupt societal stability and divert resources away from development initiatives. Environmentally, natural disasters and the adverse effects of climate change can devastate communities, particularly those dependent on agriculture, leading to loss of livelihoods and increased poverty. These factors often reinforce each other, creating a persistent cycle of poverty that requires multifaceted and sustainable interventions to address effectively .</p>
                </div>
            </div>

            <div className="bg-white h-1 opacity-25 mt-8"></div>


            <div className='text-4xl items-center text-center font-bold p-3'>Data Of Poverty</div>

            <div className='mt-5 columns-2 container mx-auto border border-gray-600 gap-8 p-4 hover:shadow-[0px_0px_23px_8px_#9c4221]'>
                <div>
                    <span><img className='shadow-[0px_4px_100px_10px_#b83280] border border-black hover:scale-110 transition-all delay-75' width={800} src='/data.jpg' alt='' /></span>
                </div>

                <div className='font-semibold text-xl mt-4 p-5'>
                    <p className='text-2xl '>TREND:</p>

                    <ul className='text-gray-300'>
                        <li>The chart shows a consistent decline in the poverty rate in India over the past decade.</li>
                        <li>In 2013, the poverty rate was approximately 21.9%.</li>
                        <li>By 2023, the poverty rate had decreased to about 14.0%.</li>
                    </ul>

                    <p className='mt-5 text-2xl'>Observations:</p>

                    <ul className='text-gray-300'>
                        <p>1. Decline in Poverty Rate:</p>

                        <li>The data indicates a steady reduction in the poverty rate each year, reflecting positive economic and social developments.</li>
                        <li>The most significant drops in the poverty rate are observed between 2013-2015 and 2021-2023.</li>

                        <p>2. Economic Improvements:</p>
                        <li>This trend suggests improvements in economic conditions, potentially due to economic growth, poverty alleviation programs, and better access to education and healthcare.</li>
                        <li>Policies and initiatives aimed at improving the standard of living and income levels might have contributed to this decline.</li>

                    </ul>

                    <div className='text-red-700'>This chart provides a clear visual representation of the progress made in reducing poverty levels in India, illustrating the effectiveness of various economic and social policies over the past decade.</div>

                </div>

                <div>
                    <span><img className='invert shadow-[0px_4px_100px_10px_#b83280] border border-red-950 hover:scale-110 transition-all delay-75' width={800} src='/data2.jpg' alt='' /></span>
                </div>

                <div className='font-semibold text-xl mt-4'>
                    <p className='text-2xl '>TREND:</p>

                    <ul className='text-gray-300'>
                        <li>The chart shows a declining trend in the poverty rate in Haryana over the past decade.</li>
                        <li>In 2013, the poverty rate was around 16.5%.</li>
                        <li>By 2023, the poverty rate had decreased to approximately 10.0%.</li>
                    </ul>

                    <p className='mt-5 text-2xl'>Observations:</p>

                    <ul className='text-gray-300'>
                        <p>1. Consistent Decline:</p>

                        <li>There is a consistent year-on-year decline in the poverty rate, indicating an overall improvement in economic conditions in Haryana.</li>
                        <li>The most significant drop is observed between 2013 and 2015, where the poverty rate decreased from 16.5% to 14.4%.</li>

                        <p>2. Economic Growth and Policies:</p>
                        <li>The steady decrease suggests that economic growth and policies aimed at poverty reduction have been effective.</li>
                        <li>Improvements in infrastructure, education, and healthcare might have contributed to the reduction in poverty.</li>

                        <p>3. Sustained Efforts:</p>
                        <li>The gradual decline highlights sustained efforts and a focus on long-term strategies to combat poverty.</li>
                        <li>The trend suggests that Haryana has been successful in maintaining a trajectory of poverty reduction despite potential economic challenges.</li>

                    </ul>

                    <div className='text-red-700'>This chart provides a clear visual representation of the progress made in reducing poverty levels in Haryana over the past decade, showcasing the effectiveness of various economic and social policies​</div>

                </div>


            </div>

            <div className='text-3xl font-bold text-center text-gray-400'>Click here to know how to solve poverty</div>

            <div className="flex justify-center items-center mt-4">

                <div className="relative inline-flex">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <Link href={"/solution"} className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-110 delay-75" role="button">SOLUTION
                    </Link>
                </div>
            </div>
        </>

    )
}

export default about
