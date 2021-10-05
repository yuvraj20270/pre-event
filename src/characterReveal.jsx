import { useState } from 'react';
import sherlock from './sherlock.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import axios from 'axios';
import useGoogleSheets from 'use-google-sheets';

var character = null;
export default function CharacterReveal() {
    var [emailId, changeEmail] = useState('');
    const { data, load, err } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: '1Aex4NcDCfKoY72FMqqTvbK7D82VIwP6ALLY5t7BWVUU',
    });
    if (data && data[0]) {
        var num = Math.floor(Math.random()) % data[0].data.length;
        if (!character) {
            character = data[0].data[num].Name;
        }
        console.log(character);
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="flex w-full justify-around h-full items-center lg:flex-row flex-col">
                <div className="flex flex-col bg-white bg-opacity-5 lg:w-1/3 w-4/5 h-4/5 rounded-md justify-around items-center">
                    <div className="flex flex-wrap justify-center items-center">
                        <img src={sherlock} alt="..." className="shadow max-w-full h-18 align-middle border-8 border-custom-yellow rounded-full" />
                    </div>

                    <p className="text-3xl text-white">You are</p>
                    <p className="lg:text-6xl text-3xl font-serif text-white" dangerouslySetInnerHTML={{__html: character}}></p>
                </div>
                <div className="flex flex-col items-center justify-around h-4/5 lg:w-1/3 w-4/5 rounded-md ">
                    <p className="lg:text-4xl font-semibold text-white text-center">Post this on your story & Tag three of your friends</p>
                    <p className="lg:text-3xl text-white text-center">Are you ready to get exciting cash prizes and a sneak peek at CC’s next event ?</p>
                    <input
                        type="text" placeholder="Enter your email id" value={emailId} onChange={(value) => changeEmail(value.target.value)} className="w-3/4 placeholder-custom-yellow bg-transparent px-3 py-5 relative rounded text-2xl text-center text-custom-yellow border-2 border-custom-yellow shadow outline-none focus:outline-none focus:rin"
                    />
                    <button className="bg-custom-yellow text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={(e) => {
                        if (emailId === '') {
                            toast.error('Email empty!', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                            });
                        }
                        else if(!validator.isEmail(emailId)){
                            toast.error('Email not valid', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                            });
                        }
                        else{
                            var data;
                            toast.info('Submitting', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                            });
                            axios.get('https://sheet.best/api/sheets/6ca34541-f0c8-4bc0-afaa-3d802475906b').then(response => {
                                data = response;
                                console.log(data.data);
                                var flag = false;
                                data.data.forEach(element => {
                                    if (element['email'] === emailId) {
                                        flag = true;
                                    }
                                });
                                if (flag) {
                                    toast.error('You are already registered', {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark"
                                    });
                                }
                                else{
                                    axios.post('https://sheet.best/api/sheets/6ca34541-f0c8-4bc0-afaa-3d802475906b', {"Character": character, "email": emailId}).then(response => {
                                        toast.success('Successfully registered', {
                                            position: "top-center",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "dark"
                                            
                                        });
                                        window.location.reload();
                                    });
                                    
                                }
                            });
                            
                        }
                    }}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}