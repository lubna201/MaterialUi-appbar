import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import './EditProfile.css';
import pic from './logo.jpg';
import Confetti from 'react-confetti';

const IntroAnimation = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <ScrollContainer >
            {/* <div style={{ position: "absolute", zIndex: "-1" }}> */}
                <Confetti style={{width:"100%"}}/>
            {/* </div> */}
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <img src={pic} alt="" srcset="" style={{width:"80%"}}/>
                    <span style={{ fontSize: "3em",marginLeft:"10%" }}>Kids Galaxy</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "2em" }}>Kids Galaxy is an educational platform which provides online learning and class apart educational services. ✨</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
            <Confetti />
                <Animator animation={FadeUp}>
                    <span style={{ fontSize: "3em" }}>Interactive digital learning platform</span>
                </Animator>
            </ScrollPage>
            {/* <ScrollPage page={3}>
                <div style={{ flex: "center" }}>
                    <span style={{ fontSize: "3em" }}>
                        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
                        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                    </span>
                </div>
            </ScrollPage> */}
            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "3em" }}>
                        Join Us Now
                    </span>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
};

export default IntroAnimation;