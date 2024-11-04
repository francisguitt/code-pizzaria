import { IconHeartFilled } from "@tabler/icons-react";
const Footer = () => {
    return (
        <footer className="px-5 py-2 bg-orange-400 overflow-x-hidden">
            <div className="flex justify-center flex-col items-center">
                <p className="font-semibold text-zinc-700 text-center text-[14px]">
                    code pizzaria &copy; {new Date().getFullYear()} todos os rdireitos reservados
                </p>
                <div className="flex items-center">
                    <p className="flex gap-2 font-semibold text-center text-zinc-700">
                        desenvolvido com  <IconHeartFilled color="red" />   por guitt web code
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;