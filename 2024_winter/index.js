const express = require("express");
const app = express();
const port = 8080;

const mysql = require("mysql");
const dbconfig = require("./dbinfo.js");
const connection = mysql.createConnection(dbconfig);

app.use(express.static("public"));

const cors = require("cors");
app.use(
    cors({
        origin: true,
        credential: true,
    })
);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/main.html");
}); //서버에서 html 받아오기

app.get("/api/main", (req, res)=>{
    connection.query("SELECT * FROM user_info", (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});

app.get("/male", (req, res)=>{
    connection.query("SELECT * from user_info where gender = 'Male'", (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});

app.get("/:id", (req, res)=>{
    res.sendFile(__dirname + "/detail.html");
});

app.get("/api/:id", (req, res)=>{
    connection.query("SELECT * from user_info where id = ?",
    [req.params.id],
    (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});

app.get("/:gender/:age", (req, res)=>{
    res.sendFile(__dirname + "/detail2.html");
});


app.get("/api/:gender/:age", (req, res)=>{
    connection.query("SELECT * from user_info where gender = ? AND age = ?",
    [req.params.gender, req.params.age],
    (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});

app.get("/api/:name/:gender/:age", (req, res)=>{
    connection.query("SELECT * from user_info where name = ? AND gender = ? AND age = ?",
    [req.params.name ,req.params.gender, req.params.age],
    (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});











app.get("/1", (req, res)=>{
    connection.query("SELECT * from user_info where id = 1", (err, rows)=>{
        if (err) throw err;
        return res.json(rows);
    });
});


app.listen(port,()=>{
    console.log("Server listening on port :" + port);
});