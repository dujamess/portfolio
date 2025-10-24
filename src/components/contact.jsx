function Contact(){
    return(
        <div className="border-[0.5px] border-move1 h-[177px] w-[355px] rounded-[10px] mt-[120px] bg-move mb-24 ">
            <div className="flex justify-center">
                <p className="font-inter font-normal text-[12px] text-hlibi pt-4">Contact Me</p>
            </div>
            <div className="flex-col mt-5">
                <div className="flex pl-4 space-x-3 font-inter font-light text-[10px] text-hlibi">
                    <img src="email.svg" alt="email" className="pt-1"></img>
                    <p className="pt-3">messah.khadija.it@gmail.com</p>
                </div>
                <div className="flex pl-4 space-x-3 font-inter font-light text-[10px] text-hlibi">
                     <a href="https://www.linkedin.com/in/khadija-messah-09a171152/" target="_blank" className="pt-1">
                        <img src="linkedin.svg" alt="linkedin" className="pt-1"></img>
                     </a>
                     <p className="mt-4">khadija messah</p>
                </div>
                <div className="flex pl-4 space-x-3 font-inter font-light text-[10px] text-hlibi">
                    <img src="phone.svg" alt="phone" className="pt-2"></img>
                    <p className="pt-3">+212 770-174247</p>
                </div>
            </div>
        </div>
    )
}
export default Contact