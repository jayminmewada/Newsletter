import Image from "next/image";
import {useState} from 'react'
import Link from "next/link";







const Subscribe = () => {

    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [submitted ,setSubmitted] = useState(true)
    const [error, setError] = useState('');
    const [message,setMessage] = useState('');
   
    const my = (e)=>{
     alert('Thank for Subscribe !!!')
     
      
    } 
    const handleSubmit = async (e) =>{
      e.preventDefault();
      if (!name || !email) return alert('All fields are required');
      
      console.log('Sending...')
      //User Data
      let data ={
        name,
        email,
        submitted,
      } 
      //storing in database
      
       let response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(data),
    });
    console.log('Data Stored in database');
    
    //getting the data and sending the call to send email
   
    fetch('api/contact',{
      method:'POST',
      headers:{
        'Accept':'application/json, text/plain .*/*',
        'Content-Type':'application/json'
      },
      
    }).then((res)=>{
      console.log('Response received')
      if(res.status==200){
        console.log('Response succeeded!')
        setSubmitted('')
        setName('')
        setEmail('')
      }
    })
    
      let emailid = response.json();
      
      if (true) {
          // reset the fields
          setName('');
          setEmail('');
        

          // set the message
          return setMessage(emailid.message);
      } else {
          // set the error
          return setError(emailid.message);
      };
      


    }   
    return (
        <>
            <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <Image src="/images/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full "
                        height={200}
                        width={330} />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Hey! You want weekly update? Please consider Subscribe!!</p>
                    <form method="POST" name="contact-form" onSubmit={handleSubmit}>   <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" name="name" />

                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" value={email}placeholder="john@gmail.com" name="email" onChange={(e)=>{setEmail(e.target.value)}} />

                        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" type="submit" onClick={my}>Subscribe</button>
                        
                    </div>
                    </form>
                  
    
                </div>
            </div>
            <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                <Link href="/">
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left"><a>Back to home</a></p>
                </Link>

            </div>
        </>
    );
    }

export default  Subscribe;
