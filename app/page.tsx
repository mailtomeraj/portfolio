import Image from 'next/image'
import Header from './components/Navbar'
import { CiLinkedin } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'
import {HiArrowRight} from 'react-icons/hi'


export default function Home() {
  return (
    <main className="mx-auto">

      <Header />
      <section id="home">
        <div className='h-[calc(100vh-7rem)]'>
          <div className='max-w-screen-xl flex justify-between items-center  mx-auto'>
            <div className='justify-center '>
              <p className=' text-xl text-gray-500 font-semibold'>Hello, I'm</p>
              <h1 className='text-6xl  font-semibold my-3'>Meraj Naqui</h1>
              <p className=' text-3xl text-gray-500 font-semibold mb-5'> Frontend Developer</p>
              <div className='flex  gap-3 text-[13px]'>
                <button className='px-4 py-3 w-32 border border-black hover:bg-gray-900 hover:text-white rounded-3xl font-semibold transition-all'>Download CV</button>
                <button className='px-4 py-3 w-32 border border-black bg-gray-900 hover:bg-black text-white rounded-3xl font-semibold transition-all'>Contact Info</button>

              </div>
              <div className='flex items-center mt-4 gap-[15px]'>
                <CiLinkedin size={32} className="hover:text-red-600'" />
                <BsGithub size={28} />
                {/* <Image className="" src="/images/linkedin.png" alt="Bordered avatar" width={32} height={32} />
            <Image className="" src="/images/github.png" alt="Bordered avatar" width={32} height={32} /> */}

              </div>



            </div>
            <div className=''>
              <div className='circle'>
                <div className='content'>
                  <Image className="" src="/images/meraj-naqui.jpg" alt="Bordered avatar" width={288} height={288} />
                </div>
              </div>
            </div>


          </div>
          <div className='flex justify-start items-center mt-20 mr-32 rounded-r-full gap-5 border-gray-200 p-6 bg-zinc-100 border'>
            <div className='max-w-screen-xl mx-auto flex gap-5 justify-start'>
            <div className='flex text-2xl font-semibold text-zinc-500'>Tech Stack</div>
            <div className=''>
              <Image className="" src="/images/next-react.svg" alt="Bordered avatar" width={75} height={75} />
            </div>
            <div className='text-center'>
              <Image className="" src="/images/js-ts.svg" alt="Bordered avatar" width={75} height={75} />
            </div>
            <div className='text-center'>
              <Image className="w-[35px] h-[35px]" src="/images/mongodb.png" alt="Bordered avatar" width={50} height={50} />
            </div>
            <div className='text-center'>
              <Image className="w-[35px] h-[35px]" src="/images/postgre.png" alt="Bordered avatar" width={50} height={50} />
            </div>
            <div className='text-center'>
              <Image className="" src="/images/html.svg" alt="Bordered avatar" width={75} height={75} />
            </div>
            <div className='text-center'>
              <Image className="" src="/images/tailwind-css.svg" alt="Bordered avatar" width={75} height={75} />
            </div>
          </div>
        </div>
        </div>
      </section>



      <section id="about" className=' text-center w-full'>
        <p className='mb-3'>Get to Know more</p>
        <h1 className=" text-5xl font-semibold mb-16">About Me</h1>
        <div className='flex text-left gap-10  pb-20'>
          <div className='flex items-center justify-between  bg-gray-100 rounded-2xl p-5 gap-5'>
          <div className='  w-44 h-44 bg-[url(/images/circle-star.svg)] group bg-no-repeat bg-cover bg-center rounded-full relative bg-white  flex items-center '>

<Image className=" mx-auto animate-spin-slow" src="/images/rounded-text-black.png" alt="Bordered avatar" width={132} height={132} />
<HiArrowRight className=" mx-auto  font-medium absolute left-0 right-0 text-4xl group-hover:translate-x-2  transition-all duration-300"/> 

</div>
         
            <div className=' w-44 h-44 bg-circleStar group rounded-full flex bg-white justify-center items-center'>
              <div className='flex items-center justify-center bg-black shadow-md border border-black font-semibold text-white rounded-full w-20 h-20 group-hover:bg-white group-hover:text-black transition-all duration-300 '>Hire me</div>
            </div>
            <div className='  w-44 h-44 bg-circleStar  rounded-full bg-white relative  flex items-center border border-black '>

<Image className=" mx-auto animate-spin-slow" src="/images/animted.svg" alt="Bordered avatar" width={176} height={176} />
<Image className=" mx-auto  absolute left-0 right-0" src="/images/work-emoji.png" alt="Bordered avatar" width={44} height={44} />
</div>

          </div>
          <div className="flex-1 text-side">
            <h4 className='text-3xl mb-2'>A dedicated Front-end Developer <br /> based in Mumbai, India 📍</h4>
            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p></div>
          {/* <p className=' text-left my-10'>I'm Giorgi Mindiashvili, a passionate Front-end Developer with one year of hands-on experience in crafting immersive web experiences.Over the past year, I've had the privilege of working on four medium-level projects, each of which has added depth to my skills and broadened my perspective on front-end development. My commitment to excellence in this field is underscored by my education. I am a proud graduate of IT Step Academy Georgia, where I honed my skills and earned a certificate in Front End Development. This educational foundation, combined with my practical experience, equips me with the knowledge and expertise needed to tackle complex front-end challenges.</p> */}
        </div>
        <div className='flex justify-center gap-8 w-full'>
          <div className='details-container'>
            <Image className=" mx-auto " src="/images/experience.png" alt="Bordered avatar" width={32} height={32} />
            <h3 className='text-xl font-semibold mt-2 mb-1'>Experience</h3>
            <p className='text-[18px] leading-[26px] text-gray-600'>13+ years<br />Frontend Development</p>
            <div className='text-left mt-8 mb-5'>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/trigyn.png" alt="Bordered avatar" width={100} height={70} /></div>
                    <div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trigyn Technologies Limited - Mumbai, India</h3>
                      <p className='text-lg font-semibold text-gray-500'>Sr. Consultant - UI</p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023 - Current</time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Document <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg></a>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/2coms.png" alt="Bordered avatar" width={80} height={50} /></div>
                    <div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trigyn Technologies Limited, Mumbai, India </h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">(Under the Payroll of 2Coms Consulting Pvt. Ltd)</p>
                      <p className='text-lg font-semibold text-gray-500'>Sr. Technical Engineer</p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 - March 2023</time>

                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Document <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                      </a>
                    </div></div>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/sportz.png" alt="Bordered avatar" width={65} height={60} /></div>
                    <div>



                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">N.A Sportz Interactive Pvt. Ltd., Mumbai India</h3>
                      <p className='text-lg font-semibold text-gray-500'>Sr. Associate - UI</p>

                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2010 - Dec 2020</time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Document<svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg></a></div></div>  </li>
              </ol>
            </div>
          </div>
          <div className='details-container'>
            <Image className=" mx-auto" src="/images/education.png" alt="Bordered avatar" width={32} height={32} />
            <h3 className='text-xl font-semibold mt-2 mb-1'>Education</h3>
            <p className='text-[18px] leading-[26px] text-gray-600'>Master's Degree<br />Bachelor's Degree</p>
            <div className='text-left mt-8 mb-5'>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/smu-logo.jpg" alt="Bordered avatar" width={80} height={100} /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Science in Information Technology (M.Sc.IT) </h3>
                      <p className='text-lg font-medium text-gray-500'>Sikkim Manipal Univertsity, India</p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2004</time>
                      s
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Grade - A</p>

                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Certificate <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/biharuniversity.jpg" alt="Bordered avatar" width={80} height={50} /></div>
                    <div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science (B.Sc.)</h3>
                      <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Baba Saheb Bhimrao Ambedkar Bihar University, India</p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2000</time>s
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Grade - A</p>

                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Certificate <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg></a>
                    </div>
                  </div>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className='flex gap-2'>
                    <div> <Image className="" src="/images/smu-logo-4.png" alt="Bordered avatar" width={60} height={50} /></div>
                    <div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Business Administration (MBA)</h3>
                      <p className='text-lg font-medium text-gray-500'>Sikkim Manipal Univertsity - Distance Education, India</p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2017</time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">View Certificate <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg></a></div></div> </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className='text-center w-full mt-44'>
        <p className='mb-3'>Explore My</p>
        <h1 className=" text-5xl font-semibold mb-8">Skills</h1>
        <p className=' text-left my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?</p>

        <div className='flex justify-center gap-8 w-full'>
          <div className="details-container">
            <h2 className="experience-sub-title text-3xl text-gray-600 mb-10 font-bold">Frontend Development</h2>
            <div className="article-container flex flex-wrap gap-10 justify-start flex-row text-left">
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />
                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />
                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title text-3xl text-gray-600 mb-10 font-bold">Backend Development</h2>
            <div className="article-container flex flex-wrap gap-10 justify-start flex-row text-left">
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />
                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />
                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
              <article className='flex justify-around w-40 gap-2'>
                <Image className="h-8" src="/images/checkmark.png" alt="Experience icon" width={32} height={32} />

                <div>
                  <h3 className='font-bold'>HTML</h3>
                  <p className=' text-gray-500'>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className='text-center my-24'>
        <p className='mb-3'>Get In Touch</p>
        <h1 className=" text-5xl font-semibold mb-10">Contact Me</h1>
        <div className="contact-info-upper-container flex bg-gray-50 border border-gray-400 justify-center rounded-3xl gap-2 mx-auto p-2">
          <div className="contact-info-container flex m-4 justify-center items-center gap-2">
            <Image src="/images/email.png" className="icon contact-icon" alt="Email icon" height={32} width={32} />
            <p className='text-xl'><a href="mailto:examplemail@gmail.com">Example@email.com</a></p>
          </div>
          <div className="contact-info-container flex m-4 justify-center items-center gap-2">
            <Image src="/images/linkedin.png" className="icon contact-icon" alt="Email icon" height={26} width={26} />
            <p className='text-xl'><a href="https://www.linkedin.com/">LinkedIn</a></p>
          </div>
        </div>
      </section>

      <section id="projects" className='text-center'>
        <h1 className='mb-3'>Browse My Recent</h1>
        <h1 className="text-5xl font-semibold mb-10">Projects</h1>

        <div className="experience-details-container">
          <div className="about-containers flex gap-6">
            <div className="details-container color-container">
              <div className="article-container">
                <Image className="project-img" src="/assets/project-2.png" alt="project-1" width={300} height={300} />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">
                  GitHub
                </button>
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <Image className="project-img" src="/assets/project-2.png" alt="project-1" width={300} height={300} />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container flex justify-center gap-4">
                <button className="btn btn-color-2 project-btn">
                  GitHub
                </button>
                <button className="btn btn-color-2 project-btn" >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <Image className="project-img" src="/assets/project-3.png" alt="project-1" width={300} height={300} />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">
                  GitHub
                </button>
                <button className="btn btn-color-2 project-btn">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/arrow.png" className="icon arrow" alt="" width={30} height={30} />
      </section>
      <footer className='w-full h-28 text-center'>
        <nav className='flex  items-center justify-around'>
          <div className="nav-links-container flex justify-center">
            <ul className="nav-links flex gap-8 text-2xl">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p className='pt-14 text-gray-600'>Copyright © 2023 Meraj Naqui. All Rights Reserved</p>
      </footer>
    </main>
  )
}