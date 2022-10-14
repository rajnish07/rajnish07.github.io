import { Link } from 'react-router-dom';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
function Hero(){
    const [text, count] = useTypewriter({
        words:[
            "Hi, I'm Rajnish Giri",
            "I'm a Frontend Developer"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img src='small.jpg' alt='' className='relative rounded-full h-32 w-32 object-cover'/>
        <div className='z-20'>
            <h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1> 
        <div className='pt-5'>
            <Link to='#about' ><button className='heroButton '>About</button></Link>
            <Link to='#experience' ><button className='heroButton '>Experience</button></Link>
            <Link to='#skills' ><button className='heroButton '>Skills</button></Link>
            <Link to='#projects' ><button className='heroButton '>Projects</button></Link>
        </div>
        </div>   
    </div>
}

export default Hero;