import Image from "next/image";
import Link from "next/link";


export default function Home() {
    const linkConnect = "https://www.linkedin.com/in/eternalxleader/";
    const linkExplore = "/HHSS - ABOUT presentation.pdf";
    return (
        <main
            className="flex flex-col gap-8 min-h-screen items-center justify-center font-inter container mx-auto pt-8 pb-16 max-xl:px-8 xl:py-8">
            <div className={"flex max-xl:flex-col max-xl:w-full gap-8 md:gap-16"}>
                <div className={"flex flex-col items-center md:w-full md:max-w-[420px] md:mx-auto xl:hidden"}>
                    <div className={"w-fit relative flex-1 h-[310px]"}>
                        <Image src={"/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"} alt={"faces"} width={311}
                               height={310}/>
                    </div>
                    <div className={"flex flex-col w-full items-center gap-6 xl:hidden"}>
                        <Image src={"/logo.svg"} alt={"HHSS logo"} width={81} height={32}/>
                        <div className={"flex flex-col gap-3 w-full"}>
                            <Link href={linkExplore}
                                  className={"py-4 px-6 text-center font-medium text-xs block w-full bg-brand-yellow hover:bg-brand text-brand hover:text-brand-yellow transition-all rounded-2xl"}>EXPLORE</Link>
                            <Link href={linkConnect}
                                  className={"py-5 px-6 text-center font-medium text-xs block w-full bg-brand hover:bg-brand-yellow text-brand-yellow hover:text-brand transition-all rounded-2xl"}>CONNECT</Link>
                        </div>
                        <i className={"md:hidden"}>
                            <svg className={"animation"} width="25" height="56" viewBox="0 0 25 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.8557 45.2925C18.6681 45.105 18.4138 44.9997 18.1487 44.9997C17.8835 44.9997 17.6292 45.105 17.4417 45.2925L12.4917 50.2425L7.54165 45.2925C7.35305 45.1103 7.10045 45.0095 6.83825 45.0118C6.57605 45.0141 6.32524 45.1192 6.13983 45.3046C5.95442 45.4901 5.84926 45.7409 5.84698 46.0031C5.8447 46.2653 5.94549 46.5179 6.12765 46.7065L11.7847 52.3635C11.9722 52.5509 12.2265 52.6562 12.4917 52.6562C12.7568 52.6562 13.0111 52.5509 13.1987 52.3635L18.8557 46.7065C19.0431 46.5189 19.1484 46.2646 19.1484 45.9995C19.1484 45.7343 19.0431 45.48 18.8557 45.2925Z"
                                    fill="black"/>
                                <path
                                    d="M20.6258 25.3824C20.3861 25.1376 20.0611 25 19.7222 25C19.3833 25 19.0583 25.1376 18.8186 25.3824L12.4923 31.8474L6.16593 25.3824C5.92489 25.1445 5.60205 25.0128 5.26695 25.0158C4.93185 25.0188 4.61129 25.1562 4.37433 25.3983C4.13737 25.6405 4.00296 25.968 4.00005 26.3105C3.99714 26.6529 4.12596 26.9829 4.35877 27.2292L11.5887 34.6176C11.8284 34.8625 12.1534 35 12.4923 35C12.8312 35 13.1562 34.8625 13.3959 34.6176L20.6258 27.2292C20.8654 26.9843 21 26.6521 21 26.3058C21 25.9595 20.8654 25.6273 20.6258 25.3824Z"
                                    fill="black"/>
                                <path
                                    d="M23.0157 3.45888C22.7056 3.16506 22.285 3 21.8464 3C21.4078 3 20.9872 3.16506 20.6771 3.45888L12.49 11.2169L4.30297 3.45888C3.99103 3.17339 3.57324 3.01541 3.13958 3.01898C2.70592 3.02255 2.29108 3.18738 1.98443 3.47797C1.67777 3.76856 1.50383 4.16165 1.50006 4.57259C1.49629 4.98352 1.663 5.37942 1.96428 5.67501L11.3207 14.5411C11.6308 14.8349 12.0514 15 12.49 15C12.9286 15 13.3492 14.8349 13.6594 14.5411L23.0157 5.67501C23.3258 5.38111 23.5 4.98253 23.5 4.56695C23.5 4.15136 23.3258 3.75279 23.0157 3.45888Z"
                                    fill="black"/>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className={"border border-[#333333]/20 border-dashed border-top xl:hidden"} />
                <div
                    className={"flex flex-col max-lg:px-8 gap-8 3xl:gap-16 md:max-w-[360px] max-xl:mx-auto xl:w-[288px] 2xl:w-[323px] 3xl:w-[550px] items-end xl:pb-16 xl:pt-32 3xl:pt-[148px]"}>
                    <h1 className={"w-full max-xl:text-center 3xl:w-[450px] uppercase font-normal text-right text-base xl:text-2xl leading-5 xl:leading-7 tracking-[-0.09rem]"}>
                        HUMAN HEALTH SUPPORT SYSTEM.
                        SOVEREIGN, AI-READY</h1>
                    <span className={"max-xl:text-center 3xl:w-[550px] block text-[14px] max-md:leading-5 xl:text-lg text-[#333333]/80 text-right"}>Our mission is to build a foundation that helps national systems move from reactive care to predictive management — assessing provider performance and giving citizens insights to improve their health</span>
                    <span className={"block max-xl:text-center 3xl:w-[400px] text-brand text-[14px] leading-5 xl:text-lg text-right xl:leading-8"}>Designed for visionary nations seeking to lead the global transition to predictive healthcare</span>
                </div>
                <div className={"border w-full border-[#333333]/20 border-dashed border-top xl:hidden"} />
                <div className={"w-[480.1px] relative flex-1 h-[607px] max-xl:hidden"}>
                    <Image src={"/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"} alt={"faces"} width={482}
                           height={607}/>
                </div>
                <div
                    className={"flex flex-col max-lg:px-8 gap-8 3xl:gap-16 md:max-w-[360px] max-xl:mx-auto xl:w-[288px] 2xl:w-[323px] 3xl:w-[550px] xl:pb-16 xl:pt-32 3xl:pt-[148px] items-start"}>
                    <h2 className={"w-full max-xl:text-center 3xl:w-[450px] uppercase font-normal text-left text-base xl:text-2xl leading-5 xl:leading-7 tracking-[-0.07rem]"}>
                        ARCHITECTURE FOR NATIONAL HEALTH INTELLIGENCE</h2>
                    <span className={"max-xl:text-center 3xl:w-[530px] block text-[14px] max-md:leading-5 xl:text-lg text-[#333333]/80 text-left"}>HHSS combines a unified health-data standard with decision, modelling, accountability, and simulation layers to structure parameters, analyse risks, and test reforms across national health systems</span>
                    <span className={"block max-xl:text-center 3xl:w-[400px] text-brand text-[14px] leading-5 xl:text-lg text-left xl:leading-8"}>Enables governments to monitor public well-being and reduce country-wide medical costs</span>
                </div>
            </div>
            <div className={"flex flex-col justify-center gap-8"}>
                <div className={"flex gap-16 max-xl:hidden"}>
                    <Link href={linkExplore}
                          className={"py-5 px-6 bg-brand-yellow hover:bg-brand text-brand hover:text-brand-yellow transition-all rounded-2xl"}>EXPLORE</Link>
                    <Image src={"/logo.svg"} alt={"HHSS logo"} width={81} height={32}/>
                    <Link href={linkConnect}
                          className={"py-5 px-6 bg-brand hover:bg-brand-yellow text-brand-yellow hover:text-brand transition-all rounded-2xl"}>CONNECT</Link>
                </div>
                <div className={"flex justify-center"}>
                    <span className={"text-[#333333]/40 text-xs xl:text-base font-normal tracking-[-0.06rem]"}>Full website coming soon</span>
                </div>
            </div>
        </main>
    );
}


