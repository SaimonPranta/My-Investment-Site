import { toast } from 'react-toastify';

const failed = (message = "Your request are Failed !") => {
    toast.error(`${message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
};

export default failed;