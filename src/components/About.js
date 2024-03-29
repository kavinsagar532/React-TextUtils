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
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={mystyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" style={mystyle} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                </div>
            </div>
            </div>
    </div>
    </>
  )
}
