function Badge() {
    return (
      <div className="mt-[6%] bg-move2 w-[22%] rounded-[1vw] flex flex-col text-center p-[2%]  items-center ">
        <img src="/ptofile.svg" alt="photo profil" className="mb-[1%] w-[85%] h-[85%]" />
        <p>
            <span className="text-[1vw] font-normal text-[#FFFFFF]">Hi, I’m </span>
            <span className="text-[1vw] font-bold text-[#FFFFFF]">Khadija Messah </span>
            <span className="text-[1vw] font-medium text-[#FFFFFF]">a passionate </span>
            <span className="text-[1vw] font-bold text-hlibi">Full-Stack Developer</span>
        </p>
        <p className="font-inter text-[0.6vw] text-[#C5C7BC]">with a strong focus on building clean,
            user-friendly, and efficient web applications.
            I love turning ideas into reality through code and design.
        </p>
        <div className="flex w-[30%] mt-[9%] p-[2%] justify-center   bg-hlibi rounded-[1vw] font-inter text-[0.6vw] font-medium text-move">
              <a href="/khadija-messah-resume.pdf" download > 
                  <span className="ml-2 mt-1.5">Download CV</span>
              </a>
        </div>
      </div>
    );
  }
  export default Badge;
  