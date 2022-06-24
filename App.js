const root = ReactDOM.createRoot(
  document.getElementById('root')
);

class ReactApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: ""
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
        e=="z" || e=="x" || e=="c"){
    var keyPress = e.toUpperCase()
    this.playSound(keyPress);
    }
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
        
        <footer> 
          <div class="name">
            Jeremy Duncan &copy; 2022
          </div>
          <div class="link">
            <a href="https://github.com/JeremyDuncan">GitHub Profile</a>
          </div>
        </footer>

      </div>
    );
  }
}  

root.render(
  <div>
    <ReactApp />
  </div>
);