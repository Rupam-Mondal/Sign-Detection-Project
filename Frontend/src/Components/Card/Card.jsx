

function Card({img , handler , text}){
    return (
        <>
            <div className="bg-[#1f1f1f] h-[390px] w-80 cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="h-[160px] w-full bg-gray-800">
                    <img src={img} alt="Card Image" className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-white">{text}</h2>
                    <p className="text-gray-400 mt-2">Some descriptive text goes here. This could be a short summary of the content.</p>
                    <button className="mt-8 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={handler}>
                        Try it
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card