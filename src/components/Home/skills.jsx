function Skills()
{
    return(
        <div className="w-[747px]">
            <div className="flex justify-center pt-24 pb-10">
                <img src="/Group.svg" alt=""></img>
                <span className="font-inter text-[14px] text-hlibi">Skills</span>
            </div>
            <div className=" border-[0.5px] border-move1 bg-move rounded-[10px] flex pt-4 pb-4">
                <span className="font-inter  text-[#DEDED1] text-[12px] w-[149px]  pl-10">Langague</span>
                <span className="font-inter  text-[#DEDED1] text-[12px] w-[149px] pl-10">Frameworks</span>
                <span className="font-inter  text-[#DEDED1] text-[12px] w-[149px] pl-11">Databases</span>
                <span className="font-inter  text-[#DEDED1] text-[12px] w-[149px] pl-10">Tools</span>
                <span className="font-inter  text-[#DEDED1] text-[12px] w-[149px] pl-10">Other</span>
            </div>
            <div className="flex  mt-7 space-x-4" >
                <div className=" w-[149px] bg-move  border-move1 font-normal rounded-[10px] text-[#C5C7BC] font-inter text-[11px] border-[0.5px] flex flex-col p-3 space-y-2 ">
                    <p>-  Javascript</p>
                    <p>-  C</p>
                    <p>-  C++</p>
                </div>
                <div className="w-[149px] bg-move border-move1 rounded-[10px] text-[#C5C7BC] font-inter text-[11px] border-[0.5px] p-3 font-normal flex flex-col space-y-2 ">
                    <p>-  React js</p>
                    <p>-  Fastify js</p>
                </div>
                <div className="bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-3 font-normal flex flex-col space-y-2 ">
                    <p>-  SQLite</p>
                    <p>-  MariaDB</p>
                    <p>-  PostgreSQL</p>
                </div>
                <div className="w-[149px] bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-3 font-normal flex flex-col space-y-2 ">
                    <p>-  Git</p>
                    <p>-  Github</p>
                    <p>-  Docker</p>
                    <p>-  Docker</p>
                </div>
                <div className="w-[149px] bg-move border-move1 rounded-[10px] text-[#C5C7BC]  font-inter text-[11px] border-[0.5px] p-3 font-normal flex flex-col space-y-2 ">
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