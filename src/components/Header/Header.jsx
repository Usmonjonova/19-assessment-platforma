import React from "react";
import humo from '../../assets/images/humo-icon.svg'
import useFetch from "../../hooks/useFetch";
import "../../App.css"
import norma from '../../assets/images/norma-header.svg'

const Header = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/get-personal-info`);

    return (
        <header className="header container px-4 py-8 dark:bg-dark-bg">
            <div className="header__title-icon flex justify-between items-center mb-[35px]">
                <div className="header__logo text-center max-w-[200px] w-full flex items-center flex-col">
                    <img src={humo} alt="humo-icon" className="header__logo-img w-[96px] " />
                    <h3 className="header__logo-title text-gray-800 mt-[10px] text-[14px] leading-[120%] font-semibold uppercase">Давлат хизматининг ягона электрон ахборот-таҳлил тизими</h3>
                </div>
                <h2 className="header__title text-gray-800 dark:text-white text-[32px] leading-[120%] font-semibold text-center max-w-[644px] w-full">Республика Ассессмент маркази онлайн платформаси</h2>
                <h1 className="header__number relative text-blue-700 font-semibold text-7xl leading-[120%] after:content-['◥'] before:content-['₂'] before:absolute before:text-[54px] before:right-[-52px] before:top-[-42px] before:text-[#28A264] after:text-[22px] after:text-[#28A264] after:rotate-[-45deg] after:top-5 after:left-24 after:leading-[9px] after:absolute ">78</h1>
            </div>
            <div className="header__info flex gap-5 justify-between">
                {data && (
                    <>
                        <div className="flex gap-[32px]">
                            <div className="header__info-image">
                                <img src={data.imageUrl} alt="user-image" className="w-full" />
                            </div >
                            <div className="header__info-details flex flex-col gap-2">
                                <h1 className="header__info-name text-4xl font-bold mb-7">{data.firstName} <br /><span className="font-normal">{data.lastName}</span></h1>
                                <p className="header__info-birthdate text-xl text-[#495057]">Тугилган сана: <span className="text-[#212529] ml-3">{data.birthday}</span></p>
                                <p className="header__info-address  text-xl text-[#495057] mb-[42px]">Тугилган жой: <span className="text-[#212529] ml-3">{data.address}</span></p>
                                <div className="flex gap-3">
                                    <p className="header__info-height text-lg text-[rgb(0, 0, 0)] font-normal">Буйи: <br /> <span className="font-medium">{data.height}</span></p>
                                    <p className="header__info-weight text-lg text-[rgb(0, 0, 0)] font-normal">Вазни: <br /> <span className="font-medium">{data.weight}</span></p>
                                    <p className="header__info-index text-lg text-[rgb(0, 0, 0)] font-normal">Индекс: <br /> <span className="font-medium">{data.index}</span></p>
                                    <img src={norma} alt="norma" />
                                </div>
                            </div>
                        </div>
                        <div className="header__info-position flex flex-col gap-4 max-w-[400px] w-full">
                            <p className="text-xl text-[#495057]">Лавозими: <br /> <span className="text-[#212529]">{data.position}</span></p>
                            <p className="text-xl text-[#495057]">Номзод: <br /> <span className="text-[#212529]">{data.candidate}</span></p>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
