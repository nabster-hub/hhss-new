"use client";
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Modal = ({onClose}) => {
    const [copied, setCopied] = useState(false);
    const email = "ds@hhss.global";

    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(email);
            setCopied(true);

            setTimeout(() => setCopied(false), 3000);
        } catch(err){
            console.log("Copy failed!", err);
        }
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    return (
        <div className={"fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-xs px-[17px]"} onClick={onClose}>
            <div className={"bg-[#F9F9F9] p-6 pt-10 md:p-16 rounded-3xl relative min-w-[326px] md:w-[692px]"} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className={"absolute top-4 md:top-8 right-4 md:right-8 cursor-pointer"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1619_9064)">
                        <path d="M3.66346 20.6315C2.51734 19.5245 1.60315 18.2004 0.974242 16.7363C0.345334 15.2723 0.0142989 13.6976 0.000453081 12.1043C-0.0133927 10.5109 0.290228 8.93077 0.893598 7.45601C1.49697 5.98125 2.38801 4.64143 3.51472 3.51472C4.64143 2.38801 5.98125 1.49697 7.45601 0.893598C8.93077 0.290228 10.5109 -0.0133927 12.1043 0.000453081C13.6976 0.0142989 15.2723 0.345334 16.7363 0.974242C18.2004 1.60315 19.5245 2.51734 20.6315 3.66346C22.8174 5.92668 24.0269 8.95791 23.9995 12.1043C23.9722 15.2506 22.7102 18.2604 20.4853 20.4853C18.2604 22.7102 15.2506 23.9722 12.1043 23.9995C8.95791 24.0269 5.92668 22.8174 3.66346 20.6315ZM13.8275 12.1475L17.2235 8.75146L15.5315 7.05946L12.1475 10.4555L8.75146 7.05946L7.05946 8.75146L10.4555 12.1475L7.05946 15.5435L8.75146 17.2355L12.1475 13.8395L15.5435 17.2355L17.2355 15.5435L13.8395 12.1475H13.8275Z" fill="#333333" fillOpacity="0.3"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1619_9064">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className={"flex flex-col gap-8"}>
                <div className={"flex flex-col gap-5"}>
                    <h3 className={"font-inter text-brand font-semibold text-3xl leading-[120%] tracking-[-0.06em]"}>Direct communication with the Founder</h3>
                    <span className={"font-inter text-[#333333] font-light text-xl leading-[30px]"}>
                        For official inquiries from governments, public institutions, regulators, strategic partners, and institutional investors regarding HHSS infrastructure & standard.
                    </span>
                </div>
                <div className={"flex max-md:flex-col gap-[10px]"}>
                    <div className={`px-4 py-5 border border-brand rounded-2xl flex justify-between w-full md:w-[357px] ${copied && "bg-[#EFEFEF]"}`}>
                        <span className={"font-inter font-medium text-base"}>{ copied ? "Email "+email : email}</span>
                        {copied ? (
                            <i className={"w-6 h-6 cursor-pointer"} onClick={handleCopy}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4229 6.38086C22.5558 6.37685 22.6782 6.41597 22.7881 6.49316L22.8936 6.58301L22.8945 6.58398C23.0245 6.71888 23.0977 6.87116 23.0996 7.03906L23.0879 7.16406C23.0617 7.28561 22.9944 7.39716 22.8936 7.49805L13.0674 17.3242C12.8729 17.5187 12.6417 17.6191 12.3779 17.6191C12.1142 17.6191 11.8833 17.5188 11.6895 17.3242L7.27344 12.9102C7.15344 12.7902 7.08954 12.6411 7.08105 12.4697C7.07231 12.2924 7.14012 12.1335 7.27246 11.9961L7.27441 11.9941C7.40949 11.86 7.56329 11.7853 7.73438 11.7852C7.90566 11.7852 8.06011 11.8598 8.19531 11.9941L12.3779 16.1768L21.9775 6.57715C22.1011 6.45271 22.2512 6.38607 22.4229 6.38086ZM1.56055 11.7881C1.73081 11.7864 1.8841 11.8605 2.01855 11.9941L6.20703 16.1826L6.68359 15.707L6.70117 15.6895L6.72461 15.6826C6.82898 15.6505 6.94233 15.6484 7.06152 15.6729C7.19195 15.6997 7.31158 15.7739 7.4209 15.8838C7.55538 16.0183 7.63066 16.1722 7.62891 16.3428V16.3438C7.62532 16.5124 7.54891 16.665 7.41504 16.7988L6.89062 17.3242L6.88965 17.3252C6.6952 17.5148 6.46463 17.6137 6.20215 17.6162H6.20117C5.93748 17.6177 5.70633 17.518 5.51172 17.3242L1.09668 12.9102C0.973199 12.7867 0.906505 12.637 0.900391 12.4658C0.89414 12.2881 0.96656 12.1296 1.10352 11.9941L1.10449 11.9932C1.23893 11.8628 1.39188 11.7899 1.56055 11.7881ZM16.2344 6.38965C16.3675 6.38302 16.4904 6.4195 16.6016 6.49414L16.709 6.58105L16.71 6.58301C16.8444 6.71824 16.9199 6.8726 16.9199 7.04395C16.9199 7.2152 16.8443 7.3697 16.71 7.50488L12.0781 12.1357C11.9584 12.2555 11.8108 12.3206 11.6406 12.3291C11.4619 12.338 11.3022 12.2697 11.165 12.1367L11.1641 12.1357C11.0287 12.0012 10.9531 11.8474 10.9531 11.6758C10.9531 11.5036 11.0286 11.3495 11.1641 11.2148L15.7949 6.58301C15.9149 6.46302 16.063 6.39813 16.2344 6.38965Z" fill="black" stroke="black" strokeWidth="0.2"/>
                                </svg>
                            </i>
                        ) : (
                            <i className={"w-6 h-6 cursor-pointer"} onClick={handleCopy}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.998 10C20.986 7.825 20.89 6.647 20.121 5.879C19.243 5 17.828 5 15 5H12C9.172 5 7.757 5 6.879 5.879C6 6.757 6 8.172 6 11V16C6 18.828 6 20.243 6.879 21.121C7.757 22 9.172 22 12 22H15C17.828 22 19.243 22 20.121 21.121C21 20.243 21 18.828 21 16V15" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M3 10V16C3 16.7956 3.31607 17.5587 3.87868 18.1213C4.44129 18.6839 5.20435 19 6 19M18 5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H11C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </i>
                        )}
                    </div>
                    <Link href={"mailto:ds@hhss.global"} className={"bg-brand flex items-center justify-center py-[23.5px] w-full md:w-[197px] px-6 text-sm text-brand-yellow rounded-2xl"}>COMPOSE EMAIL</Link>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Modal;