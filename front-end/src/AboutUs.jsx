import { useState, useEffect } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'

const AboutUs = props => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => setAbout(response.data))
      .catch(err => setError(JSON.stringify(err, null, 2)))
  }, []) // empty array = run once when the page loads

  if (error) return <p>{error}</p>
  if (!about) return <img src={loadingIcon} alt="loading" />

  return (
    <>
      <h1>About Us</h1>
      <img src={about.imageUrl} alt={about.name} style={{ maxWidth: '300px' }} />
      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  )
}

export default AboutUs