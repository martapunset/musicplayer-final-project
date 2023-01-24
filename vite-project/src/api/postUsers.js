import { useAuth0 } from '@auth0/auth0-react'

/*
export const postUsers = async (userData) => {

    try {
        const rawResponse = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //1.recoger info del formulario
            body: JSON.stringify(userData)
        });
        const content = await rawResponse.json();
        console.log('successfull addition DB', content);
    }
    catch (error) {
        console.log('can not create user');
    }
}
*/



export const getUsers = async () => {
    const {getAccessTokenSilently} = useAuth0()

    const url = 'http://localhost:4000/user';

    try {
        const token = await getAccessTokenSilently();
        const response = await fetch(url,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
        const users = await response.json();
     

       console.log(users, "user List")
        return users;

    } catch (error) {
        console.log("api error fetching users");
    }

}



export const checkUserByEmail = async (userData) => {
   
console.log("entering checkemail function")
    const url = 'http://localhost:4000/user/exists';

    try {
       // const token = await getAccessTokenSilently();
        const response = await fetch(url,
            {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //Authorization: `Bearer ${token}`,
            },
            //sending user data
            body: JSON.stringify(userData)
                 
            });
    
    
        const user = await response.json();
     

       console.log(user, "user")
        return user;

    } catch (error) {
        console.log("api error fetching users");
    }

}