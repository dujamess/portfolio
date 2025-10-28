function MiniProject(){
    return (
        <div className="w-[52%] h-screen ">
            <div className="flex w-full justify-center mt-[17%]  space-x-2">
                <img src="/Vector.svg" alt="icon-miniproject" className="w-[2%] mt-[0.5%] mb-[6%]"></img>
                <span className="font-inter font-light text-[1vw] text-hlibi mb-[5%]">Projects</span>
            </div>
            <div className="flex justify-between  w-full h-full">
                <div className="bg-move border-[0.05vw] border-move1 rounded-[1vw] w-[26%] h-[30%] mt-[5.5%]">
                    <img src="/ui-trans.svg" alt="ui-trans.svg" className="w-full  rounded-t-[1vw] "></img>
                    <p className="text-hlibi font-inter text-[0.6vw] font-medium pt-[4%] pl-[4%]">GameConnect</p>
                    <p className="font-inter text-[0.6vw] font-normal p-[4%] text-[#C5C7BC]">Application web full-stack combinant jeu Pong en temps réel, chat instantané, 
                        gestion des utilisateurs et microservices</p>
                    <div className="space-x-2 flex justify-start pb-[4%] pl-[4%]">
                        <img src="/javascript.svg" alt="javascript" className="w-[7%] h-[7%]"></img>
                        <img src="/react .svg" alt="react" className="w-[7%] h-[7%]"></img>
                        <img src="/html.svg" alt="html" className="w-[7%] h-[7%]"></img>
                        <img src="/css.svg" alt="css" className="w-[7%] h-[7%]"></img>
                    </div>
                </div>
                <div className="bg-[#5C5470] border-[0.05vw] border-move1 rounded-[1vw] w-[40%] h-[40%]">
                    <img src="/DockLab.png" alt="DockLab" className=" w-full h-[65%] rounded-t-[1vw]"></img>
                    <p className="text-hlibi font-inter text-[0.6vw] font-medium pt-[4%] pl-[4%]">DockLab</p>
                     <p className="font-inter text-[0.6vw] font-normal p-2 text-[#C5C7BC]">Mise en place d'une infrastructure virtualisée 
                        avec Docker, intégrant MariaDB, WordPress, 
                        Nginx, Redis, FTPet Adminer, avec gestion des 
                        volumes, réseaux et services interconnectés.</p>
                        <div className="space-x-2 flex justify-start pb-[4%] pl-[4%]">
                            <img src="/docker.svg" alt="docker" className="w-[7%] h-[7%]" ></img>
                        </div>
                </div>
                <div className="bg-move border-[0.05vw] border-move1 rounded-[1vw] w-[26%] h-[30%] mt-[5.5%]">
                    <img src="/corserve.svg" alt="corserve" className="w-full rounded-t-[1vw]"></img>
                    <p className="text-hlibi font-inter text-[0.6vw] font-medium pt-[4%] pl-[4%]">CoreServe</p>
                    <p className="font-inter text-[0.6vw] font-normal pt-2 pl-2 text-[#C5C7BC]">Développement d’un serveur HTTP en C++ inspiré d’Nginx, avec parsing de configuration,gestion des sockets, traitement des  requêtes/réponses et  support multi-clients.</p>
                    <div className="space-x-2 flex justify-start pt-[4%] pl-[4%]">
                        <img src="/c++.svg" alt="c++" className="w-[7%] h-[7%]"></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default MiniProject