// User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

// User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

// User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

// User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// var audio = new Audio("soundfile.wav");

// document.onclick = function() {
//   audio.play();
// }



class ReactApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "a"
    }
  }
  
  playSound(id) {
    this.setState({
      display: id
    });
    const sound = document.getElementById(id);
    console.log("ID = " + id);
    sound.currentTime = 0;
    sound.play();
    setTimeout(() =>  100);
  }

  handleKeyPress(e) {
    if( e=="q" || e=="w" || e=="e" || 
        e=="a" || e=="s" || e=="d" ||
        e=="z" || e=="x" || e=="c")
    var keyPress = e.toUpperCase()
    this.playSound(keyPress);
  }


  render() {
    
    return (
      <div id="wrapper" onKeyDown={ () => {this.handleKeyPress(event.key)}} tabIndex={-1}>
        <h1>Drum Machine</h1>
        <p>Press the corresponding key on the keyboard or webpage to play a drum.</p>

        <div id="drum-machine" >
          <div className="row-1">

            <div className="drum-pad" id='q-drum' onClick={() => { this.playSound("Q")}}> 
              <audio className="clip" id="Q" data-key="81" src="./sounds/kick.wav"></audio> 
              <kbd>Q</kbd> 
            </div>

            <div className="drum-pad" id="w-drum" onClick={() => { this.playSound("W")}}> 
              <audio className="clip" id="W" data-key="87" src="./sounds/openhat.wav"></audio> 
              <kbd>W</kbd> 
            </div>
            
            <div className="drum-pad" id="e-drum" onClick={() => { this.playSound("E")}}> 
              <audio className="clip" id="E" data-key="69" src="./sounds/ride.wav"></audio>
              <kbd>E</kbd> 
            </div>
          </div>

          <div className="row-2">
            <div className="drum-pad" id="a-drum" onClick={() => { this.playSound("A")}}> 
              <audio className="clip" id="A" data-key="65" src="./sounds/boom.wav"></audio> 
              <kbd>A</kbd> 
            </div>
            
            <div className="drum-pad" id="s-drum" onClick={() => { this.playSound("S")}}> 
              <audio className="clip" id="S" data-key="83" src="./sounds/clap.wav"></audio> 
              <kbd>S</kbd> 
            </div>
            
            <div className="drum-pad" id="d-drum" onClick={() => { this.playSound("D")}}>
              <audio className="clip" id="D" data-key="68" src="./sounds/hihat.wav"></audio> 
              <kbd>D</kbd> 
            </div>
          </div>

          <div className="row-3">
            <div className="drum-pad row-3" id="z-drum" onClick={() => { this.playSound("Z")}}> 
              <audio className="clip" id="Z" data-key="90" src="./sounds/snare.wav"></audio>
              <kbd>Z</kbd> 
            </div>

            <div className="drum-pad row-3" id="x-drum" onClick={() => { this.playSound("X")}}> 
              <audio className="clip" id="X" data-key="88" src="./sounds/tink.wav"></audio>
              <kbd>X</kbd> 
            </div>
            
            <div className="drum-pad row-3" id="c-drum" onClick={() => { this.playSound("C")}}> 
              <audio className="clip" id="C" data-key="67" src="./sounds/tom.wav"></audio>
              <kbd>C</kbd> 
            </div>
          </div>
        </div>

        <div>
        <p id='display'>{this.state.display}</p>
        </div>
        
      </div>
    );
  }
}  


root.render(
  <div>
    <ReactApp />
  </div>
);
