import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  Input,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { NavLink, Link as RouterLink } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    setFormData({ email: "", password: "" });
  };

  return (
    <Box>
      <Heading>Sign in / Sign up </Heading>
      <NavLink to="/">
        <Image
          margin={"auto"}
          display={"block"}
          marginTop="30px"
          marginBottom="30px"
          src="https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_02-23-2024-12-20/images/KFC_logo.svg"
        />
      </NavLink>
      <Heading
        size="md"
        textAlign="center"
        marginTop="30px"
        marginBottom="30px"
      >
        LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR EMAIL!
      </Heading>

      <form onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Box marginBottom="20px">
            <Input
              variant="flushed"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              textAlign="center"
              required
            />
          </Box>
          <Box marginBottom="20px">
            <Input
              variant="flushed"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              textAlign="center"
              required
            />
          </Box>
          <Button
            type="submit"
            marginBottom="20px"
            marginTop="20px"
            w="20%"
            borderRadius="20px"
            background="black"
            color="white"
          >
            Sign In
          </Button>
        </Flex>
      </form>

      <Text>
        By “logging in to KFC”, you agree to our
        <Link href="https://online.kfc.co.in/privacyPolicy">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="https://online.kfc.co.in/terms-and-conditions">
          Terms and Conditions
        </Link>
        .
      </Text>
      <Text>OR</Text>
      <RouterLink to="/">
        <Button
          marginBottom="20px"
          marginTop="40px"
          w="40%"
          borderRadius="20px"
        >
          Skip, Continue as a Guest
        </Button>
      </RouterLink>
    </Box>
  );
};

export default Signin;

// import React from 'react'
// import { useDispatch } from 'react-redux'

// /**
// * @author
// * @function Login
// **/

// export const Login = () => {
//     const dispatch=useDispatch()
//     const [user,setUser]=React.useState({
//         email:'',
//         password:''
//     })
//     const handleChange = (e) => {
//         const {name,value}=e.target
//         console.log(email.value,password.value)
//         setUser({
//             ...user,[name]:value
//         })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res=await fetch('https://reqres.in/api/login',{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify(user)
//             })
//             const data=await res.json()
//             if(data){
//                 dispatch({
//                     type:'LOGIN_SUCCESS'})
//             }
//             console.log(data)
//         } catch (error) {

//         }
//     }
//   return (
//     <div style={{textAlign:'center',marginTop:'100px'}}>

//         <h1>Login</h1>

//         <form onSvumit={handleSubmit}>

//             <label htmlFor="email">Email</label>

//             <input onChange={handleChange} type="email" id="email" name="email" placeholder="Enter email" />

//             <label htmlFor="password">Password</label>

//             <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter        password" />

//             <button type="submit">Login</button>

//         </form>
//     </div>
//   )
// }
