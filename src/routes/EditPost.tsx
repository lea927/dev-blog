export const blogPosts = [
  {
    id: "1",
    title: "Getting Started with React Router",
    excerpt: "Learn how to implement client-side routing in your React applications using React Router.",
    content:
      "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.\n\nTo get started with React Router, you first need to install it using npm or yarn: `npm install react-router-dom` or `yarn add react-router-dom`.\n\nOnce installed, you can import the necessary components and set up your routes. The basic components you'll use are BrowserRouter, Routes, and Route.\n\nHere's a simple example:\n\n```jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport About from './pages/About';\nimport Contact from './pages/Contact';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"/contact\" element={<Contact />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n```\n\nThis sets up three routes: the home page at '/', an about page at '/about', and a contact page at '/contact'.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    excerpt: "Dive deep into React Hooks and learn how they can simplify your functional components.",
    content:
      "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They let you 'hook into' React state and lifecycle features from function components.\n\nThe most commonly used hooks are useState and useEffect.\n\nThe useState hook lets you add state to functional components. Here's a simple counter example:\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThe useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.\n\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThere are many other hooks available in React, such as useContext, useReducer, useCallback, useMemo, and useRef. You can also create your own custom hooks to reuse stateful behavior between different components.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "June 2, 2023",
    readTime: 8,
  },
  {
    id: "3",
    title: "Building a Blog with Next.js",
    excerpt: "Learn how to create a blog using Next.js, React, and Markdown for content management.",
    content:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites. It's a great choice for building blogs because of its built-in features like file-system routing, API routes, and image optimization.\n\nTo start a new Next.js project, you can use create-next-app:\n\n```bash\nnpx create-next-app my-blog\ncd my-blog\n```\n\nFor a blog, you might want to use Markdown for your content. You can use libraries like gray-matter to parse front matter from Markdown files, and remark to render the Markdown content as HTML.\n\n```jsx\nimport fs from 'fs';\nimport path from 'path';\nimport matter from 'gray-matter';\nimport { remark } from 'remark';\nimport html from 'remark-html';\n\nconst postsDirectory = path.join(process.cwd(), 'posts');\n\nexport function getSortedPostsData() {\n  // Get file names under /posts\n  const fileNames = fs.readdirSync(postsDirectory);\n  const allPostsData = fileNames.map((fileName) => {\n    // Remove \".md\" from file name to get id\n    const id = fileName.replace(/\\.md$/, '');\n\n    // Read markdown file as string\n    const fullPath = path.join(postsDirectory, fileName);\n    const fileContents = fs.readFileSync(fullPath, 'utf8');\n\n    // Use gray-matter to parse the post metadata section\n    const matterResult = matter(fileContents);\n\n    // Combine the data with the id\n    return {\n      id,\n      ...matterResult.data,\n    };\n  });\n  // Sort posts by date\n  return allPostsData.sort(({ date: a }, { date: b }) => {\n    if (a < b) {\n      return 1;\n    } else if (a > b) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n}\n```\n\nThis function reads Markdown files from a 'posts' directory, extracts metadata using gray-matter, and sorts the posts by date.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "July 10, 2023",
    readTime: 10,
  },
  {
    id: "4",
    title: "State Management in React with Context API",
    excerpt: "Explore how to manage global state in your React applications using the Context API.",
    content:
      "The Context API is a feature in React that allows you to share state across the entire app (or part of it) without having to pass props down manually at every level.\n\nTo use the Context API, you first create a context using React.createContext():\n\n```jsx\n// ThemeContext.js\nimport { createContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  const toggleTheme = () => {\n    setTheme(theme === 'light' ? 'dark' : 'light');\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport default ThemeContext;\n```\n\nThen, you can use this context in your components:\n\n```jsx\n// App.js\nimport { ThemeProvider } from './ThemeContext';\nimport Header from './Header';\nimport Content from './Content';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div className=\"App\">\n        <Header />\n        <Content />\n      </div>\n    </ThemeProvider>\n  );\n}\n```\n\n```jsx\n// Header.js\nimport { useContext } from 'react';\nimport ThemeContext from './ThemeContext';\n\nfunction Header() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n\n  return (\n    <header className={`header ${theme}`}>\n      <h1>My App</h1>\n      <button onClick={toggleTheme}>Toggle Theme</button>\n    </header>\n  );\n}\n```\n\nThe Context API is great for sharing state that can be considered \"global\" for a tree of React components, such as the current authenticated user, theme, or preferred language.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "August 5, 2023",
    readTime: 7,
  },
  {
    id: "5",
    title: "Creating Custom Hooks in React",
    excerpt: "Learn how to extract component logic into reusable functions with custom React Hooks.",
    content:
      'Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.\n\nHere\'s an example of a custom hook that manages form state:\n\n```jsx\nimport { useState } from \'react\';\n\nfunction useForm(initialValues) {\n  const [values, setValues] = useState(initialValues);\n\n  return [\n    values,\n    (e) => {\n      setValues({\n        ...values,\n        [e.target.name]: e.target.value,\n      });\n    },\n  ];\n}\n```\n\nYou can use this hook in your components like this:\n\n```jsx\nfunction SignupForm() {\n  const [values, handleChange] = useForm({ email: \'\', password: \'\' });\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Submit the form\n    console.log(values);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        name="email"\n        value={values.email}\n        onChange={handleChange}\n        required\n      />\n      <input\n        type="password"\n        name="password"\n        value={values.password}\n        onChange={handleChange}\n        required\n      />\n      <button type="submit">Sign Up</button>\n    </form>\n  );\n}\n```\n\nCustom Hooks are a powerful way to share logic between components. They follow the same rules as the built-in Hooks: only call Hooks at the top level and only call Hooks from React functions.',
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "September 12, 2023",
    readTime: 6,
  },
  {
    id: "6",
    title: "Optimizing Performance in React Applications",
    excerpt: "Discover techniques to improve the performance of your React applications.",
    content:
      "Performance optimization is a crucial aspect of building React applications. Here are some techniques to improve performance:\n\n1. **Use React.memo for Component Memoization**\n\nReact.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders if the props haven't changed:\n\n```jsx\nconst MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```\n\n2. **Use useCallback for Memoizing Functions**\n\nuseCallback returns a memoized version of the callback that only changes if one of the dependencies has changed:\n\n```jsx\nconst memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n```\n\n3. **Use useMemo for Memoizing Values**\n\nuseMemo returns a memoized value that only recomputes when one of the dependencies has changed:\n\n```jsx\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```\n\n4. **Virtualize Long Lists**\n\nIf you're rendering long lists of data, consider using a library like react-window to virtualize the list, rendering only the items that are currently visible:\n\n```jsx\nimport { FixedSizeList } from 'react-window';\n\nfunction List({ items }) {\n  const Row = ({ index, style }) => (\n    <div style={style}>{items[index]}</div>\n  );\n\n  return (\n    <FixedSizeList\n      height={500}\n      width={300}\n      itemSize={35}\n      itemCount={items.length}\n    >\n      {Row}\n    </FixedSizeList>\n  );\n}\n```\n\n5. **Code Splitting with React.lazy and Suspense**\n\nCode splitting is a technique to split your code into small chunks which can then be loaded on demand:\n\n```jsx\nimport React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n}\n```\n\nThese techniques can significantly improve the performance of your React applications, especially as they grow in size and complexity.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "October 20, 2023",
    readTime: 9,
  },
]
