// Store users in localStorage for demo purposes
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '{}');
}
function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Login logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const users = getUsers();
        const message = document.getElementById('loginMessage');
        if (users[username] && users[username] === password) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000); // Redirect after 1 second
        } else {
            message.style.color = '#e74c3c';
            message.textContent = 'Invalid username or password.';
        }
    });
}

// Register logic
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        const users = getUsers();
        const message = document.getElementById('registerMessage');
        if (users[username]) {
            message.style.color = '#e74c3c';
            message.textContent = 'Username already exists.';
        } else {
            users[username] = password;
            setUsers(users);
            message.style.color = 'green';
            message.textContent = 'Registration successful! You can now log in.';
        }
    });
}

Object.defineProperty(window, "ADMINPASSATIVEATE", {
    get() {
        location.reload(); // Refresh the page
        return function() {
            const adminCode = prompt("Enter admin code to view users:");
            if (adminCode === "ABCDEFGHIJKLMN201390123456789032324423523432425352345") {
                console.log(getUsers());
                alert("User data has been logged to the console.");
            } else {
                alert("Incorrect admin code.");
            }
        };
    },
    configurable: true
});