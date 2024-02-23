import React, { useState } from "react";
import { addStudent } from "../redux/useSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = () => {

	const [student, setStudent] = useState({
		Firstname: "",
		Lastname: "",
		Program: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setStudent((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleAdd = () => {
		dispatch(addStudent(student));
		navigate("/");
	};


	return (
		<div className="flex items-center justify-center h-screen text-center">
			<div className=" w-[430px] h-[400px]  border rounded-md   border-purple-500 ">
				<h1 className="text-purple-500 text-2xl mt-10 font-semibold">
					Add new student
				</h1>
				<div className="flex flex-col gap-7 mt-8 justify-center items-center ">
					<input
						className=" border border-purple-500 p-2 w-56 duration-300 rounded-md outline-none  focus:w-96 text-white hover:w-96 bg-transparent "
						type="text"
						placeholder="Firstname"
						name="Firstname"
						onChange={handleChange}
					/>
					<input
						className="bg-transparent border focus:w-96  hover:w-96 outline-none duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
						type="text"
						placeholder="Lastname"
						name="Lastname"
						onChange={handleChange}
					/>
					<input
						className="bg-transparent outline-none  hover:w-96 border focus:w-96 duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
						type="text"
						placeholder="Program"
						name="Program"
						onChange={handleChange}
					/>
					<button onClick={handleAdd} className="bg-purple-500 hover:bg-pink-600 hover:scale-125  duration-200 rounded-md w-56 p-1 font-mono text-white">
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default Add;
