import React, { useEffect, useState } from 'react'
import { TextField, Button, ButtonGroup,  FormControl, Select, InputLabel } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
// import { useStyles } from './theme'
import axios from 'axios'
import { getCookie } from './cookies';
import './EditProfile.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import pic from './4133820.jpg';
import Appbar from './Appbar';

function EditProfileStudent() {
    // const classes = useStyles()
    const [isCbse, setCbse] = useState(false)
    const [isIcse, setIcse] = useState(false)
    const [isState, setIsState] = useState(false)
    const [password, setPassword] = useState("")
    const [re_password, setRePassword] = useState("")
    const [re_confpassword, setReConfPassword] = useState("")
    const [email, setEmail] = useState("")
    const [re_email, setReEmail] = useState("")
    const [editprofile, setEditProfile] = useState(true)
    const [editPassword, setEditPassword] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [details, setDetails] = useState({
        id: "",
        email: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        board: "",
        standard: "",
        state: "",
    })

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/student/getuserdetails/",
            {
                headers: {
                    'Authorization': `Bearer ${getCookie('token').substring(0, 205)}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            (res) => {
                setDetails(JSON.parse(res.data));
            })
    }, [])

    function editProfile(e) {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/student/editprofile/", {
            id: details.id,
            firstname: details.firstname,
            lastname: details.lastname,
            phonenumber: details.phonenumber,
            board: details.board,
            standard: details.standard,
            state: details.state
        },
            {
                headers: {
                    'Authorization': `Bearer ${getCookie('token').substring(0, 205)}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            (res) => {
                setDetails(JSON.parse(res.data));
                console.log(res.data);

            })
    }

    function changePassword(e) {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/auth/users/set_password/', {
            new_password: re_password,
            re_new_password: re_confpassword,
            current_password: password
        },
            {
                headers: {
                    'Authorization': `Bearer ${getCookie('token').substring(0, 205)}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                (res) => {
                    setDetails(JSON.parse(res.data));
                    console.log(res.data);
    
                })
    }

    function changeEmail(e) {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/auth/users/set_email/', {
            new_email: email,
            re_new_email: re_email,
            current_password: password
        },
            {
                headers: {
                    'Authorization': `Bearer ${getCookie('token').substring(0, 205)}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                (res) => {
                    setDetails(JSON.parse(res.data));
                    console.log(res.data);
    
                })
    }

    return (
        <React.Fragment>
            <Appbar></Appbar>
            <div className="editProfile" style={{margin:"100px"}}>
                
                <div className="editProfileMenu">
                <Avatar style={{ height: '100px', width: '100px', marginBottom:"30px", alignSelf: 'center'}} alt="Remy Sharp" src={pic} />
                    <Button className="editProfileButton" color="primary" variant="contained" onClick={() => {
                        setEditProfile(true)
                        setEditPassword(false)
                        setEditEmail(false)
                    }}
                        startIcon={<EditIcon />}
                    >Edit Profile
                    </Button>

                    <Button className="editProfileButton" color="primary" variant="contained" onClick={() => {
                        setEditProfile(false)
                        setEditPassword(true)
                        setEditEmail(false)
                    }}
                        startIcon={<LockIcon />}
                    >Change Password
                    </Button>

                    <Button className="editProfileButton" color="primary" variant="contained" onClick={() => {
                        setEditProfile(false)
                        setEditPassword(false)
                        setEditEmail(true)
                    }}
                        startIcon={<MailIcon />}
                    >Change Email
                    </Button>
                </div>
                <div className="editProfileContent">
                    {editprofile && <form className="form">
                        <Typography variant="h4" gutterBottom>
                            Edit Profile
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="input"
                                    variant="outlined"
                                    id="firstname"
                                    label="First Name"
                                    value={details.firstname}
                                    onChange={(e) => setDetails({ ...details, firstname: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="input"
                                    variant="outlined"
                                    id="lastname"
                                    label="Last Name"
                                    value={details.lastname}
                                    onChange={(e) => setDetails({ ...details, lastname: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className="input"
                                    variant="outlined"
                                    id="phonenumber"
                                    label="Phone Number"
                                    value={details.phonenumber}
                                    onChange={(e) => setDetails({ ...details, phonenumber: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonGroup color="primary" variant="contained" className="btngroup">
                                    <Button
                                        className={`${"btn"} ${isState ? "active" : ""}`}
                                        onClick={() => {
                                            setDetails({ ...details, board: "State" });
                                            setCbse(false);
                                            setIcse(false);
                                            setIsState(true);
                                        }}
                                    >State
                                    </Button>
                                    <Button
                                        className={`${"btn"} ${isCbse ? "active" : ""}`}
                                        onClick={() => {
                                            setDetails({ ...details, board: "CBSE" });
                                            setCbse(true);
                                            setIcse(false);
                                            setIsState(false);
                                        }}
                                    >CBSE
                                    </Button>
                                    <Button
                                        className={`${"btn"} ${isIcse ? "active" : ""}`}
                                        onClick={() => {
                                            setDetails({ ...details, board: "ICSE" });
                                            setCbse(false);
                                            setIcse(true);
                                            setIsState(false);
                                        }}
                                    >ICSE
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4} sm={6}>
                            <FormControl >
                            <InputLabel className="select">Class</InputLabel>
                            <Select className="select" native value={details.standard} onChange={(e) => setDetails({ ...details, standard: e.target.value })}>
                                <option aria-label="None" value="" />
                                <option value={1}>1st</option>
                                <option value={2}>2nd</option>
                                <option value={3}>3rd</option>
                                <option value={4}>4rth</option>
                                <option value={5}>5th</option>
                                <option value={6}>6th</option>
                                <option value={7}>7th</option>
                                <option value={8}>8th</option>
                                <option value={9}>9th</option>
                                <option value={10}>10th</option>
                                <option value={11}>11th</option>
                                <option value={12}>12th</option>
                            </Select>
                        </FormControl>
                            </Grid>
                            <Grid item xs={8} sm={6}>
                            <FormControl>
                            <InputLabel className="select">State</InputLabel>
                            <Select className="select" native value={details.state} onChange={(e) => setDetails({ ...details, state: e.target.value })}>
                                <option aria-label="None" value="" />
                                <option value={"Andaman and Nicobar Islands"}>
                                    Andaman and Nicobar Islands
                                </option>
                                <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
                                <option value={"Arunachal Pradesh"}>
                                    Arunachal Pradesh
                                </option>
                                <option value={"Assam"}>Assam</option>
                                <option value={"Bihar"}>Bihar</option>
                                <option value={"Chandigarh"}>Chandigarh</option>
                                <option value={"Chhattisgarh"}>Chhattisgarh</option>
                                <option value={"Delhi"}>Delhi</option>
                                <option value={"Goa"}>Goa</option>
                                <option value={"Gujarat"}>Gujarat</option>
                                <option value={"Haryana"}>Haryana</option>
                                <option value={"Himachal Pradesh"}>
                                    Himachal Pradesh
                                </option>
                                <option value={"Jammu and Kashmir"}>
                                    Jammu and Kashmir
                                </option>
                                <option value={"Jharkhand"}>Jharkhand</option>
                                <option value={"Karnataka"}>Karnataka</option>
                                <option value={"Kerala"}>Kerala</option>
                                <option value={"Ladakh"}>Ladakh</option>
                                <option value={"Lakshadweep"}>Lakshadweep</option>
                                <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
                                <option value={"Maharashtra"}>Maharashtra</option>
                                <option value={"Manipur"}>Manipur</option>
                                <option value={"Meghalaya"}>Meghalaya</option>
                                <option value={"Mizoram"}>Mizoram</option>
                                <option value={"Nagaland"}>Nagaland</option>
                                <option value={"Odisha"}>Odisha</option>
                                <option value={"Pondicherry"}>Pondicherry</option>
                                <option value={"Punjab"}>Punjab</option>
                                <option value={"Rajasthan"}>Rajasthan</option>
                                <option value={"Sikkim"}>Sikkim</option>
                                <option value={"Tamil Nadu"}>Tamil Nadu</option>
                                <option value={"Telangana"}>Telangana</option>
                                <option value={"Tripura"}>Tripura</option>
                                <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                                <option value={"Uttarakhand"}>Uttarakhand</option>
                                <option value={"West Bengal"}>West Bengal</option>
                            </Select>
                        </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Button className="btn1" color="primary" variant="contained" onClick={editProfile}>Save</Button>
                    </form>}
                    {editPassword && <form className="form">
                        <Typography variant="h4" gutterBottom>
                            Change Password
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                            className="input"
                            variant="outlined"
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                            className="input"
                            variant="outlined"
                            id="newpassword"
                            label="New Password"
                            type="password"
                            value={re_password}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                            </Grid>
                        </Grid>

                        
                        
                        <TextField
                        className="input"
                        variant="outlined"
                            id="confpassword"
                            label="Confirm Password"
                            type="password"
                            value={re_confpassword}
                            onChange={(e) => setReConfPassword(e.target.value)}
                        />
                        <br/>
                        <Button className="btn1" color="primary" variant="contained" onClick={changePassword}>Change Password</Button>
                    </form>}
                    {editEmail && <form className="form">
                        <Typography variant="h4" gutterBottom>
                            Change Email
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                            className="input"
                            variant="outlined"
                            id="email"
                            label="New Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                            className="input"
                            variant="outlined"
                            id="re_email"
                            label="Confirm Email"
                            type="email"
                            value={re_email}
                            onChange={(e) => setReEmail(e.target.value)}
                        />
                            </Grid>
                        </Grid>
                        
                        
                        <TextField
                        className="input"
                        variant="outlined"
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <Button className="btn1" color="primary" variant="contained" onClick={changeEmail}>Change Email</Button>
                    </form>}

                </div>
            </div>
            {/* <div className="editprofile"> */}
        </React.Fragment >
    )
}

export default EditProfileStudent;