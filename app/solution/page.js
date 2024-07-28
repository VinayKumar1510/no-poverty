import React from 'react'

const solution = () => {
  return (
    <>

      <div className='text-4xl items-center text-center font-sans underline decoration-blue-500 decoration-wavy'>
        <h1>SOLUTION OF POVERTY</h1>
      </div>
      <div className='flex gap-5 justify-center mt-5'>
        <span>
          <img width={400} className='felx h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src="/solution.jpg" alt="" />
        </span>
        <span>
          <img width={270} className='flex h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src="/solution2.png" alt="" />
        </span>
      </div>

      <div className='main flex'>
        <div className='info text-center text-xl p-3 leading-loose w-[40%] container mx-auto'>
          <p>Addressing poverty requires a multifaceted approach, as it is a complex issue influenced by various economic, social, and political factors. Here are several solutions that can contribute to alleviating poverty:</p>
        </div>
      </div>

      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className='justify-center container mx-auto'>
        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Economic Growth and Job Creation</h1>
          <ul className='text-gray-300'>
            <li>1. Inclusive Economic Growth: Ensuring that economic growth benefits all sections of society, particularly the poor, can create more opportunities and reduce poverty.</li>
            <li>2. Job Creation: Developing sectors that can provide employment to large numbers of people, such as manufacturing, services, and agriculture.</li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Education and Skills Development</h1>
          <ul className="text-gray-300">
            <li>1. Access to Quality Education: Providing free or affordable education to children and adults can break the cycle of poverty by improving employment prospects.</li>
            <li>2. Vocational Training: Offering vocational and technical training to equip individuals with skills relevant to the job market.
            </li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Healthcare Access</h1>
          <ul className='text-gray-300'>
            <li>1. Universal Healthcare: Implementing healthcare systems that provide affordable and accessible medical services to all can prevent impoverishment due to medical expenses.</li>
            <li>2. Preventive Care: Focusing on preventive healthcare to reduce the incidence of diseases that can lead to financial hardship.
            </li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Social Protection Programs</h1>
          <ul className='text-gray-300'>
            <li>1. Social Safety Nets: Establishing programs such as unemployment benefits, disability pensions, and food assistance can provide a buffer against poverty.</li>
            <li>2. Conditional Cash Transfers: Providing financial assistance to low-income families contingent on actions like children attending school and getting vaccinated.</li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Economic Policies</h1>
          <ul className='text-gray-300'>
            <li>1. Fair Wages: Ensuring that minimum wage laws are enforced and that wages are sufficient to meet basic living costs.</li>
            <li>2. Tax Policies: Implementing progressive tax systems where the wealthy contribute a fair share to fund public services and welfare programs.</li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Infrastructure Development</h1>
          <ul className='text-gray-300'>
            <li>1. Access to Basic Services: Investing in infrastructure to ensure access to clean water, sanitation, electricity, and transportation can improve living conditions and economic opportunities.</li>
            <li>2. Affordable Housing: Developing housing policies that provide affordable living options to low-income families.</li>
          </ul>
        </div>

        <div className='text-center text-xl mt-3'>
          <h1 className='font-bold text-center text-3xl'>Empowerment and Inclusion</h1>
          <ul className='text-gray-300'>
            <li>1. Gender Equality: Promoting gender equality and empowering women through education, employment, and legal rights can significantly reduce poverty.</li>
            <li>2. Community Development: Encouraging community-driven development projects that involve local people in decision-making and implementation processes.</li>
          </ul>
        </div>
      </div>

      <div className='text-xl font-semibold text-orange-500 mt-5'>Implementing these solutions requires coordinated efforts from governments, non-governmental organizations, the private sector, and international bodies. Each solution should be tailored to the specific context and needs of the communities it aims to serve.</div>

    </>
  )
}

export default solution
