import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import SwipeableViews from "react-swipeable-views";
// import useForceUpdate from 'use-force-update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useGoogleSheets from "use-google-sheets";

const VALUES = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
];
const selected = [];

// const [selected, changeSelected] = useState([]);

export default class Timeline extends React.Component {
    state = {
        value: 0, previous: 0, minEventPadding: 20,
        // maxEventPadding: 150,
        minEventPadding: 30,
        linePadding: 50,
        labelWidth: 50,
        fillingMotionStiffness: 150,
        fillingMotionDamping: 25,
        slidingMotionStiffness: 150,
        slidingMotionDamping: 25,
        stylesBackground: 'transparent',
        stylesForeground: '#D4A661',
        stylesOutline: '#D4A661',
        isTouchEnabled: true,
        isKeyboardEnabled: true,
        isOpenEnding: false,
        isOpenBeginning: true,
    };

    render() {
        const state = this.state;

        if (selected.length < this.props.data.length) {

            this.props.data.forEach(element => {
                selected.push(null);
            });
            console.log(this.props.textQuestion);
        }
        return (
            <><ToastContainer
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
                <div className="w-4/5 mx-auto h-28">
                    <div className="h-full mx-auto text-custom-yellow font-serif">
                        <HorizontalTimeline
                            fillingMotion={{ stiffness: state.fillingMotionStiffness, damping: state.fillingMotionDamping }}
                            index={this.state.value}
                            indexClick={(index) => {
                                this.setState({ value: index, previous: this.state.value });
                            }}
                            getLabel={(index) => { return `${index}/${this.props.data.length}` }}
                            isKeyboardEnabled={state.isKeyboardEnabled}
                            isTouchEnabled={state.isTouchEnabled}
                            labelWidth={state.labelWidth}
                            linePadding={state.linePadding}
                            minEventPadding={100}
                            slidingMotion={{ stiffness: state.slidingMotionStiffness, damping: state.slidingMotionDamping }}
                            styles={{
                                background: state.stylesBackground,
                                foreground: state.stylesForeground,
                                outline: state.stylesOutline,
                            }}
                            values={VALUES}
                            isOpenEnding={false}
                            isOpenBeginning={false}
                        />
                    </div>
                    <div className='text-center pt-8 mx-auto flex flex-col justify-center'>
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={(value, previous) => {
                                this.setState({ value: value, previous: previous });
                            }}
                            enableMouseEvents={true}
                            resistance>
                            {this.props.data.map((ques, index) => index === 7 ? <div className="lg:w-2/5 w-full mx-auto">
                                <div className="border border-custom-yellow rounded-md text-custom-yellow h-36 lg:pt-7 pt-2 px-14">
                                    <p className="">Q.{this.props.textQuestion}</p>
                                </div>
                                <div className="flex flex-col justify-start mt-9 overflow-y-visible max-h-72">
                                    <div class="md:w-full">
                                        <div className="mb-3 pt-0">
                                            <input type="text" placeholder="Answer" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" onChange={(e) => { selected[this.props.data.length - 1] = e.target.value; }} />
                                        </div>
                                        {/* <p className = "text-custom-yellow text-base pt-4">Enter your email</p>
                                    <div className="mb-3 pt-0">
                                        <input type="text" placeholder="Email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" onChange={(e) => { selected[this.props.data.length - 1] = e.target.value; }} />
                                    </div> */}
                                    </div>
                                    <button class="bg-custom-yellow text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                        onClick={() => {
                                            if (selected.includes(null)) {
                                                // console.log(selected);
                                                console.log("Nope");
                                                toast.error('Some questions are unanswered', {
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
                                            else {
                                                console.log("YES");
                                                this.props.changeFormState(!this.props.formComplete);
                                                console.log(this.props.formComplete);
                                                setTimeout(() => {
                                                    this.props.changeFormState(!this.props.formComplete);
                                                }, 2000);
                                            }
                                        }}
                                    >
                                        Submit form
                                    </button>
                                </div>
                            </div> : <Question question={ques.QUESTIONS} op1={ques.OPTION1} op2={ques.OPTION2} op3={ques.OPTION3} op4={ques.OPTION4} index={index} />)}

                        </SwipeableViews>
                        <div className="md:flex hidden text-custom-yellow justify-between mt-8 mx-auto w-2/5">
                            <button onClick={() => this.setState({ value: (this.state.value === 0 ? this.props.data.length - 1 : this.state.value - 1), previous: this.state.value })}>
                                <FaArrowLeft />
                            </button>
                            <button onClick={() => this.setState({ value: (this.state.value === this.props.data.length - 1 ? 0 : this.state.value + 1), previous: this.state.value })}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                </div>
            </>
        );

    }
}

function Question(props) {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    return (<>
        <div className="lg:w-2/5 w-full mx-auto">
            <div className="border border-custom-yellow rounded-md text-custom-yellow h-36 lg:pt-7 pt-2 px-14">
                <p className="">Q. {props.question}</p>
            </div>
            <div className="flex flex-col justify-between mt-9 overflow-y-visible max-h-72">
                <Option op={props.op1} index={props.index} optionIndex={0} onClick={() => {
                    selected[props.index] = 0;
                    // console.log(selected);
                    forceUpdate();
                }
                } />
                <Option op={props.op2} index={props.index} optionIndex={1} onClick={() => {
                    selected[props.index] = 1;
                    // console.log(selected);
                    forceUpdate();
                }
                } />
                <Option op={props.op3} index={props.index} optionIndex={2} onClick={() => {
                    selected[props.index] = 2;
                    forceUpdate();
                }
                } />
                <Option op={props.op4} index={props.index} optionIndex={3} onClick={() => {
                    selected[props.index] = 3;
                    forceUpdate();
                }
                } />
            </div>
        </div>
    </>)
}

function Option(props) {
    var isSelected = selected[props.index] === props.optionIndex;
    return (
        <div className={`${isSelected ? "bg-custom-yellow" : "hover:bg-gray-600 bg-gray-900"} h-16 text-white flex flex-col justify-center rounded-md my-2`} onClick={props.onClick}>
            {props.op}
        </div>
    );
}