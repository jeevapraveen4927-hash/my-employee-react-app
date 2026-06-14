function EmployeeFunction(){
    const employee={
        id:102,
        name: "jeeva",
        role :"software developer",
        salary:50000,
        location:"theni"

    }
return(
    <div>
      <h2>Employee Details</h2>
      <p>id:{employee.id}</p>
      <p>name:{employee.name}</p>
      <p>role:{employee.role}</p>
      <p>salary:{employee.salary}</p>
      <p>location:{employee.location}</p>
    </div>
);
}

export default EmployeeFunction;