import StudentRow from "./StudentRow"
import './StudentTable.css';

interface Props{
  students: Student[];
}

export default function StudentTable({students}: Props){

    return(
      <table className="student-table">
        <thead className="student-head">
          <tr>
            <th>Nombre</th>
            <th>Matrícula</th>
            <th>Carrera</th>
            <th>Semestre</th>
            <th>Promedio</th>
          </tr>
        </thead>
        
        <tbody className="student-body">
          {
            students.length === 0 ? (<tr><td style={{textAlign: "center"}} colSpan={5}>No hay alumnos.</td></tr>) : (            students.map((student: Student) => {
              return <StudentRow key={student.matricula} student={student}/>
            }))
          }
        </tbody>
      </table>
    )
}