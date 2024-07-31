// Simulate a user storage for simplicity
const user = {
    enrolledCourses: []
};

// Function to enroll in a course
function enrollCourse(courseName) {
    if (!user.enrolledCourses.includes(courseName)) {
        user.enrolledCourses.push(courseName);
        alert('You have been enrolled in the course: ' + courseName);
        updateDashboard();
    } else {
        alert('You are already enrolled in this course.');
    }
}

// Function to update the dashboard with enrolled courses
function updateDashboard() {
    const enrolledCoursesList = document.getElementById('enrolled-courses');
    enrolledCoursesList.innerHTML = '';
    user.enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        enrolledCoursesList.appendChild(li);
    });
}

// Function to handle the course detail page
function handleCourseDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    // In a real application, fetch course details based on the ID
    const courseDetails = {
        1: 'Introduction to HTML: A beginner\'s guide to HTML.',
        2: 'CSS for Beginners: Learn the basics of CSS styling.',
        3: 'JavaScript Essentials: Understand the fundamentals of JavaScript.'
    };
    
    const description = courseDetails[courseId] || 'Course not found.';
    document.getElementById('course-description').textContent = description;

    const enrollButton = document.getElementById('enroll-button');
    enrollButton.addEventListener('click', () => {
        enrollCourse(description.split(':')[0]);
    });
}

// Function to handle the dashboard page
function handleDashboardPage() {
    updateDashboard();

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        alert('You have been logged out.');
        // Simulate logout by clearing enrolled courses
        user.enrolledCourses = [];
        updateDashboard();
    });
}

// Initialize pages based on URL
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('course-description')) {
        handleCourseDetailPage();
    }
    if (document.getElementById('enrolled-courses')) {
        handleDashboardPage();
    }
});
