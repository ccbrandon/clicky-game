import React from "react";
import Image from "./components/Image";
import "./app.css";
import friends from "./friends.json"



class App extends React.Component {
    state = {
        score: 0,
        images:friends,
        images_clicked:[]
    }

    clickme = (id) => {
        if (this.state.images_clicked.indexOf(id)===-1) {
            //image doesn't exist
            this.setState({
                score:this.state.score + 1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.random() - 0.5)
            })

        } else {
            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort( () => Math.random() - 0.5)
            })
        }

    }


    render() {
        return (
            <div>
                <div className="score">CLICKY GAME SCORE: {this.state.score}</div>
                {this.state.images.map( (img) => ( 
                    <Image id={img.id} alt={img.name} src={img.image} key={img.id} onclick={this.clickme} /> )
                )}
            </div>
        )
    }
}

export default App;