import React from 'react'

const blog = () => {
  return (
    <div className='container mx-auto text-center'>
      <div className='text-center text-3xl font-semibold '>
        <h1>BLOGs</h1>
        <div className='text-2xl text-gray-400'>In poverty many local NGOs helps people.</div>
        <div className='text-2xl text-gray-400'>Some of those NGOs are :- </div>

        <div className="bg-white h-1 opacity-25 mt-5"></div>

        <div className='flex justify-center mt-5'>
          <span><img className='rounded-2xl overflow-hidden shadow-[0px_0px_25px_10px_#718096] p-4' width={550} src='/ngo1.webp' alt='' /></span>
        </div>
      </div>
      <div className='mt-3 text-3xl'>
        <p> Akshaya Patra Foundation</p>
        <ul className='text-lg'>
          <li><strong>Focus: </strong>Mid-day Meal Program</li>
          <li><strong>Description: </strong>Established in 2000, this organization provides mid-day meals to school children. Their goal is to ensure that no child is deprived of education because of hunger.</li>
          <li><strong>Impact: </strong>Serves over 1.8 million children daily across 12 states.</li>
        </ul>
        <p className='text-2xl mt-2'>OFFICIAL WEBSITE :- 
          <a className='text-lg text-blue-500' href="https://www.akshayapatra.org/" target='_blank'><button className='hover:underline'>https://www.akshayapatra.org/</button></a>
        </p>
        <p className='text-xl mt-2 text-center'>The Akshaya Patra Foundation is a non-profit organization headquartered in Bengaluru, India. Established in 2000, its primary mission is to eliminate classroom hunger by implementing the Mid-Day Meal Scheme in government and government-aided schools. By providing nutritious meals, the foundation aims to improve children's health and education outcomes. Akshaya Patra operates one of the largest NGO-run school meal programs in the world, serving over 1.8 million children across 12 states in India. The organization is renowned for its efficient, scalable kitchen infrastructure and innovative use of technology in meal preparation and delivery.</p>
      </div>


      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className='mt-5 flex justify-center'>
        <span><img className='rounded-2xl overflow-hidden shadow-[0px_0px_25px_4px_#4299e1]' width={500} src='/ngo2.png' alt='' /></span>
      </div>

      <div className='mt-3 text-3xl'>
        <p> Smile Foundation</p>
        <ul className='text-lg'>
          <li><strong>Focus: </strong>Education, Healthcare, Livelihood</li>
          <li><strong>Description: </strong> Established in 2002, Smile Foundation works to improve the lives of underprivileged children, youth, and women. Their key areas include education, healthcare, and livelihood programs.</li>
          <li><strong>Impact: </strong>Reaches out to over 15 lakh (1.5 million) individuals annually across 25 states.</li>
        </ul>
        <p className='text-3xl mt-2'>OFFICIAL WEBSITE :-
        <a className='text-lg text-blue-500' href="https://www.smilefoundationindia.org/" target='_blank'><button className='hover:underline'>https://www.smilefoundationindia.org/</button></a>
        </p>
        <p className='text-xl mt-2 text-center'>Smile Foundation is a prominent non-governmental organization (NGO) in India, established in 2002. It focuses on various social development projects aimed at creating positive changes in the lives of underprivileged children, youth, and women. The foundation operates in areas such as education, healthcare, livelihood, and women empowerment.Smile Foundation has reached millions of beneficiaries across India through its various initiatives, working in collaboration with government agencies, corporate partners, and other NGOs. Its holistic approach addresses the root causes of poverty and social inequity, striving for sustainable development and empowerment of marginalized communities.</p>
      </div>

      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className='mt-5 flex justify-center'>
        <span><img className='rounded-2xl overflow-hidden shadow-[0px_0px_25px_4px_#2f855a]' width={500} src='/ngo3.png' alt='' /></span>
      </div>

      <div className='mt-3 text-3xl'>
        <p> Oxfam India</p>
        <ul className='text-lg'>
          <li><strong>Focus: </strong>Education, Healthcare, Livelihood</li>
          <li><strong>Description: </strong> Established in 2002, Smile Foundation works to improve the lives of underprivileged children, youth, and women. Their key areas include education, healthcare, and livelihood programs.</li>
          <li><strong>Impact: </strong>Reaches out to over 15 lakh (1.5 million) individuals annually across 25 states.</li>
        </ul>
        <p className='text-3xl mt-2'>OFFICIAL WEBSITE :-
        <a className='text-lg text-blue-500' href="https://www.oxfamindia.org/" target='_blank'><button className='hover:underline'>https://www.oxfamindia.org/</button></a>
        </p>
        <p className='text-xl mt-2 text-center'>Oxfam India is a branch of the international confederation Oxfam, a global movement of people working together to end the injustice of poverty. Established in 2008, Oxfam India focuses on various issues including economic justice, gender equality, essential services, humanitarian response, and advocacy. The organization operates in several states across India, implementing programs and campaigns aimed at improving education, healthcare, livelihoods, and disaster relief efforts. Oxfam India collaborates with grassroots organizations, government bodies, and international partners to drive systemic change and empower marginalized communities.</p>
      </div>

      <div className="bg-white h-1 opacity-25 mt-5"></div>

      <div className='text-2xl mt-4 text-red-600'>These NGOs are making significant strides in reducing poverty and improving the quality of life for millions of people in India. Their programs, advocacy, and on-the-ground efforts play a crucial role in addressing various facets of poverty, from education and health to women’s empowerment and disaster relief.</div>

    </div>
  )
}

export default blog
