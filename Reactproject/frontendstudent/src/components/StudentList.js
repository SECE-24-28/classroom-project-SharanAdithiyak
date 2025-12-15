import { useEffect,useState} from 'react';
import {getStudents} from '../api';
import {Link} from 'react-router-dom';
import {deleteStudent} from '../api';

function StudentList() {
  const [students,setStudents]=useState([]);
  const loadStudents=()=>{
    getStudents().then(res=>setStudents(res.data));
  };
  useEffect(()=>{
    loadStudents();
  },[]);
  const removeStudent=async (rollno)=>{
        await deleteStudent(rollno)
        loadStudents()
    }
  return (
    <div>
    <h2> Student List </h2>
    <Link to="/add">Add Student</Link>
    <table>
        <tr>
            <th>Roll no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
            {
                students.map((s)=>(
                    <tr key={s.rollno}>
                        <td>{s.rollno}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                                    <Link to={`/edit/${students.rollno}`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={()=>removeStudent(students.rollno)}>Delete</button>
                                </td>
                    </tr>
                ))
                }
        </table>
        </div>
        );
    }
  export default StudentList;