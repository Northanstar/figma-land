/* eslint-disable react/no-unescaped-entities */
import { content } from "../Constant/Index"
import { motion } from "framer-motion"
import { textVariant, staggerContainer, fadeIn, } from "../Utils/Motion"



function Contents() {
  return (
    <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
     className='flex mt-[200px] font-sans  flex-col p-[65px 50px] gap-14 justify-center items-center'>
      <motion.h2 variants={textVariant()} className='text-[52px] leading-[62px]'>Contents</motion.h2>
      <motion.p variants={textVariant()} className=" xs:mt-[10px] sm:mt-[10px] text-center md:mt-3 text-[20px] sm:w-[411px] sm:h-[90px] flex items-center leading-[30px] tracking-[0.2px] md:w-[700px] md:h-[60px] p-[20px] pl-[30px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</motion.p>
      <motion.div className=" flex gap-10 items-center justify-center flex-wrap p-10 md:p-1">
        {content.map((content, index) => (
          <motion.div variants={fadeIn('right', 'spring', index * 0.5, 1)} className="contentCard flex md:h-[624px] xs:w-[348px] xs:h-[493px] xs:gap-10 rounded-[10px] py-[35px] text-black bg-white flex-col items-center pr-[20px] pl-[20px] md:w-[476px] gap-[57px]" key={content.name}>
            <motion.p variants={fadeIn('top', 'spring', .5, 1)} className="font-bold text-[20px] leading-[30px] tracking-[0.1px]">{content.name}</motion.p>
            <motion.p  variants={fadeIn('top', 'spring', .6, 1)}  className="text-center w-[268px] h-[72px] leading-[24px] tracking-[0.2px] text-[16px] p-1">{content.text}</motion.p>
            <div className="">
            <motion.button variants={fadeIn('top', 'spring', .7, 1)} className="w-[157px] h-[52px] rounded-[3px] bg-blue-500 text-white flex items-center justify-center font-bold">{content.button}</motion.button>
            </div>
            <motion.img variants={fadeIn('top', 'spring', .8, 1)} src={content.icon} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Contents