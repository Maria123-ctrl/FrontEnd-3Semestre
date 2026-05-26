import "./Alerta.css"

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
    return Swal.fire({
                title: title,
                text : text,
                icon: icon,
                showCancelButton : showCancelButton != null ? showCancelButton : undefined,
                confirmButtonText : confirmButtonText != null ? confirmButtonText : undefined,
                cancelButtonText : cancelButtonText != null ? cancelButtonText : undefined,
                confirmButtonColor: "green",
                cancelButtonColor: "red"
            });
    
};


// Swal.fire({
//                 title: "Excluir o Gênero",
//                 text : "Ocorreu um erro na hora de excluir o gênero",
//                 icon: "error"
//             })