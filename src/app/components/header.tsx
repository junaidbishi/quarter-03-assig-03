import Link from "next/link"


export default function Header(){
return(
<div className="header">
<ul className="header-buttons">
<Link href={"/"}><li >Home</li></Link>
<Link href={"/contactus"}><li >Contactus</li></Link>
<Link href={"/aboutus"}><li >Aboutus</li></Link>
<Link href={"/jobs"}><li >Jobs</li></Link>
</ul>

<div className="headerheding">
<h1>this is my first web page</h1>

</div>
</div>

)                                                                                                                                                                                                                                                                                                                                    
}



