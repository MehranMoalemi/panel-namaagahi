import axios from "axios"

export async function fetcher(url, callback) {
    try {
        // const { data: response } = await axios({
        //     method: 'GET',
        //     url: `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/${url}`,
        // })
        // if(response){
            //     callback(response.data)
            // }
             await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/${url}`,
            }).then(response=>callback(response.data))

    } catch (error) {
        console.log(error)
    }
}