import { useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdDirectionsSubwayFilled } from 'react-icons/md';


export const ResetPassword = (props) => {

    //const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = {
            password: e.target.password.value
        }

        // if (!RegExpPassword.test(userPassword.password)) {
        //     Swal.fire({
        //         showConfirmButton: true,
        //         icon: 'error',
        //         text: 'The password must contain at least: betwen 8 and 16 characters, 1 number, 1 lowercase letter, 1 capital letter and 1 special character'
        //     })
        //     return;
        // }

        setIsLoading(true);
        await axios.put(process.env.REACT_APP_API_URL + '/resetpassword/' + props.match.params.id + ' / ' + props.match.params.tokenresetpassword, userPassword, {
            where: {
                id: props.match.params.id,
                tokenresetpassword: props.match.params.tokenresetpassword
            }
        })
            .then((res) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Password changed successfully'
                })
                //history.push('/login')
            }).catch((error) => {
                MdDirectionsSubwayFilled.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'There was an error trying to send the data, please try again later'
                })
            });
    }
    
//lacontraseña introducida es la deseada check de validacion
    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError('The password does`t match')
        } else {
            setIsError("");
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='' onSubmit={handleSubmit}>
            <form className=''>
                <h3>New password</h3>
                <div className=''>Password:</div>
                <div className=''>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Enter your password' required />
                    <button onClick={switchShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                </div>
                <h3>Confirm password</h3>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Enter your password' required />
                <div className=''>{isError}</div>
                <div className=''>
                    {isLoading
                        ?
                        <p>wait</p>
                        :
                        <button type='submit'>Send</button>
                    }
                </div>
            </form>
        </div>
    )
}
