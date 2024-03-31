// import React from 'react'
import './quiz.css'
import Review from './Review'
import { data } from '../assets/data';
import React, { useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';



const Quiz = () => {

    const Navigate = useNavigate();

    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index]);
    let[lock,setLock]=useState(false);
    let[score,setScore]=useState(0);
    let[result,setResult]=useState(false);

    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);

    let option_array=[Option1,Option2,Option3,Option4];

    const checkAns = (e,ans) => {
        if(lock===false){
            if(question.ans===ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1);
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
    }

    const next = () =>{
        if(lock===true){
            if(index===data.length-1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            }
            )
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    

    return (
        <>
            <div className='fulldiv'>
                <div className='title1'>
                    <h1 className='heading1'>Let’s Start Quiz</h1>
                    <hr className='hr1'></hr>
                </div>
            </div>
            <div className='container'>
                <h5>ALL THE BEST!</h5>
                <hr/>
                {result?<></>:<>
                    <h2>{index+1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className='index'>{index+1} of {data.length} Questions</div>
                </>}

                {result?<>
                <div>
                    <div className='results'>
                        <Row>
                            <Col span={24}><h4>Grade 12 - Semester 2 - Practical No.03</h4></Col>
                        </Row>
                        <Row>
                            <Col className='profpic' span={6}><img src="images/profilePic.png" alt=""/></Col>
                            <Col className='profdesc' span={12}>
                                <Row>
                                    <Col className='name' span={24}><h1>John Smith</h1></Col>
                                </Row>
                                <Row>
                                    <Col className='emal' span={24}><h3>johnSmith@gmail.com</h3></Col>
                                </Row>
                                <Row>
                                    <Col className='f-resu' span={24}>
                                        <h2>You Scored {score} out of {data.length} </h2>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={5}><img className='medalpic' src="images/profilePic.png" alt="medalpic"/></Col>
                        </Row>
                        <div className='f-result'>
                            <Row>
                                <Col className='col'span={8}><h1>96</h1> <br/> <h4>Scored</h4></Col>
                                <Col className='col' span={8}><h1>78</h1> <br/> <h4>Percentage</h4></Col>
                                <Col className='col' span={8}><h1>8</h1> <br/> <h4>Rank</h4></Col>
                            </Row>
                        </div>
                        <br/><br/>
                        <div className='buttons'>
                            <button onClick={reset}>Reset</button> {' '}
                            <Button onClick={()=>Navigate('/Review')}>
                                Done 
                            </Button>
                            
                        </div>
                    </div>
                </div>
                </>:<></>}
            </div>
        </>
    )
}

export default Quiz;
