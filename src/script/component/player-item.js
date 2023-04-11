class PlayerItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }

            .fan-art-player {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }

            .player-info {
                padding: 24px;
                background-color: white;
                text-align: justify;
            }
            
            .player-info > h2 {
                font-weight: bold;
            }
            
            .player-info > h3 {
                font-weight: lighter;
            }
            
            .player-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                /* number of lines to show */
            }
            </style>

            <img class="fan-art-player" src="${this._player.strFanart1}" alt="Fan Art">
            <div class="player-info">
                <h2>${this._player.strPlayer}</h2>
                <h3>Nationality: ${this._player.strNationality}</h3>
                <p>${this._player.strDescriptionEN}</p>
            </div>
        `;
    }
}

customElements.define('player-item', PlayerItem);