import "./Alerta.css"
import Swal from "sweetalert2";
export const Alerta = ({
    title, 
    text, 
    icon,
    showCancelButton = null,
    confirmButtonText = null,
    cancelButtonText = null,
    confirmButtonColor = "green",
    cancelButtonColor = "red",

}) => {
    return (Swal.fire({
                title,
                text,
                icon,
                showCancelButton : showCancelButton,
                confirmButtonText : confirmButtonText,
                cancelButtonText : cancelButtonText,
                confirmButtonColor: confirmButtonColor,
                cancelButtonColor: cancelButtonColor
            }));
    
};


// Swal.fire({
//                 title: "Excluir o Gênero",
//                 text : "Ocorreu um erro na hora de excluir o gênero",
//                 icon: "error"
//             })