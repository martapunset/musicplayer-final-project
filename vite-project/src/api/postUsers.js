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

export const updateUsers = async (newfirstName, newlastName, newuserName, newEmail, playlistId, userId ) => {
    console.log(userId);
    const updateUser = {
        
        firstName: newfirstName,
        lastName: newlastName,
        userName: newuserName,
        email: newEmail,
        // picture: newPicture,
        // likedTracks: [{}],
        likedPlaylists: playlistId
    }
    try {
        const rawResponse = await fetch(`http://localhost:4000/user/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            //1.recoger info del formulario
            body: JSON.stringify(updateUser)
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
    const { getAccessTokenSilently } = useAuth0()

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
        return data.data



    }

    catch (error) {


        console.log("error");
    }
}

