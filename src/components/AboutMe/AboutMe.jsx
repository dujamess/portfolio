import Education from "./Education" 
import WorkExperience from "./WorkExperience"
export default function About()
{
    return (
    <>
        <div className="w-[746px]  bg-move2 rounded-[10px] mt-[100px]">
            <div className="flex p-4 space-x-2">
                <img src="icon-about.svg" alt="icon-about-me"></img>
                <p className="font-inter font-medium text-[16px] text-hlibi">About-me</p>
            </div>
            <div className="flex">
                <p className="font-inter font-light text-[11px] text-hlibi pl-4 text-base/6 pt-4">     Hello, I'm khadija Messah.
                        I am a highly motivated and versatile software developer with a strong foundation in building
                        comprehensive digital solutions.My experience spans the full spectrum of development, from 
                        crafting engaging user interfaces to engineering robust back-end systems.With a keen eye 
                        for design and a talent for technical problem-solving,I thrive on bringing innovative ideas to
                        life. I am passionate about leveraging my diverse skillset to contribute to dynamic projects 
                        and grow within a forward-thinking team.
                </p>
                <img src="ptofile1.svg" alt="ptofile" className=" pr-7 pb-10"></img>
            </div>
        </div>
            <div className="absolute flex justify-center mt-[390px] w-[746px] h-3">
                <a href="khadija-messah-resume.pdf" download className="bg-hlibi w-[58px] h-[21px] rounded-[5px] font-inter text-[7px] font-medium text-move flex"> 
                <span className="ml-2 mt-2">Download CV</span></a>
            </div>
        <Education/>
        {/* <WorkExperience/> */}
    </>
    )
}