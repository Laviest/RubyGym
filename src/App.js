import Info from "./Info";
import MaCards from "./MaCards";
import Navbar from "./Navbar";
import React, {useRef} from 'react';

function App() {

  const classes_w = useRef()
  const classes_w1 = useRef()

  return (
    <div>
      <Navbar/>
      <div className="2xl:flex 2xl:ml-32 2xl:mr-32 ml-0 mr-0 m-div">
        <img className="m-img-w 2xl:mt-5 mt-16 ml-20 mr-0 " src="./images/barbell-curl-f.png"/>
        <div className=" w-full">
          <h1 className="2xl:text-6xl font-bold text-white 2xl:mt-72 2xl:mr-5 text-9xl mt-16 text-center">Unlock your fullest potential</h1>
          <h1 className="text-white 2xl:text-2xl 2xl:mt-8 text-6xl mt-12 sm:text-center">Join us now for 20% off of your first purchase!</h1>
          <div className="button-center">
            <button className="text-white 2xl:text-xl bg-red-main 2xl:pl-12 2xl:pr-12 2xl:pt-3 2xl:pb-3 rounded 2xl:mt-4 font-bold
                            text-6xl pl-12 pr-12 sm:pr-16 sm:pl-16 pt-6 pb-6 sm:rounded-xl mt-12">JOIN NOW</button>
          </div>
        </div>
        <img className="m-img-w 2xl:mt-5 sm:hidden" src="./images/barbell-curl-f.png"/>
      </div>
      <div className="bg-red-main 2xl:h-64 sm:mt-16 m-div">
        <h1 className="text-center text-white 2xl:text-4xl font-bold 2xl:pt-10 text-6xl pt-14">MORE THAN JUST A GYM</h1>
        <h1 className="text-center text-white 2xl:text-2xl 2xl:pt-5 2xl:ml-52 2xl:mr-52 text-5xl ml-16 mr-16 mt-10 pb-14">We are a community—a family of like-minded individuals who share a passion for personal growth and well-being. 
          Together, we create an environment that fosters support, encouragement, and camaraderie. Whether you're a seasoned athlete or taking your first 
          steps on your fitness journey, you'll find a welcoming space that celebrates every achievement, big or small.</h1>
      </div>

      <div className="lg:flex lg:space-x mt-32 absolute z-minus m-div">
        <div className="classes-w ml-60" ref={classes_w}>
          <img src="./images/classes2-c2.jpg" />
        </div>
        <div className="classes-w ml-60 mt-20" ref={classes_w1}>
          <img src="./images/personal-trainer-c2.jpg"/>
        </div>
      </div>
      <div className="lg:flex lg:space-x lg:mt-24 m-div">
        <div className="img-c mt-56 hover:cursor-pointer bg-none ml-60 w-6/12"
         onMouseEnter={() => classes_w.current.classList.add('zoom-in')} onMouseLeave={() => classes_w.current.classList.remove('zoom-in')}>
          <h1 className="text-white xl:text-6xl text-7xl text-center font-bold">Group Fitness Classes</h1>
          <h1 className="text-white xl:text-4xl text-25rem text-center mt-10 ml-12 mr-12 font-medium">Ignite your fitness journey with our exhilarating group classes, where the power of community fuels your motivation and transforms your workouts into epic adventures.</h1>
        </div>

        <div className="img-c xl:mt-48 mt-32 hover:cursor-pointer bg-none ml-60 w-6/12"
        onMouseEnter={() => classes_w1.current.classList.add('zoom-in')} onMouseLeave={() => classes_w1.current.classList.remove('zoom-in')}>
          <h1 className="text-white xl:text-6xl text-7xl text-center font-bold">Personal Training Services</h1>
          <h1 className="text-white xl:text-4xl text-25rem text-center mt-5 ml-10 mr-10 font-medium">Embark on a transformative fitness journey with the unwavering support and expertise of our dedicated personal trainers. Beyond just guiding your workouts, they are your mentors, cheerleaders, and confidants, empowering you to surpass your limits and achieve greatness.</h1>
        </div>
      </div>

      <div className="mt-40 xl:flex">
        <img src="./images/treadmill3.png" className="xl:w-12/12 xl:h-12/12 w-treadmil"/>
        <div className="grid justify-center grid-cols-2 grid-rows-2 gap-x-96 gap-y-16 ml-16 mt-32">
          <Info header="Equipment" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          <Info header="Clean Facilitiy" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          <Info header="Knowledgeable and Friendly Staff" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          <Info header="Spacious and Functional Layout" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
        </div>
      </div>
{/* 
      <div className="mt-40 flex">
        <img src="./images/treadmill3.png" className="w-6/12 h-6/12"/>
        <div className="ml-10 mr-10 mt-0">
          <div className="absolute bg-red-main w-5/12 h-8 right-0 z-minus mt-44"></div>
          <div className="mb-10">
            <Info header="Equipment" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          </div>
          <Info header="Clean Facilitiy" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
        </div>
        <div>
        <div className="absolute bg-red-main w-5/12 h-8 right-0 z-minus mt-info2"></div>

          <div className="mb-10"> 
            <Info header="Knowledgeable and Friendly Staff" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          </div>
          <Info header="Spacious and Functional Layout" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
        </div>
      </div> */}


      {/* <div className="mt-40 flex">
        <img src="./images/treadmill3.png" className="w-6/12 h-6/12"/>
        <div className="ml-10 mr-10 mt-0">
          <div className="absolute bg-red-main w-5/12 h-8 right-0 z-minus mt-44"></div>
          <div className="mb-10">
            <Info header="Equipment" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          </div>
          <Info header="Clean Facilitiy" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
        </div>
        <div>
        <div className="absolute bg-red-main w-5/12 h-8 right-0 z-minus mt-info2"></div>

          <div className="mb-10"> 
            <Info header="Knowledgeable and Friendly Staff" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
          </div>
          <Info header="Spacious and Functional Layout" desc="Our commitment to providing you with the latest advancements in fitness technology is unwavering. We've invested in the most advanced equipment available, meticulously selecting each piece to ensure it meets the highest standards of quality, performance, and versatility."/>
        </div>
      </div> */}

      {/* <div className="mt-40">
        <img src="./images/mind-studio.jpg" className="absolute z-minus"/>
        <div>
          <h1 className="text-white font-bold italic text-center text-5xl pt-32">Mind-Body Studio</h1>
          <h1 className="text-white text-center text-3xl pt-8 font-medium ml-44 mr-44">Our mind-body studio is designed to envelop you in a serene ambiance, creating an atmosphere of peace, tranquility, and serenity. Soft lighting, soothing colors, and gentle music guide you into a state of calm as you enter this sacred space.</h1>
          <h1 className="text-white text-center text-3xl font-medium ml-44 mr-44">Our mind-body studio is more than just a physical space—it's a sanctuary for self-exploration, personal growth, and healing. It offers a respite from the hustle and bustle of daily life, providing an opportunity to reconnect with your inner self and find balance amidst the chaos.</h1>
        </div>
      </div> */}
      <div className="xl:mt-28 mt-48">
        <img src="./images/free-training-bg.jpg" className="absolute z-minus free-t"/>
        <div className=" ml-training xl:pt-36 pt-16">
          <h1 className="text-white xl:text-5xl text-6xl font-medium italic">Reserve your free training spot!</h1>
          <h1 className="text-white xl:text-5xl text-6xl font-medium mt-5"><span className="text-red-main">Call:</span> <span className="underline">913-610-2040</span></h1>
        </div>
      </div>

      <div className="flex w-screen justify-center xl:mt-32 mt-40 full-w">
        <img src="./images/behind-title.png" className="absolute behind-title-g z-minus"/>
        <h1 className="text-center text-white font-bold xl:text-6xl text-8xl mt-32">Our Gym Gallery</h1>
        <img src="./images/gallery-icon.png" className="xl:h-20 h-32 mt-32 ml-8 rotate-12"/>
      </div>

      <div className="xl:ml-36 xl:mr-36 ml-9 mt-16 full-w bg-red-main rounded-2xl">
        <div className='image-grid'>
            {/* <img className='image-grid-col-2 image-grid-row-2' src="./images/g5.jpg" alt="plant-image"/> */}
            <img  src="./images/g1.jpg" alt="plant-image"/>
            <img  src="./images/g2.jpg" alt="plant-image"/>
            <img className="image-grid-col-2" src="./images/g9.jpg" alt="plant-image"/>
            {/* <img src="./images/g3.jpg" alt="plant-image"/>
            <img  src="./images/g4.jpg" alt="plant-image"/> */}
            <img className="image-grid-col-2 image-grid-row-2" src="./images/g5.jpg" alt="plant-image"/>
            <img src="./images/g6.jpg" alt="plant-image"/>
            <img src="./images/g7.jpg" alt="plant-image"/>
            <img src="./images/g3.jpg" alt="plant-image"/>
            <img  src="./images/g4.jpg" alt="plant-image"/>
        </div>
      </div>

      <div className="xl:flex full-w">
        <img src="./images/yoga3.png" className="right-10 w-yoga mt-10 xl:hidden"/>
        <div className="w-half full-w">
          <img src="./images/waves-leftbw.png" className="absolute xl:mt-20 mt-0 opacity-20 opacity w-waves w-12/12"/>
          <h1 className="text-white font-bold xl:text-5xl text-7xl text-center xl:pt-72 pt-20 full-w">Mind-Body studio</h1>
          <h1 className="text-white text-center xl:text-3xl text-5xl pt-8 font-medium ml-20 sm:pr-20 mr-20 full-w">Our mind-body studio is designed to envelop you in a serene ambiance, creating an atmosphere of peace, tranquility, and serenity. Soft lighting, soothing colors, and gentle music guide you into a state of calm as you enter this sacred space.</h1>
          <h1 className="text-white text-center xl:text-3xl text-5xl font-medium ml-20 mt-2 mr-20 sm:pr-20 full-w">Our mind-body studio is more than just a physical space—it's a sanctuary for self-exploration, personal growth, and healing. It offers a respite from the hustle and bustle of daily life, providing an opportunity to reconnect with your inner self and find balance amidst the chaos.</h1>
        </div>
        <img src="./images/yoga3.png" className="right-10 w-yoga absolute mt-10 sm:hidden"/>
      </div>
      {/* <div className="mt-80">
        <img src="./images/free-training-bg.jpg" className="absolute z-minus"/>
        <div className=" ml-training pt-36">
          <h1 className="text-white text-5xl font-medium italic">Reserve your free training spot!</h1>
          <h1 className="text-white text-5xl font-medium mt-5"><span className="text-red-main">Call:</span> <span className="underline">913-610-2040</span></h1>
        </div>
      </div> */}
      <div className="flex w-screen justify-center mt-32 full-w">
        <img src="./images/behind-title.png" className="absolute behind-title-s z-minus"/>
        <h1 className="text-white font-bold xl:text-6xl text-8xl text-center mt-56">Sports that we teach</h1>
        <img src="./images/sports.png" className="xl:h-24 h-40 mt-48 rotate-12"/>
      </div>
      
      <div className="justify-between flex sm:flex-col xl:ml-40 sm:ml-80 xl:mr-40  mt-20">
        <MaCards title="Mixed Martial Arts" img="mma.jpg" desc="Mixed Martial Arts (MMA) is an electrifying combat sport that represents the ultimate fusion of various martial arts disciplines.In MMA, athletes engage in intense and dynamic fights within an enclosed octagonal cage, using a wide range of striking, grappling, and submission techniques."/>
        <MaCards title="Brasilian Jiu Jitsu" img="bjj.jpg" desc="Brazilian Jiu-Jitsu (BJJ) is a highly effective martial art and combat sport that originated in Brazil. It focuses on grappling and ground fighting techniques, with an emphasis on leverage and technique to overcome size and strength advantages. BJJ has gained immense popularity for its practicality in self-defense."/>
        <MaCards title="Muay Thai" img="muaythai.jpg" desc="Muay Thai, renowned for its powerful and dynamic techniques, Muay Thai utilizes a combination of punches, kicks, knees, and elbows to create a devastating and versatile fighting style. It has rigorous trianing methods and ephasis on conditioning."/>
      </div>

      <div class="wrapper w-pricing">
        <h1 className="text-white text-center font-bold text-6xl mt-40 mb-20">Pricing</h1>
        <div class="pricing-table">
          <div class="pricing-box">
            <h2>Basic Membership</h2>
            <span class="price">$10/month</span>
            <p class="description">A gym membership.</p>
            <span class="pricing-table-divider"></span>
            <a class="btn" href="#"><b>Sign Up</b></a>
            <span class="pricing-table-divider"></span>
            <ul>
              <li>Access to the gym</li>
              <li>Help from our team</li>
            </ul>
          </div>
          <div class="pricing-box">
            <h2>Advanced Membership</h2>
            <span class="price">$50/month</span>
            <p class="description">A gym membership and one martial art.</p>
            <span class="pricing-table-divider"></span>
            <a class="btn" href="#"><b>Sign Up</b></a>
            <span class="pricing-table-divider"></span>
            <ul>
              <li>Access to the gym</li>
              <li>Help from our team</li>
              <li>One martial art</li>
              <li>After 11 p.m training</li>
            </ul>
          </div>
          <div class="pricing-box pricing-table-best">
            <h2>Premium Membership</h2>
            <span class="price">$100/month</span>
            <p class="description">You get everything that our gym has to offer.</p>
            <span class="pricing-table-divider"></span>
            <a class="btn" href="#"><b>Sign Up</b></a>
            <span class="pricing-table-divider"></span>
            <ul>
              <li>Access to the gym</li>
              <li>Help from our team</li>
              <li>All martial arts</li>
              <li>After 11 p.m training</li>
              <li>Access to a private coach</li>
              <li>Sauna access</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-div">
        <h1 className="text-center text-white text-5xl footer pb-32">All rights reserved © 2023 Petar Joshevski</h1>
      </div>
    </div>
  );
}

export default App;
