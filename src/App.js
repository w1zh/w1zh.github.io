import React from 'react';
import './App.css';
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Contact from "./components/Contact"

function App() {
    const [language, setLanguage] = React.useState(false)
    const [animate, setAnimate] = React.useState(false)
    const [enabled, setEnabled] = React.useState({
        start: true,
        aboutMe: false,
        cv: false,
        skills: false
    })

    function toggleLanguage() {
        setLanguage(!language)
        setAnimate(true)
    }

    React.useEffect(() => {
        if (animate) {
            const timeoutId = setTimeout(() => {
                setAnimate(false)
            }, 1000)
            return () => clearTimeout(timeoutId)
        }
    }, [animate])

    function toggleEnabled(id) {
        setEnabled(prev => {
            if (prev.start){
                return {...prev, start: !prev.start}
            } else if (prev.aboutMe){
                return {...prev, aboutMe: !prev.aboutMe}
            } else if (prev.cv){
                return {...prev, cv: !prev.cv}
            } else if (prev.skills){
                return {...prev, skills: !prev.skills}
            } else {return prev}
        })
        
        setEnabled(prev => {
            return {...prev, [id]: !prev[id]}
        })
        setAnimate(true)
    }

    return (
        <div>
            <Header
                language={language}
                toggleLanguage={toggleLanguage}
                animate={animate}
            />
            <Main 
                id={enabled} 
                language={language}
                animate={animate}
            />
            <div className="lower-part">
                <Contact 
                    language={language} 
                    animate={animate}
                />
                <Navigation 
                    id={enabled} 
                    toggleEnabled={toggleEnabled} 
                    language={language} 
                    animate={animate}
                />
            </div>
        </div>
    );
}

export default App;
