const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
    next();
});

// Your array of students
let students = [
    { name: 'MUKESH S', rollNumber: '22ITR062', academicYear: '2024', semester: '4' },
    { name: 'MUKIL D', rollNumber: '22ITR063', academicYear: '2024', semester: '4' },
    { name: 'MUKIL S', rollNumber: '22ITR064', academicYear: '2024', semester: '4' },
    { name: 'MURALIKARTHICK M', rollNumber: '22ITR065', academicYear: '2024', semester: '4' },
    { name: 'NADIN C', rollNumber: '22ITR066', academicYear: '2024', semester: '4' },
    { name: 'NAGHUL PRANAV K K', rollNumber: '22ITR067', academicYear: '2024', semester: '4' },
    { name: 'NAVEENKUMAR R', rollNumber: '22ITR068', academicYear: '2024', semester: '4' },
    { name: 'NEELESH R', rollNumber: '22ITR069', academicYear: '2024', semester: '4' },
    { name: 'NIRAJANA SRI S', rollNumber: '22ITR070', academicYear: '2024', semester: '4' },
    { name: 'NIRANJAN G', rollNumber: '22ITR071', academicYear: '2024', semester: '4' },
    { name: 'NIRANJANA N', rollNumber: '22ITR072', academicYear: '2024', semester: '4' },
    { name: 'NISAR A', rollNumber: '22ITR073', academicYear: '2024', semester: '4' },
    { name: 'NITHISH P', rollNumber: '22ITR074', academicYear: '2024', semester: '4' },
    { name: 'PAVITHRAN C', rollNumber: '22ITR075', academicYear: '2024', semester: '4' },
    { name: 'POOJA SHREE A.E.', rollNumber: '22ITR076', academicYear: '2024', semester: '4' },
    { name: 'PRADHEEP.S', rollNumber: '22ITR077', academicYear: '2024', semester: '4' },
    { name: 'PRANESH K', rollNumber: '22ITR078', academicYear: '2024', semester: '4' },
    { name: 'PRAVEENA P', rollNumber: '22ITR079', academicYear: '2024', semester: '4' },
    { name: 'PRAVEENKUMAR S', rollNumber: '22ITR080', academicYear: '2024', semester: '4' },
    { name: 'RAJA GANESH S S', rollNumber: '22ITR081', academicYear: '2024', semester: '4' },
    { name: 'RAMMITH C', rollNumber: '22ITR082', academicYear: '2024', semester: '4' },
    { name: 'RASIKA J', rollNumber: '22ITR083', academicYear: '2024', semester: '4' },
    { name: 'RATHEESH V H', rollNumber: '22ITR084', academicYear: '2024', semester: '4' },
    { name: 'RESHMA A', rollNumber: '22ITR085', academicYear: '2024', semester: '4' },
    { name: 'RITHIKKHA E N', rollNumber: '22ITR086', academicYear: '2024', semester: '4' },
    { name: 'ROHITH S', rollNumber: '22ITR087', academicYear: '2024', semester: '4' },
    { name: 'SANDHIYA K', rollNumber: '22ITR088', academicYear: '2024', semester: '4' },
    { name: 'SANJAI S', rollNumber: '22ITR089', academicYear: '2024', semester: '4' },
    { name: 'SANJAY A', rollNumber: '22ITR090', academicYear: '2024', semester: '4' },
    { name: 'SANTHAPRIYAN S', rollNumber: '22ITR091', academicYear: '2024', semester: '4' },
    { name: 'SANTHOSH B V', rollNumber: '22ITR092', academicYear: '2024', semester: '4' },
    { name: 'SIVAVAIBAV M', rollNumber: '22ITR093', academicYear: '2024', semester: '4' },
    { name: 'SOMESH V', rollNumber: '22ITR094', academicYear: '2024', semester: '4' },
    { name: 'SORNA PRIYA K', rollNumber: '22ITR095', academicYear: '2024', semester: '4' },
    { name: 'SOWNDHAR R', rollNumber: '22ITR096', academicYear: '2024', semester: '4' },
    { name: 'SRI DEEPADHARSHINI S', rollNumber: '22ITR097', academicYear: '2024', semester: '4' },
    { name: 'SRINITHI M', rollNumber: '22ITR098', academicYear: '2024', semester: '4' },
    { name: 'SRISUDHARSAN B', rollNumber: '22ITR099', academicYear: '2024', semester: '4' },
    { name: 'SUBASHRI M', rollNumber: '22ITR100', academicYear: '2024', semester: '4' },
    { name: 'SUBIKSHA V', rollNumber: '22ITR101', academicYear: '2024', semester: '4' },
    { name: 'SUJI K', rollNumber: '22ITR102', academicYear: '2024', semester: '4' },
    { name: 'SUJITH G', rollNumber: '22ITR103', academicYear: '2024', semester: '4' },
    { name: 'SUKANTH R', rollNumber: '22ITR104', academicYear: '2024', semester: '4' },
    { name: 'SUNDARAVADIVEL G', rollNumber: '22ITR105', academicYear: '2024', semester: '4' },
    { name: 'SURYA K', rollNumber: '22ITR106', academicYear: '2024', semester: '4' },
    { name: 'SUSHMITHA V', rollNumber: '22ITR107', academicYear: '2024', semester: '4' },
    { name: 'SWETHA P', rollNumber: '22ITR108', academicYear: '2024', semester: '4' },
    { name: 'THARANEESH A', rollNumber: '22ITR109', academicYear: '2024', semester: '4' },
    { name: 'THARUNKUMAR S', rollNumber: '22ITR110', academicYear: '2024', semester: '4' },
    { name: 'VAISALI A', rollNumber: '22ITR111', academicYear: '2024', semester: '4' },
    { name: 'VARUN M.', rollNumber: '22ITR112', academicYear: '2024', semester: '4' },
    { name: 'VARUNESH T', rollNumber: '22ITR113', academicYear: '2024', semester: '4' },
    { name: 'VASUMATHI K', rollNumber: '22ITR114', academicYear: '2024', semester: '4' },
    { name: 'VEDHA VITHYA S', rollNumber: '22ITR115', academicYear: '2024', semester: '4' },
    { name: 'VEERABADRAN K', rollNumber: '22ITR116', academicYear: '2024', semester: '4' },
    { name: 'VIDYA K', rollNumber: '22ITR117', academicYear: '2024', semester: '4' },
    { name: 'VIGNESH K', rollNumber: '22ITR118', academicYear: '2024', semester: '4' },
    { name: 'VOVIYA T', rollNumber: '22ITR119', academicYear: '2024', semester: '4' },
    { name: 'YUKESSHWARAN K T', rollNumber: '22ITR120', academicYear: '2024', semester: '4' },
    { name: 'PRADEEP', rollNumber: '22ITL25', academicYear: '2024', semester: '4' },
    { name: 'RAJA', rollNumber: '22ITL126', academicYear: '2024', semester: '4' },
    { name: 'SABARIVASAN', rollNumber: '22ITL127', academicYear: '2024', semester: '4' },
    { name: 'SUJITH', rollNumber: '22ITL128', academicYear: '2024', semester: '4' },
    { name: 'THARUN', rollNumber: '22ITL129', academicYear: '2024', semester: '4' }
];

// Route to get student data
app.get('/students', (req, res) => {
    res.json({ users: students });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
