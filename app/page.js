import { signIn } from "next-auth/react";
import Link from "next/link"; 

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white items-center h-[24vh] flex-col">
        <div className="mt-16 hover:scale-110 transition-all delay-75"><span className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 "><img width={500} src="/pg.png" alt="" /></span></div>
      </div>

      <div className="flex mt-16 justify-center text-gray-300 text-xl items-center ml-96">
        <div className="sm:w-[50%] w-[80%] sm:mr-[500px] mr-[33rem]">
          Poverty generally refers to a state or condition where individuals or communities lack the financial resources or basic necessities to meet their basic needs for food, clothing, and shelter. It can encompass various dimensions beyond just income, such as lack of access to education, healthcare, clean water, and sanitation. Poverty can be absolute, meaning severe deprivation of basic human needs, or relative, where people are significantly worse off compared to the general standard of living in their society.
        </div>
      </div>

      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className="text-white container mx-auto block pr-[100px]">
        <h1 className="font-medium text-4xl text-center mt-5 text-gray-400">SITUATION</h1>
        <div className="flex gap-2 justify-around my-10">

          <div className="pics space-y-4 flex flex-col justify-center items-center w-[50%] border border-gray-400 p-3 rounded-3xl bg-gray-950 hover:scale-110 transition-all delay-75">
            <img width={300} src="pic1.jpg" alt="" />
            <p>As of the most recent data, countries in Sub-Saharan Africa often have the highest poverty rates in the world.</p>
            <p>Approximately 70% of the population lives below the international poverty line of $1.90 per day.</p>
            <p>South Sudan: The poverty rate is around 82%, with many people facing food insecurity and lack of basic services.</p>
          </div>

          <div className="pics space-y-4 flex flex-col justify-center items-center w-[50%] border border-gray-400 p-3 rounded-3xl bg-gray-950 hover:scale-110 transition-all delay-75">
            <img width={350} src="pic2.png" alt="" />
            <p>The World Bank is a primary source. According to the World Bank, here is some recent data:</p>
            <p>Extreme Poverty: As of 2021, about 9.2% of the world's population lives on less than $1.90 a day.</p>
            <p>Moderate Poverty: About 24.1% of the global population lives on less than $3.20 a day.</p>
          </div>

          <div className="pics space-y-4 flex flex-col justify-center items-center w-[50%] border border-gray-400 p-3 rounded-3xl bg-gray-950 hover:scale-110 transition-all delay-75">
            <img width={250} src="pic3.png" alt="" />
            <p>Several factors contribute to the increase in poverty globally. Here are some key ones:</p>
            <p>Unemployment and Underemployment: Lack of jobs or jobs that do not pay a living wage can drive people into poverty.</p>
            <p>Corruption: Mismanagement of resources and corruption can prevent economic growth and equitable distribution of wealth.</p>
            <p>Natural Disasters: Events like floods, hurricanes, and droughts can destroy homes, infrastructure, and livelihoods.</p>
          </div>
        </div>

      </div>


      <div className="flex items-center container mx-auto justify-center">
     
        <Link href={"/readme"}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 brightness-75 hover:brightness-110 transition-all delay-100 hover:scale-125">Login to Read More</button>
        </Link>
      </div>

    </>
  );
}
