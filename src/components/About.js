import React from 'react'

export default function About(props) {
    let mystyle = {
        color: props.mode === 'dark'? 'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white'
    }
    // const[mystyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Light Mode")
    // const toggleStyle = () =>{
    //     if(mystyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid white'

    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText('Enable Light Mode');
    //     }
    // }

  return (
    <>
    <div class='container' style={mystyle}>
            <div class="accordion" id="accordionExample" style={mystyle}>
                <div class="accordion-item">
                    <h2 class="accordion-header" style={mystyle}>
                        <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={mystyle}>
                            You could easily count the number of words and characters which you are typing in the textbox.
                        </div>
                    </div>
                </div>
            <div class="accordion-item" style={mystyle}>
                <h2 class="accordion-header" style={mystyle}>
                <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" style={mystyle} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={mystyle}>
                        This application is completely Free to Use and your basic text editing works will be completed just in a couple of seconds which makes your work a lot easier than before.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={mystyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Simpify Small Tasks
                </button>
                </h2>
                <div id="collapseThree" style={mystyle} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            You could simplify these kind of tasks by using this application which saves a lot of time which makes you more productive.
                        </div>
                </div>
            </div>
            </div>
    </div>
    </>
  )
}
