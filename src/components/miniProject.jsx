function MiniProject(){
    return (
        <div>
            <div className="flex justify-center mt-24 space-x-2">
                <img src="Vector.svg" alt=""></img>
                <span className="font-inter text-[14px] text-hlibi">Projects</span>
            </div>
            <div className="flex justify-between space-x-8 p-32">
                <div className="bg-move border-[0.5px] border-move1 rounded-[10px] h-[234px] w-[199px] mt-5">
                    <img src="ui-trans.svg" alt="ui-trans.svg"></img>
                </div>
                <div className="bg-move border-[0.5px] border-move1 rounded-[10px] h-[277px] w-[293px] ">
                    <img src="DockLab.svg" alt="DockLab" className=" w-[293px] "></img>
                </div>
                <div className="bg-move border-[0.5px] border-move1 rounded-[10px] h-[232px] w-[191px] mt-5">
                    <img src="corserve.svg" alt="corserve"></img>
                </div>
            </div>
        </div>
    )
}
export default MiniProject