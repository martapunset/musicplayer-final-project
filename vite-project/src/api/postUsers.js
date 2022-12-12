
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
        console.log('successfull addition', content);
    }
    catch (error) {
        console.log('can not create user');
    }
}

export const getUsers = async (email = '') => {

    const url = 'http://localhost:4000/user';

    try {
        const response = await fetch(url);
        const users = await response.json();
        const user = users.find(user => user.email === email)

        console.log(user, "userfind")
        return user;

    } catch (error) {
        console.log("api error");
    }

}