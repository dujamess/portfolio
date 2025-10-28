function Contact(){
    return(
        <div className="border-[0.05vw] border-move1 w-[20%] rounded-[1vw] mt-[10%] bg-move  p-[1%]">
            <div className="flex justify-center mt-[1%]">
                <p className="font-inter font-normal text-[0.9vw] text-hlibi">Contact Me</p>
            </div>
            <div className="flex-col mt-[10%] space-y-[3%]">
                <div className="flex space-x-4 font-inter font-light text-[0.7vw] text-hlibi">
                    <img src="/email.svg" alt="email" className="w-[8%] h-[8%] "></img>
                    <p className="pt-[1%]">messah.khadija.it@gmail.com</p>
                </div>
                <div className="flex space-x-4 font-inter font-light text-[0.7vw] text-hlibi">
                        <img src="/linkedin.svg" alt="linkedin" className="w-[8%] h-[8%] "></img>
                     <a href="https://www.linkedin.com/in/khadija-messah-09a171152/" target="_blank" className="pt-1"> 
                     <p className="pt-[1%]">khadija messah</p>
                     </a>
                </div>
                <div className="flex space-x-4 font-inter font-light text-[0.7vw] text-hlibi">
                    <img src="/phone.svg" alt="phone" className="w-[8%] h-[8%] "></img>
                    <p className="pt-[1%]">+212 770-174247</p>
                </div>
            </div>
        </div>
    )
}
export default Contact