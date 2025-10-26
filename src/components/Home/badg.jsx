function Badge() {
    return (
      <div className="mt-24 bg-move2 w-[318px] rounded-[10px] flex flex-col text-center p-8  items-center ">
        <img src="/ptofile.svg" alt="photo profil" className="mb-3" />
        <p>
            <span className="text-[14px] font-normal text-[#FFFFFF]">Hi, I’m </span>
            <span className="text-[14px] font-bold text-[#FFFFFF]">Khadija Messah </span>
            <span className="text-[14px] font-medium text-[#FFFFFF]">a passionate </span>
            <span className="text-[14px] font-bold text-hlibi">Full-Stack Developer</span>
        </p>
        <p className="font-inter text-[9px] text-[#C5C7BC]">with a strong focus on building clean,
            user-friendly, and efficient web applications.
            I love turning ideas into reality through code and design.</p>
            <div className="flex justify-center mt-4">
              <a href="/khadija-messah-resume.pdf" download className="bg-hlibi w-[58px] h-[21px] rounded-[5px] font-inter text-[7px] font-medium text-move flex"> 
                  <span className="ml-2 mt-1.5">Download CV</span>
              </a>
            </div>
      </div>
    );
  }
  export default Badge;
  