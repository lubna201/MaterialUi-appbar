import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState, useReducer } from 'react'
import { BsUpload, FiEdit, AiOutlineEnter, AiFillDelete } from 'react-icons/all'
// import './style.css'
import axios from 'axios'
import { getCookie } from './cookies'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './EditProfile.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const AddCourse = () => {
    function reducer(state, action) {
        var i, j;
        if (action.type === "add_item") {
            const newsubjects = [...state.subjects, action.payLoad]
            return { ...state, subjects: newsubjects, arr: [] }
        }
        if (action.type === "remove_item") {
            const newsubjects = state.subjects.filter((sub) => sub.id !== action.payLoad)
            return { ...state, subjects: newsubjects }
        }

        if (action.type === "add_arr") {
            const newLesson = [...state.arr, action.payLoad]
            return { ...state, arr: newLesson }
        }
        if (action.type === "remove_lesson") {
            const newArr = state.arr.filter((les) => les.LessonName !== action.payLoad)
            return { ...state, arr: newArr }
        }
        if (action.type === "edit_lesson") {
            const newArr = state.arr

            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].LessonName === tempL) {
                    newArr[i].LessonName = action.payLoad
                    var ld = 0
                    for (j = 0; j < chapters; j++) {
                        ld += parseInt(chapters[j][1])
                    }
                    newArr[i].LessonDuration = ld
                    newArr[i].chapters = chapters;
                }
            }
            setChapters([])
            return { ...state, arr: newArr }

        }
        if (action.type === "edit_sub") {
            return { ...state, arr: action.payLoad }
        }
        if (action.type === "edit_subject") {
            const newSubject = state.subjects
            var subDur = 0
            for (i = 0; i < state.arr.length; i++) {
                subDur += parseInt(state.arr[i].LessonDuration)
            }
            for (j = 0; j < newSubject.length; j++) {
                console.log(newSubject[j].Subject.subjectName)
                if (newSubject[j].Subject.subjectName === action.payLoad.subTemp) {
                    console.log(newSubject[j])
                    newSubject[j].Subject.subjectName = action.payLoad.subject
                    newSubject[j].Subject.subjectDuration = subDur
                    newSubject[j].Subject.Lessons = state.arr

                }
            }
            return { ...state, subjects: newSubject, arr: [] }
        }
    }
    const [subject, setSubject] = useState("")
    const [lesson, setLesson] = useState("")
    const [chapter, setChapter] = useState("")
    const [duration, setDuration] = useState("")
    const [tempL, setTempL] = useState("")
    const [chapters, setChapters] = useState([])
    const [state, dispatch] = useReducer(reducer, { subjects: [], arr: [] })
    const [edit, setEdit] = useState(false)
    const [editChapter, setEditChapter] = useState(false)
    const [tempC, setTempC] = useState("")
    const [tempS, setTempS] = useState("")
    const [editSubject, setEditSubject] = useState(false)

    const [courseName, setCourseName] = useState("")
    const [courseShortDes, setCourseShortDes] = useState("")
    const [courseDes, setCourseDes] = useState("")
    const [diffLevel, setDiffLevel] = useState("")
    const [imageD, setImageD] = useState()
    const [age, setAge] = useState("")
    const [board, setBoard] = useState("")
    const [mode, setMode] = useState("")
    const [standard, setStandard] = useState("")
    const [courseData, setCourseData] = useState({
        coursePrice: "",
        discount: "",
        actualPrice: "",
        priceAfterDiscount: ""
    });
    const { coursePrice, discount, actualPrice, priceAfterDiscount } = courseData;

    const onChange = (e) => setCourseData({ ...courseData, [e.target.name]: e.target.value });

    courseData.actualPrice = coursePrice;
    courseData.priceAfterDiscount = (coursePrice - (coursePrice * discount) / 100)

    function courseSubmit(e) {
        e.preventDefault()
        const imageData = new FormData();
        imageData.append('courseImg', imageD, imageD.name)
        var courseDur = 0
        for (var i = 0; i < state.subjects.length; i++) {
            courseDur += state.subjects[i].Subject.subjectDuration
        }
        const finalData = {
            courseName: courseName, courseShortDes: courseShortDes, courseDes: courseDes, courseImg: imageData.get('courseImg'), duration: courseDur, addedBy: "rohith@gmail.com",
            standard: standard, diffLevel: diffLevel, age: age, board: board, mode: mode,
            coursePrice: courseData.coursePrice, discount: courseData.discount, actualPrice: courseData.actualPrice,
            priceAfterDiscount: courseData.priceAfterDiscount, subjects: state.subjects
        }
        console.log(finalData)
        console.log(imageData.get('courseImg'))
        axios.post("http://127.0.0.1:8000/api/course/addCourse/", { finalData: finalData }, {
            headers: {
                'Authorization': `Bearer ${getCookie('token').substring(0, 205)}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    }
    function handleSubmit(e) {
        e.preventDefault()
        var subDur = 0
        for (var i = 0; i < state.arr.length; i++) {
            subDur += parseInt(state.arr[i].LessonDuration)
        }
        const newItem = { id: new Date().getTime().toString(), Subject: { subjectName: subject, subjectDuration: subDur, Lessons: state.arr } }
        dispatch({ type: "add_item", payLoad: newItem })

        setSubject("")



    }
    function EditSubject(e) {
        e.preventDefault()
        dispatch({ type: "edit_subject", payLoad: { subject: subject, subTemp: tempS } })
        setSubject("")
        setEditSubject(false)
    }
    function editS(sName) {
        setEditSubject(true)
        setSubject(sName)
        setTempS(sName)
        for (var i = 0; i < state.subjects.length; i++) {
            if (state.subjects[i].Subject.subjectName === sName) {
                dispatch({ type: "edit_sub", payLoad: state.subjects[i].Subject.Lessons })
            }
        }

    }

    function insertLesson(e) {
        e.preventDefault()
        var lesDur = 0
        for (var i = 0; i < chapters.length; i++) {
            lesDur += parseInt(chapters[i][1])
        }
        const newArr = { LessonName: lesson, LessonDuration: lesDur, chapters: chapters }
        dispatch({ type: "add_arr", payLoad: newArr })

        setLesson("")
        setChapters([])
    }
    function editLesson(e) {
        e.preventDefault()
        dispatch({ type: "edit_lesson", payLoad: lesson })

        setLesson("")
        setEdit(false)

    }
    function editl(les) {
        setEdit(true)
        setLesson(les)
        setTempL(les)
        for (var i = 0; i < state.arr.length; i++) {
            if (state.arr[i].LessonName === les) {
                setChapters(state.arr[i].chapters)
            }
        }


    }
    function insertChapter(e) {
        e.preventDefault()
        if (chapter !== "" && duration !== "") {
            const temparr = [chapter, duration]
            setChapters([...chapters, temparr])
        }


        setChapter("")
        setDuration("")
    }
    function removeChap(chap) {
        const newChapters = chapters.filter((c) => c[0] !== chap)
        setChapters(newChapters)
    }
    function EditChapter(e) {
        e.preventDefault()

        for (var i = 0; i < chapters.length; i++) {
            if (chapters[i][0] === tempC) {

                chapters[i][0] = chapter
                chapters[i][1] = duration
            }
        }
        setEditChapter(false)
        setChapter("")
        setDuration("")
    }
    function editC(chap) {
        setEditChapter(true)
        setChapter(chap[0])
        setDuration(chap[1])
        setTempC(chap[0])

    }


    return (
        <React.Fragment>
            <Container>
            <Grid container spacing={3} style={{ marginTop: "2%", justifyContent: "center" }}>
                <Grid item xs={12} sm={6}>
                    <Card className="rootCard">
                        <form>
                            <CardContent>
                                <div className="first">
                                    <div className="form-group">
                                        <TextField id="outlined-basic" label="Enter course name" variant="outlined" style={{width:"100%"}} className="form-control" type="text" name="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)}></TextField>
                                    </div>
                                    <div className="form-group">
                                        <TextField id="outlined-basic" label="Enter short description" style={{width:"100%"}} variant="outlined" className="form-control" type="text" name="shortDescription" value={courseShortDes} onChange={(e) => setCourseShortDes(e.target.value)}></TextField>
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            label="Enter long descripton"
                                            multiline
                                            rows={4}
                                            // defaultValue="Default Value"
                                            style={{width:"100%"}}
                                            variant="outlined"
                                            className="form-control" type="textarea" id="longDescription" name="longDescription" value={courseDes} onChange={(e) => setCourseDes(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField label="Enter the class" variant="outlined" style={{width:"100%"}} className="form-control" type="text" id="standard" name="standard" value={standard} onChange={(e) => setStandard(e.target.value)}></TextField>
                                    </div>
                                    <div className="form-group" id="file-group">
                                        <label htmlFor="file" style={{ marginLeft:"5px" ,marginTop:"15px"}}><BsUpload className="uploadIcon"/> Upload Course Image</label><input id="file" type="file" onChange={(e) => setImageD(e.target.files[0])} className="form-control" />

                                    </div>
                                </div>
                                <div className="second">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >
                                                <FormControl variant="outlined" className="form-control" style={{width:"100%"}}>
                                                    <InputLabel id="demo-simple-select-outlined-label" >Difficulty Level</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="difficultyLevel" name="difficultyLevel" value={diffLevel}
                                                        onChange={(e) => setDiffLevel(e.target.value)}
                                                        label="Difficulty level"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Beginner</MenuItem>
                                                        <MenuItem value={20}>Intermediate</MenuItem>
                                                        <MenuItem value={30}>Advanced</MenuItem>
                                                        <MenuItem value={40}>Other</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >
                                                <TextField label="Age Group" variant="outlined" className="form-control" type="text" id="ageGroup" name="ageGroup" value={age} onChange={(e) => setAge(e.target.value)}>
                                                </TextField>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" id="icon">
                                                <FormControl variant="outlined" className="form-control" style={{width:"100%"}}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="board" name="board" value={board}
                                                        onChange={(e) => setBoard(e.target.value)}
                                                        label="Board"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>State</MenuItem>
                                                        <MenuItem value={20}>CBSE</MenuItem>
                                                        <MenuItem value={30}>ICSE</MenuItem>
                                                        <MenuItem value={40}>Other</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >

                                                <TextField label="Mode of Instruction" variant="outlined" className="form-control" type="text" id="modeOfInstruction" name="modeOfInstruction" value={mode} onChange={(e) => setMode(e.target.value)}>
                                                </TextField>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="third">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group">
                                                <TextField label="Course Price" variant="outlined" id="coursePrice" className="form-control" type="number" name="coursePrice" value={coursePrice} onChange={onChange}>
                                                </TextField>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >

                                                <TextField label="Discount" variant="outlined" id="discount" className="form-control" type="number" name="discount" value={discount} onChange={onChange}>
                                                </TextField>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >

                                                <TextField label="Actual Price" variant="outlined" id="actualPrice" className="form-control" type="number" name="actualPrice" value={actualPrice} >
                                                </TextField>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <div className="form-group" >

                                                <TextField label="Price After Discount" variant="outlined" id="priceAfterDiscount" className="form-control" type="number" name="priceAfterDiscount" value={priceAfterDiscount} >
                                                </TextField>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={{width:"100%"}} color="primary" onClick={courseSubmit}>Add Course</Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className="rootCard">
                        <CardContent>
                            <div className="fourth">
                                <Typography variant="h4" component="h2" gutterBottom>Enter the Details of the Subject</Typography>
                                <div className="underLine1"></div>
                                <form className="form1" >
                                    <div className="form-group">
                                        <TextField id="outlined-basic" label="Subject" variant="outlined" type="text" name="text" className="form-control" style={{width:"100%"}} value={subject} onChange={(e) => setSubject(e.target.value)}></TextField>
                                    </div>
                                    <div className="lesson">
                                        <div className="form-group">
                                            <TextField id="outlined-basic" label="Lesson" variant="outlined" type="text" name="lesson" className="form-control" style={{width:"100%"}} value={lesson} onChange={(e) => setLesson(e.target.value)}></TextField>
                                        </div>
                                        <div className="form-controls">
                                            <TextField id="outlined-basic" label="Chapter" variant="outlined" style={{width:"100%",marginTop:"10px"}} type="text" name="chapter" value={chapter} className="form-control" onChange={(e) => setChapter(e.target.value)}></TextField>
                                            <TextField id="outlined-basic" label="Duration" style={{width:"100%",marginTop:"10px"}} variant="outlined" type="text" name="duration" value={duration} className="form-control" onChange={(e) => setDuration(e.target.value)}></TextField>
                                            <Button style={{marginTop:"10px"}}><AiOutlineEnter style={{ backgroundColor: "white", padding: "5px", borderRadius: "5px", fontSize: "35px", fontWeight: "bolder",width:"100%" }} onClick={editChapter ? EditChapter : insertChapter}>Add Chapter</AiOutlineEnter>
                                        </Button>
                                        </div>
                                        <div className="chapters" style={{ marginBottom: "30px" }}>
                                            {
                                                chapters.map((chap) => {
                                                    return (
                                                        <div className="Span">
                                                            <h4>{chap[0]}</h4>
                                                            <h4>Duration:{chap[1]}</h4>
                                                            <FiEdit onClick={() => editC(chap)}> </FiEdit>
                                                            <AiFillDelete className="bs" onClick={() => removeChap(chap[0])}></AiFillDelete>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <Button type="submit" style={{width:"100%"}} className="btn" onClick={edit ? editLesson : insertLesson}>Add Lesson</Button><br></br>
                                        <div className="lessons">
                                            {
                                                state.arr.map((les) => {
                                                    return (
                                                        <div className="SpanLesson">
                                                            <h4>{les.LessonName}</h4>
                                                            <FiEdit onClick={() => editl(les.LessonName)}> </FiEdit>
                                                            <AiFillDelete className="bs" onClick={() => { dispatch({ type: "remove_lesson", payLoad: les.LessonName }) }}></AiFillDelete>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <Button variant="contained" style={{width:"100%",marginTop:"10px"}} color="primary" className="btn" type="submit" onClick={editSubject ? EditSubject : handleSubmit}>Add Subject</Button>
                                </form>
                            </div>
                            <div className="fifth">
                                <Typography variant="h4" style={{marginTop:"10px"}} gutterBottom>Details of the Course</Typography>
                                <div className="underLine1"></div>
                                {
                                    state.subjects.map((sub) => {
                                        return (
                                            <div className="item" key={sub.id}>
                                                <Typography variant="h4" component="h2" gutterBottom>{sub.Subject.subjectName}</Typography>
                                                <div>
                                                    {
                                                        sub.Subject.Lessons.map((les) => {
                                                            return (<div className="item-mini">
                                                                <h3> {les.LessonName}</h3>
                                                                <div className="sitem">
                                                                    {
                                                                        les.chapters.map((chap) => {
                                                                            return (
                                                                                <React.Fragment>
                                                                                    <h4>{chap[0]}</h4>
                                                                                    <h4>{chap[1]}</h4>
                                                                                </React.Fragment>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>)
                                                        })
                                                    }
                                                </div>
                                                <Button style={{width:"100%"}} variant="contained" color="primary" type="submit" onClick={() => { dispatch({ type: "remove_item", payLoad: sub.id }) }}>remove </Button>
                                                <Button style={{width:"100%",marginTop:"10px"}} variant="contained" color="primary" type="submit" onClick={() => editS(sub.Subject.subjectName)} >Edit </Button>

                                            </div>)
                                    })
                                }
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </React.Fragment>
    );
};

export default AddCourse;