import Link from "next/link"
export default function Footer(){
    return(
        <section className="w-full h-[20dvh] bg-[#f9f4f2]">
            <footer className="w-full h-full flex flex-col items-center justify-center" >
                <div className="w-full h-full flex flex-col items-center justify-center">
      
      <h3 className="[font-family:var(--font-cormorant)] text-gray-500 mb-6 text-xl">
        Capturing stories that feel eternal.
      </h3>

      <p className="[font-family:var(--font-cormorant)] text-gray-500 text-lg">
        © {new Date().getFullYear()} Mauco Riqueiro — All rights reserved
      </p>
                </div>
            </footer>
        </section>
    )
}