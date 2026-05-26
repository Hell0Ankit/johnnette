import React from "react";
import john from "../../assets/img/about/team_member/john-sir.png"
import rajiv from "../../assets/img/about/team_member/rajiv-sir.png"
import annette from "../../assets/img/about/team_member/annette-mam.jpg"
import ram from "../../assets/img/about/team_member/ram-sir.jpg"
import cyril from "../../assets/img/about/team_member/cyril-sir.jpg"
import prashant from "../../assets/img/about/team_member/prashant-sir.png"
import abhinav from "../../assets/img/about/team_member/abhinav-sir.jpg"
import gautam from "../../assets/img/about/team_member/gautam-banerjee-sir.png"
import kapil from "../../assets/img/about/team_member/kapil-sir.jpg"
import prasad from "../../assets/img/about/team_member/prasad-sir.png"
import hemkumar from "../../assets/img/about/team_member/hemkumar.jpg"
import jogendra from "../../assets/img/about/team_member/jogendra-sir.jpeg"
import pankaj  from "../../assets/img/about/team_member/pankaj-sir.jpg"
import gaurav  from "../../assets/img/about/team_member/gaurav-sir.jpeg"
import prabhat   from "../../assets/img/about/team_member/prabhat.jpg"
import hetal    from "../../assets/img/about/team_member/hetal.png"
import aman    from "../../assets/img/about/team_member/aman.png"


const BoardOfDirectors = () => {
    return (
        <div className="">
            <div className="heading py-5 lg:py-10">
            <h2 className="primary-heading text-center mb-16"> <a href="">Board of Directors  </a></h2>
            </div>
            {/* Top CEO */}
            <div className="flex justify-center mb-16">
                <div className="text-center space-y-2 ">
                    <img src={john} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]  ">Lt Cdr John Livingstone</h3>
                    <p className="pb-2 text-[16px] text-gray-300">Founder, Chairman & CEO </p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/johnlivingstonejohnnette/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>
            </div>

            {/* Bottom 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] lg:gap-[100px] max-w-[100%] mx-auto text-center">
                {/* Rajiv */}
                <div className="text-center space-y-2">
                    <img src={rajiv} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Rajiv Vermani</h3>
                    <p className="pb-2 text-[16px] text-gray-300"> Director & CEO Digital and Automation </p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/rajiv-vermani-a3bb7a24/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Annette */}
                <div className="text-center space-y-2">
                    <img src={annette} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Annette Livingstone</h3>
                    <p className="pb-2 text-[16px] text-gray-300">
                    Chief Review Officer
                    </p>
                     <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/annette-livingstone-3a907640/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Ram */}
                <div className="text-center space-y-2">
                    <img src={ram} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Ram Sarath Kumar</h3>
                    <p className=" pb-2 text-[16px] text-gray-300">
                    COO & Chief Financial Officer
                    </p>
                     <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/galimelu-ram-sarath-kumar-055547115/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                 {/* Cyril Christopher */}
                <div className="text-center space-y-2">
                    <img src={cyril} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Cyril Christopher </h3>
                    <p className="pb-2 text-[16px] text-gray-300">Chief Technology Officer </p>
                     <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/cyrilchristopherjohn/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Prashant Kumar */}
                <div className="text-center space-y-2">
                    <img src={prashant} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Prashant Kumar</h3>
                    <p className="pb-2 text-[16px] text-gray-300">Assistant Chief Technology Officer </p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/prashant-kumar-222891179/"  target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Abhinav */}
                <div className="text-center space-y-2">
                    <img src={abhinav} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Abhinav Varrey</h3>
                    <p className="pb-2 text-[16px] text-gray-300">Assistant Chief Sales Officer</p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/abhinav-varrey-8888a8187/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>
            </div>

            {/* Advisory & Executive Management */}
            <div className="heading py-5 lg:py-10">
            <h2 className="primary-heading text-center mt-14 mb-16"> Advisory & Executive Management</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] lg:gap-[100px] max-w-[100%] mx-auto text-center">
                {/* Gautam Banerjee */}
                <div className="text-center space-y-2">
                    <img src={gautam} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Wg Cdr Gautam Banerjee</h3>
                    <p className="pb-2 text-[16px] text-gray-300">Director & Chief Flight Operations Officer </p>
                    {/* <div className="flex items-center justify-center">
                        <a href="#" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div> */}
                </div>

                {/* Kapil Sangwan */}
                <div className="text-center space-y-2 ">
                    <img src={kapil} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Lt Cdr Kapil Sangwan</h3>
                    <p className=" pb-2 text-[16px] text-gray-300">Chief Marine Systems Officer</p>
                   <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/kapilsangwan/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* M.S. Prasad */}
                <div className="text-center space-y-2">
                    <img src={prasad} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Dr. M.S. Prasad</h3>
                    <p className="text-[16px] text-gray-300">Ex Scientist G (DRDO) <br/> Scientific Advisor for Defence Relations</p>
                    {/* <div className="flex items-center justify-center">
                        <a href="#" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div> */}
                </div>

                {/* Hem Kumar Naidu */}
                <div className="lg:col-start-2 text-center space-y-2">
                    <img src={hemkumar} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Lt Cdr Hem Kumar Naidu</h3>
                    <p className="pb-2 text-[16px] text-gray-300">Assistant Chief Operations Officer</p>
                    {/* <div className="flex items-center justify-center">
                        <a href="#" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div> */}
                </div>
            </div>
            

            <div className="heading py-5 lg:py-10">
                {/* HOD'S */}
                <h2 className="primary-heading text-center mt-14 mb-16"> HOD'S </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] lg:gap-[100px] max-w-[100%] mx-auto text-center">
                {/* Jogendra Singh */}
                <div className="text-center space-y-2">
                    <img src={jogendra } className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Jogendra Singh</h3>
                    <p className="text-[16px] text-gray-300">HOD  </p>
                    <p className="pb-2 text-[16px] text-gray-300">Technical administration & structure </p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/jogendra-singh-314264247/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Pankaj Yadav */}
                <div className="text-center space-y-2">
                    <img src={pankaj} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Pankaj Yadav</h3>
                    <p className="text-[16px] text-gray-300">HOD</p>
                    <p className="pb-2 text-[16px] text-gray-300">QA & QC</p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/pankaj-yadav-p-255a474a/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Gaurav Maurya */}
                <div className="text-center space-y-2">
                    <img src={gaurav} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Gaurav Maurya</h3>
                    <p className="text-[16px] text-gray-300">HOD</p>
                    <p className="pb-2 text-[16px] text-gray-300">IT</p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/gaurav2maurya/"  target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>

                {/* Hetal Kushvaha*/}
                <div className="text-center space-y-2">
                    <img src={hetal} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Hetal Kushvaha</h3>
                    <p className="text-[16px] text-gray-300">HOD</p>
                    <p className="pb-2 text-[16px] text-gray-300">Human Resources</p>
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/hetal-kushwaha-aba615194/" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>
                {/* Aman Pal*/}
                <div className="text-center space-y-2">
                    <img src={aman} className="w-[185px] h-[185px] rounded-full mx-auto mb-4" />
                    <h3 className="text-[22px]">Aman Pal</h3>
                    <p className="text-[16px] text-gray-300">HOD</p>
                    <p className="pb-2 text-[16px] text-gray-300">Accounts</p>
                    <div className="flex items-center justify-center">
                        <a href="https://in.linkedin.com/in/aman-pal-470173175" target="blank" className="w-12 h-12 rounded-full p-3 bg-[#ffff] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-[#ffff] transition-transform duration-500 hover:rotate-[360deg]" ><i class="fab fa-linkedin-in text-[20px]"></i></a>
                    </div>
                </div>
            </div>
        </div>
  );
};  

export default BoardOfDirectors;