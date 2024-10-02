import Header from "@/app/components/header";
import Image from "next/image";
import Profilepicture from "../app/public/profilepicture.jpg";


export default function Home(){

  return(
    
    <div>
    <figure>
    <Image src={Profilepicture} alt="this is" width="100"height="100"/>

        </figure>

      <div>
     y
      <Header/>
      </div>  
      <h1 className="style">As salam o alikum

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Unde atque delectus sint! Enim laboriosam ex ipsa est, 
          a qui suscipit sapiente ad hic inventore laudantium dignissimos sint, 
          numquam sit eligendi.</p></h1>
    
          </div>
 
  )
}
