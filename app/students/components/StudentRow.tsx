

interface Props{
    student: Student;
}

export default function StudentRow({student}: Props){
    return(
        <>
        {/* CON OPERADOR && */}
        {/* {
            student.promedio >= 90 && (
                <tr>
                    <td>
                        <div>
                            <img src="" alt="Imagen de estudiante" />
                        </div>
                    </td>
                    <td>{student.matricula}</td>
                    <td>{student.carrera}</td>
                    <td>{student.semestre}</td>
                    <td>{student.promedio}</td>
                </tr>
            )
        } */}

        {/* CON CSS */}


        <tr 
            style={student.promedio >= 90 ? {display: ""} : {display: "none"}}
            className={student.promedio >= 90 ? "visible" : "invisble"}
        >
            <td>
                <div>
                    <img src="" alt="Imagen de estudiante" />
                </div>
            </td>
            <td>{student.matricula}</td>
            <td>{student.carrera}</td>
            <td>{student.semestre}</td>
            <td>{student.promedio}</td>
        </tr>

        </>
    )
}