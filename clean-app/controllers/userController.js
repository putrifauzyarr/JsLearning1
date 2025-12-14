const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.render('index', { users: users, user: req.user });
}

const formUser = async (req, res) => {
    res.render('form', { error: null, formData: null });
}

const submitUser = async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.render('form', { 
                error: 'Name, email, and password are required',
                formData: req.body
            });
        }

        // Validate password length
        if (password.length < 6) {
            return res.render('form', { 
                error: 'Password must be at least 6 characters long',
                formData: req.body
            });
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            return res.render('form', { 
                error: 'Passwords do not match',
                formData: req.body
            });
        }

        const user = await userService.createUser(req.body);
        res.redirect('/login');
    } catch (error) {
        console.error('Error creating user:', error);
        res.render('form', { 
            error: error.message || 'Failed to create user. Email may already be in use.',
            formData: req.body
        });
    }
}

const loginForm = (req, res) => {
    res.render('login', { error: null });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.render('login', { error: 'Email and password are required' });
    }
    
    const result = await userService.login(email, password);
    
    if (!result.success) {
        return res.render('login', { error: result.message });
    }
    
    // Set session data
    req.session.userId = result.user.id;
    req.session.userEmail = result.user.email;
    req.session.userName = result.user.name;
    req.session.userRole = result.user.role;
    
    // Redirect to home page
    res.redirect('/dashboard');
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.redirect('/');
        }
        res.redirect('/login');
    });
}

module.exports = {
    getAllUsers,
    formUser,
    submitUser,
    loginForm,
    login,
    logout
}