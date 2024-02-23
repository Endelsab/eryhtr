import React from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteStudent } from "../redux/useSlice.js";
import { useEffect } from "react";

const List = () => {
	const dispatch = useDispatch();

	const students = useSelector((state) => state.data.studentdatas);
	const status = useSelector((state) => state.data.status);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "failed") {
		return <div>Error: Unable to fetch students</div>;
	}

	//delete
	const handleDelete = (id) => {
		dispatch(deleteStudent(id));
		window.location.reload();
	};

	return (
		<>
			<div className=" flex justify-center   p-5 m-5">
				<div className="border overflow-x-auto  border-purple-600 w-[800px] h-[500px] mt-10 justify-center items-center ">
					<h1 className="text-purple-500 text-2xl font-bold pt-2 ml-2  ">
						Student list
					</h1>

					<div>
						<div className="flex text-end justify-end mr-3  ">
							<Link
								to="/add"
								className="text-black font-semibold hover:scale-110 bg-green-600 p-1 rounded ">
								{" "}
								Add student
							</Link>
							``
						</div>

						<div className=" mt-2 text-center ">
							<table className="border  shadow-2xl min-w-full  border-collapse  border-gray-600">
								<thead className="text-purple-500 border   border-purple-600 font-extrabold ">
									<tr className=" p-[50px]">
										<th className=" p-3">Firstname</th>
										<th className=" p-3">Lastname</th>
										<th className=" p-3">Program</th>
										<th className=" p-3">Action</th>
									</tr>
								</thead>

								<tbody className="border  border-gray-600 ">
									{students.map((student) => (
										<tr
											key={student.dbID}
											className=" border border-purple-600 p-3 text-cyan-500 hover:bg-purple-900 hover:text-purple-200 transition duration-400 ease-in-out ">
											<td>{student.Firstname}</td>
											<td>{student.Lastname}</td>
											<td>{student.Program}</td>
											<td>
												<button
													to="/update"
													className="text-yellow-500 hover:scale-150">
													<Link to={`/update/${student.dbID}`}>
														<FaEdit />
													</Link>
												</button>
												<button
													onClick={() => handleDelete(student.dbID)}
													className="ml-3 text-red-500 hover:scale-150">
													<FaTrashCan />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default List;
