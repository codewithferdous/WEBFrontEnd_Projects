// Centralized storage for attendance records
const attendanceRecords = {};
const leaveRequests = {};
const userProfile = {};

// Mock user data for demonstration
const mockUsers = [
    { username: 'student1', password: 'password1', type: 'student' },
    { username: 'admin1', password: 'password1', type: 'admin' }
];

// Helper functions
function redirectToPanel(userType) {
    if (userType === 'student') {
        window.location.href = 'user.html';
    } else if (userType === 'admin') {
        window.location.href = 'admin.html';
    }
}

function getCurrentDate() {
    return new Date().toISOString().slice(0, 10);
}

// Handle login
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let userType = document.getElementById('user-type').value;

    const user = mockUsers.find(u => u.username === username && u.password === password && u.type === userType);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        redirectToPanel(userType);
    } else {
        alert('Invalid username or password.');
    }
});

// Load logged-in user from localStorage
function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser'));
}

// Mark attendance
function markAttendance() {
    let user = getLoggedInUser();
    if (user.type !== 'student') return;

    let username = user.username;
    let today = getCurrentDate();

    if (!attendanceRecords[username]) {
        attendanceRecords[username] = {};
    }

    if (attendanceRecords[username][today]) {
        alert('Attendance already marked for today.');
    } else {
        attendanceRecords[username][today] = 'present';
        alert('Attendance marked successfully.');

        // Notify admin of the new attendance
        updateAdminRecords(username, today, 'present');
    }
}

// Update admin records
function updateAdminRecords(student, date, status) {
    if (!attendanceRecords[student]) {
        attendanceRecords[student] = {};
    }
    attendanceRecords[student][date] = status;
}

// View attendance
function viewAttendance() {
    let user = getLoggedInUser();
    if (user.type !== 'student') return;

    let username = user.username;
    let records = attendanceRecords[username] || {};
    let output = 'Date: Status\n';

    for (let [date, status] of Object.entries(records)) {
        output += `${date}: ${status}\n`;
    }

    alert(output || 'No attendance records found.');
}

// Request leave
function requestLeave() {
    let user = getLoggedInUser();
    if (user.type !== 'student') return;

    let username = user.username;
    let reason = prompt('Enter leave reason:');

    if (reason) {
        if (!leaveRequests[username]) {
            leaveRequests[username] = [];
        }
        leaveRequests[username].push({ date: getCurrentDate(), reason });
        alert('Leave request sent.');
    } else {
        alert('Leave request cancelled.');
    }
}

// Edit profile
function editProfile() {
    let user = getLoggedInUser();
    if (user.type !== 'student') return;

    let username = user.username;
    let newProfilePic = prompt('Enter new profile picture URL:');

    if (newProfilePic) {
        userProfile[username] = { ...userProfile[username], profilePic: newProfilePic };
        alert('Profile picture updated.');
    }
}

// Admin functionalities
function viewAllRecords() {
    let user = getLoggedInUser();
    if (user.type !== 'admin') return;

    let output = 'Student Attendance Records:\n';

    for (let [student, records] of Object.entries(attendanceRecords)) {
        output += `\nStudent: ${student}\n`;
        for (let [date, status] of Object.entries(records)) {
            output += `${date}: ${status}\n`;
        }
    }

    alert(output || 'No records found.');
}

function generateReport() {
    let user = getLoggedInUser();
    if (user.type !== 'admin') return;

    let fromDate = prompt('Enter FROM date (YYYY-MM-DD):');
    let toDate = prompt('Enter TO date (YYYY-MM-DD):');

    if (fromDate && toDate) {
        let output = 'Attendance Report:\n';
        let filteredRecords = {};

        for (let [student, records] of Object.entries(attendanceRecords)) {
            filteredRecords[student] = {};
            for (let [date, status] of Object.entries(records)) {
                if (date >= fromDate && date <= toDate) {
                    filteredRecords[student][date] = status;
                }
            }
        }

        for (let [student, records] of Object.entries(filteredRecords)) {
            output += `\nStudent: ${student}\n`;
            for (let [date, status] of Object.entries(records)) {
                output += `${date}: ${status}\n`;
            }
        }

        alert(output || 'No records found for the selected dates.');
    } else {
        alert('Invalid dates.');
    }
}

function approveLeave() {
    let user = getLoggedInUser();
    if (user.type !== 'admin') return;

    let student = prompt('Enter student username:');
    let leaveRecord = leaveRequests[student] || [];

    if (leaveRecord.length > 0) {
        let leave = leaveRecord[0];
        alert(`Leave request:\nDate: ${leave.date}\nReason: ${leave.reason}`);

        let approval = confirm('Approve this leave request?');

        if (approval) {
            leaveRecord.shift();
            leaveRequests[student] = leaveRecord;
            alert('Leave request approved.');
        } else {
            alert('Leave request denied.');
        }
    } else {
        alert('No leave requests found for this student.');
    }
}

function createSystemReport() {
    let user = getLoggedInUser();
    if (user.type !== 'admin') return;

    let fromDate = prompt('Enter FROM date (YYYY-MM-DD):');
    let toDate = prompt('Enter TO date (YYYY-MM-DD):');

    if (fromDate && toDate) {
        let output = 'System Report:\n';
        let attendanceCount = { present: 0, absent: 0, leave: 0 };

        for (let [student, records] of Object.entries(attendanceRecords)) {
            for (let [date, status] of Object.entries(records)) {
                if (date >= fromDate && date <= toDate) {
                    attendanceCount[status] = (attendanceCount[status] || 0) + 1;
                }
            }
        }

        output += `Total Present: ${attendanceCount.present || 0}\n`;
        output += `Total Absent: ${attendanceCount.absent || 0}\n`;
        output += `Total Leaves: ${attendanceCount.leave || 0}\n`;

        alert(output);
    } else {
        alert('Invalid dates.');
    }
}

function setGrading() {
    let user = getLoggedInUser();
    if (user.type !== 'student') return;

    let grading = [
        { days: 26, grade: 'A' },
        { days: 20, grade: 'B' },
        { days: 15, grade: 'C' },
        { days: 10, grade: 'D' }
    ];

    let username = user.username;
    let totalDays = Object.keys(attendanceRecords[username] || {}).length;
    let userGrade = grading.find(g => totalDays >= g.days)?.grade || 'F';

    alert(`Student Grade: ${userGrade}`);
}
let a =document.querySelector('div');
console.log(a);
let b=document.createElement('button');
b.innerText='click me';
a.append(b);
let c=a.getAttribute('class');
console.log(c);