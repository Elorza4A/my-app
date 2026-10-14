"use client";

import SearchBar from "@/app/shared/components/SearchBar"
import StudentTable from "./StudentTable"
import { useState, useEffect } from 'react';
import { Margarine } from "next/font/google";

const estudiantesFCFM = [
  {
    matricula: 1984210,
    nombre: "Ana Sofía García Ruiz",
    correo: "ana.garciarz@uanl.edu.mx",
    carrera: "Licenciatura en Ciencias Computacionales",
    semestre: 7,
    promedio: 92.5
  },
  {
    matricula: 2013942,
    nombre: "Carlos Eduardo Mendoza Silva",
    correo: "carlos.mendozasl@uanl.edu.mx",
    carrera: "Licenciatura en Tecnología de Software",
    semestre: 5,
    promedio: 88.3
  },
  {
    matricula: 1958301,
    nombre: "Lucía María Fernández Torres",
    correo: "lucia.fernandezt@uanl.edu.mx",
    carrera: "Licenciatura en Actuaría",
    semestre: 8,
    promedio: 95.1
  },
  {
    matricula: 2071823,
    nombre: "Mateo Alejandro Rodríguez Cantú",
    correo: "mateo.rodriguezcn@uanl.edu.mx",
    carrera: "Licenciatura en Matemáticas",
    semestre: 3,
    promedio: 84.0
  },
  {
    matricula: 1923481,
    nombre: "Diego Alberto López Cavazos",
    correo: "diego.lopezcv@uanl.edu.mx",
    carrera: "Licenciatura en Física de Materiales",
    semestre: 9,
    promedio: 90.8
  },
  {
    matricula: 2039184,
    nombre: "Valeria Isabel Torres Morales",
    correo: "valeria.torresmr@uanl.edu.mx",
    carrera: "Licenciatura en Seguridad Tecnológica",
    semestre: 4,
    promedio: 89.6
  },
  {
    matricula: 1974820,
    nombre: "Javier Omar Ramírez Treviño",
    correo: "javier.ramireztr@uanl.edu.mx",
    carrera: "Licenciatura en Ciencias Computacionales",
    semestre: 6,
    promedio: 91.2
  },
  {
    matricula: 2051938,
    nombre: "Camila Montserrat Sánchez Garza",
    correo: "camila.sanchezgz@uanl.edu.mx",
    carrera: "Licenciatura en Multimedia y Animación Digital",
    semestre: 2,
    promedio: 94.0
  },
  {
    matricula: 1962049,
    nombre: "Gabriel Antonio Hernández Villarreal",
    correo: "gabriel.hernandezvl@uanl.edu.mx",
    carrera: "Licenciatura en Tecnología de Software",
    semestre: 8,
    promedio: 86.7
  },
  {
    matricula: 2083912,
    nombre: "Mariana Lizbeth Flores Elizondo",
    correo: "mariana.floresel@uanl.edu.mx",
    carrera: "Licenciatura en Actuaría",
    semestre: 1,
    promedio: 87.5
  }
];

export default function StudentListPage() {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        setStudents(estudiantesFCFM);
    }, []);

    return (
        <div style={{width: "90%", margin: "0 auto"}}>
            <h1>Listado de estudiantes</h1>
            <SearchBar placeholder="Buscar por nombre de estudiante" onQuery={() => {}}/>
            <StudentTable students={students}/>
        </div>
    )
}