function MiniProject(){
    return (
        <div>
            <div className="flex justify-center mt-24 space-x-2">
                <img src="/Vector.svg" alt="icon-miniproject"></img>
                <span className="font-inter text-[14px] text-hlibi">Projects</span>
            </div>
            <div className="flex justify-between space-x-8 pt-10">
                <div className="bg-move border-[0.5px] border-move1 rounded-[10px] h-[234px] w-[199px] mt-5">
                    <img src="/ui-trans.svg" alt="ui-trans.svg"></img>
                    <p className="text-hlibi font-inter text-[9px] font-medium p-2">GameConnect</p>
                    <p className="font-inter text-[9px] font-normal p-2 text-[#C5C7BC]">Application web full-stack combinant jeu Pong en temps réel, chat instantané, 
                        gestion des utilisateurs et microservices</p>
                        <div className="space-x-2 flex justify-start p-2">
                            <img src="/javascript.svg" alt="javascript"></img>
                             <img src="/react .svg" alt="react"></img>
                              <img src="/html.svg" alt="html"></img>
                               <img src="/css.svg" alt="css"></img>
                        </div>
                </div>
                <div className="bg-[#5C5470] border-[0.5px] border-move1 rounded-[10px] h-[293px] w-[277px] ">
                    <img src="/DockLab.svg" alt="DockLab" className=" w-[293px] "></img>
                    <p className="text-hlibi font-inter text-[9px] font-medium p-2">DockLab</p>
                     <p className="font-inter text-[9px] font-normal p-2 text-[#C5C7BC]">Mise en place d'une infrastructure virtualisée 
                        avec Docker, intégrant MariaDB, WordPress, 
                        Nginx, Redis, FTPet Adminer, avec gestion des 
                        volumes, réseaux et services interconnectés.</p>
                        <div className="space-x-2 flex justify-start p-2">
                            <img src="/docker.svg" alt="docker"></img>
                        </div>
                </div>
                <div className="bg-move border-[0.5px] border-move1 rounded-[10px] h-[232px] w-[191px] mt-5">
                    <img src="/corserve.svg" alt="corserve"></img>
                    <p className="text-hlibi font-inter text-[9px] font-medium p-2">CoreServe</p>
                    <p className="font-inter text-[9px] font-normal pt-2 pl-2 text-[#C5C7BC]">Développement d’un serveur HTTP en C++ inspiré d’Nginx, avec parsing de configuration,gestion des sockets, traitement des  requêtes/réponses et  support multi-clients.</p>
                    <div className="pl-2">
                        <img src="/c++.svg" alt="c++"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiniProject