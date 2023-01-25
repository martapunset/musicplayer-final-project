import { useAuth0 } from '@auth0/auth0-react'


export const postUsers = async (userData) => {

    try {
        const rawResponse = await fetch('http://localhost:4000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //1.recoger info del formulario
            body: JSON.stringify(userData)
        });
        const content = await rawResponse.json();
        console.log('successfull addition DB', content);
        return content;
    }
    catch (error) {
        console.log('can not create user');
    }
}




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
    const url = 'http://localhost:4000/user/create';

    try {
        // const token = await getAccessTokenSilently();
        const res = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${token}`,
                },
                //sending user data
                body: JSON.stringify(userData)
                 
            });
    
    
       const data = await res.json();
        //const { user } = data;
        console.log(data) ///checked is working


        console.log(user, "user front final")
        if (res.status === 200 || res.status === 201) {
            return res.data;
        }
        else if (res.status === 500) {   //need to create user in DB
            console.log("need to create user in DB")
            return res.data
            
        }
    }

    catch (error) {
        

        console.log("error");
    }
}

