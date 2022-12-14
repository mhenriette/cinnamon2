import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ImageIntro from "../components/ImageIntro";
import LoopCard from "../components/LoopCard";
import Offices from "../components/Offices";
import Button from "../components/ui/Button";
import Introduction from "../components/ui/Introduction";
import ServiceCard from "../components/ui/Servicecard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
     <Navbar/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="bg-bgnoise bg-blurblack pb-24 mb-24 px-6 md:pt-40 md:pb-40 pt-20 ">
          <div className="mx-auto container md:px-10 md:pt-10">
              <h1 className="text-white font-MontHeavy text-medium leading-large mb-6 lg:text-[80px] lg:leading-[105px]">
                Results focused design & development agency.
              </h1>
              <p className="text-lightgray leading-small text-[18px] mb-8 font-sans lg:text-small lg:leading-[32px] lg:max-w-[640px] ">
                Extend your team with our high performing specialists or hire us to
                shape your product from scratch. Either way, we’ll get your product
                off the ground and build a momentum for your success.
              </p>
          </div>
        </div>
        <div>
          <ImageIntro url="/Mockup_1.png" variant="green" />
          <ImageIntro url="/Fiona_Thumbnail.png" variant="purple" />
          <ImageIntro url="/thumbnail.png" variant="orange" />
        </div>
        <div className="bg-black bg-opacity-90 bg-bgnoise pt-24 px-6 pb-24 ">
          <div className="md:grid grid-cols-3  items-start  mx-auto container place-items-center ">
            <h2 className="text-white font-MontBold text-medium leading-large pb-8 md:text-[54px]">
              Our services
            </h2>
            <div className="grid gap-16 md:grid-cols-2 col-span-2  ">
              <ServiceCard title='Product design' subtitle='Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.' url='https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.cdb049ad.png&w=96&q=75' />
              <ServiceCard title='Development' subtitle='By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until its a fully-fledged digital solution.' url='dev.png'/>
              <ServiceCard title='Quality assurance' subtitle='Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.' url='/quality.png' />
              <ServiceCard title='Marketing & growth' subtitle='By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.' url='marketing.png' />
              <Button title={"See Our Services"} style='my-10 max-w-auto px-10'/>
            </div>
          </div>
        </div>
        {/* another section */}
        <div className=" bg-[#F6F6F6]  relative">
            <div className=" px-6 grid gap-8 pt-24 pb-24 md:py-[160px] md:max-w-[1120px] md:grid-cols-2  mx-auto">
                <h2 className="text-medium font-MontBold leading-normal mb-8 text-lightblack md:leading-[72px] md:text-[54px]">
                  Agile team on demand
                </h2>
               
                <div className="w-[261px] md:hidden">
                  <img src="/people.png" alt="people" />
                </div>
                <div>
                  <p className="text-gray32 text-smallx leading-middle">
                    By hiring and managing talented people with skills specific to
                    your project, we build you a team that’s accomplished, agile and
                    scalable in both directions.
                  </p>
               
                <Button title="See How It Works" style='px-10 my-10' />
                </div>
                
            </div>
            <div className="w-[261px] md:absolute bottom-0 right-0 hidden md:flex">
                  <img src="/people.png" alt="people" />
                </div>
        </div>
        {/* another section */}
        <div className="pt-14  relative px-6 pb-24 md:mx-auto container md:px-12 md:pt-36 md:pb-40 ">
          <div className="font-MontBold text-extralarge absolute -top-7 -left-1 text-bluegradient md:text-[258px] md:-top-[10px] md:-left-10">
            “
          </div>
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h1 className="text-lightblack font-MontBold text-mediumx leading-medium md:text-medium md:leading-large">
                They are consistent, and the communication is good.
              </h1>
              <div className="min-h-[182px] mb-8 items-center  mt-8 justify-center flex">
                <p className="text-smallx text-[#525252] leading-middle md:text-small md:leading-small">
                  When I have a deadline, they would work extra hours on the weekend
                  and after hours. Cinnamon gives the impression of being a smaller
                  team that’s focused on customers.
                </p>
              </div>

              <div className=" flex flex-col flex-wrap items-start text-lightblack gap-1 md:flex-row">
                <div className="rounded-full w-16 h-16 overflow-hidden md:w-20 md:h-20">
                  <img src="/pp.png" alt="profile" />
                </div>
                <div className="md:flex flex-col">
                <h5 className="text-small font-MontBold leading-small md:text-small">
                  Garin Toren,
                </h5>
                <p className="text-smallx font-sans leading-middle md:text-small">CEO, ping</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-end  h-28"><img src="pingLogo.webp" alt="pinlogo"/></div>
          </div> 
          <div>
            <div className="grid md:grid-cols-2   ">
              {/* arrows */}
              <div className="flex justify-between w-[168px]  mt-12">
                <button className="cursor-pointer">
                  <div>
                    <img src="left.png" alt="arrow" />
                  </div>
                </button>
                <button className="cursor-pointer">
                  <div>
                    <img src="right.png" alt="arrow" />
                  </div>
                </button>
              </div>
              {/* view case */}
              <div className=" flex gap-3 items-center mt-8 md:justify-end ">
                <div>
                  <img src="arrowright.svg" alt="arrowright" />
                </div>
                <Link href="/#">
                  {" "}
                  <p className="uppercase font-MontBold text-smallx md:text-small leading-middle text-[#5135FF] underline underline-offset-2 ">
                    VIEW CASE STUDY
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* another section */}
        <div className="  bg-[#F6F6F6] relative ">
          <div className="pb-24 pt-24 md:pt-36 md:pb-40 md:px-12 md:mx-auto container">
          <div className="px-6 mx-auto relative">
            <Introduction title='Who we are' subtitle='Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.'/>
            <div className="hidden md:flex flex-wrap flex-col max-h-[310px] w-[70%] mb-[72px] mt-[70px]  "> 
              <div className="list-items">Product design</div>
              <div className="list-items">Web development</div>
              <div className="list-items">Mobile development</div>
              <div className="list-items">Quality assurance</div>
              <div className="list-items">Marketing</div>
              <div className="list-items">Project management</div>
              <div className="list-items">Human resources</div>
              <div className="list-items">Sales</div>
              <div className="list-items">Fluffy friends</div>
            </div>
            <div className="w-72 mb-6 mt-8 md:hidden"><img src="man.png" alt="man"/></div>
            <Button title='Read About Us' style='px-10 my-10'/>
    
          </div>
          </div>
          <div className="w-72  hidden md:block absolute  bottom-56 right-0"><img src="man.png" alt="man"/></div>

        </div>
        {/* College section */}
        <div className="relative  md:mx-auto container">
        <div className="pt-24 pb-24 md:px-12 md:pt-36 md:pb-40">
        
          <div className="px-6 md:grid grid-cols-2">
            <div className="w-72 md:w-1/2"><img src="/college.png" alt="college"/></div>
              <div className="min-h-[182px] md:w-4/5 items-start  mt-8 justify-center flex flex-col">
             
              <p className="text-smallx md:text-small text-[#525252] leading-middle md:leading-small md:mb-8">
              Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.
              </p>
      
            <Button title='See How it works' style='px-10 my-10'/>
          </div>
         

          </div>

        </div>
        <div className="absolute right-0 bottom-0 hidden md:block"><img src="bgpic.png" alt="bgpic"/></div>
        </div>
        {/* growing section */}
        <div className="bg-black bg-opacity-90 bg-bgnoise    ">
        <div className="pt-24 px-6 pb-24 md:px-12 md:pt-24 md:pb-32 md:mx-auto container gap-10 md:grid grid-cols-2 items-start">
          <div>
          <h1 className="font-MontBold text-4xl md:text-large  leading-medium text-white mb-4">We’re growing</h1>
          <p className="font-sans text-lg leading-middle text-[#CFCFCF] mb-4">Jump on board with Cinnamon and get the privilege of <br className="hidden md:flex"/>  working on challenging projects for leading global <br className="hidden md:flex"/> companies! Make the world a better, more connected <br className="hidden md:flex"/> place.</p>
          <Button title='See All Positions' style='px-10 my-10'/>
          </div>
                {/* arrows */}
          <div className="pt-6 md:pt-0">
                {/* arrow 1 */}
              <div className="flex justify-between items-center border-b  border-gray-600 ">
                <p className="text-white font-semibold text-2xl py-6 md:pt-0 pr-3 pl-1  font-MontBold">Android Developer</p>
                <div className="w-12"><img src="/arrowwhite.webp"/></div>
              </div>
              {/* arrow 2 */}
              <div className="flex justify-between items-center border-b  border-gray-600">
                <p className="text-white font-semibold text-2xl py-6 pr-3 pl-1  font-MontBold">Android Developer</p>
                <div className="w-12"><img src="/arrowwhite.webp"/></div>
              </div>
              {/* arrow 3 */}
              <div className="flex justify-between items-center border-b  border-gray-600">
                <p className="text-white font-semibold text-2xl py-6 pr-3 pl-1  font-MontBold">Backend Development Team Lead"</p>
                <div className="w-12"><img src="/arrowwhite.webp"/></div>
              </div>
          </div>
       
        </div>
        </div>
        {/* offices */}
        <div className="mt-36 mb-40  lg:block overflow-x-hidden">
          <div className="mx-auto container w-[1120px]">
            <div className="flex flex-col justify-between gap-14  ">
              <h1 className="font-MontBold text-large leading-medium">Our offices</h1>
              <div className="flex gap-8 ">
                <Offices url='https://www.google.com/maps?q=Cinnamon+Agency' image='https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzagreb.b5180ce4.jpeg&w=1200&q=75' title='Zagreb' subtitle='Slavonska avenija 6, 10000, Zagreb, Croatia'/>
                <Offices url='https://www.google.com/maps?q=500+7th+Ave,+New+York,+NY+10018,+United+States' image='road.webp' title='New York' subtitle='500 7th Ave, New York, NY 10018, United States'/>
                <Offices url='https://www.google.com/maps?q=Bulevar+vojvode+Mi%C5%A1i%C4%87a+37+11000,+Belgrade,+Serbia' image='belgrade.webp' title='Belgrade' subtitle='Bulevar vojvode Mišića 37 11000, Belgrade, Serbia'/>
              </div>
              <div className="flex gap-6">
                <button><div className="w-14"><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-left.cd95ba98.png&w=96&q=100" alt="arrow"/></div></button>
                <button><div className="w-14"><img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-right.edcfdab6.png&w=96&q=100" alt="arrow"/></div></button>
              </div>
            </div>
        </div>

      </div>
      <div  className="mt-36 mb-40 ">
        <div className="mx-auto container md:px-12">
          <div className="flex flex-col gap-10">
            <h1 className="font-MontBold text-large leading-large">Stay in the loop<br/> on tech topics</h1>
            <div className="md:grid grid-cols-3 ">
            <LoopCard url='https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4z4OPjERGBRoMzBhMFKHPE%2Fd29f2e92e90c78f6427c1eba8517b9ae%2FFreelance_VS._Agency_blog_illustration.png&w=1920&q=75' title='Sales' name='Matija Bermanec & Lorena Ujević' date='2022-10-13'
            time='6min'
            descript='Differences in Hiring an Agency vs. Freelancers 2.0'

            />
            <LoopCard url='gridc.webp' 
            title='Development'
             name='Samantha Holstead' date='2022-10-03'
            time='3min'
            descript='Cinnamon Flutter Template Overview'

            />
              <LoopCard url='fire.webp' 
            title='design'
             name='Jan Marin' date='2022-09-15'
            time='6min'
            descript='How Tinder Swindled User Experience'

            />
            </div>
            <div className=" flex gap-3 items-center mt-8 ">
                <div>
                  <img src="arrowright.svg" alt="arrowright" />
                </div>
                <Link href="/#">
              
                  <p className="uppercase font-MontBold text-smallx  leading-middle text-lightblue underline underline-offset-2 ">
                    VIEW MORE BLOGS
                  </p>
                </Link>
              </div>
              </div>
        </div>
      </div>

  {/* last section */}
        <div className="bg-[#F6F6F6] ">
          <div className="relative md:mx-auto container md:px-12 md:pt-24 md:pb-24">
              <div className="absolute bottom-0 left-0 w-[120px] md:w-[200px]"><img src="/colors.png"/></div>
            
            <div>
              <div className="px-6 mx-auto max-w-[1120px]">
                    <div className="py-24 flex flex-col items-center text-center relative gap-5">
                      <h1 className="font-MontBold leading-[56px]  text-[54px] hidden md:flex">Have a project in mind?</h1>
                      <h2 className="font-MontBold leading-[56px] text-4xl md:text-[54px] ">Let's Work Together</h2>
                      <Button title='Contact Us' style='px-10 my-10'/>

                    </div>

              </div>
            </div>
           </div>
        </div>
        
      </main>
      <Footer/>
    </>
  );
}
