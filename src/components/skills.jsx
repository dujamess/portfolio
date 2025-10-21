function Skills()
{
    return(
        <div>
            <div className="flex justify-center mt-24">
                <img src="Group.svg" alt=""></img>
                <span className="font-inter text-[14px] text-hlibi">Skills</span>
            </div>
            <div className="h-[46px] w-[747px] border-[0.5px] border-move1 bg-move rounded-[10px] flex justify-between pt-[4px] items-center mt-7 pl-2 pr-2">
                <span className="font-inter  text-[#DEDED1] text-[12px]">Langague</span>
                <span className="font-inter  text-[#DEDED1] text-[12px]">Frameworks</span>
                <span className="font-inter  text-[#DEDED1] text-[12px]">Databases</span>
                <span className="font-inter  text-[#DEDED1] text-[12px]">Tools</span>
                <span className="font-inter  text-[#DEDED1] text-[12px]">Other</span>
            </div>
            <div className="flex items-start justify-between mt-7 " >
                <div className="bg-move  border-move1 font-normal rounded-[10px] text-[#C5C7BC] font-inter text-[11px] border-[0.5px] p-2  flex flex-col space-y-1">
                    <p>-  Javascript</p>
                    <p>-  C</p>
                    <p>-  C++</p>
                </div>
                <div className="bg-move border-move1 rounded-[10px] text-[#C5C7BC] font-inter text-[11px] border-[0.5px] p-2 font-normal flex flex-col space-y-1 ">
                    <p>-  React js</p>
                    <p>-  Fastify js</p>
                </div>
                <div className="bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-2 font-normal flex flex-col space-y-1">
                    <p>-  SQLite</p>
                    <p>-  MariaDB</p>
                    <p>-  PostgreSQL</p>
                </div>
                <div className="bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-2 font-normal flex flex-col space-y-1">
                    <p>-  Git</p>
                    <p>-  Github</p>
                    <p>-  Docker</p>
                    <p>-  Docker Compose</p>
                </div>
                <div className="bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-2 font-normal flex flex-col space-y-1">
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