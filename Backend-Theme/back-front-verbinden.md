## zuerst  
- nach dem  wir backend schreiben mit Router
- schreiben wir nach dem port 4000 ..  server.use(cors({origin: "*"}))
- dann wir schreiben in frontend  
-   useEffect(()=>{
        fetch(`http://127.0.0.1:4000/photos/${photoId}`  )
            .then(response => response.json())
            .then(data => {setPhoto(data) })
            
    },[photoId])
- hier 4000 ist in backend ein port
- dann wir mussen in backend in Tirminal schreiben nodemon 
- und in Frontend npm start
- dass bedeutet die beide mussen leufen 