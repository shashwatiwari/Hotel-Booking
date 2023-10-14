import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md'

const iconStyle = {
    filter: 'invert(1)',
};

const Footer = () => (

    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
            <div className="flex-[1] flex flex-col justify-start mr-10 ml-4">
                <h1 className=" text-#af9a7d text-3xl font-extrabold font-poppins">My Hotel</h1>
                <p className={`${styles.paragraph} mt-2 max-w-[312px] text-slate-600`} style={{ display: 'flex', alignItems: 'center' }}>
                    <MdEmail size={23} /> <span style={{ marginLeft: '10px' }}>myhotel141@gmail.com</span>
                </p>

                <p className={`${styles.paragraph} mt-2 max-w-[312px] text-slate-600`} style={{ display: 'flex', alignItems: 'center' }}>
                    <BsTelephoneFill /> <span style={{ marginLeft: '10px' }}>+91 98XXX87867</span>
                </p>

                <p className={`${styles.paragraph} mt-2 max-w-[312px] text-slate-600`} style={{ display: 'flex', alignItems: 'center' }}>
                    <MdLocationOn size={80} /> <span style={{ marginLeft: '10px' }}>Sri Ram Niketan Colony Gate no.21 GT Road leproxy Chauraha Meerut Uttar Pradesh 22XXXX3</span>
                </p>

            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] ml-4`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-slate-600 hover:text-primary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-slate-600 ml-4">
                Copyright Ⓒ 2023 My Hotel. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] mr-4 object-contain hover: cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                        style={iconStyle}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;

