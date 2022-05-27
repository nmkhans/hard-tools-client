import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useAlert = () => {
    const alert = withReactContent(Swal)
    return {
        alert
    };
};

export default useAlert;