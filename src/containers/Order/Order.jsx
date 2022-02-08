// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import {
//   Container,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   Modal,
// } from "@material-ui/core";
// import { useStyles } from "./Membership.elements";
// import { IoCloseCircleOutline } from "react-icons/io5";

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// import { firebaseInit } from "../../firebase";
// import { getUUID } from "../../utils";

// import membershipImg from "../../assets/img/membership.svg";
// import { SpinnerBook } from "../../components";

// const Order = () => {
//   const classes = useStyles();
//   const [spinner, setSpinner] = useState(true);
//   const [name, setName] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   // eslint-disable-next-line
//   const [error, setError] = useState("");
//   const [disabledButton, setDisabledButton] = useState(true);
//   const [modal, setModal] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setSpinner(false);
//     }, 2300);
//   }, []);

//   useEffect(() => {
//     if ((name !== "") & (dob !== "") & (gender !== "") & (phoneNumber !== "")) {
//       setDisabledButton(false);
//     }
//   }, [name, dob, gender, phoneNumber, disabledButton]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTimeout(() => {
//       setModal(true);
//     }, 500);

//     firebaseInit
//       .firestore()
//       .collection("order")
//       .add({
//         id: getUUID(),
//         dateCreate: new Date(),
//         phoneNumber: phoneNumber,
//         name: name,
//         emailAddress: email,
//         dob: dob,
//         gender: gender,
//       })
//       .then()
//       .catch(function (error) {
//         console.error("Error writing document: ", error);
//       });
//   };

//   const handleFeedbackContinueButton = () => {
//     setModal(false);
//     setDisabledButton(true);
//     setName("");
//     setDob("");
//     setGender("");
//     setPhoneNumber("");
//     setEmail("");
//   };

//   return (
//     <div className={classes.membership}>
//       {spinner ? (
//         <SpinnerBook />
//       ) : (
//         <>
//           <Modal
//             open={modal}
//             onClose={() => {
//               setModal(false);
//               setDisabledButton(true);
//               setName("");
//               setDob("");
//               setGender("");
//               setPhoneNumber("");
//               setEmail("");
//             }}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//             className={classes.modal}
//           >
//             <Container maxWidth="lg" className={classes.modalComponent}>
//               <span className={classes.icon} onClick={() => setModal(false)}>
//                 <IoCloseCircleOutline />
//               </span>
//               <Typography
//                 variant="h4"
//                 className={`${classes.headerText} ${classes.headerTextModal}`}
//               >
//                 صــفـقـة
//               </Typography>
//               <p className={classes.description}>
//                 تم ارسال طلبك بنجاح وسيتم التواصل معك قريبا. شكرا لك
//               </p>
//               <div className={classes.buttonGroup}>
//                 <Link to="/">
//                   <Button variant="contained" className={classes.button}>
//                     اذهب إلى الصفحة الرئيسية
//                   </Button>
//                 </Link>
//                 <Button
//                   variant="contained"
//                   className={`${classes.button} ${classes.secondButtonModal}`}
//                   onClick={handleFeedbackContinueButton}
//                 >
//                   أعمل طلب تاني
//                 </Button>
//               </div>
//             </Container>
//           </Modal>
//           <Container maxWidth="lg" className={classes.container}>
//             <div className={classes.row}>
//               <div className={classes.column}>
//                 <div className={classes.textWrapper}>
//                   <Typography variant="h4" className={classes.headerText}>
//                     Order With Safka
//                   </Typography>
//                   <p className={classes.description}>
//                     يرجي مشاركه طلبك وارسال بياناتك.
//                   </p>
//                   <p id="category" className={classes.label}>
//                     : الاسم كامل (*)
//                   </p>
//                   <TextField
//                     id="outlined-basic1"
//                     variant="outlined"
//                     placeholder={name}
//                     onChange={(event) => setName(event.target.value)}
//                   />
//                   <p id="category" className={classes.label}>
//                     : تاريخ الميلاد (*)
//                   </p>
//                   <TextField
//                     id="outlined-basic2"
//                     variant="outlined"
//                     placeholder={dob}
//                     type="date"
//                     onChange={(event) => setDob(event.target.value)}
//                   />
//                   <p id="category" className={classes.label}>
//                     : النوع (*)
//                   </p>
//                   <Select
//                     labelId="demo-simple-select-helper-label"
//                     id="demo-simple-select-helper3"
//                     value={gender}
//                     onChange={(event) => setGender(event.target.value)}
//                     className={classes.selectCategory}
//                     variant="outlined"
//                   >
//                     <MenuItem value="male">male</MenuItem>
//                     <MenuItem value="Female">Female</MenuItem>
//                   </Select>
//                   <p id="category" className={classes.label}>
//                     : بريد الالكتروني (*)
//                   </p>
//                   <TextField
//                     id="outlined-basic3"
//                     variant="outlined"
//                     placeholder={email}
//                     type="email"
//                     onChange={(event) => setEmail(event.target.value)}
//                   />
//                   <p id="category" className={classes.label}>
//                     : رقم التليفون(*)
//                   </p>
//                   <TextField
//                     id="outlined-basic4"
//                     variant="outlined"
//                     placeholder={phoneNumber}
//                     onChange={(event) => setPhoneNumber(event.target.value)}
//                   />
//                   <Button
//                     variant="contained"
//                     className={classes.button}
//                     onClick={handleSubmit}
//                     disabled={disabledButton ? true : false}
//                   >
//                     تأكيد
//                   </Button>
//                   {error && (
//                     <p className={`${classes.label} ${classes.error}`}>
//                       خطأ: الرجاء إدخال النص في:{error}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div className={classes.column}>
//                 <div className={classes.imgWrapper}>
//                   <LazyLoadImage
//                     src={membershipImg}
//                     alt="img"
//                     className={classes.img}
//                     effect="blur"
//                   />
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </>
//       )}
//     </div>
//   );
// };

// export default Order;
