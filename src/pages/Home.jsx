import React from 'react'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import CurvedLoop from '../components/CurvedLoop';
        import FlowingMenu from '../components/FlowingMenu'

function Home() {
    
const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
  return (
    <div id="home">
      <Loader/>
      <section id="about" className="w-full px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full flex flex-col items-start justify-center">
          <h2 className="font-[PhatBoy] text-4xl md:text-6xl text-blue-900 mb-6">About</h2>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed">
            Experience lightning-fast loading, deeper immersion, and stunning games on the PlayStation 5 console. Powered by a custom CPU, GPU, and SSD, the PS5 delivers breathtaking graphics and a new level of performance. Enjoy haptic feedback, adaptive triggers, and 3D Audio technology for a truly next-gen gaming experience.
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-blue-800 mb-6">
            <li>Ultra-high speed SSD for instant load times</li>
            <li>Ray tracing for realistic lighting and shadows</li>
            <li>4K gaming and up to 120Hz refresh rate</li>
            <li>DualSense wireless controller with haptic feedback</li>
            <li>Exclusive games and PlayStation Studios titles</li>
          </ul>
          <a href="/earn-more" className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white rounded-full font-bold shadow-lg hover:bg-blue-900 transition-colors">Learn More</a>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src="https://www.bing.com/th/id/OIP.zvlPVs9P6x95zDChZk-kMAHaFj?w=254&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="PS5 Console" className="w-full max-w-md rounded-xl shadow-xl object-contain" />
        </div>
      </div>
    </section>
      <section  className='w-full'>
        <CurvedLoop 
          marqueeText="Sale ✦ 50% ✦ Sale ✦ 50% ✦ Sale ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className=" !text-black"
        />
      </section>
    <Footer/>
    </div>
  )
}

export default Home