import axios from "axios";

export const loginUser= userData => dispatch =>{
    axios
        .post("api/eceylon/login",userData)
        .then(res=>{
            //localStorage.setItem(userData)
        })
        .catch(err=>
            dispatch({
                //type your own
            })
        );
};
