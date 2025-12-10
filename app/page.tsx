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
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.6671 16.215C13.5945 16.1463 13.509 16.0926 13.4156 16.057C13.3221 16.0214 13.2226 16.0045 13.1227 16.0073C13.0227 16.0101 12.9243 16.0326 12.8331 16.0735C12.7418 16.1143 12.6595 16.1728 12.5908 16.2454C12.5221 16.3181 12.4684 16.4036 12.4328 16.497C12.3972 16.5904 12.3803 16.69 12.3831 16.7899C12.3859 16.8899 12.4084 16.9883 12.4493 17.0795C12.4902 17.1708 12.5486 17.2531 12.6213 17.3218L19.472 23.7919C19.6134 23.9256 19.8005 24 19.995 24C20.1895 24 20.3766 23.9256 20.5179 23.7919L27.3694 17.3218C27.4437 17.2535 27.5037 17.1713 27.5459 17.0797C27.588 16.9881 27.6116 16.889 27.6152 16.7882C27.6188 16.6874 27.6023 16.587 27.5667 16.4926C27.5311 16.3983 27.4772 16.3119 27.4079 16.2386C27.3387 16.1653 27.2556 16.1064 27.1634 16.0655C27.0712 16.0246 26.9719 16.0024 26.871 16.0002C26.7702 15.998 26.67 16.0158 26.5761 16.0527C26.4823 16.0896 26.3967 16.1448 26.3243 16.215L19.995 22.1919L13.6671 16.215Z"
                                    fill="black"/>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className={"border border-[#333333]/20 border-dashed border-top xl:hidden"} />
                <div
                    className={"flex flex-col max-lg:px-8 gap-8 3xl:gap-16 md:max-w-[360px] max-xl:mx-auto xl:w-[288px] 2xl:w-[323px] 3xl:w-[550px] items-end xl:pb-16 xl:pt-32 3xl:pt-[148px]"}>
                    <h1 className={"w-full max-xl:text-center 3xl:w-[450px] uppercase font-normal text-right text-base xl:text-2xl leading-5 xl:leading-7 tracking-[-0.09rem]"}>
                        human health support system. Secure, Sovereign, AI READY</h1>
                    <span className={"max-xl:text-center 3xl:w-[550px] block text-[14px] max-md:leading-5 xl:text-lg text-[#33333399]/60 text-right"}>Our mission is to create a foundation that keeps citizens’ medical data under national control, compels providers to prevent illness before it appears, and motivates people to live free from harmful habits</span>
                    <span className={"block max-xl:text-center 3xl:w-[400px] text-brand text-[14px] leading-5 xl:text-lg text-right xl:leading-8"}>Designed for visionary nations seeking to lead the global transition for the next century</span>
                </div>
                <div className={"border w-full border-[#333333]/20 border-dashed border-top xl:hidden"} />
                <div className={"w-[480.1px] relative flex-1 h-[607px] max-xl:hidden"}>
                    <Image src={"/13106b318036c693e8e0ca9f9e5a0a808b305fa6.png"} alt={"faces"} width={482}
                           height={607}/>
                </div>
                <div
                    className={"flex flex-col max-lg:px-8 gap-8 3xl:gap-16 md:max-w-[360px] max-xl:mx-auto xl:w-[288px] 2xl:w-[323px] 3xl:w-[550px] xl:pb-16 xl:pt-32 3xl:pt-[148px] items-start"}>
                    <h2 className={"w-full max-xl:text-center 3xl:w-[450px] uppercase font-normal text-left text-base xl:text-2xl leading-5 xl:leading-7 tracking-[-0.07rem]"}>
                        Infrastructure for Predictive, Value-Based Healthcare</h2>
                    <span className={"max-xl:text-center 3xl:w-[530px] block text-[14px] max-md:leading-5 xl:text-lg text-[#33333399]/60 text-left"}>HHSS transforms fragmented health information into actionable intelligence through a standard that connects legacy medical records with biological, behavioural, environmental, and sensor-based data</span>
                    <span className={"block max-xl:text-center 3xl:w-[400px] text-brand text-[14px] leading-5 xl:text-lg text-left xl:leading-8"}>Enables governments to observe population well-being and reduce national medical costs</span>
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


