import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AllStudent() {

    const [students, setStudents] = useState([]);

    useEffect(()=>{

        function getStudents() {
            axios.getStudents("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    return(
        <div className="container">
            <h1>All AddStudent</h1>
        </div>
    )
}