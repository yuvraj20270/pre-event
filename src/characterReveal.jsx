import sherlock from './sherlock.png';

export default function CharacterReveal() {
    return (
        <div className="flex w-full justify-around h-full items-center lg:flex-row flex-col">
            <div className="flex flex-col bg-white bg-opacity-5 w-1/3 h-4/5 rounded-md justify-around items-center">
                <div className="flex flex-wrap justify-center items-center">
                    <img src={sherlock} alt="..." className="shadow max-w-full h-18 align-middle border-8 border-custom-yellow rounded-full" />
                </div>

                <p className="text-3xl text-white">You are</p>
                <p className="text-9xl font-serif text-white">Sherlock</p>
            </div>
            <div className="flex flex-col items-center justify-around h-4/5 w-1/3 rounded-md ">
                <p className="text-4xl font-semibold text-white text-center">Post this on your story & Tag three of your friends</p>
                <p className="text-3xl text-white text-center">Are you ready to get exciting cash prizes and a sneak peek at CC’s next event ?</p>
                <input
                    type="text" placeholder="Enter your email id" className="w-3/4 placeholder-custom-yellow bg-transparent px-3 py-5 relative rounded text-2xl text-center text-custom-yellow border-2 border-custom-yellow shadow outline-none focus:outline-none focus:rin"
                />
                <button className="bg-custom-yellow text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => window.location.reload()}>
                    Submit
                </button>
            </div>
        </div>
    );
}