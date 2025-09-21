// pages/Blog.js
import React, { useState, useMemo } from 'react';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const props = {
    title: "My",
    highlightTitle: "Blog",
    bgTitle: "Posts"
}

const posts = [
    {
        "id": 1,
        "title": "Optimizing React Apps for Speed and Performance",
        "slug": "optimizing-react-speed-performance",
        "summary": "A comprehensive guide on optimizing React apps for speed and performance, with techniques like memoization, code-splitting, and lazy loading.",
        "tags": ["React", "Performance", "Web Development", "Optimization"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-10-09",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "When building web applications, speed and performance are paramount to providing a seamless user experience. With React, while we get an efficient way to create dynamic, complex user interfaces, it’s easy to overlook performance optimizations as the app scales.",
                    "A well-optimized React app loads faster, is more responsive, and ultimately leads to higher user satisfaction and engagement. In this guide, we’ll dive into several effective techniques to optimize your React apps for peak performance."
                ]
            },
            "sections": [
                {
                    "heading": "Why Optimization Matters in React Apps",
                    "paragraphs": [
                        "The performance of a web app has a direct effect on user experience and SEO. Users expect fast and responsive applications, and Google uses page speed as a ranking factor, meaning performance issues could hurt discoverability.",
                        "According to research, 53% of users abandon a site that takes longer than 3 seconds to load, which means every millisecond counts."
                    ]
                },
                {
                    "heading": "Using React.memo to Prevent Unnecessary Component Re-renders",
                    "paragraphs": [
                        "In React, re-rendering occurs when a component’s state or props change, but some components might not need to re-render every time, especially if their props haven’t changed.",
                        "`React.memo` is a higher-order component that can be used to wrap functional components to memoize them, effectively preventing unnecessary re-renders."
                    ],
                    "codeExample": {
                        "language": "jsx",
                        "content": "import React from 'react';\n\nconst ExpensiveComponent = React.memo(({ data }) => {\n    console.log('Rendering ExpensiveComponent');\n    return <div>{data}</div>;\n});\n\nconst ParentComponent = () => {\n    const [counter, setCounter] = React.useState(0);\n\n    return (\n        <div>\n            <ExpensiveComponent data=\"I won't re-render unless props change!\" />\n            <button onClick={() => setCounter(counter + 1)}>Increment</button>\n        </div>\n    );\n};"
                    }
                },
                {
                    "heading": "Optimizing with useCallback and useMemo",
                    "paragraphs": [
                        "The hooks `useCallback` and `useMemo` are invaluable for optimizing performance by memoizing functions and computed values, respectively.",
                        "`useCallback` prevents function re-creations on every render, while `useMemo` memoizes expensive calculations, preventing unnecessary recalculations."
                    ],
                    "codeExample": {
                        "language": "jsx",
                        "content": "import React, { useState, useCallback, useMemo } from 'react';\n\nconst ExpensiveCalculationComponent = ({ count }) => {\n    const calculateValue = useMemo(() => {\n        console.log('Calculating value...');\n        return count * 1000;\n    }, [count]);\n\n    return <div>Calculated Value: {calculateValue}</div>;\n};"
                    }
                }
                // Additional sections as necessary
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Optimizing React apps for performance is a blend of careful planning and technical expertise. By implementing these techniques—using `React.memo`, `useCallback`, `useMemo`, lazy loading, tree shaking, and optimizing API calls—you can create fast, responsive applications that keep users engaged and coming back for more."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Ready to supercharge your React app's performance? Try implementing some of these techniques, and let us know what improvements you notice. Have any questions or unique tips of your own? Share them in the comments below!"
                ]
            }
        }
    },
    {
        "id": 2,
        "title": "Building Scalable Vue.js Applications",
        "slug": "building-scalable-vuejs-applications",
        "summary": "Learn how to structure and build Vue.js applications that can scale from small projects to enterprise-level solutions.",
        "tags": ["Vue.js", "JavaScript", "Web Development", "Architecture"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-09-15",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Vue.js has gained immense popularity for its simplicity and flexibility, but building scalable applications requires careful planning and architecture decisions.",
                    "In this comprehensive guide, we'll explore best practices for structuring Vue.js applications that can grow from simple prototypes to complex enterprise solutions."
                ]
            },
            "sections": [
                {
                    "heading": "Component Architecture",
                    "paragraphs": [
                        "A well-structured component hierarchy is the foundation of any scalable Vue.js application.",
                        "Start with a clear separation of concerns and follow the single responsibility principle for each component."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Building scalable Vue.js applications is an art that combines technical expertise with strategic planning. By following these patterns and best practices, you'll be well-equipped to handle projects of any size."
                ]
            }
        }
    },
    {
        "id": 3,
        "title": "Modern JavaScript Features Every Developer Should Know",
        "slug": "modern-javascript-features-every-developer-should-know",
        "summary": "Explore the latest JavaScript features that can improve your code quality, readability, and development productivity.",
        "tags": ["JavaScript", "ES6+", "Programming", "Best Practices"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-08-22",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "JavaScript continues to evolve rapidly, with new features being added regularly that can significantly improve your development experience.",
                    "In this article, we'll explore the most important modern JavaScript features that every developer should master."
                ]
            },
            "sections": [
                {
                    "heading": "Optional Chaining and Nullish Coalescing",
                    "paragraphs": [
                        "Optional chaining (?.) allows you to safely access nested object properties without worrying about null or undefined values.",
                        "Nullish coalescing (??) provides a better way to handle default values compared to the logical OR operator."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Staying up-to-date with modern JavaScript features is essential for writing cleaner, more maintainable code. These features not only improve code quality but also enhance developer productivity."
                ]
            }
        }
    },
    {
        "id": 4,
        "title": "Complete Guide to Node.js and Express.js for Backend Development",
        "slug": "nodejs-express-backend-development-guide",
        "summary": "Master backend development with Node.js and Express.js. Learn about routing, middleware, database integration, and API development best practices.",
        "tags": ["Node.js", "Express.js", "Backend", "API Development", "JavaScript"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-09-05",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Node.js has revolutionized backend development by allowing JavaScript to run on the server side. Combined with Express.js, it provides a powerful and flexible framework for building web applications and APIs.",
                    "In this comprehensive guide, we'll explore everything you need to know about building robust backend applications with Node.js and Express.js, from basic setup to advanced patterns."
                ]
            },
            "sections": [
                {
                    "heading": "Setting Up Your Development Environment",
                    "paragraphs": [
                        "Getting started with Node.js and Express.js requires a proper development environment setup. We'll cover Node.js installation, npm basics, and project initialization.",
                        "Essential tools include Node.js runtime, npm package manager, and a good code editor with JavaScript support."
                    ],
                    "codeExample": {
                        "language": "bash",
                        "content": "# Install Node.js and npm\n# Create new project\nmkdir my-express-app\ncd my-express-app\nnpm init -y\n\n# Install Express.js\nnpm install express\n\n# Install development dependencies\nnpm install --save-dev nodemon"
                    }
                },
                {
                    "heading": "Creating Your First Express Server",
                    "paragraphs": [
                        "Express.js simplifies the process of creating a web server in Node.js. Let's build a basic server with routing and middleware.",
                        "Understanding the Express application structure is crucial for building scalable applications."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "const express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\n// Routes\napp.get('/', (req, res) => {\n    res.json({ message: 'Welcome to Express.js!' });\n});\n\napp.listen(PORT, () => {\n    console.log(`Server running on port ${PORT}`);\n});"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Node.js and Express.js provide a powerful foundation for backend development. With proper understanding of routing, middleware, and best practices, you can build scalable and maintainable server applications."
                ]
            }
        }
    },
    {
        "id": 5,
        "title": "REST API Design Best Practices and Implementation",
        "slug": "rest-api-design-best-practices",
        "summary": "Learn how to design and implement RESTful APIs following industry best practices. Covers HTTP methods, status codes, authentication, and API documentation.",
        "tags": ["REST API", "Backend", "Web Services", "HTTP", "API Design"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-08-15",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "RESTful APIs are the backbone of modern web applications, enabling communication between different systems and services. Designing good APIs is crucial for maintainability and developer experience.",
                    "In this guide, we'll explore the fundamental principles of REST API design and implementation best practices that will help you build robust and intuitive APIs."
                ]
            },
            "sections": [
                {
                    "heading": "RESTful Design Principles",
                    "paragraphs": [
                        "REST (Representational State Transfer) is an architectural style that defines a set of constraints for creating web services. Understanding these principles is essential for good API design.",
                        "Key principles include statelessness, uniform interface, cacheable responses, and layered system architecture."
                    ]
                },
                {
                    "heading": "HTTP Methods and Status Codes",
                    "paragraphs": [
                        "Proper use of HTTP methods (GET, POST, PUT, DELETE, PATCH) and status codes is fundamental to RESTful API design.",
                        "Each method has a specific purpose and should be used consistently across your API endpoints."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "// GET - Retrieve resources\napp.get('/api/users', (req, res) => {\n    res.status(200).json(users);\n});\n\n// POST - Create new resource\napp.post('/api/users', (req, res) => {\n    const newUser = createUser(req.body);\n    res.status(201).json(newUser);\n});\n\n// PUT - Update entire resource\napp.put('/api/users/:id', (req, res) => {\n    const updatedUser = updateUser(req.params.id, req.body);\n    res.status(200).json(updatedUser);\n});\n\n// DELETE - Remove resource\napp.delete('/api/users/:id', (req, res) => {\n    deleteUser(req.params.id);\n    res.status(204).send();\n});"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Following REST API design best practices ensures your APIs are intuitive, maintainable, and easy to use. Consistent naming conventions, proper HTTP usage, and comprehensive documentation are key to successful API design."
                ]
            }
        }
    },
    {
        "id": 6,
        "title": "Database Integration: MongoDB vs PostgreSQL for Node.js Applications",
        "slug": "mongodb-vs-postgresql-nodejs-database-integration",
        "summary": "Compare MongoDB and PostgreSQL for Node.js applications. Learn when to choose each database, integration patterns, and performance considerations.",
        "tags": ["Database", "MongoDB", "PostgreSQL", "Node.js", "Backend"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-07-28",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Choosing the right database for your Node.js application is a critical decision that affects performance, scalability, and development experience.",
                    "MongoDB and PostgreSQL are two popular choices, each with distinct advantages. This guide will help you understand when to use each database and how to integrate them effectively with Node.js."
                ]
            },
            "sections": [
                {
                    "heading": "MongoDB: Document-Based NoSQL Database",
                    "paragraphs": [
                        "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents. It's particularly well-suited for applications with evolving schemas and complex nested data structures.",
                        "MongoDB excels in scenarios requiring rapid development, horizontal scaling, and handling unstructured data."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "const mongoose = require('mongoose');\n\n// Define schema\nconst userSchema = new mongoose.Schema({\n    name: { type: String, required: true },\n    email: { type: String, unique: true },\n    profile: {\n        age: Number,\n        interests: [String],\n        address: {\n            street: String,\n            city: String,\n            country: String\n        }\n    },\n    createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// Create user\nconst newUser = new User({\n    name: 'John Doe',\n    email: 'john@example.com',\n    profile: {\n        age: 30,\n        interests: ['coding', 'reading'],\n        address: {\n            city: 'New York',\n            country: 'USA'\n        }\n    }\n});\n\nnewUser.save();"
                    }
                },
                {
                    "heading": "PostgreSQL: Robust Relational Database",
                    "paragraphs": [
                        "PostgreSQL is a powerful, open-source relational database known for its reliability, feature robustness, and performance. It's ideal for applications requiring ACID compliance and complex queries.",
                        "PostgreSQL is perfect for applications with well-defined relationships, complex transactions, and strong consistency requirements."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "const { Pool } = require('pg');\n\nconst pool = new Pool({\n    user: 'your_username',\n    host: 'localhost',\n    database: 'your_database',\n    password: 'your_password',\n    port: 5432,\n});\n\n// Create users table\nconst createUsersTable = async () => {\n    const query = `\n        CREATE TABLE IF NOT EXISTS users (\n            id SERIAL PRIMARY KEY,\n            name VARCHAR(100) NOT NULL,\n            email VARCHAR(100) UNIQUE NOT NULL,\n            age INTEGER,\n            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n        )\n    `;\n    \n    try {\n        await pool.query(query);\n        console.log('Users table created successfully');\n    } catch (err) {\n        console.error('Error creating table:', err);\n    }\n};\n\n// Insert user\nconst insertUser = async (name, email, age) => {\n    const query = 'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *';\n    const values = [name, email, age];\n    \n    try {\n        const result = await pool.query(query, values);\n        return result.rows[0];\n    } catch (err) {\n        console.error('Error inserting user:', err);\n        throw err;\n    }\n};"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Both MongoDB and PostgreSQL are excellent choices for Node.js applications, but serve different use cases. MongoDB excels with flexible schemas and rapid development, while PostgreSQL provides robust ACID compliance and complex querying capabilities. Choose based on your specific requirements for data structure, consistency, and scalability."
                ]
            }
        }
    },
    {
        "id": 7,
        "title": "Implementing JWT Authentication in Node.js Applications",
        "slug": "jwt-authentication-nodejs-implementation",
        "summary": "Complete guide to implementing JWT (JSON Web Token) authentication in Node.js applications. Covers token generation, validation, and security best practices.",
        "tags": ["Authentication", "JWT", "Security", "Node.js", "Express.js"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-07-10",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "JSON Web Tokens (JWT) have become the standard for stateless authentication in modern web applications. They provide a secure way to transmit information between parties as a JSON object.",
                    "In this comprehensive guide, we'll implement JWT authentication in a Node.js application, covering token generation, validation, middleware creation, and security best practices."
                ]
            },
            "sections": [
                {
                    "heading": "Understanding JWT Structure",
                    "paragraphs": [
                        "A JWT consists of three parts separated by dots: Header, Payload, and Signature. Each part is Base64Url encoded and serves a specific purpose in the authentication process.",
                        "The header contains the token type and signing algorithm, the payload contains the claims, and the signature ensures the token hasn't been altered."
                    ]
                },
                {
                    "heading": "Implementing JWT Authentication",
                    "paragraphs": [
                        "Let's implement a complete JWT authentication system with user registration, login, and protected routes.",
                        "We'll use the jsonwebtoken library for token operations and bcrypt for password hashing."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "const jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\nconst express = require('express');\nconst app = express();\n\nconst JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';\nconst users = []; // In production, use a database\n\n// Register endpoint\napp.post('/register', async (req, res) => {\n    try {\n        const { username, password } = req.body;\n        \n        // Check if user exists\n        const existingUser = users.find(u => u.username === username);\n        if (existingUser) {\n            return res.status(400).json({ message: 'User already exists' });\n        }\n        \n        // Hash password\n        const hashedPassword = await bcrypt.hash(password, 10);\n        \n        // Create user\n        const user = {\n            id: users.length + 1,\n            username,\n            password: hashedPassword\n        };\n        \n        users.push(user);\n        \n        res.status(201).json({ message: 'User created successfully' });\n    } catch (error) {\n        res.status(500).json({ message: 'Server error' });\n    }\n});\n\n// Login endpoint\napp.post('/login', async (req, res) => {\n    try {\n        const { username, password } = req.body;\n        \n        // Find user\n        const user = users.find(u => u.username === username);\n        if (!user) {\n            return res.status(400).json({ message: 'Invalid credentials' });\n        }\n        \n        // Verify password\n        const isValidPassword = await bcrypt.compare(password, user.password);\n        if (!isValidPassword) {\n            return res.status(400).json({ message: 'Invalid credentials' });\n        }\n        \n        // Generate JWT\n        const token = jwt.sign(\n            { userId: user.id, username: user.username },\n            JWT_SECRET,\n            { expiresIn: '24h' }\n        );\n        \n        res.json({ token, user: { id: user.id, username: user.username } });\n    } catch (error) {\n        res.status(500).json({ message: 'Server error' });\n    }\n});\n\n// Authentication middleware\nconst authenticateToken = (req, res, next) => {\n    const authHeader = req.headers['authorization'];\n    const token = authHeader && authHeader.split(' ')[1];\n    \n    if (!token) {\n        return res.status(401).json({ message: 'Access token required' });\n    }\n    \n    jwt.verify(token, JWT_SECRET, (err, decoded) => {\n        if (err) {\n            return res.status(403).json({ message: 'Invalid or expired token' });\n        }\n        \n        req.user = decoded;\n        next();\n    });\n};\n\n// Protected route\napp.get('/protected', authenticateToken, (req, res) => {\n    res.json({ \n        message: 'This is a protected route', \n        user: req.user \n    });\n});"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "JWT authentication provides a scalable and stateless solution for modern web applications. By following security best practices like proper secret management, token expiration, and secure storage, you can implement robust authentication systems that protect your users and applications."
                ]
            }
        }
    },
    {
        "id": 8,
        "title": "Frontend State Management: Redux vs Context API vs Zustand",
        "slug": "frontend-state-management-redux-context-zustand",
        "summary": "Compare popular React state management solutions. Learn when to use Redux, Context API, or Zustand based on your application's complexity and requirements.",
        "tags": ["React", "State Management", "Redux", "Context API", "Zustand"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-06-20",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "State management is one of the most crucial aspects of building React applications. As applications grow in complexity, choosing the right state management solution becomes critical for maintainability and performance.",
                    "In this comprehensive comparison, we'll explore three popular state management solutions: Redux, Context API, and Zustand, helping you make an informed decision for your next project."
                ]
            },
            "sections": [
                {
                    "heading": "Redux: The Battle-Tested Solution",
                    "paragraphs": [
                        "Redux has been the go-to state management library for React applications for years. It provides predictable state management through a unidirectional data flow and immutable updates.",
                        "Redux is ideal for large applications with complex state interactions, time-travel debugging requirements, and teams that benefit from strict patterns."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "import { createSlice, configureStore } from '@reduxjs/toolkit';\nimport { useSelector, useDispatch } from 'react-redux';\n\n// Create a slice\nconst counterSlice = createSlice({\n    name: 'counter',\n    initialState: {\n        value: 0\n    },\n    reducers: {\n        increment: (state) => {\n            state.value += 1;\n        },\n        decrement: (state) => {\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action) => {\n            state.value += action.payload;\n        }\n    }\n});\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions;\n\n// Configure store\nexport const store = configureStore({\n    reducer: {\n        counter: counterSlice.reducer\n    }\n});\n\n// Component usage\nfunction Counter() {\n    const count = useSelector((state) => state.counter.value);\n    const dispatch = useDispatch();\n    \n    return (\n        <div>\n            <span>{count}</span>\n            <button onClick={() => dispatch(increment())}>+</button>\n            <button onClick={() => dispatch(decrement())}>-</button>\n        </div>\n    );\n}"
                    }
                },
                {
                    "heading": "Context API: React's Built-in Solution",
                    "paragraphs": [
                        "React's Context API provides a way to share state across components without prop drilling. It's built into React and requires no additional libraries.",
                        "Context API is perfect for small to medium applications, theme management, user authentication, and when you want to avoid external dependencies."
                    ],
                    "codeExample": {
                        "language": "javascript",
                        "content": "import React, { createContext, useContext, useReducer } from 'react';\n\n// Create context\nconst AppContext = createContext();\n\n// Reducer function\nconst appReducer = (state, action) => {\n    switch (action.type) {\n        case 'SET_USER':\n            return { ...state, user: action.payload };\n        case 'SET_THEME':\n            return { ...state, theme: action.payload };\n        case 'TOGGLE_LOADING':\n            return { ...state, loading: !state.loading };\n        default:\n            return state;\n    }\n};\n\n// Provider component\nexport const AppProvider = ({ children }) => {\n    const [state, dispatch] = useReducer(appReducer, {\n        user: null,\n        theme: 'light',\n        loading: false\n    });\n    \n    return (\n        <AppContext.Provider value={{ state, dispatch }}>\n            {children}\n        </AppContext.Provider>\n    );\n};\n\n// Custom hook\nexport const useAppContext = () => {\n    const context = useContext(AppContext);\n    if (!context) {\n        throw new Error('useAppContext must be used within AppProvider');\n    }\n    return context;\n};\n\n// Component usage\nfunction UserProfile() {\n    const { state, dispatch } = useAppContext();\n    \n    const handleLogin = (userData) => {\n        dispatch({ type: 'SET_USER', payload: userData });\n    };\n    \n    return (\n        <div>\n            {state.user ? (\n                <h1>Welcome, {state.user.name}!</h1>\n            ) : (\n                <button onClick={() => handleLogin({ name: 'John' })}>\n                    Login\n                </button>\n            )}\n        </div>\n    );\n}"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Choose Redux for complex applications with intricate state logic, Context API for simple to medium apps or when avoiding dependencies, and Zustand for a modern, lightweight solution with great TypeScript support. Consider your team's experience, application complexity, and performance requirements when making your decision."
                ]
            }
        }
    },
    {
        "id": 9,
        "title": "Full-Stack Application Deployment: Docker, CI/CD, and Cloud Platforms",
        "slug": "fullstack-deployment-docker-cicd-cloud",
        "summary": "Complete guide to deploying full-stack applications using Docker containers, CI/CD pipelines, and cloud platforms like AWS, Vercel, and Heroku.",
        "tags": ["Deployment", "Docker", "CI/CD", "Cloud", "DevOps", "AWS"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2024-06-01",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Deploying full-stack applications efficiently and reliably is crucial for modern web development. With containerization, CI/CD pipelines, and cloud platforms, we can achieve automated, scalable deployments.",
                    "This guide covers the complete deployment workflow from containerizing your application with Docker to setting up automated deployments on various cloud platforms."
                ]
            },
            "sections": [
                {
                    "heading": "Containerizing with Docker",
                    "paragraphs": [
                        "Docker containers provide consistency across different environments, making deployments predictable and scalable. We'll containerize both frontend and backend applications.",
                        "Docker ensures that your application runs the same way in development, testing, and production environments."
                    ],
                    "codeExample": {
                        "language": "dockerfile",
                        "content": "# Frontend Dockerfile (React)\nFROM node:18-alpine as builder\n\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\nRUN npm run build\n\n# Production stage\nFROM nginx:alpine\nCOPY --from=builder /app/build /usr/share/nginx/html\nCOPY nginx.conf /etc/nginx/nginx.conf\n\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n---\n\n# Backend Dockerfile (Node.js)\nFROM node:18-alpine\n\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copy source code\nCOPY . .\n\n# Create non-root user\nRUN addgroup -g 1001 -S nodejs\nRUN adduser -S nextjs -u 1001\nUSER nextjs\n\nEXPOSE 3000\n\nCMD [\"npm\", \"start\"]\n\n---\n\n# docker-compose.yml\nversion: '3.8'\nservices:\n  frontend:\n    build:\n      context: ./frontend\n      dockerfile: Dockerfile\n    ports:\n      - \"80:80\"\n    depends_on:\n      - backend\n      \n  backend:\n    build:\n      context: ./backend\n      dockerfile: Dockerfile\n    ports:\n      - \"3000:3000\"\n    environment:\n      - NODE_ENV=production\n      - DATABASE_URL=${DATABASE_URL}\n    depends_on:\n      - database\n      \n  database:\n    image: postgres:15-alpine\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_USER=admin\n      - POSTGRES_PASSWORD=${DB_PASSWORD}\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n      \nvolumes:\n  postgres_data:"
                    }
                },
                {
                    "heading": "CI/CD Pipeline Setup",
                    "paragraphs": [
                        "Continuous Integration and Continuous Deployment automate the testing and deployment process, ensuring code quality and reducing manual errors.",
                        "We'll set up GitHub Actions for automated testing, building, and deployment to various cloud platforms."
                    ],
                    "codeExample": {
                        "language": "yaml",
                        "content": "# .github/workflows/deploy.yml\nname: Deploy Full-Stack Application\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - uses: actions/checkout@v3\n    \n    - name: Setup Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: '18'\n        cache: 'npm'\n        \n    - name: Install dependencies\n      run: |\n        cd frontend && npm ci\n        cd ../backend && npm ci\n        \n    - name: Run tests\n      run: |\n        cd frontend && npm test -- --coverage --watchAll=false\n        cd ../backend && npm test\n        \n    - name: Run linting\n      run: |\n        cd frontend && npm run lint\n        cd ../backend && npm run lint\n        \n  build-and-deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    \n    steps:\n    - uses: actions/checkout@v3\n    \n    - name: Setup Docker Buildx\n      uses: docker/setup-buildx-action@v2\n      \n    - name: Login to Docker Hub\n      uses: docker/login-action@v2\n      with:\n        username: ${{ secrets.DOCKER_USERNAME }}\n        password: ${{ secrets.DOCKER_PASSWORD }}\n        \n    - name: Build and push Docker images\n      run: |\n        docker build -t ${{ secrets.DOCKER_USERNAME }}/myapp-frontend:latest ./frontend\n        docker build -t ${{ secrets.DOCKER_USERNAME }}/myapp-backend:latest ./backend\n        docker push ${{ secrets.DOCKER_USERNAME }}/myapp-frontend:latest\n        docker push ${{ secrets.DOCKER_USERNAME }}/myapp-backend:latest\n        \n    - name: Deploy to AWS ECS\n      uses: aws-actions/amazon-ecs-deploy-task-definition@v1\n      with:\n        task-definition: .aws/task-definition.json\n        service: myapp-service\n        cluster: myapp-cluster\n        wait-for-service-stability: true"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Modern deployment practices using Docker, CI/CD pipelines, and cloud platforms enable reliable, scalable, and automated application deployments. By implementing these practices, you ensure consistent environments, reduce deployment risks, and accelerate your development workflow."
                ]
            }
        }
    }
];

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = posts.flatMap(post => post.tags || []);
        return [...new Set(tags)].sort();
    }, []);

    // Filter posts based on search and tag
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = !searchTerm ||
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

            const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));

            return matchesSearch && matchesTag;
        });
    }, [searchTerm, selectedTag]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * postsPerPage;
        return filteredPosts.slice(startIndex, startIndex + postsPerPage);
    }, [filteredPosts, currentPage]);

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedTag]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedTag('');
    };

    return (
        <PageLayout containerSize="wide">
            <SEO
                title="Blog - Yuvaraj Guru's Insights on Full Stack Development"
                description="Read Yuvaraj Guru's blog posts about React optimization, Vue.js best practices, Node.js development, and full-stack development insights from 10+ years of experience."
                keywords="Yuvaraj Guru Blog, React Performance, Vue.js Tips, Node.js Development, Full Stack Development Blog, JavaScript Best Practices, Web Development Insights"
                url="https://yuvarajguru.dev/blog"
                type="website"
            />
            <PageTitle {...props}></PageTitle>

            <div className="pb-20">
                {/* Search and Filter Section */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-typography opacity-50" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-bgLight border border-borderLight rounded-lg text-typography placeholder-typography placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-typography opacity-50 hover:text-typography hover:opacity-100"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        )}
                    </div>

                    {/* Tag Filter */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-typography font-medium">Filter by tag:</span>
                        <button
                            onClick={() => setSelectedTag('')}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!selectedTag
                                ? 'bg-primary text-background'
                                : 'bg-bgLight text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-primary text-background'
                                    : 'bg-bgLight text-typography opacity-70 hover:opacity-100 border border-borderLight'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Active Filters */}
                    {(searchTerm || selectedTag) && (
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-typography opacity-70">Active filters:</span>
                            {searchTerm && (
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">
                                    Search: "{searchTerm}"
                                </span>
                            )}
                            {selectedTag && (
                                <span className="bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30">
                                    Tag: {selectedTag}
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="text-primary hover:text-primary hover:opacity-80 underline ml-2"
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Info */}
                <div className="mb-6">
                    <p className="text-typography opacity-70">
                        Showing {paginatedPosts.length} of {filteredPosts.length} posts
                        {filteredPosts.length !== posts.length && ` (filtered from ${posts.length} total)`}
                    </p>
                </div>

                {/* Blog Posts Grid */}
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {paginatedPosts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-typography opacity-70 text-lg mb-4">
                            No blog posts found matching your criteria.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="text-primary hover:text-primary hover:opacity-80 underline"
                        >
                            Clear filters to see all posts
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav className="mt-12 pb-16">
                        <ul className="flex justify-center space-x-2">
                            {/* Previous button */}
                            <li>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 1
                                        ? 'bg-bgLight text-typography opacity-50 cursor-not-allowed'
                                        : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                        }`}
                                >
                                    Previous
                                </button>
                            </li>

                            {/* Page numbers */}
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <li key={page}>
                                        <button
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 transition-all duration-300 text-center flex items-center justify-center rounded-full ${currentPage === page
                                                ? 'bg-primary text-background font-bold'
                                                : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                );
                            })}

                            {/* Next button */}
                            <li>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
                                        ? 'bg-bgLight text-typography opacity-50 cursor-not-allowed'
                                        : 'bg-bgLight text-typography hover:bg-primary hover:text-background'
                                        }`}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </PageLayout>
    );
}
