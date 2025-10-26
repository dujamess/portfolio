export default function WorkExperience()
{
    return (
        <div className="w-[746px] ">
            <div className="flex mt-[55px] space-x-2">
                <div className="flex-col">
                    <div className="flex ">
                        <img src="experience.svg" alt=""></img>
                        <p className="font-inter text-hlibi font-medium text-[16px] ml-2">Work Experience</p>
                    </div>
                </div>
            </div>
                <div className="flex space-x-2">
                    <div className="w-px bg-hlibi ml-[19px]"></div>
                     <div className="absolute ml-3">
                            <img src="cercle-line.svg" alt="" className="mt-[30px]"></img>
                            <img src="cercle-line.svg" alt="" className="mt-[92px]"></img>
                        </div>
                    <div className="flex-col">
                        <br></br>
                        <div className="flex-col text-base/loose">
                            <ul className="list-disc font-inter font-extrabold text-[#B6AE9F] text-[14px] pl-10">UM6P: Graphic Developer 3D 		</ul>
                            <li className="font-inter font-light text-hlibi text-[13px] ml-16">Modélisation d'objets 3D pour divers projets en utilisant Blender.  </li>
                            <p className="font-inter font-light text-hlibi text-[9px] ml-16">03/2022 – 06/2022</p>
                        </div>
                        <br></br>
                        <div className="flex-col text-base/loose">
                            <ul className="list-disc font-inter font-extrabold text-[#B6AE9F] text-[14px] pl-10">EON Reality: Concepteur et Développeur d'Applications VR/AR</ul>
                            <li className="font-inter font-light text-hlibi text-[13px] ml-16">Programmation d'interfaces utilisateur et développement de la
                logique applicative pour des projets interactifs. </li>
                            <li className="font-inter font-light text-hlibi text-[13px] ml-16">Intégration d'assets 2D/3D et développement des interactions au sein du moteur Unity.</li>
                            <p className="font-inter font-light text-hlibi text-[9px] ml-16">10/2021 – 02/2022</p>
                        </div>

                    </div>
                </div>
        </div>
    )
}