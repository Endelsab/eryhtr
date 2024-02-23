import React, { useEffect, useState,  } from "react";
//import { updateStudent } from "../redux/useSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleData } from "../redux/useSlice";


const Update = () => {

	const {id } = useParams();
	const dispatch = useDispatch()

	const [updateStudent,setUpdateStudent] = useState({
      Firstname:""
	})



	const handleChange = (e) => {
		setUpdateStudent({ ...updateStudent, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		setUpdateStudent(dispatch(singleData(id))) 

	}, []);

	return (
		<>
			<div className="flex items-center justify-center h-screen text-center">
				<div className=" w-[430px] h-[400px]  border rounded-md   border-purple-500 ">
					<h1 className="text-purple-500 text-2xl mt-10 font-semibold">
						Update the Student
					</h1>
					<div className="flex flex-col gap-7 mt-8 justify-center items-center ">
						<input
							className="bg-transparent border border-purple-500 p-2 w-56   hover:w-96 duration-300 rounded-md outline-none  focus:w-96 text-white "
							type="text"
							name="Firstname"
							onChange={handleChange}
							value={updateStudent && updateStudent.Firstname}
						/>
						<input
							className="bg-transparent border focus:w-96  hover:w-96 outline-none duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
							type="text"
							name="Lastname"
						/>
						<input
							className="bg-transparent outline-none border  hover:w-96 focus:w-96 duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
							type="text"
							name="Program"
						/>
						<button className="bg-purple-500 hover:bg-pink-600 hover:scale-125  duration-200 rounded-md w-56 p-1 font-mono text-white">
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Update;
