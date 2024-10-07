import {toast} from 'react-toastify';

 const errorHandler = (error) => {

    if(error.response) {
        toast.error(error.response.data.message);
        console.log(error.message);
    } 
    else{
        toast.error('An unexpected error occurred');
    }
 };
 export default errorHandler;


