import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie', // 공통된 주소
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWQ3ZDczMGI0N2Y4Nzg3NDg3OWQ1MzY0ZDEyZDlhOCIsInN1YiI6IjYzZDlkNTY0YTkxMTdmMDA3OTc3MjQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CxZ1U2pP5eoA18nlQKwtZIJRm7EoSWeRTwSeNRypA'
    }
})

export default instance