import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-center my-20 mx-10'>
            <div className="flex-1">
                <h1 className='font-bold text-4xl '>Selamat Datang di</h1>
                <h1 className='font-bold text-6xl'>BandungVoyage!</h1>
            </div>
            <div className="flex flex-col flex-1 gap-5">
                <p className="font-bold text-xl">Eksplor keindahan dari Bandung bersama BandungVoyage!</p>
                <p>Temukan pesona tersembunyi di setiap sudut kota, mulai dari panorama alam yang memukau hingga kekayaan budaya yang memikat hati. Jelajahi pegunungan yang hijau, nikmati kesejukan udara pagi. BandungVoyage adalah panduan terpercaya anda untuk merasakan pengalaman tak terlupakan di kota kembang ini.</p>
                <p className='font-bold text-xl'>Mulailah petualangan Anda di Bandung yang penuh dengan keajaiban!</p>
            </div>
        </div>
    )
}

export default Header