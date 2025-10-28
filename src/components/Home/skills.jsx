function Skills()
{
    return(
        <div className="w-[52%] ">
            <div className="flex justify-center mt-[15%] mb-[5%]">
                <img src="/Group.svg" alt="" className="w-[4%]  "></img>
                <span className="font-inter text-[1vw] text-hlibi">Skills</span>
            </div>
            <div className=" w-full border-[0.05vw] border-move1 rounded-[1vw] flex justify-between p-[1.7%] ">
                <span className="font-inter  text-[#DEDED1] text-[0.8vw]  w-[18%] pl-10">Langague</span>
                <span className="font-inter  text-[#DEDED1] text-[0.8vw] w-[18%] pl-10">Frameworks</span>
                <span className="font-inter  text-[#DEDED1] text-[0.8vw] w-[18%] pl-11">Databases</span>
                <span className="font-inter  text-[#DEDED1] text-[0.8vw] w-[18%] pl-10">Tools</span>
                <span className="font-inter  text-[#DEDED1] text-[0.8vw] w-[18%] pl-10">Other</span>
            </div>
            <div className="flex  mt-[4%] space-x-4" >
                <div className=" w-[20%] bg-move  border-move1 font-normal rounded-[1vw] text-[#C5C7BC] font-inter text-[0.8vw] border-[0.05vw] flex flex-col p-[1%] space-y-2 ">
                    <p>-  Javascript</p>
                    <p>-  C</p>
                    <p>-  C++</p>
                </div>
                <div className="w-[20%] bg-move border-move1 rounded-[1vw] text-[#C5C7BC] font-inter text-[0.8vw] border-[0.05vw] p-[1%] font-normal flex flex-col space-y-2 ">
                    <p>-  React js</p>
                    <p>-  Fastify js</p>
                </div>
                <div className= "w-[20%] bg-move border-move1 rounded-[1vw] text-[#C5C7BC]  font-inter text-[0.8vw] border-[0.05vw] p-[1%] font-normal flex flex-col space-y-2 ">
                    <p>-  SQLite</p>
                    <p>-  MariaDB</p>
                    <p>-  PostgreSQL</p>
                </div>
                <div className="w-[20%] bg-move border-move1 rounded-[1vw] text-[#C5C7BC]  font-inter text-[0.8vw] border-[0.05vw] p-[1%] font-normal flex flex-col space-y-2 ">
                    <p>-  Git</p>
                    <p>-  Github</p>
                    <p>-  Docker</p>
                    <p>-  Docker</p>
                </div>
                <div className="w-[20%] bg-move border-move1 rounded-[1vw] text-[#C5C7BC]  font-inter text-[0.8vw] border-[0.05vw] p-[1%] font-normal flex flex-col space-y-2 ">
                    <p>-  Html</p>
                    <p>-  css</p>
                    <p>-  Tailwind css</p>
                    <p>-  figma</p>
                    <p>-  photoshop</p>
                    <p>-  blender</p>
                    <p>-  unity</p>
                </div>
            </div>
        </div>
    )
}
export default Skills