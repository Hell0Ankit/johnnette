import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageTopBarImage from '../Components/common/PageTopBarImage'
import Layout from '../Components/Layout'
import SectionHeading from '../Components/common/SectionHeading';

import top_bar from "../assets/img/news/top-bar.webp";
import img1 from "../assets/img/certifications/award-rajnath-singh.png";
import img2 from "../assets/img/certifications/rajnath-ji-john-sir.png";
import award_2015 from "../assets/img/certifications/award_2015.png";
import reward from "../assets/img/certifications/reward.png";
import IPF from "../assets/img/certifications/IPF_2017.png";
import skoch from "../assets/img/certifications/skoch.png";
import indianAcheivers from "../assets/img/certifications/indian-acheivers-award.webp";
import IPF_2021 from "../assets/img/certifications/IPF_2021.png";


const AccoladesCertifications = () => {
	 const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <Layout title="Accolades And Certifications | Johnnette Technologies">
		<section className="section-custom">
			<PageTopBarImage
				title="Accolades And Certifications"
				bgImage={top_bar}
			/>
		</section>


		<section className="section-custom mb-11">
			 <SectionHeading title="AWARDS" />
				<div className="body-container grid grid-cols-1 md:grid-cols-3 gap-4 p-4 font-sans">
					<div className="md:col-span-2 bg-slate-100 rounded-3xl overflow-hidden shadow-sm">
						<img src={img2} className="w-full h-full object-cover" alt="Event" />
					</div>
					<div className="bg-indigo-600 rounded-3xl p-8 flex flex-col justify-center text-white">
						<h3 className="text-4xl font-black mb-2 italic">2024</h3>
						<p className="text-indigo-100 uppercase tracking-widest text-sm font-bold">SIDM Champion Award</p>
					</div>
					<div className="bg-white border border-slate-200 rounded-3xl p-6 md:col-span-1 flex items-center justify-center shadow-sm">
						<img src={img1} className="h-48 object-contain" alt="Trophy" />
					</div>
					<div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 text-white flex items-center">
						<p className="text-xl font-light leading-snug">
						The SIDM Champion Award 2024 was presented on October 4, 2024, by Shri Rajnath Singh, the Honorable Defence Minister of India, alongside Chief of Defence Staff Gen Anil Chauhan, PVSM UYSM AVSM SM VSM ADC. This award recognizes our extraordinary product, the Johnnette JM-1 Loitering Munition.
						</p>
					</div>
				</div>
		</section>


		<section className="section-custom">
			<SectionHeading title="DEFENCE INDUSTRIAL LICENSE" />
				<div className="max-w-md body-container group">
					<div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
						<div className="mb-6 rounded-xl border border-slate-100 overflow-hidden shadow-inner bg-slate-50">
							<img src="AccoladesCertifications/license/img/DIL.jpg" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" alt="Defence License" />
						</div>
						<div className="text-center">
							<span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">Government Authorized</span>
							<h3 className="text-slate-800 font-semibold mt-1 mb-5">Defence Industrial License</h3>
							<a href="AccoladesCertifications/license/pdf/DIL.pdf" download className="btn btn-primary text-[12px] px-5 py-3 transition-all duration-300 hover:scale-105">  Download PDF </a>
						</div>
					</div>
				</div>
		</section>

		<section className="section-custom">
			<SectionHeading title="PATENTS" />
            <div className="body-container max-w-6xl mx-auto px-4">
				<div className="flex flex-wrap justify-center gap-8">
					<div className="group w-full sm:w-[350px] p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
						<div className="mb-6 rounded-xl border border-slate-100 overflow-hidden shadow-inner bg-slate-50">
							<img src="AccoladesCertifications/Patents/img/patent1.png" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" alt="Defence License" />
						</div>

						<div className="text-center">
							<a href="AccoladesCertifications/Patents/pdf/patent1.pdf" download className="btn btn-primary text-[12px] px-5 py-3 transition-all duration-300 hover:scale-105">
								Download PDF
							</a>
						</div>
					</div>

					<div className="group w-full sm:w-[350px] p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
						<div className="mb-6 rounded-xl border border-slate-100 overflow-hidden shadow-inner bg-slate-50">
							<img src="AccoladesCertifications/Patents/img/patent2.jpg" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" alt="Defence License" />
						</div>
						<div className="text-center">
							<a href="AccoladesCertifications/Patents/pdf/patent2.pdf" download className="btn btn-primary text-[12px] px-5 py-3 transition-all duration-300 hover:scale-105" >
								Download PDF
							</a>
						</div>
					</div>

				</div>
			</div>
		</section>
        


		<section className="section-custom">
			<SectionHeading title="ACCOLADES" />
				<div class="body-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					<div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={award_2015} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2015 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
										Best Technology Startup
										of the Year at SEDI
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold">SEDI Award</p>
								</div>
							</div>
						</div>
					</div>


                    <div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={IPF} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2017 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
											Awarded Best Product
											of the Year at IPF
											Excellence Awards 2017
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold">IPF
											Excellence Award</p>
								</div>
							</div>
						</div>
					</div>



					<div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={skoch} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2019 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
											Top 200 MSMEs in India by SKOCH Awards 2019
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold">SKOCH Award</p>
								</div>
							</div>
						</div>
					</div>

					<div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={IPF} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2020 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
											Best Product of the Year at IPF Excellence Awards 2020 for the second time for our rugged robot/UGV JOBOT 2A
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold"> IPF Excellence Award</p>
								</div>
							</div>
						</div>
					</div>

					<div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={indianAcheivers} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2020 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
											Indian Achievers'Award in recognition of Outstanding Professional Achievements & Contribution in Nation Building
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold"> Indian Achievers'Award</p>
								</div>
							</div>
						</div>
					</div>


					<div class="group relative bg-gradient-to-b from-zinc-800 to-black p-[1px] card overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-900/20">
						<div class="bg-[#121212]  p-6 h-full flex flex-col">
							<div class="relative bg-zinc-900/50  py-10 mb-8 border border-white/5 overflow-hidden">
								<div class="absolute inset-0 bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
									<img src={IPF_2021} class="relative h-56 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-transform duration-700 group-hover:-translate-y-2" alt="Main Award" />
								</div>
								<div class="flex items-start gap-5">
									<div class="relative flex-shrink-0">
										<div class="absolute inset-0 bg-amber-400 blur-lg opacity-20 group-hover:opacity-40"></div>
										<img src={reward} class="relative w-14 h-14 object-contain brightness-125" alt="Badge" />
									</div>

								<div class="flex-1">
									<h4 class="text-[var(--brand-color)] font-black text-lg tracking-wider mb-1"> 2021 Awarded</h4>
									<p class="text-white text-base font-semibold leading-snug group-hover:text-amber-100 transition-colors">
										Product Excellence Award of the Year at IPF Excellence Awards 2021 for our product NPNT U2.0
									</p>
									<div class="h-[2px] w-12 bg-[var(--brand-color)] mt-3 rounded-full group-hover:w-full transition-all duration-500"></div>
									<p class="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold"> IPF Excellence Award</p>
								</div>
							</div>
						</div>
					</div>
  				</div>
		</section>

		<section className="section-custom" id='satisfactoryletters'>
			<SectionHeading title="SATISFACTORY LETTERS" />
  				<div className="body-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
					
					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-1.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-1.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-1.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-2.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-2.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-2.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-3.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-3.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-3.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-4.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-4.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-4.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-5.png" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-5.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-5.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-6.png" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-6.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>

						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-6.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-7.jpg" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-7.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>

						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-7.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-8.jpg" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-8.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>

						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-8.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-9.png" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-9.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>

						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-9.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div class="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div class=" relative aspect-[3/4]  border-slate-100 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center">
							<img src="AccoladesCertifications/satisfactory-letters/img/satisfactory-do-letter-10.jpg" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/* <!-- Desktop Hover Overlay (Hidden on Mobile) --> */}
							<div class="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-10.pdf" download class=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>

						{/* <!-- Row 3: Mobile Button (Visible only on phone/tablet) --> */}
						<div class="mt-4 lg:hidden">
							<a href="AccoladesCertifications/satisfactory-letters/pdf/satisfactory-do-letter-10.pdf" download class="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


				</div>
		</section>

		

		<section className="section-custom">
			<SectionHeading title="CERTIFICATIONS" />
  				<div className="body-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/udyam_registration_certificate.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/udyam_registration_certificate.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> Udyam Registration Certificate </h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/udyam_registration_certificate.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/iso-certificate.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/iso-certificate.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> ISO Certificate</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/iso-certificate.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/johnnette-trademark.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/johnnette-trademark.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> Johnnette Trademark</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/johnnette-trademark.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/DIPP-Certificate.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/DIPP-Certificate.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> DIPP Certificate</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/DIPP-Certificate.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/IEC_Certificate.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/IEC_Certificate.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> IEC Certificate</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/IEC_Certificate.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>



					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/MSME1.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/MSME1.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> MSME CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/MSME1.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/MSME2.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/MSME2.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> MSME CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/MSME2.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					{/* NSIC CERTIFICATE */}

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/NSIC2.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/NSIC1.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> NSIC CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/NSIC1.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4]   overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/NSIC2.jpg" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/NSIC2.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> NSIC CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/NSIC2.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					{/* REMOTE PILOT CERTIFICATE */}

					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4] bg-white  overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/pilot-john.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/pilot-john.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> REMOTE PILOT CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/pilot-john.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


					<div className="card group relative flex flex-col p-2 transition-all duration-300 ">
						<div className=" relative aspect-[3/4] bg-white  overflow-hidden shadow-inner  flex items-center justify-center">
							<img src="AccoladesCertifications/certifications/img/pilot-ram.png" className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110" alt="Award Document" />
							{/*  Desktop Hover Overlay (Hidden on Mobile)  */}
							<div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
								<a href="AccoladesCertifications/certifications/pdf/pilot-ram.pdf" download className=" btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105">Download PDF </a>
							</div>
						</div>
						{/*  Row 2: Text (Optional)  */}
						<div className="mt-4 text-center lg:text-left">
							<h3 className="text-center font-bold text-[white] line-clamp-2 leading-tight"> REMOTE PILOT CERTIFICATE</h3>
						</div>
						{/*  Row 3: Mobile Button (Visible only on phone/tablet)  */}
						<div className="mt-4 lg:hidden">
							<a href="AccoladesCertifications/certifications/pdf/pilot-ram.pdf" download className="block btn btn-primary text-[12px] px-5 py-3 transition-transform hover:scale-105" > Download PDF </a>
						</div>
					</div>


				</div>
		</section>

    </Layout>
  )
}

export default AccoladesCertifications