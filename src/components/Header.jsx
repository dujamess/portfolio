
function Header () {
    return (
        <div className=" w-[747px] border-[0.05vw] border-move1 rounded-[1vw] flex justify-around">
            <img className=" h-10 w-10" src="/logo.gif" alt="logo"></img>
            <button className="font-inter  text-hlibi text-[12px]">Home</button>
            <button className="font-inter  text-hlibi text-[12px]">Projects</button>
            <button className="font-inter  text-hlibi text-[12px]">about-me</button>
        </div>
    )
}
export default Header;