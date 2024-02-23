const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

//dbConfig
const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "wendel1234",
	database: "student_list",
});

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//getData
app.get("/student", (req, res) => {
	const q = "Select *from student";

	db.query(q, (err, data) => {
		if (err) {
			res.json(err);
		}
		res.json(data);
	});
});

//getSpecificData
app.get("/singlestudent/:id", (req, res) => {
	const studentId = req.params.id
	const q = "Select *from student where dbID = ?";

	db.query(q,[studentId],(err, data) => {
		if (err) {
			res.json(err);
		}
		res.json(data);
	});
});


app.post("/student/add", (req, res) => {
	const values = [req.body.Firstname, req.body.Lastname, req.body.Program];
	const q = "Insert into student (Firstname,Lastname,Program) Values (?)";
	db.query(q, [values], (err, data) => {
		if (err) {
			res.json(err);
		}
		res.json(data);
	});
});

app.delete("/student/delete/:id", (req, res) => {
	const studentId = req.params.id;
	const q = "Delete from student where dbID = ?";

	db.query(q, [studentId], (err, data) => {
		if (err) return res.json(err);
		res.json(data);
	});
});

app.put("/student/update/:id", (req, res) => {
	const studentId = req.params.id;
	const newvalues = [req.body.Firstname, req.body.Lastname, req.body.Program];
	const q =
		"Update student Set Firstname = ?, Lastname = ? ,Program = ?  Where dbID = ?";

	db.query(q, [...newvalues, studentId], (err, data) => {
		if (err) {
			res.json(err);
			console.log(err);
		} else {
			res.json(data);
			console.log("succeessssss");
		}
	});
});

app.listen(9000, (err, res) => {
	if (err) {
		res.json(err);
	}
	console.log("connected to backend");
});
